from pathlib import Path
import html
import textwrap

from PIL import Image, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import Image as PdfImage
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
SOCIAL = ROOT / "public" / "social"
DOWNLOADS = ROOT / "public" / "downloads"
SOCIAL.mkdir(parents=True, exist_ok=True)
DOWNLOADS.mkdir(parents=True, exist_ok=True)

NAVY = "#081421"
SLATE = "#34495b"
ORANGE = "#f26a18"
ORANGE_DARK = "#d85109"
CREAM = "#f4f1ea"
PALE = "#e8edf0"
MUTED = "#5b6b79"
WHITE = "#ffffff"
GREEN = "#2c6a45"


def font(size, bold=False):
    candidates = [
        Path("C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


FONT_SMALL = font(24, True)
FONT_SOURCE = font(21, False)
FONT_TITLE = font(63, True)
FONT_VALUE = font(106, True)
FONT_BODY = font(31, False)
FONT_BODY_BOLD = font(31, True)
FONT_FOOTER = font(23, True)


CARDS = [
    {
        "slug": "construction-container-footprint",
        "kicker": "CONTAINER SIZING",
        "title": "40FT DOUBLES THE NOMINAL FOOTPRINT",
        "value": "160 VS 320 SQ FT",
        "body": "20FT and 40FT nominal exterior footprints. Truck approach and door swing need additional room.",
        "source": "Calculation: 20 x 8 ft and 40 x 8 ft nominal exterior size",
        "chart": "footprint",
    },
    {
        "slug": "construction-container-internal-volume",
        "kicker": "INTERNAL CAPACITY",
        "title": "HEIGHT CHANGES THE CAPACITY DECISION",
        "value": "1,172 / 2,390 / 2,694 CU FT",
        "body": "Representative internal volume for 20FT standard, 40FT standard and 40FT High Cube.",
        "source": "Source: Hapag-Lloyd container fleet specifications",
        "chart": "volume",
    },
    {
        "slug": "construction-recoverable-lost-time",
        "kicker": "FIELD WORKFLOW",
        "title": "RECOVERABLE LOST TIME IS A LARGE FIELD TARGET",
        "value": "32%",
        "body": "FMI includes waiting for tools or material, looking for material, rework and unplanned delays within the combined 32%. These are examples, not separate shares.",
        "source": "Source: FMI, Stopping Supply Chain Risks from Impacting the Field",
        "chart": "donut",
    },
    {
        "slug": "construction-heavy-equipment-theft",
        "kicker": "SECURITY EXPOSURE",
        "title": "EQUIPMENT THEFT REQUIRES LAYERED CONTROL",
        "value": "$300M TO $1B",
        "body": "NER estimated annual heavy equipment theft range. This is not a shipping-container theft count.",
        "source": "Source: National Equipment Register",
        "chart": "range",
    },
    {
        "slug": "construction-productivity-management",
        "kicker": "MANAGEMENT OPPORTUNITY",
        "title": "BETTER MANAGEMENT CAN MOVE PRODUCTIVITY",
        "value": "79%",
        "body": "Share of contractors FMI says could improve labor productivity by at least 6% with better management.",
        "source": "Source: FMI 2023 Labor Productivity Study",
        "chart": "progress",
    },
]


def wrapped(draw, text, xy, font_obj, fill, width_chars, spacing=10):
    lines = textwrap.wrap(text, width=width_chars)
    draw.multiline_text(xy, "\n".join(lines), font=font_obj, fill=fill, spacing=spacing)
    return len(lines)


def graph_png(draw, card):
    chart = card["chart"]
    x0, y0, x1, y1 = 82, 570, 1118, 905
    draw.rounded_rectangle((x0, y0, x1, y1), radius=22, fill=PALE)
    if chart == "footprint":
        draw.text((170, 620), "20FT STANDARD", font=FONT_SMALL, fill=NAVY)
        draw.rectangle((170, 645, 490, 715), fill=SLATE, outline=NAVY, width=6)
        for x in range(202, 475, 32):
            draw.line((x, 653, x, 707), fill="#687c8c", width=4)
        draw.text((170, 725), "160 SQ FT NOMINAL", font=FONT_SMALL, fill=NAVY)
        draw.text((170, 770), "40FT STANDARD", font=FONT_SMALL, fill=NAVY)
        draw.text((810, 770), "320 SQ FT NOMINAL", anchor="ra", font=FONT_SMALL, fill=NAVY)
        draw.rectangle((170, 800, 810, 870), fill=ORANGE_DARK, outline=NAVY, width=6)
        for x in range(202, 795, 32):
            draw.line((x, 808, x, 862), fill="#f38b4b", width=4)
        draw.text((1090, 895), "RELATIVE PLAN SCALE / SAME 8FT WIDTH", anchor="ra", font=FONT_SMALL, fill=NAVY)
    elif chart == "volume":
        base = 850
        data = [(185, 123, "1,172", "20FT", SLATE), (485, 251, "2,390", "40FT", NAVY), (785, 283, "2,694", "40FT HC", ORANGE)]
        for x, h, value, label, color in data:
            draw.rounded_rectangle((x, base - h, x + 170, base), radius=12, fill=color)
            draw.text((x + 85, base - h - 34), value, anchor="mm", font=FONT_BODY_BOLD, fill=NAVY)
            draw.text((x + 85, 881), label, anchor="mm", font=FONT_SMALL, fill=NAVY)
    elif chart == "donut":
        box = (170, 600, 475, 905)
        draw.ellipse(box, outline="#8b9aa5", width=54)
        draw.arc(box, start=-90, end=25.2, fill=ORANGE, width=54)
        draw.text((322, 745), "32%", anchor="mm", font=FONT_VALUE, fill=NAVY)
        draw.rounded_rectangle((548, 616, 584, 652), radius=7, fill=ORANGE)
        draw.text((606, 634), "RECOVERABLE LOST TIME 32%", anchor="lm", font=FONT_SMALL, fill=NAVY)
        draw.rounded_rectangle((548, 670, 584, 706), radius=7, fill="#8b9aa5")
        draw.text((606, 688), "PRIMARY + SECONDARY TIME 68%", anchor="lm", font=FONT_SMALL, fill=NAVY)
        draw.line((548, 735, 1055, 735), fill="#b6c1c8", width=3)
        draw.text((548, 766), "RECOVERABLE EXAMPLES", font=FONT_SMALL, fill=ORANGE_DARK)
        examples = ["WAITING FOR RESOURCES", "LOOKING FOR MATERIAL", "REWORK / UNPLANNED DELAYS"]
        for index, label in enumerate(examples):
            y = 812 + index * 39
            draw.ellipse((548, y - 11, 570, y + 11), outline=ORANGE_DARK, width=4)
            draw.text((588, y), label, anchor="lm", font=font(20, True), fill=NAVY)
    elif chart == "range":
        draw.line((170, 750, 1020, 750), fill="#c0cbd2", width=30)
        draw.line((425, 750, 1020, 750), fill=ORANGE, width=30)
        draw.ellipse((405, 730, 445, 770), fill=NAVY, outline=WHITE, width=5)
        draw.ellipse((1000, 730, 1040, 770), fill=NAVY, outline=WHITE, width=5)
        draw.text((170, 825), "$0", anchor="mm", font=FONT_SMALL, fill=MUTED)
        draw.text((425, 825), "$300M", anchor="mm", font=FONT_BODY_BOLD, fill=NAVY)
        draw.text((1020, 825), "$1B", anchor="mm", font=FONT_BODY_BOLD, fill=NAVY)
        draw.text((170, 675), "ESTIMATED ANNUAL RANGE", anchor="lm", font=FONT_SMALL, fill=NAVY)
    elif chart == "progress":
        draw.rounded_rectangle((155, 730, 1045, 800), radius=35, fill="#c4ced4")
        draw.rounded_rectangle((155, 730, 858, 800), radius=35, fill=ORANGE)
        draw.text((155, 680), "79 OF 100 CONTRACTORS", anchor="lm", font=FONT_BODY_BOLD, fill=NAVY)
        draw.text((858, 850), "79%", anchor="mm", font=FONT_BODY_BOLD, fill=NAVY)


def render_png(card):
    image = Image.new("RGB", (1200, 1200), CREAM)
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, 1200, 34), fill=ORANGE)
    draw.rectangle((0, 1092, 1200, 1200), fill=NAVY)
    draw.rounded_rectangle((76, 70, 157, 151), radius=6, fill=ORANGE)
    draw.text((116, 111), "UCD", anchor="mm", font=FONT_SMALL, fill=WHITE)
    draw.text((185, 111), "UNITED CONTAINER DEPOT", anchor="lm", font=FONT_SMALL, fill=NAVY)
    draw.text((82, 196), card["kicker"], font=FONT_SMALL, fill=ORANGE_DARK)
    wrapped(draw, card["title"], (82, 240), FONT_TITLE, NAVY, 26, spacing=3)
    draw.text((82, 450), card["value"], font=FONT_VALUE if len(card["value"]) < 15 else font(70, True), fill=ORANGE_DARK)
    graph_png(draw, card)
    wrapped(draw, card["body"], (82, 945), FONT_BODY, SLATE, 65, spacing=8)
    draw.text((82, 1064), card["source"], font=FONT_SOURCE, fill=MUTED)
    draw.text((82, 1146), "UNITEDCONTAINERDEPOT.COM/CONSTRUCTION", anchor="lm", font=FONT_FOOTER, fill=WHITE)
    draw.text((1118, 1146), "SOURCE-BACKED DATA BRIEF", anchor="rm", font=FONT_FOOTER, fill=ORANGE)
    path = SOCIAL / f"{card['slug']}.png"
    image.save(path, quality=95, optimize=True)
    return path


