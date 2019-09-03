document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

$(document).ready(function() {
  $(".sidenav").sidenav();

  $(".button-collapse").sideNav({
    menuWidth: 300, // Default is 300
    edge: "right", // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) {
      /* Do Stuff */
    }, // A function to be called when sideNav is opened //
    onClose: function(el) {
      /* Do Stuff */
    } // A function to be called when sideNav is closed
  });
});
$(document).ready(function() {
  $(".sidenav").sidenav();
});

$(".dropdown-trigger").dropdown();

// var chip = {
//   tag: "chip content",
//   image: "" //optional
// };

$(".chips").chips();
$(".chips-initial").chips({
  data: [
    {
      tag: "Apple"
    },
    {
      tag: "Microsoft"
    },
    {
      tag: "Google"
    }
  ]
});
$(".chips-placeholder").chips({
  placeholder: "Enter a tag",
  secondaryPlaceholder: "+Tag"
});
$(".chips-autocomplete").chips({
  autocompleteOptions: {
    data: {
      Apple: null,
      Microsoft: null,
      Google: null
    },
    limit: Infinity,
    minLength: 1
  }
});
