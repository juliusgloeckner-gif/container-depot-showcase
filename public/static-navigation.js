document.addEventListener("click", function (event) {
  var link = event.target.closest("a[href]");
  if (!link || link.target || event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  var destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin) return;
  if (!destination.pathname.startsWith("/construction")) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  window.location.assign(destination.href);
}, true);
