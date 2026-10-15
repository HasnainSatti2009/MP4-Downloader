/* Public frontend settings only. Never put API keys or private credentials here. */
(() => {
  "use strict";

  const rawApiBaseUrl = ""; // Leave blank for same-origin API requests.
  const contactEmail = ""; // Optional: set a monitored public contact address.

  let apiBaseUrl = rawApiBaseUrl.trim();

  if (apiBaseUrl) {
    try {
      const parsedUrl = new URL(apiBaseUrl);
      if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
        throw new Error("API_BASE_URL must use http:// or https://");
      }
      apiBaseUrl = parsedUrl.href.replace(/\/+$/, "");
    } catch (error) {
      console.error("Invalid JADULOADER_CONFIG API_BASE_URL:", error.message);
      apiBaseUrl = "";
    }
  }

  window.JADULOADER_CONFIG = Object.freeze({
    API_BASE_URL: apiBaseUrl,
    CONTACT_EMAIL: contactEmail.trim()
  });
})();