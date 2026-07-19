(function () {
  "use strict";

  var trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_id", "utm_content", "utm_term", "gclid", "gbraid", "wbraid", "dclid", "gclsrc", "gad_source", "gad_campaignid"];

  function successMarkup() {
    return [
      '<div class="quote-success-static" role="status">',
      '<span class="success-mark" aria-hidden="true">✓</span>',
      '<span class="eyebrow dark">Request received</span>',
      '<h2>We have your quote request.</h2>',
      '<p>A container specialist will contact you shortly with pricing and availability for your ZIP.</p>',
      '<p class="form-note">Need a faster answer? <a href="tel:18555250902">Call (855) 525-0902</a></p>',
      '</div>'
    ].join("");
  }

  async function submitQuote(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var form = event.currentTarget;
    var button = form.querySelector('button[type="submit"]');
    var existingError = form.querySelector(".form-error");
    var data = new FormData(form);
    var search = new URLSearchParams(window.location.search);
    var leadId = window.UCDMarketing ? window.UCDMarketing.newLeadId() : "ucd_lead_" + Date.now();

    if (existingError) existingError.remove();
    button.disabled = true;
    button.textContent = "Sending request...";

    data.set("landing_page", window.location.href);
    data.set("lead_id", leadId);
    data.set("order_id", leadId);
    data.set("lead_stage", "Submitted lead");
    data.set("conversion_time", new Date().toISOString());
    data.set("_subject", "New UCD redesign lead | " + data.get("vertical") + " | ZIP " + data.get("zip"));
    if (window.UCDMarketing) window.UCDMarketing.appendAttribution(data);
    else trackingKeys.forEach(function (key) {
        var value = search.get(key);
        if (value) data.set(key, value);
      });

    try {
      var response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      });

      if (!response.ok) throw new Error("Formspree rejected the submission");
      if (window.UCDMarketing) {
        var experimentVariant = window.UCDMarketing.experimentVariant();
        window.UCDMarketing.trackLead({
          leadId: leadId,
          email: String(data.get("email") || ""),
          phone: String(data.get("phone") || ""),
          vertical: String(data.get("vertical") || "General container"),
          size: String(data.get("size") || ""),
          variant: experimentVariant
        });
      }
      form.classList.add("quote-success");
      form.innerHTML = successMarkup();
      window.dispatchEvent(new CustomEvent("ucd:quote-submitted", { detail: { variant: window.UCDMarketing ? window.UCDMarketing.experimentVariant() : "B", leadId: leadId } }));
    } catch {
      button.disabled = false;
      button.textContent = "Get my delivered price";
      var message = document.createElement("p");
      message.className = "form-error";
      message.setAttribute("role", "alert");
      message.textContent = "We could not send your request. Please try again or call (855) 525-0902.";
      button.insertAdjacentElement("afterend", message);
    }
  }

  document.querySelectorAll("form[data-formspree-quote]").forEach(function (form) {
    form.addEventListener("submit", submitQuote, true);
  });
})();
