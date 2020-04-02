let mainMenu = document.getElementById('main-menu');
let menuButton = mainMenu.getElementsByTagName('button');
let menuList = mainMenu.getElementsByTagName('ul');

//menuList is an array, so the ul tag with li elements are in the array[0]
let menuListStyle = getComputedStyle(menuList[0]);

//convert the li elements of the #countries-images in clickable buttons
let countriesImagesButtons = document.getElementById('countries-images').getElementsByTagName('li');

/*LISTENERS*/
//menuButton is an array, the button is in the first element
menuButton[0].addEventListener('click', revealHideMenu, true);


/*INITIALIZE*/
start();


/*FUNCTIONS*/

function start(){
    menuList[0].classList.add('hide');
    converLiToLinks();
}

//loop to convert the li elements of the #countries-images in clickable buttons, it will use the link already written in the a tag.
function converLiToLinks() {
    for (let index = 0; index < countriesImagesButtons.length; index++) {
        const _li = countriesImagesButtons[index];
        const _a = _li.children[0].attributes.href.nodeValue;
        _li.linkTo = _a;
        //console.log(_li.linkTo);
        _li.addEventListener('click', goFromLiToLink, true);
        _li.addEventListener('mouseover', goFromLiToLink, true);
        _li.addEventListener('mouseout', goFromLiToLink, true);
        
    }

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

    if(event.type === 'click'){
        window.location = this.linkTo;
    }

    if(event.type === 'mouseover'){
        this.a.classList.remove('colorizeLink');
        this.a.classList.add('colorizeLink');
    }

    if(event.type === 'mouseout'){
        this.a.classList.remove('colorizeLink');
    }
    
}

//receive an event over a link, if the event is a mouseover, then convert the courser to a normal pointer
//if the event is a click, then navigate to the url.
function goFromLiToLink(event) {
    event.preventDefault();
    //console.log("me: " + event.type);
    this.removeEventListener('animationend', () => {
        this.classList.remove('addNoZoom');
    }, true);

    this.children[0].children[0].removeEventListener('animationend', () => {
        this.classList.remove('addOpacity1');
    }, true);

    if(event.type === 'click'){
        window.location = this.linkTo;
        //console.log(this.children[0].children[0]);
    }else if(event.type === 'mouseover'){
        event.target.style.cursor = 'pointer';

        this.children[0].children[0].classList.remove('addOpacity07');
        this.children[0].children[0].classList.remove('addOpacity1');

        this.classList.remove('addZoomIn');
        this.classList.remove('addNoZoom');
        this.classList.add('addZoomIn');

        this.children[0].children[0].classList.add('addOpacity07');
        //console.log('transform' + this.style.transform);    
    }else if(event.type === 'mouseout'){
        this.children[0].children[0].classList.remove('addOpacity07');
        this.children[0].children[0].classList.remove('addOpacity1');
        this.children[0].children[0].classList.add('addOpacity1');

        this.children[0].children[0].addEventListener('animationend', () => {
            this.classList.remove('addOpacity1');
        }, true);

        this.classList.remove('addZoomIn');
        this.classList.remove('addNoZoom');
        this.classList.add('addNoZoom');

        this.addEventListener('animationend', () => {
            this.classList.remove('addNoZoom');
        }, true);
        //console.log('transform' + this.style.transform);
    }
}

function revealHideMenu(event) {
    //console.log(event);
    //this.classList.toggle('resize');
    //console.log(menuListStyle.display);

    if(menuListStyle.height !== '0px'){
        menuList[0].classList.remove('show');
        menuList[0].classList.add('hide');
    }else if(menuListStyle.height === '0px'){
        menuList[0].classList.remove('hide');
        menuList[0].classList.add('show');
    }

    //console.log(menuListStyle.display);
}


/* */