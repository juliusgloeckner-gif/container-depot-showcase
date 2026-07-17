from __future__ import annotations

import json
from pathlib import Path

from reportlab.graphics.shapes import Drawing, Rect, String, Line
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate, Frame, KeepTogether, PageBreak, PageTemplate, Paragraph,
    Spacer, Table, TableStyle, Flowable
)


ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / "app" / "knowledge" / "knowledge-data.json").read_text(encoding="utf-8"))["verticals"]
OUT = ROOT / "public" / "downloads"

NAVY = colors.HexColor("#081421")
ORANGE = colors.HexColor("#EF6B2E")
GREEN = colors.HexColor("#2D6B49")
CREAM = colors.HexColor("#F4F1EA")
PALE = colors.HexColor("#E4E9ED")
SLATE = colors.HexColor("#526171")
WHITE = colors.white


STYLES = getSampleStyleSheet()
TITLE = ParagraphStyle("UCDTitle", parent=STYLES["Title"], fontName="Helvetica-Bold", fontSize=30, leading=31, textColor=WHITE, alignment=TA_LEFT, spaceAfter=16)
SUBTITLE = ParagraphStyle("UCDSubtitle", parent=STYLES["BodyText"], fontName="Helvetica", fontSize=11.5, leading=16, textColor=colors.HexColor("#CBD5DD"), spaceAfter=12)
H1 = ParagraphStyle("UCDH1", parent=STYLES["Heading1"], fontName="Helvetica-Bold", fontSize=22, leading=24, textColor=NAVY, spaceBefore=8, spaceAfter=13)
H2 = ParagraphStyle("UCDH2", parent=STYLES["Heading2"], fontName="Helvetica-Bold", fontSize=14, leading=16, textColor=NAVY, spaceBefore=10, spaceAfter=7)
BODY = ParagraphStyle("UCDBody", parent=STYLES["BodyText"], fontName="Helvetica", fontSize=9.2, leading=13.5, textColor=SLATE, spaceAfter=8)
SMALL = ParagraphStyle("UCDSmall", parent=BODY, fontSize=7.7, leading=10.5, textColor=SLATE)
KICKER = ParagraphStyle("UCDKicker", parent=BODY, fontName="Helvetica-Bold", fontSize=7.5, leading=9, textColor=ORANGE, spaceAfter=7)
CARD_TITLE = ParagraphStyle("UCDCardTitle", parent=H2, fontSize=11, leading=13, spaceBefore=0, spaceAfter=4)
CARD_BODY = ParagraphStyle("UCDCardBody", parent=BODY, fontSize=8.1, leading=11, spaceAfter=0)
QUESTION = ParagraphStyle("UCDQuestion", parent=BODY, fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=NAVY, spaceAfter=3)


class NumberBadge(Flowable):
    def __init__(self, number: str, size: float = 24):
        super().__init__()
        self.number, self.width, self.height = number, size, size
    def draw(self):
        self.canv.setFillColor(ORANGE)
        self.canv.rect(0, 0, self.width, self.height, stroke=0, fill=1)
        self.canv.setFillColor(WHITE)
        self.canv.setFont("Helvetica-Bold", 8)
        self.canv.drawCentredString(self.width / 2, self.height / 2 - 3, self.number)


def page_number(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#D5DCE1"))
    canvas.line(doc.leftMargin, 0.48 * inch, LETTER[0] - doc.rightMargin, 0.48 * inch)
    canvas.setFont("Helvetica-Bold", 7)
    canvas.setFillColor(NAVY)
    canvas.drawString(doc.leftMargin, 0.28 * inch, "UNITED CONTAINER DEPOT")
    canvas.setFillColor(SLATE)
    canvas.drawRightString(LETTER[0] - doc.rightMargin, 0.28 * inch, f"PAGE {doc.page}")
    canvas.restoreState()


def build_doc(path: Path, story):
    doc = BaseDocTemplate(str(path), pagesize=LETTER, rightMargin=0.62 * inch, leftMargin=0.62 * inch, topMargin=0.62 * inch, bottomMargin=0.66 * inch, title=path.stem, author="United Container Depot")
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="body")
    doc.addPageTemplates([PageTemplate(id="all", frames=[frame], onPage=page_number)])
    doc.build(story)


