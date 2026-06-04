const doors = document.querySelectorAll(".door");

doors.forEach((door) => {
  door.addEventListener("click", (event) => {
    event.preventDefault();

    doors.forEach((item) => item.classList.remove("is-selected"));
    door.classList.add("is-selected");

    /*
      Temporary homepage v0.1 behaviour.

      Later, replace each href="#" with:

      ./demos/artisan/
      ./demos/concierge/
      ./demos/explorer/
      ./demos/gallery/
      ./demos/journal/
      ./demos/modernist/
      ./demos/showroom/
      ./demos/storyteller/
    */
  });
});
