lightGallery(document.getElementById('relative-caption'), {
    subHtmlSelectorRelative: true,
});

function scrollToTop(){

    window.scrollTo({top: 0, behavior: 'smooth'});
}

function onScroll_display(){
    let mybutton = document.getElementById("backtotop");
  
    window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
      var appear = 20;
      if (window.pageYOffset >= appear) {
        document.getElementById("backtotop").style.opacity = '1'
        document.getElementById("backtotop").style.pointerEvents = 'all'
      } else {
        document.getElementById("backtotop").style.opacity = '0'
        document.getElementById("backtotop").style.pointerEvents = 'none'
      }
    }
}

