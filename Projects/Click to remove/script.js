// * Solution 1 - works
const removeButtons = document.querySelectorAll(".remove-button");
removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const pane = button.closest(".pane");
    if (pane) {
      pane.remove();
    }
  });
});

// * Solution 2 - need to fix
// document.body.addEventListener("click", function (deletePaneEvent) {
//   if (deletePaneEvent.target.classList.contains("remove-button")) {
//     deletePaneEvent.target.closest(".pane").remove();
//   }
// });
