//Animation for displaying pages
$(function(){
  $(".tablinks").on('click', function(){
    var panelID= $(this).attr('data-panelID');
    $("#"+panelID).hide().fadeIn(800);
  });
});

//Automatic loading Home page upon loading of website
$(function(){
    $('#Home').hide().fadeIn(800);
});

//Js function for displaying correct page on each click
function openPage(evt, page) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
  }

//Opening NBA page
function openNBA(){
    window.open("https://ca.nba.com/?gr=www");
  }


//Slideshow code
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}
 
