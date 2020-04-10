jQuery(document).ready(function(){
    const bannerSlider = jQuery('#banner-slider ul');
    const containerImages = jQuery('#banner-slider li');
    const pageWidth = jQuery('body').innerWidth();
    let pauseBanner = false;

    let currentTarget = 1;

  
    //Make sure that the banner slider start with the horizontal position
    //at 0px
    bannerSlider.css('left', '0px');
    bannerSlider.css('position', 'relative');

    //position each image next to each other
    //we use the left css property
    //Since the width of the page is 1330px the position of each image will be:
    //First: 1330px * 0, Second: 1330px * 1, Third: 1330px * 2, ... , Nth: 1330px * n
    containerImages.each(function( index ) {
       
        jQuery(this).attr('index', index);
        jQuery(this).css('left', `${pageWidth * index}px`);
        jQuery(this).css('width', '100%');        
    });

    //After setting all the properties in the HTML elements,
    //lets create a setInterval function thath will execute the animation
    //every 1.3 seconds.
    let intervalAnimation = window.setInterval(animateBanner, 2500);

    function animateBanner() {

        bannerSlider.animate({
            left: `${-currentTarget * pageWidth}px`,
        }, {
            duration: 700,
            easing: 'linear'
        })

        if(!pauseBanner){
            currentTarget ++;
            if (currentTarget >= containerImages.length) {
                currentTarget = 0;
            }
        }
    }


    //The user can pause the animations when he
    //pass the mouse over the current image
    bannerSlider.mouseover(function(event){
        pauseBanner = true;

        currentTarget = jQuery(event.target.parentElement).attr('index'); 

    });

    //The user can resume the animations when he
    //put the mouse outside the area of the current image
    bannerSlider.mouseleave(function(){
        pauseBanner = false;
    });    

});