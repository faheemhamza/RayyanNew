$(document).ready(function(){
    
    /* For The Sticky Navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });
    
    /* scroll on buttons */
    
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
        $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    /* Navigation Scroll */
    
    $(function() {
       $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      }); 
    });
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
         $('.js--wp-1').addClass('animated fadeIn');
     }, {
         offset: '50%'
     });
    
    $('.js--wp-2').waypoint(function(direction) {
         $('.js--wp-2').addClass('animated fadeInUp');
     }, {
         offset: '50%'
     });
    
    $('.js--wp-3').waypoint(function(direction) {
         $('.js--wp-3').addClass('animated fadeIn');
     }, {
         offset: '50%'
     });
    
    $('.js--wp-4').waypoint(function(direction) {
         $('.js--wp-4').addClass('animated pulse');
     }, {
         offset: '50%'
     });
    
     /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});

    
    function myFunction(img) {
          // Get the expanded image
          var expandImg = document.getElementById("expandedImg");
          // Get the image text
          var imgText = document.getElementById("imgtext");
          // Use the same src in the expanded image as the image being clicked on from the grid
          expandImg.src = img.src;
          // Use the value of the alt attribute of the clickable image as text inside the expanded image
          imgText.innerHTML = "HaHa Screwed!!"
          // Show the container element (hidden with CSS)
          expandImg.parentElement.style.display = "block";
        };

        // Open the Modal
        function openModal() {
          document.getElementById("myModal").style.display = "block";
          $('nav').removeClass('sticky');
        };

        // Close the Modal
        function closeModal() {
          document.getElementById("myModal").style.display = "none";
          $('nav').addClass('sticky');
        };

        var slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
          captionText.innerHTML = slides[slideIndex-1].alt;
        }