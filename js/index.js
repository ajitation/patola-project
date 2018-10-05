
/*
 var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 1000, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

*/


$(document).ready(function($) {
  $("#tile2").click(function() {
    console.log("clicked!");
    $(".pattern").addClass("ptwo").removeClass("pone pthree");
      $(".hoverbtn").addClass("ptwomove");
      $("#navratna").removeClass("hide");
    $("#chhabdi").addClass("hide");
      $("#paan").addClass("hide");

    

  });
    
    
      $("#tile1").click(function() {
    console.log("clicked!");
    $(".pattern").addClass("pone").removeClass("ptwo pthree");
     $("#chhabdi").removeClass("hide");
    $("#navratna").addClass("hide");
      $("#paan").addClass("hide");

    

  });
  
      $("#tile3").click(function() {
    console.log("clicked!");
    $(".pattern").addClass("pthree").removeClass("ptwo pone");
    $("#paan").removeClass("hide");
    $("#chhabdi").addClass("hide");
      $("#navratna").addClass("hide");

    

  });
    
    
    
  
});


$(document).ready(function(){
     $(".hoverbtn").mouseover(function(){
         $(".pattern").addClass("ptwohover");
     });
     $(".hoverbtn").mouseout(function(){
         $(".pattern").removeClass("ptwohover");
     });
    
});
  
  
       
         
  
  
//pattern two pattern two patterntwo//
$(document).ready(function($) {
  $("#btile2").click(function() {
    console.log("clicked!");
    $(".bpattern").addClass("pattwo").removeClass("patone patthree");
    $("#btile2").css("filter","grayscale(0)"); 
    $("#btile1").css("filter","grayscale(100)");  
    $("#btile3").css("filter","grayscale(100)");  
   
      
      $("#navratna").removeClass("hide");
    $("#chhabdi").addClass("hide");
      $("#paan").addClass("hide");

    

  });
    
    
      $("#btile1").click(function() {
    console.log("clicked!");
    $(".bpattern").addClass("patone").removeClass("pattwo patthree");
     
          
    $("#btile1").css("filter","grayscale(0)"); 
    $("#btile2").css("filter","grayscale(100)");  
    $("#btile3").css("filter","grayscale(100)");  
  
          
    
    $("#chhabdi").removeClass("hide");
    $("#navratna").addClass("hide");
      $("#paan").addClass("hide");

    

  });
  
      $("#btile3").click(function() {
    console.log("clicked!");
    $(".bpattern").addClass("patthree").removeClass("pattwo patone");
    
    $("#btile3").css("filter","grayscale(0)"); 
    $("#btile2").css("filter","grayscale(100)");  
    $("#btile1").css("filter","grayscale(100)");        
          
          
          
    $("#paan").removeClass("hide");
    $("#chhabdi").addClass("hide");
      $("#navratna").addClass("hide");

    

  });
    
    
  
  
    
    
    
  
});





// select video element
var vid = document.getElementById("v0");
var time = $("#time");
var scroll = $("#scroll");
var windowheight = $(window).height() - 20;

var scrollpos = window.pageYOffset / 400;
var targetscrollpos = scrollpos;
var accel = 0;

// ---- Values you can tweak: ----
var accelamount = 1.0; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.
var bounceamount = 0.0; //value from 0 to 1 for how much backlash back and forth you want in the easing. 0 = no bounce whatsoever, 1 = lots and lots of bounce

// pause video on load
vid.pause();

window.onscroll = function() {
  //Set the video position that we want to end up at:
  targetscrollpos = window.pageYOffset / 400;

  //move the red dot to a position across the side of the screen
  //that indicates how far we've scrolled.
  scroll.css("top", 10 + window.pageYOffset / 13500 * windowheight);
};

setInterval(function() {
  //Accelerate towards the target:
  accel += (targetscrollpos - scrollpos) * accelamount;

  //clamp the acceleration so that it doesnt go too fast
  if (accel > 1) accel = 1;
  if (accel < -1) accel = -1;

  //move the video scroll position according to the acceleration and how much bouncing you selected:
  scrollpos =
    (scrollpos + accel) * bounceamount + targetscrollpos * (1 - bounceamount);

  //move the blue dot to a position across the side of the screen
  //that indicates where the current video scroll pos is.
  time.css("top", 10 + scrollpos / 13500 * 400 * windowheight);

  //update video playback
  vid.currentTime = scrollpos;
  vid.pause();
}, 40);



var controller = new ScrollMagic.Controller();

// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#scroll2", // point of execution
  duration: '3790px' // pin the element for a total of 400px
})
.setPin("#sec2") // the element we want to pin
.addTo(controller);


var scene3 = new ScrollMagic.Scene({
  triggerElement: "#scroll4", // point of execution
  duration: '11697px' // pin the element for a total of 400px
})
.setPin("#sec3") // the element we want to pin
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: "#scroll5", // point of execution
  duration: '3697px' // pin the element for a total of 400px
})
.setPin("#sec4") // the element we want to pin
.addTo(controller);

var scene5 = new ScrollMagic.Scene({
  triggerElement: "#scroll6", // point of execution
  duration: '7000px' // pin the element for a total of 400px
})
.setPin("#sec5") // the element we want to pin
.addTo(controller);

var scene6 = new ScrollMagic.Scene({
  triggerElement: "#scroll7", // point of execution
  duration: '1400px' // pin the element for a total of 400px
})
.setPin("#sec6") // the element we want to pin
.addTo(controller);

var scene7 = new ScrollMagic.Scene({
  triggerElement: "#scroll8", // point of execution
  duration: '2000px' // pin the element for a total of 400px
})
.setPin("#sec7") // the element we want to pin
.addTo(controller);

var scene8 = new ScrollMagic.Scene({
  triggerElement: "#scroll9", // point of execution
  duration: '2000px' // pin the element for a total of 400px
})
.setPin("#sec8") // the element we want to pin
.addTo(controller);


var scene9 = new ScrollMagic.Scene({
  triggerElement: "#scroll10", // point of execution
  duration: '7200px' // pin the element for a total of 400px
})
.setPin("#sec9") // the element we want to pin
.addTo(controller);


var scene10 = new ScrollMagic.Scene({
  triggerElement: "#scroll11", // point of execution
  duration: '14500px' // pin the element for a total of 400px
})
.setPin("#sec10") // the element we want to pin
.addTo(controller);











$('document').ready(function($) {
    $(document).scroll(function(){
        
        console.log(scrollY);
        
        
        
      if (document.documentElement.clientHeight + $(window).scrollTop() >= $(document).height()) {
        $(document).scrollTop(0);
      }
    });

    
    
  });


 
