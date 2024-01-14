function createImage(src, positionLeft, positionBottom) {
  let image = document.createElement("img");
  image.src = src;
  image.style.position = "fixed";
  image.style.left = positionLeft;
  image.style.bottom = positionBottom;
  document.body.append(image);
  return image;
}

function newImage(imageSrc, positionLeft, positionBottom) {
  createImage(imageSrc, positionLeft, positionBottom);
}

newImage("assets/green-character.gif", "200px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/tree.png", "200px", "300px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png", "150px", "200px");
newImage("assets/well.png", "500px", "425px");
newImage("assets/sword.png", "500px", "405px");
newItem("assets/shield.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");
newImage("assets/sky.png", "375px", "375px");
newImage("assets/grass.png", "375px", "2px");

function newItem(itemSrc, positionLeft, positionBottom, onClick) {
  let item = createImage(itemSrc, positionLeft, positionBottom);
  item.addEventListener("click", function () {
    if (onClick) {
      onClick(item);
    } else {
      item.remove();
    }
  });
}

newItem("assets/sword.png", "500px", "405px", function (sword) {
  sword.remove();
});
