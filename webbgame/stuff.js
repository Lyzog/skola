var images{};
loadImage("Larm");
loadImage("Lleg");
loadImage("body");
loadImage("Rleg");
loadImage("Rarm");
loadImage("head");
loadImage("hair");

function loadImage(name) {
  images[name] = new Image();
  images[name].onload = function() {
      resourceLoaded();
  }
  images[name].src = "images/character/" + name + ".png";
}
