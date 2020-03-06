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
converLiToLinks();


/*FUNCTIONS*/

//loop to convert the li elements of the #countries-images in clickable buttons, it will use the link already written in the a tag.
function converLiToLinks() {
    for (let index = 0; index < countriesImagesButtons.length; index++) {
        const _li = countriesImagesButtons[index];
        const _a = _li.children[0].attributes.href.nodeValue;
        _li.linkTo = _a;
        console.log(_li.linkTo);
        _li.addEventListener('click', goFromLiToLink, true);
        _li.addEventListener('mouseover', goFromLiToLink, true);
        
    }
}

//receive an event over a link, if the event is a mouseover, then convert the courser to a normal pointer
//if the event is a click, then navigate to the url.
function goFromLiToLink(event) {
    event.preventDefault();
    console.log(this.linkTo);

    if(event.type === 'click'){
        window.location = this.linkTo;
    }else if(event.type === 'mouseover'){
        event.target.style.cursor = 'pointer';
    }   
}

function revealHideMenu(event) {
    console.log(event);
    
    console.log(menuListStyle.display);

    if(menuListStyle.display === 'block'){
        menuList[0].classList.remove('show');
        menuList[0].classList.add('hide');
    }else if(menuListStyle.display === 'none'){
        menuList[0].classList.remove('hide');
        menuList[0].classList.add('show');
    }

    console.log(menuListStyle.display);
}


/* */