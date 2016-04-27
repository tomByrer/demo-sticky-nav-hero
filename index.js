var MENU_HEIGHT = 50; //px
// most code from Gregor Adams (@pixelass)
$(function(){
  // Variables
  var $window = $(window);
  var $nav = $('nav');
  var $next = $nav.next();
  var windowHeight = $window.height();
  // Find the value of 90% of the viewport height
  var ninetypercent = windowHeight - MENU_HEIGHT;
  // navHeight could change, so let's get the height
  var navHeight = $nav.outerHeight(true);
  $window.on('resize', function(){
    
    // after a resize we need to make sure the values are still correct

    windowHeight = $(window).height();
    ninetypercent = .9 * windowHeight;
    navHeight = $nav.outerHeight(true);
  });

  // When the window is scrolled ninety percent or rresized, toggle the classes
  // Does not work in iOS 7 or below
  // Hasn't been tested in iOS 8
  $window.on('scroll resize', function(){

    // Store the document scroll function in a variable
    var y = $window.scrollTop() > ninetypercent;

    // If the document is scrolled 90%        
    // Add the "sticky" class
    $nav.toggleClass('sticky', y);
    var paddingTop = y ? navHeight : 0;
    
    // and make sure the next element gets the correct padding
    $next.css({
      paddingTop: paddingTop
    });

  });
  
}); // jQuery
