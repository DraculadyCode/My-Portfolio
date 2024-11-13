document.addEventListener("DOMContentLoaded", async () => {
  // Function to check if a link is broken
  const checkLink = async (url) => {
    try {
      const response = await fetch(url, { method: "HEAD", mode: "no-cors" });
      // Check if status code indicates success
      if (!response.ok) {
        return { status: "broken", url, statusCode: response.status };
      }
      return { status: "ok", url };
    } catch (error) {
      // Handling Cross-Origin Requests (CORS)
      if (error.message.includes("Failed to fetch")) {
        return { status: "cross-origin", url };
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
      const { url, status, statusCode, error } = result.value;
      if (status === "broken") {
        console.warn(`Broken Link: ${url} (Status: ${statusCode || error})`);
      } else if (status === "cross-origin") {
        console.warn(`Cross-Origin Restriction: ${url}`);
      }
    } else {
      console.error(`Error checking link: ${result.reason}`);
    }
  });

  console.log("Link check completed.");
});