def svg_graph(card):
    chart = card["chart"]
    if chart == "footprint":
        return '<text x="170" y="625">20FT STANDARD</text><rect x="170" y="645" width="320" height="70" fill="#34495b"/><text x="170" y="725">160 SQ FT NOMINAL</text><text x="170" y="770">40FT STANDARD</text><text x="810" y="770" text-anchor="end">320 SQ FT NOMINAL</text><rect x="170" y="800" width="640" height="70" fill="#d85109"/><text x="1090" y="900" text-anchor="end">RELATIVE PLAN SCALE / SAME 8FT WIDTH</text>'
    if chart == "volume":
        return '<rect x="185" y="727" width="170" height="123" fill="#34495b"/><rect x="485" y="599" width="170" height="251" fill="#081421"/><rect x="785" y="567" width="170" height="283" fill="#f26a18"/><text x="270" y="709">1,172</text><text x="570" y="581">2,390</text><text x="870" y="549">2,694</text>'
    if chart == "donut":
        return '<circle cx="322" cy="752" r="125" fill="none" stroke="#8b9aa5" stroke-width="54"/><circle cx="322" cy="752" r="125" fill="none" stroke="#f26a18" stroke-width="54" pathLength="100" stroke-dasharray="32 68" transform="rotate(-90 322 752)"/><text x="322" y="775" text-anchor="middle" font-size="80" font-weight="700">32%</text><rect x="548" y="616" width="36" height="36" rx="7" fill="#f26a18"/><text x="606" y="642" font-size="22" font-weight="700">RECOVERABLE LOST TIME 32%</text><rect x="548" y="670" width="36" height="36" rx="7" fill="#8b9aa5"/><text x="606" y="696" font-size="22" font-weight="700">PRIMARY + SECONDARY TIME 68%</text><line x1="548" y1="735" x2="1055" y2="735" stroke="#b6c1c8" stroke-width="3"/><text x="548" y="772" fill="#d85109" font-size="22" font-weight="700">RECOVERABLE EXAMPLES</text><circle cx="559" cy="812" r="11" fill="none" stroke="#d85109" stroke-width="4"/><text x="588" y="820" font-size="20" font-weight="700">WAITING FOR RESOURCES</text><circle cx="559" cy="851" r="11" fill="none" stroke="#d85109" stroke-width="4"/><text x="588" y="859" font-size="20" font-weight="700">LOOKING FOR MATERIAL</text><circle cx="559" cy="890" r="11" fill="none" stroke="#d85109" stroke-width="4"/><text x="588" y="898" font-size="20" font-weight="700">REWORK / UNPLANNED DELAYS</text>'
    if chart == "range":
        return '<line x1="170" y1="750" x2="1020" y2="750" stroke="#c0cbd2" stroke-width="30"/><line x1="425" y1="750" x2="1020" y2="750" stroke="#f26a18" stroke-width="30"/><circle cx="425" cy="750" r="22" fill="#081421"/><circle cx="1020" cy="750" r="22" fill="#081421"/><text x="170" y="830" text-anchor="middle">$0</text><text x="425" y="830" text-anchor="middle">$300M</text><text x="1020" y="830" text-anchor="middle">$1B</text>'
    return '<rect x="155" y="730" width="890" height="70" rx="35" fill="#c4ced4"/><rect x="155" y="730" width="703" height="70" rx="35" fill="#f26a18"/><text x="858" y="855" text-anchor="middle">79%</text>'


