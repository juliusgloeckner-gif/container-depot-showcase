(function () {
  "use strict";

  var trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"];

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
    var form = event.currentTarget;
    var button = form.querySelector('button[type="submit"]');
    var existingError = form.querySelector(".form-error");
    var data = new FormData(form);
    var search = new URLSearchParams(window.location.search);

    if (existingError) existingError.remove();
    button.disabled = true;
    button.textContent = "Sending request...";

    data.set("landing_page", window.location.href);
    data.set("_subject", "New UCD redesign lead | " + data.get("vertical") + " | ZIP " + data.get("zip"));
    trackingKeys.forEach(function (key) {
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
      form.classList.add("quote-success");
      form.innerHTML = successMarkup();
      window.dispatchEvent(new CustomEvent("ucd:quote-submitted", { detail: { variant: "new_site" } }));
    } catch (error) {
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
    form.addEventListener("submit", submitQuote);
  });
})();
