const pages = [
    { name: "index", lang: "en", url: "index.html" },
    { name: "index", lang: "de", url: "index-german.html" },
    { name: "contact", lang: "en", url: "Pages/contact-english.html" },
    { name: "contact", lang: "de", url: "Pages/contact-german.html" },
    { name: "files", lang: "en", url: "Pages/files-english.html" },
    { name: "files", lang: "de", url: "Pages/files-german.html" },
    { name: "portfolio", lang: "en", url: "Pages/portfolio-english.html" },
    { name: "portfolio", lang: "de", url: "Pages/portfolio-german.html" },
    { name: "resume", lang: "en", url: "Pages/resume-english.html" },
    { name: "resume", lang: "de", url: "Pages/resume-german.html" },
    { name: "resumeMobile", lang: "en", url: "Pages/resumeMobile-english.html" },
    { name: "resumeMobile", lang: "de", url: "Pages/resumeMobile-german.html" },
    { name: "sitemap", lang: "en", url: "Pages/sitemap.html" },
    { name: "timeline", lang: "en", url: "Pages/timeline-english.html" },
    { name: "timeline", lang: "de", url: "Pages/timeline-german.html" }
  ];
  
  function addMetaTags() {
    const currentPage = window.location.pathname;
    const page = pages.find(page => currentPage.includes(page.url));
  
    if (!page) return;
  
    const metaData = {
      title: `Kathrin Peled - ${page.name.charAt(0).toUpperCase() + page.name.slice(1)} ${page.lang === 'en' ? 'English' : 'German'}`,
      description: page.lang === 'en' ? `Explore Kathrin Peled's portfolio, showcasing her web development projects and skills. Contact her for collaborations.` :
        `Entdecken Sie Kathrin Peleds Portfolio mit Webentwicklungsprojekten. Kontaktieren Sie sie für Kooperationen.`,
      image: 'https://draculady.de/Pictures/Profile_Picture.webp',
      url: `https://draculady.de/${page.url}`,
      type: 'website'
    };
  
    const metaTags = `
      <meta charset="UTF-8" />
      <meta name="description" content="${metaData.description}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="Kathrin Peled, web developer, portfolio, web development projects, front-end development, Berlin, resume, hire, contact" />
      <meta name="color-scheme" content="light only" />
      <meta name="author" content="Kathrin Peled Draclady" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="${metaData.title}" />
      <meta property="og:description" content="${metaData.description}" />
      <meta property="og:image" content="${metaData.image}" />
      <meta property="og:url" content="${metaData.url}" />
      <meta property="og:type" content="${metaData.type}" />
    `;
    
    const head = document.head;
    head.innerHTML += metaTags;
  }
  
  window.addEventListener('DOMContentLoaded', addMetaTags);
  