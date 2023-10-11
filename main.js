// Code voor buttons leerdoelen

// let portfolioknop = document.getElementById("portfolioknop")

// portfolioknop.addEventListener("click", filterSelection(e,'showThisButton') )


filterSelection("showThisButton");

function filterSelection(leerdoelen) {
    var alleLeerdoelen, i;
    alleLeerdoelen = document.getElementsByClassName("filterDiv");
    for (i = 0; i < alleLeerdoelen.length; i++) {
    RemoveClass(alleLeerdoelen[i], "show");
    if (alleLeerdoelen[i].className.indexOf(leerdoelen) > -1) AddClass(alleLeerdoelen[i], "show");
}

scrollToTop();
}

function AddClass(element, name) {
    var i, elementClasses, newClasses;
    elementClasses = element.className.split(" ");
    newClasses = name.split(" ");
    for (i = 0; i < newClasses.length; i++) {
    if (elementClasses.indexOf(newClasses[i]) == -1) {
    element.className += " " + newClasses[i];
    }
    }
}

function RemoveClass(element, name) {
    var i, elementClasses, newClasses;
    elementClasses = element.className.split(" ");
    newClasses = name.split(" ");
    for (i = 0; i < newClasses.length; i++) {
        while (elementClasses.indexOf(newClasses[i]) > -1) {
        elementClasses.splice(elementClasses.indexOf(newClasses[i]), 1);
        }
        }
    element.className = elementClasses.join(" ");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("buttonLeerdoelen");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
}