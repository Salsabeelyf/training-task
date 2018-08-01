// Defining elements
var container = document.getElementById("container");
var line = document.getElementById("line");
var menuTitle = document.getElementById("title");
var menu = document.getElementById("menu");

// Styling container
container.style.backgroundColor = "#40B8F4";
container.style.margin = "auto";
container.style.marginTop = "200px";
container.style.maxWidth = "550px"
container.style.padding = "15px";

// Styling the title
menuTitle.style.border = "none";
menuTitle.style.backgroundColor = "#40B8F4";
menuTitle.style.color = "#fff";
menuTitle.style.fontSize = "1.7rem";
menuTitle.style.fontWeight = "700";
menuTitle.style.padding ="0";;
menuTitle.style.width = "100%";
menuTitle.style.textAlign = "left";
menuTitle.style.cursor = "pointer";

// // Styling the line
line.style.marginTop = "10px";
line.style.marginBottom = "10px";
line.style.width = "100%";
line.style.height = "0.1rem";
line.style.backgroundColor = "#ddd";
line.style.opacity = "0.3";
line.style.display = "inherit";

// Styling menu
menu.style.marginTop = "0";
menu.style.marginBottom = "0";
menu.style.height = "0";
menu.style.overflow = "hidden";
menu.style.transition = "height 300ms linear";
menu.style.webkitTransition = "height 300ms linear";
menu.style.mozTransition = "height 300ms linear";
menu.style.lineHeight = "1.4rem";

// Toggle function
function togglefn(){
  menu.classList.toggle("show");
  if (menu.classList.contains("show")){
    menu.style.height = getHeight(menu);
  }else {
    menu.style.height = "0";
  }
}

function getHeight(elem){
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
}
