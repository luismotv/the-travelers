jQuery(document).ready( ()=> {
    const galleryButtons = jQuery('#gallery a');
    const modalObject = {
        template:  `<div class="parent-modal">
                        <div class="modal">
                            <div class="close-button">
                                <img src="images/button-close.svg">
                            </div>
                            <img class="loading" src="images/loading-animation.svg">
                            <div class="hideImage image-gallery">                                
                            </div>        
                        </div>
                    </div>`,
        image: '',
        imageHeight: '',
        overlapElement: `<div id="overlapBody"></div>`
    };


    galleryButtons.click(function(event){
        openModal(event);
    });
    

    function openModal(event){
        event.preventDefault();

        const imageLink = jQuery(event.currentTarget).attr('href');
        modalObject.image = new Image();
        const posY = jQuery(document).scrollTop();
        const bodyHeight = jQuery('body').outerHeight() + 50;
        
        

        //append an overlapElement to prevent the user from interacting with the webpage until the modal image is closed
        jQuery('body').append(modalObject.overlapElement);
        //Changes the hight of the overlapElement (<div id="overlapBody"></div>) with jQuery, so it covers all the inner window of the browser
        jQuery('#overlapBody').css('height', `${bodyHeight}px`);

        //animate the overlap element
        jQuery('#overlapBody').css('opacity', '0');
        jQuery('#overlapBody').animate({
            opacity: 1
          }, 500, function() {
            // Animation complete.
        });

        //append the modal window html at the end
        jQuery('body').append(modalObject.template);
        

        //When the html tags are added to the body, we can access them
        //Position the modal element in the current positon of the browser window
        jQuery('.parent-modal').css('position', 'absolute');
        jQuery('.parent-modal').css('top', `${posY}px`);
        jQuery('.parent-modal').css('left', '4%');

        //add a close event to the close button of the modal element
        jQuery('.modal .close-button').click(function(event){
            closeModal(event);
        });
        
        //assign the url to the image attribute of the modalObject
        modalObject.image.src = imageLink;

        //Execute the function onImageLoad when the image finished loading
        modalObject.image.onload = onImageLoad;

        //move the modal element in the vertical plane if the user scrolls the webpage
        jQuery(document).scroll(function(){
            const _posY = jQuery(document).scrollTop();
            jQuery('.parent-modal').css('top', `${_posY}px`);
        });
        
        
    }

    function closeModal(event) {
        //console.log(event);

        jQuery('.modal').animate({
            opacity: '0'
          }, 400, function() {
            jQuery('.parent-modal').remove();
        });

        jQuery('#overlapBody').animate({
            opacity: 0
          }, 400, function() {
            jQuery('#overlapBody').remove();
        });

        //jQuery('.parent-modal').remove();
        //jQuery('#overlapBody').remove();
    }

    function onImageLoad(event) {
        //get the browser window height
        const bodyHeight = jQuery(window).innerHeight();
        //get the size of the image through the 'this' property, it will not be available from jQuery
        modalObject.imageHeight = this.height; 

        jQuery('.modal').css('height', '0');

        jQuery('.modal .image-gallery').css('overflow', 'hidden');
        jQuery('.modal .image-gallery').append(modalObject.image);

        jQuery('.modal .image-gallery').removeClass('hideImage');
        jQuery('.modal .image-gallery').addClass('showImage');

        jQuery('.modal .loading').css('display', 'none');

        //resize image according to the current window size
        if(modalObject.imageHeight >= bodyHeight){
            jQuery('.modal .image-gallery img').css('height', `${bodyHeight}px`);
        }

        //resize modal element after resizing the image
        resizeModaElement();

        //resize modal element if the user resize the window
        window.addEventListener("resize", resizeModaElement);
    }

    function resizeModaElement() {

        let modalHeight = jQuery('.modal').outerHeight();
        const bodyHeight = jQuery(window).innerHeight();
        let modalFinalHeight = '0px';

        
        if(modalObject.imageHeight >= bodyHeight){
            //jQuery('.modal').css('height', `${bodyHeight - 20}px`);
            modalFinalHeight = `${bodyHeight - 20}px`
            modalHeight = bodyHeight - 20;
            jQuery('.modal .image-gallery img').css('height', `${modalHeight - 20}px`);
        }else {
            //jQuery('.modal').css('height', `${modalObject.imageHeight - 20}px`);
            modalFinalHeight = `${modalObject.imageHeight - 20}px`
            modalHeight = modalObject.imageHeight - 20;
            jQuery('.modal .image-gallery img').css('height', `${modalHeight - 20}px`);
        }

        jQuery('.modal').animate({
            height: modalFinalHeight
          }, 700, function() {
            // Animation complete.
        });
    }

});