def cover(config, title, subtitle, label):
    gate_rows = [[NumberBadge(f"0{i+1}"), Paragraph(f"<b>{name}</b><br/>{text}", CARD_BODY)] for i, (name, text) in enumerate(config["safetyGates"][:4])]
    gates = Table(gate_rows, colWidths=[0.4 * inch, 6.15 * inch], rowHeights=[0.58 * inch] * len(gate_rows), hAlign="LEFT")
    gates.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), PALE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10), ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7), ("LINEBELOW", (0, 0), (-1, -2), 1, WHITE)]))
    return [
        Table([[Paragraph("UCD", ParagraphStyle("mark", parent=H2, fontSize=11, leading=12, textColor=WHITE, alignment=1)), Paragraph("UNITED CONTAINER DEPOT", ParagraphStyle("brand", parent=H2, fontSize=10, textColor=WHITE))]], colWidths=[0.72 * inch, 5.76 * inch], rowHeights=[0.48 * inch], style=TableStyle([("BACKGROUND", (0, 0), (0, 0), ORANGE), ("BACKGROUND", (1, 0), (1, 0), NAVY), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7), ("BOX", (0, 0), (-1, -1), 0, NAVY)])),
        Spacer(1, 0.55 * inch),
        Table([[Paragraph(label.upper(), KICKER), ""], [Paragraph(title, TITLE), ""], [Paragraph(subtitle, SUBTITLE), ""]], colWidths=[6.55 * inch, 0], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("LEFTPADDING", (0, 0), (-1, -1), 26), ("RIGHTPADDING", (0, 0), (-1, -1), 26), ("TOPPADDING", (0, 0), (-1, 0), 20), ("BOTTOMPADDING", (0, 2), (-1, 2), 22)])),
        Spacer(1, 0.32 * inch),
        Paragraph("THE VERIFICATION GATES", KICKER),
        gates,
        Spacer(1, 0.28 * inch),
        Paragraph("Planning resource only. Verify the exact container, contents, delivery route, site and current requirements before purchase, loading, modification or use.", SMALL),
        PageBreak(),
    ]


def dimension_graphics():
    d = Drawing(460, 220)
    d.add(String(0, 205, "NOMINAL SIZE COMPARISON", fontName="Helvetica-Bold", fontSize=10, fillColor=NAVY))
    d.add(Rect(0, 125, 165, 46, fillColor=NAVY, strokeColor=None))
    d.add(String(12, 142, "20FT | 160 SQ FT", fontName="Helvetica-Bold", fontSize=12, fillColor=WHITE))
    d.add(Rect(0, 58, 330, 46, fillColor=ORANGE, strokeColor=None))
    d.add(String(12, 75, "40FT | 320 SQ FT", fontName="Helvetica-Bold", fontSize=12, fillColor=WHITE))
    d.add(Line(0, 185, 330, 185, strokeColor=SLATE, strokeWidth=1, strokeDashArray=[4, 4]))
    d.add(String(338, 181, "2X nominal length", fontName="Helvetica-Bold", fontSize=8, fillColor=SLATE))
    d.add(String(0, 25, "Standard exterior height: 8FT 6IN | High Cube exterior height: 9FT 6IN", fontName="Helvetica-Bold", fontSize=9, fillColor=NAVY))
    d.add(String(0, 8, "Exact interior and door dimensions vary. Verify the exact unit.", fontName="Helvetica", fontSize=8, fillColor=SLATE))
    return d


def decision_table(config):
    rows = [[Paragraph("DECISION", KICKER), Paragraph("VERIFY", KICKER), Paragraph("WHY IT MATTERS", KICKER)]]
    rows += [
        [Paragraph("Contents", CARD_TITLE), Paragraph("Dimensions, weight, sensitivity and compatibility", CARD_BODY), Paragraph("Controls size, layout and environmental needs", CARD_BODY)],
        [Paragraph("Site", CARD_TITLE), Paragraph("Route, ground, drainage and working clearance", CARD_BODY), Paragraph("Controls delivery and daily usability", CARD_BODY)],
        [Paragraph("Operation", CARD_TITLE), Paragraph("Access, retrieval, inspection and security", CARD_BODY), Paragraph("Controls whether storage saves time", CARD_BODY)],
        [Paragraph("Approval", CARD_TITLE), Paragraph(config["safetyGates"][2][1], CARD_BODY), Paragraph("Controls what is permitted for the exact plan", CARD_BODY)],
    ]
    table = Table(rows, colWidths=[1.25 * inch, 2.8 * inch, 2.5 * inch], repeatRows=1)
    table.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, 0), NAVY), ("TEXTCOLOR", (0, 0), (-1, 0), WHITE), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#D4DCE1")), ("BACKGROUND", (0, 1), (-1, -1), colors.white), ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, CREAM]), ("LEFTPADDING", (0, 0), (-1, -1), 9), ("RIGHTPADDING", (0, 0), (-1, -1), 9), ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8)]))
    return table


def source_page(config):
    story = [PageBreak(), Paragraph("PRIMARY REFERENCES AND LIMITS", KICKER), Paragraph("Traceable boundaries, not borrowed certainty.", H1), Paragraph("Use the current version of every source and confirm the exact rule with the authority or qualified party that controls the decision.", BODY)]
    for source in config["sources"]:
        story += [Paragraph(source["label"], H2), Paragraph(source["href"], SMALL)]
    story += [Spacer(1, 12), Paragraph("GENERAL LIMIT", KICKER), Paragraph("Container specifications vary by manufacturer, type, age and exact unit. Site, contents, climate, carrier equipment and local requirements also vary. This document is a planning aid and does not authorize the exact purchase, site, load, modification or use.", BODY)]
    return story


