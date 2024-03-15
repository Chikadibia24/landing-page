
//Display toggle function
function displayMenu() {
  //Get ul element
  let linksContainer = document.getElementById("links-container");

  console.log("Function is working");

  if (window.innerHeight > 460) {
    if (linksContainer.style.display === "none" && window.innerWidth > 1078) {
      linksContainer.style.display = "flex";
    } else if (
      linksContainer.style.display === "flex" &&
      window.innerWidth < 1078
    ) {
      linksContainer.style.display = "none";
    } else {
      linksContainer.style.display = "flex";
    }
  }
  
}

window.addEventListener("resize", displayMenu);
