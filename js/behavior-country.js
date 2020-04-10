
jQuery(document).ready(function () {

    let mainMenu = document.getElementById('main-menu');
    let menuButton = mainMenu.getElementsByTagName('button');
    let menuList = mainMenu.getElementsByTagName('ul');

    //menuList is an array, so the ul tag with li elements are in the array[0]
    let menuListStyle = getComputedStyle(menuList[0]);

    //convert the li elements of the #countries-images in clickable buttons
    //let countriesImagesButtons = document.getElementById('countries-images').getElementsByTagName('li');

    /*LISTENERS*/
    //menuButton is an array, the button is in the first element
    menuButton[0].addEventListener('click', revealHideMenu, true);

    /*FUNCTIONS*/

    function start() {
        menuList[0].classList.add('hide');
        converLiToLinks();
    }

    //loop to convert the li elements in clickable buttons, it will use the link already written in the a tag.
    function converLiToLinks() {

        for (let j = 0; j < menuList[0].children.length; j++) {
            const _li = menuList[0].children[j];
            const _a = _li.children[0].attributes.href.nodeValue;
            _li.linkTo = _a;
            _li.a = _li.children[0];
            _li.addEventListener('click', goToCountry, true);
            _li.addEventListener('mouseover', goToCountry, true);
            _li.addEventListener('mouseout', goToCountry, true);

        }
    }

    function goToCountry(event) {
        event.preventDefault();

        if (event.type === 'click') {
            window.location = this.linkTo;
        }

        if (event.type === 'mouseover') {
            this.a.classList.remove('colorizeLink');
            this.a.classList.add('colorizeLink');
        }

        if (event.type === 'mouseout') {
            this.a.classList.remove('colorizeLink');
        }

    }

    //receive an event over a link, if the event is a mouseover, then convert the courser to a normal pointer
    //if the event is a click, then navigate to the url.

    function revealHideMenu(event) {

        if (menuListStyle.height !== '0px') {
            menuList[0].classList.remove('show');
            menuList[0].classList.add('hide');
        } else if (menuListStyle.height === '0px') {
            menuList[0].classList.remove('hide');
            menuList[0].classList.add('show');
        }

        //console.log(menuListStyle.display);
    }

    /*START*/
    start();
});