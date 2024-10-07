// Scripts/schema.js
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kathrin Peled",
  url: "https://draculady.de/",
  image: "https://draculady.de/Pictures/Profile_Picture.webp",
  jobTitle: "Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Technion – Israel Institute of Technology"
  },
  knowsLanguage: ["English", "German", "Hebrew"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Berlin",
    addressCountry: "Germany"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "draculadycode@gmail.com"
  },

  sameAs: [
    "https://www.linkedin.com/in/kathrin-peled-draculady/",
    "https://x.com/DraculadyKath"
  ],
  description:
    "Explore Kathrin Peled's portfolio showcasing her web development projects and skills."
};

// Create a <script> element
const script = document.createElement("script");
script.type = "application/ld+json"; // Specify the type as JSON-LD
script.text = JSON.stringify(schemaData); // Convert the schema data to JSON format

// Append the <script> to the <head>
document.head.appendChild(script);
