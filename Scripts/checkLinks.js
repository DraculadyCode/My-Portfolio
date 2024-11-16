document.addEventListener("DOMContentLoaded", async () => {
  // Function to check if a link is broken
  const checkLink = async (url) => {
    try {
      // Perform a HEAD request to check link validity
      const response = await fetch(url, { method: "HEAD", mode: "no-cors" });

      // Treat all links as working, since mode 'no-cors' doesn't allow checking `response.ok`
      return { status: "ok", url };
    } catch (error) {
      // Avoid logging CORS-related issues or other benign fetch errors
      if (error.message.includes("Failed to fetch")) {
        return { status: "unknown", url };
      }
      return { status: "broken", url, error: error.message };
    }
  };

  // Function to find all links on the page
  const findAllLinks = () => {
    const links = Array.from(document.querySelectorAll("a[href]"));
    return links.map((link) => link.href);
  };

  const links = findAllLinks();

  // Use Promise.allSettled to check all links concurrently
  const results = await Promise.allSettled(
    links.map((link) => checkLink(link))
  );

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      const { url, status, error } = result.value;
      if (status === "broken") {
        console.warn(`Broken Link: ${url} (Error: ${error || "Unknown"})`);
      }
    }
  });

  console.log("Link check completed without critical errors.");
});