def render_svg(card):
    title_lines = textwrap.wrap(card["title"], width=29)
    title = "".join(f'<tspan x="82" dy="{0 if index == 0 else 72}">{html.escape(line)}</tspan>' for index, line in enumerate(title_lines))
    body_lines = textwrap.wrap(card["body"], width=70)
    body = "".join(f'<tspan x="82" dy="{0 if index == 0 else 40}">{html.escape(line)}</tspan>' for index, line in enumerate(body_lines))
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200" role="img" aria-labelledby="title desc">
<title id="title">{html.escape(card['title'])}</title><desc id="desc">{html.escape(card['body'])}</desc>
<rect width="1200" height="1200" fill="{CREAM}"/><rect width="1200" height="34" fill="{ORANGE}"/><rect y="1092" width="1200" height="108" fill="{NAVY}"/>
<rect x="76" y="70" width="81" height="81" rx="6" fill="{ORANGE}"/><text x="116" y="122" text-anchor="middle" fill="white" font-family="Arial" font-size="24" font-weight="700">UCD</text>
<text x="185" y="122" fill="{NAVY}" font-family="Arial" font-size="24" font-weight="700">UNITED CONTAINER DEPOT</text>
<text x="82" y="210" fill="{ORANGE_DARK}" font-family="Arial" font-size="24" font-weight="700">{html.escape(card['kicker'])}</text>
<text x="82" y="290" fill="{NAVY}" font-family="Arial" font-size="62" font-weight="700">{title}</text>
<text x="82" y="520" fill="{ORANGE_DARK}" font-family="Arial" font-size="76" font-weight="700">{html.escape(card['value'])}</text>
<rect x="82" y="570" width="1036" height="335" rx="22" fill="{PALE}"/>{svg_graph(card)}
<text x="82" y="976" fill="{SLATE}" font-family="Arial" font-size="30">{body}</text>
<text x="82" y="1070" fill="{MUTED}" font-family="Arial" font-size="21">{html.escape(card['source'])}</text>
<text x="82" y="1155" fill="white" font-family="Arial" font-size="23" font-weight="700">UNITEDCONTAINERDEPOT.COM/CONSTRUCTION</text>
</svg>'''
    path = SOCIAL / f"{card['slug']}.svg"
    path.write_text(svg, encoding="utf-8")
    return path


def build_pdf(png_paths):
    path = DOWNLOADS / "ucd-construction-container-data-brief.pdf"
    doc = SimpleDocTemplate(str(path), pagesize=letter, rightMargin=0.55 * inch, leftMargin=0.55 * inch, topMargin=0.52 * inch, bottomMargin=0.52 * inch, title="Construction Container Data Brief", author="United Container Depot")
    title = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=29, leading=30, textColor=colors.HexColor(NAVY), spaceAfter=14)
    kicker = ParagraphStyle("kicker", fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=colors.HexColor(ORANGE_DARK), spaceAfter=10)
    body = ParagraphStyle("body", fontName="Helvetica", fontSize=10.5, leading=15, textColor=colors.HexColor(SLATE), spaceAfter=12)
    small = ParagraphStyle("small", fontName="Helvetica", fontSize=7.5, leading=10, textColor=colors.HexColor(MUTED))
    story = [
        Table([[Paragraph("UCD", ParagraphStyle("mark", fontName="Helvetica-Bold", fontSize=15, textColor=colors.white)), Paragraph("UNITED CONTAINER DEPOT | CONSTRUCTION DATA BRIEF", kicker)]], colWidths=[0.7 * inch, 6.0 * inch], style=TableStyle([("BACKGROUND", (0, 0), (0, 0), colors.HexColor(ORANGE)), ("BACKGROUND", (1, 0), (1, 0), colors.HexColor(CREAM)), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("ALIGN", (0, 0), (0, 0), "CENTER"), ("LEFTPADDING", (1, 0), (1, 0), 14), ("TOPPADDING", (0, 0), (-1, -1), 12), ("BOTTOMPADDING", (0, 0), (-1, -1), 12)])),
        Spacer(1, 0.62 * inch),
        Paragraph("SOURCE-BACKED JOBSITE REFERENCE", kicker),
        Paragraph("Five numbers that sharpen a construction container decision.", title),
        Paragraph("Container size and capacity, field productivity, equipment-theft exposure and management opportunity. Each page states what the number can support and where its limits begin.", body),
        Spacer(1, 0.22 * inch),
        Table([[Paragraph("USE IT", kicker), Paragraph("Share the charts, test the assumptions on the actual site, then confirm nearby inventory and delivery access before purchasing.", body)]], colWidths=[0.85 * inch, 5.85 * inch], style=TableStyle([("BACKGROUND", (0, 0), (0, 0), colors.HexColor(NAVY)), ("BACKGROUND", (1, 0), (1, 0), colors.HexColor(PALE)), ("TEXTCOLOR", (0, 0), (0, 0), colors.white), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("TOPPADDING", (0, 0), (-1, -1), 13), ("BOTTOMPADDING", (0, 0), (-1, -1), 13), ("LEFTPADDING", (1, 0), (1, 0), 14)])),
        PageBreak(),
    ]
    for index, (card, png_path) in enumerate(zip(CARDS, png_paths)):
        story.extend([
            Paragraph(f"CHART {index + 1:02d} | {card['kicker']}", kicker),
            Paragraph(card["title"].title().replace("40Ft", "40FT").replace("20Ft", "20FT"), title),
            PdfImage(str(png_path), width=5.85 * inch, height=5.85 * inch),
            Spacer(1, 0.08 * inch),
            Paragraph(card["body"], body),
            Paragraph(card["source"], small),
        ])
        if index < len(CARDS) - 1:
            story.append(PageBreak())
    doc.build(story)
    return path


if __name__ == "__main__":
    png_paths = []
    for card in CARDS:
        png_paths.append(render_png(card))
        print(render_svg(card))
    print(build_pdf(png_paths))
