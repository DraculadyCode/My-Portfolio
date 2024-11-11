document.addEventListener("DOMContentLoaded", function () {
  // Get all menu items
  const menuItems = document.querySelectorAll(".menu-item");

  // Get all timeline list items (li)
  const timelineItems = document.querySelectorAll(".timeline li");

  // Loop over each menu item
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      // Get the value of the clicked menu item's data-filter attribute
      const filter = menuItem.getAttribute("data-filter");

      // Loop over each timeline item (li)
      timelineItems.forEach(function (item) {
        // If the filter is "showAll", display all items
        if (filter === "showAll") {
          item.style.display = "block";
        } else {
          // Otherwise, show the item only if it has the class matching the filter
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
});