def buyer_handbook(config):
    story = cover(config, f"{config['name']} Container Buyer Handbook", "A conversion-ready field reference for choosing size, condition, site and delivered scope without skipping exact-plan verification.", "Buyer handbook")
    story += [Paragraph("START WITH THE OPERATING PROBLEM", KICKER), Paragraph(config["hubTitle"], H1), Paragraph(config["hubLead"], BODY), Spacer(1, 10), dimension_graphics(), PageBreak(), Paragraph("THE FOUR-GATE DECISION", KICKER), Paragraph("Do not let nominal volume decide alone.", H1), decision_table(config)]
    by_category = {cat["key"]: [] for cat in config["categories"]}
    for guide in config["guides"]: by_category[guide["category"]].append(guide)
    for category in config["categories"]:
        story += [PageBreak(), Paragraph(category["name"].upper(), KICKER), Paragraph(f"Four {category['name'].lower()} decisions before delivery.", H1)]
        for index, guide in enumerate(by_category[category["key"]]):
            story.append(KeepTogether([Paragraph(f"{index + 1:02d} | {guide['navTitle']}", H2), Paragraph(guide["quickAnswer"], BODY), Table([[Paragraph("FIELD NOTE", KICKER), Paragraph(guide["fieldNotes"][0], CARD_BODY)]], colWidths=[1.0 * inch, 5.55 * inch], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), PALE), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 9), ("RIGHTPADDING", (0, 0), (-1, -1), 9), ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 7)])), Spacer(1, 9)]))
    story += source_page(config)
    return story


def checklist_document(config, kind):
    title = f"{config['name']} Delivery and Site Checklist" if kind == "delivery" else f"{config['name']} Operations and Inspection Pack"
    subtitle = "A measured route, final placement and delivery acceptance workflow." if kind == "delivery" else "Opening, loading, inspection and closeout routines with named ownership."
    story = cover(config, title, subtitle, "Field checklist")
    groups = config["guides"][4:12] if kind == "delivery" else config["guides"][24:32]
    story += [Paragraph("USE THIS AS A WORKING RECORD", KICKER), Paragraph("Assign the owner. Mark the exception. Record the correction.", H1), Paragraph("A checked box is useful only when the exact site and current condition have been inspected by the person responsible.", BODY)]
    for index, guide in enumerate(groups):
        if index and index % 3 == 0: story.append(PageBreak())
        rows = [["", Paragraph(item, CARD_BODY)] for item in guide["checklist"][:4]]
        table = Table(rows, colWidths=[0.3 * inch, 6.15 * inch], rowHeights=[0.32 * inch] * len(rows))
        table.setStyle(TableStyle([("BOX", (0, 0), (0, -1), 1, ORANGE), ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#D7DEE2")), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7)]))
        story += [KeepTogether([Paragraph(f"{index + 1:02d} | {guide['navTitle']}", H2), Paragraph(guide["quickAnswer"], BODY), table, Spacer(1, 10)])]
    story += [PageBreak(), Paragraph("EXCEPTION LOG", KICKER), Paragraph("Do not close an inspection without an owner and date.", H1)]
    log = Table([["DATE", "LOCATION / UNIT", "EXCEPTION", "OWNER", "CLOSED"]] + [["", "", "", "", ""] for _ in range(12)], colWidths=[0.7*inch,1.25*inch,2.55*inch,1.05*inch,1*inch], rowHeights=[0.32*inch]+[0.42*inch]*12)
    log.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,0),NAVY),("TEXTCOLOR",(0,0),(-1,0),WHITE),("FONTNAME",(0,0),(-1,0),"Helvetica-Bold"),("FONTSIZE",(0,0),(-1,0),6.5),("GRID",(0,0),(-1,-1),0.5,colors.HexColor("#AEBBC4")),("VALIGN",(0,0),(-1,-1),"MIDDLE")]))
    story.append(log)
    story += source_page(config)
    return story


def question_handbook(config):
    story = cover(config, f"100 {config['name']} Container Questions", "Direct answers first. Deeper field guides and exact-plan verification next.", "Question handbook")
    story += [Paragraph("HOW TO USE THE ANSWERS", KICKER), Paragraph("Screen the decision, then hand it to the party that controls it.", H1), decision_table(config), PageBreak()]
    current = None
    for item in config["questions"]:
        if item["category"] != current:
            if current is not None: story.append(PageBreak())
            current = item["category"]
            story += [Paragraph(current.upper(), KICKER), Paragraph(f"Questions about {current.lower()}.", H1)]
        story.append(KeepTogether([Paragraph(f"{item['id']:03d} | {item['question']}", QUESTION), Paragraph(item["answer"], BODY), Paragraph(f"DEEPER GUIDE: {item['guideTitle']}", KICKER), Spacer(1, 6)]))
    story += source_page(config)
    return story


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for key, config in DATA.items():
        targets = [
            (OUT / f"ucd-{key}-container-buyer-handbook.pdf", buyer_handbook(config)),
            (OUT / f"ucd-{key}-delivery-site-checklist.pdf", checklist_document(config, "delivery")),
            (OUT / f"ucd-{key}-operations-inspection-pack.pdf", checklist_document(config, "operations")),
            (OUT / f"ucd-100-{key}-container-questions.pdf", question_handbook(config)),
        ]
        for path, story in targets:
            build_doc(path, story)
            print(path)


if __name__ == "__main__":
    main()
