(function () {
  "use strict";

  var FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzepnvd";

  function landingContext() {
    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    if (path === "/farm" || path === "/agriculture") {
      return {
        subject: "Farm",
        source: "Farm Landing Page | Version A (Original design)",
        experiment: "ucd-farm-redesign-2026",
        vertical: "Farm and ranch storage"
      };
    }
    if (path === "/business" || path === "/commercial") {
      return {
        subject: "Business",
        source: "Business Overflow Landing Page | Version A (Original design)",
        experiment: "ucd-business-redesign-2026",
        vertical: "Business overflow storage"
      };
    }
    return {
      subject: "Construction",
      source: "Construction Landing Page | Version A (Original design)",
      experiment: "ucd-construction-redesign-2026",
      vertical: "Construction site storage"
    };
  }

  function inputValue(id) {
    var input = document.getElementById(id);
    return input ? String(input.value || "").trim() : "";
  }

  function showSuccess(form) {
    form.innerHTML = [
      '<div style="text-align:center;padding:24px 0" role="status">',
      '<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#155a2d" stroke-width="2" style="margin:0 auto 16px;display:block" aria-hidden="true">',
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
      '<h3 style="font-size:28px;color:#0d2137;margin-bottom:10px">Request received</h3>',
      '<p style="font-size:16px;color:#4a4a4a;line-height:1.6">A specialist will contact you shortly with pricing and availability for your ZIP. Or call <strong style="color:#e8700a">(855) 525-0902</strong>.</p>',
      '</div>'
    ].join("");
  }

  function showError(form, button) {
    var oldError = form.querySelector(".ucd-confirmed-form-error");
    if (oldError) oldError.remove();
    var error = document.createElement("p");
    error.className = "ucd-confirmed-form-error";
    error.setAttribute("role", "alert");
    error.style.cssText = "margin:12px 0 0;color:#a12b20;font-weight:700;text-align:center";
    error.textContent = "We could not send your request. Please try again or call (855) 525-0902.";
    button.insertAdjacentElement("afterend", error);
  }

  window.handleConfirmedUcdQuote = async function handleConfirmedLegacyQuote(event) {
    event.preventDefault();
    var form = document.getElementById("lp-form");
    if (!form || form.dataset.ucdSubmitting === "true") return;
    var button = form.querySelector('button[type="submit"]');
    var leadId = window.UCDMarketing ? window.UCDMarketing.newLeadId() : "ucd_lead_" + Date.now();
    var data = new FormData();
    var name = inputValue("lp-name");
    var phone = inputValue("lp-phone");
    var zip = inputValue("lp-zip");
    var email = inputValue("lp-email");
    var size = inputValue("lp-size");
    var context = landingContext();

    form.dataset.ucdSubmitting = "true";
    if (button) {
      button.disabled = true;
      button.textContent = "Sending request...";
    }

    data.set("_subject", "New UCD confirmed lead | " + context.subject + " | ZIP " + zip);
    data.set("form_name", "UCD Unified Quote Form");
    data.set("source", context.source);
    data.set("experiment", context.experiment);
    data.set("variant", "A");
    data.set("vertical", context.vertical);
    data.set("name", name);
    data.set("phone", phone);
    data.set("zip", zip);
    data.set("email", email);
    data.set("_replyto", email);
    data.set("size", size);
    data.set("landing_page", window.location.href);
    data.set("lead_id", leadId);
    data.set("order_id", leadId);
    data.set("lead_stage", "Submitted lead");
    data.set("conversion_time", new Date().toISOString());
    if (window.UCDMarketing) window.UCDMarketing.appendAttribution(data);

    try {
      var response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      });
      if (!response.ok) throw new Error("Formspree rejected the submission");

      if (window.UCDMarketing) {
        window.UCDMarketing.trackLead({
          leadId: leadId,
          email: email,
          phone: phone,
          vertical: context.vertical,
          size: size,
          variant: "A"
        });
      }
      showSuccess(form);
      window.dispatchEvent(new CustomEvent("ucd:quote-submitted", {
        detail: { context: context.vertical, variant: "A", leadId: leadId }
      }));
    } catch (error) {
      form.dataset.ucdSubmitting = "false";
      if (button) {
        button.disabled = false;
        button.textContent = "Get My Free Quote";
        showError(form, button);
      }
    }
  };
  window.handleLP = window.handleConfirmedUcdQuote;
})();
