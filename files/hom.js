$(document).ready(function() {
$("#editor").trumbowyg({
 semantic: true,
 btns: [
   ["undo", "redo"], // Only supported in Blink browsers
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
