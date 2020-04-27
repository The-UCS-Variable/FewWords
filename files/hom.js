$(document).ready(function() {
$("#the-trumbowyg").trumbowyg({
 semantic: true,
 btns: [
   ["viewHTML"],
   ["formatting"],
   ["strong", "em", "del"],
   ["link"],
   ["insertImage"],
   ["justifyLeft", "justifyCenter", "justifyRight"],
   ["unorderedList", "orderedList"],
   ["horizontalRule"],
   ["removeformat"],
   ["fullscreen"]
 ]
});
});



console.log("Text Editor powered by TRUMBOWYG");



function switchEDIT(evt, tabName) {
  var i, editors, switcher;
  editors = document.getElementsByClassName("editors");
  for (i = 0; i < editors.length; i++) {
    editors[i].style.display = "none";
  }
  switcher = document.getElementsByClassName("switcher");
  for (i = 0; i < switcher.length; i++) {
    switcher[i].className = switcher[i].className.replace(" now", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " now";
}

document.getElementById("simpleclick") .click();
