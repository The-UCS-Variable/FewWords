$(document).ready(function() {
$("#editor-trum").trumbowyg({
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
