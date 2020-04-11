jQuery(document).ready(function () {
    let body = jQuery('body');
    let bgBody = '<div id="bg-body"></div>';
    let bgpage = '<div id="bg-page"></div>';
    let pageHeight = body.outerHeight();
    let currentPageHeight = 0;
    let intervalBodyHeight = window.setInterval(resizeBg, 100);

    function start() {

        body.append(bgBody);
        body.append(bgpage);

        jQuery('#bg-page').css('height', `${pageHeight}px`);
        jQuery('#bg-body').css('height', `${pageHeight}px`);

        
    }

    function resizeBg() {

        currentPageHeight = body.outerHeight();
        
        //console.log(`${pageHeight} < ${currentPageHeight} ?:  ${pageHeight < currentPageHeight}`);
        if (pageHeight < currentPageHeight) {
            //console.log('resize');
            jQuery('#bg-page').css('height', `${currentPageHeight + 20}px`);
            jQuery('#bg-body').css('height', `${currentPageHeight + 20}px`);

            pageHeight = currentPageHeight + 20;
        }
    }

    start();
});