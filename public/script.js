const doors = document.querySelectorAll(".door");

const demoPaths = {
  "The Artisan": "./demos/artisan/",
  "The Concierge": "./demos/concierge/",
  "The Explorer": "./demos/explorer/",
  "The Gallery": "./demos/gallery/",
  "The Journal": "./demos/journal/",
  "The Modernist": "./demos/modernist/",
  "The Showroom": "./demos/showroom/",
  "The Storyteller": "./demos/storyteller/"
};

doors.forEach((door) => {
  const doorName = door.dataset.door;
  door.setAttribute("aria-label", `Explore ${doorName}`);

  door.addEventListener("click", (event) => {
    event.preventDefault();

    doors.forEach((item) => item.classList.remove("is-selected"));
    door.classList.add("is-selected");

    /*
      Homepage v0.3:
      The eight demo folders do not need to exist yet.

      When ready, replace the line below with:
      window.location.href = demoPaths[doorName];
    */

    console.log(`Selected: ${doorName}`);
  });
});
