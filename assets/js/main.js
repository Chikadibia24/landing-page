
//Display toggle function
function displayMenu() {
  //Get ul element
  let linksContainer = document.getElementById("links-container");

  //let ul = document.getElementsByTagName("ul");

  console.log("Function is working");
  if (linksContainer.style.display === "none" && window.innerWidth > 600) {
    linksContainer.style.display = "flex";
  } else if (
    linksContainer.style.display === "flex" &&
    window.innerWidth < 600
  ) {
    linksContainer.style.display = "none";
  } else {
    linksContainer.style.display = "flex";
  }
}

window.addEventListener("resize", displayMenu);
