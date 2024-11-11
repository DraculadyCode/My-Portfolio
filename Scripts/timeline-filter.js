document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");
  const timelineItems = document.querySelectorAll(".timeline-item");

  console.log("Timeline Items Loaded:", timelineItems);

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const filter = item.getAttribute("data-filter");
      console.log("Clicked filter:", filter);

      if (filter === "showAll") {
        // Show all items
        timelineItems.forEach((timelineItem) => {
          console.log("Showing all timeline item", timelineItem);
          timelineItem.style.display = "block";
        });
      } else {
        // Hide all items first
        timelineItems.forEach((timelineItem) => {
          console.log("Hiding timeline item", timelineItem);
          timelineItem.style.display = "none";
        });

        // Show only the items matching the selected filter
        timelineItems.forEach((timelineItem) => {
          if (timelineItem.classList.contains(filter)) {
            console.log("Showing filtered item", timelineItem);
            timelineItem.style.display = "block";
          }
        });
      }
    });
  });
});
