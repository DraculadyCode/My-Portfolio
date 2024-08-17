document.addEventListener("DOMContentLoaded", function () {
    const skillIcons = document.querySelectorAll(".elements-table i");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
  
    skillIcons.forEach((icon) => {
      icon.addEventListener("click", function () {
        const skill = icon.getAttribute("title").toLowerCase();
  
        portfolioItems.forEach((item) => {
          const itemSkills = Array.from(item.querySelectorAll(".portfolio-item-icons i")).map((i) =>
            i.getAttribute("title").toLowerCase()
          );
  
          if (itemSkills.includes(skill)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });