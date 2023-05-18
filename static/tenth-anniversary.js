window.addEventListener("load", function () {
  var carouselIds = ["carouselQuotes1", "carouselQuotes2", "carouselISRGHistory", "carousel-endorsement-quotes1"];
  carouselIds.forEach(function (carouselId) {
    setCarouselHeight(carouselId);
    addImageLoadListeners(carouselId);
  });

  window.addEventListener("resize", function () {
    carouselIds.forEach(setCarouselHeight);
  });

  setTimeout(function () {
    carouselIds.forEach(function (carouselId) {
      setCarouselHeight(carouselId);
      addImageLoadListeners(carouselId);
    });
  }, 1000);
});

function setCarouselHeight(carouselId) {
  var carousel = document.getElementById(carouselId);
  var items = carousel.getElementsByClassName("carousel-item");
  var maxHeight = 0;

  // Reset the height of all items
  for (var i = 0; i < items.length; i++) {
    items[i].style.height = "auto";
  }

  // Find the tallest item
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var prevDisplayStyle = item.style.display;
    var prevVisibility = item.style.visibility;
    var prevPosition = item.style.position;

    // Temporarily make the item visible for height calculation
    item.style.display = "block";
    item.style.visibility = "hidden";
    item.style.position = "absolute";

    var itemHeight = item.offsetHeight;

    if (itemHeight > maxHeight) {
      maxHeight = itemHeight;
    }

    // Restore the original styles
    item.style.display = prevDisplayStyle;
    item.style.visibility = prevVisibility;
    item.style.position = prevPosition;
  }

  // Set the height of the carousel
  maxHeight = maxHeight + 20; // Extra space for carousel indicators
  carousel.style.height = maxHeight + "px";

  // Set the height of all items
  for (var i = 0; i < items.length; i++) {
    items[i].style.height = maxHeight + "px";
  }
}

function addImageLoadListeners(carouselId) {
  var carousel = document.getElementById(carouselId);
  var images = carousel.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("load", function () {
      setCarouselHeight(carouselId);
    });
  }
}
