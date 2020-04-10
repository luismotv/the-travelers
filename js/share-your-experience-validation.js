let personalData;
let firstName;
let lastName;
let age;
let email;

let section;
let personalDataErrorSection;
let bestTimeToTravel;

let travelerType;

let visitedCities;

function start(){

    section = jQuery('#share-your-experience');
    personalDataErrorSection = jQuery('#share-your-experience tr:nth-child(2) td');

    visitedCities = {
        elements: jQuery('#cities option'),
        errorSection: jQuery('#share-your-experience tr:nth-child(12)'),
        errorClass: 'error-box-cities',
        error: '<div class="error-box-cities"><span class="error">Please choose at least one city</span></div>'
    };

    travelerType = {
        elements: jQuery('.radio-experience'),
        errorSection: jQuery('#share-your-experience tr:nth-child(10)'),
        errorClass: 'error-box-traveler',
        error: '<div class="error-box-traveler"><span class="error">Please choose at least one option</span></div>'
    };

    bestTimeToTravel = {
        elements: jQuery('.checkmonth'),
        errorSection: jQuery('#share-your-experience tr:nth-child(6)'),
        errorClass: 'error-box-months',
        error: '<div class="error-box-months"><span class="error">Please choose at least one month</span></div>'
    };

    firstName = {
        element: jQuery('#fname'),
        value: jQuery('#fname').val().trim(),
        error: '<span class="error">Please enter your first name</span>'
    };

    lastName = {
        element: jQuery('#lname'),
        value: jQuery('#lname').val().trim(),
        error: '<span class="error">Please enter your last name</span>'
    };
    age = {
        element: jQuery('#age'),
        value: jQuery('#age').val().trim(),
        regExp : new RegExp(/^\d+$/),
        error: '<span class="error">Please enter your age</span>',
        errorType: '<span class="error">Please enter only numbers</span>'
    };

    email = {
        element: jQuery('#email'),
        value: jQuery('#email').val().trim(),
        regExp : new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        error: '<span class="error">Please enter your email</span>',
        errorType: '<span class="error">Please enter a valid email address</span>'
    };

    personalData = [firstName, lastName, age, email];

    validatePersonalData();

    validateChecked(bestTimeToTravel);

    validateChecked(travelerType);

    validateChecked(visitedCities);

}

function validatePersonalData() {

    let errorHTML = '<div class="error-box">';
    let isCorrect = true;
    const errorElements = [];

    jQuery('.error-box').remove();

    personalData.forEach(element => {

        element.element.removeClass();

        if(element.value === ''){
            errorHTML += element.error;
            isCorrect = false;
            errorElements.push(element.element);
        }else{
            if(element.regExp !== undefined && !element.regExp.test(element.value)){
                errorHTML += element.errorType;
                isCorrect = false;
                errorElements.push(element.element);
            }
        }
    });

    errorHTML += '</div>';

    showErrors(errorElements, errorHTML, isCorrect, personalDataErrorSection)
}

function validateChecked(_checkedObject) {

    let isCorrect = false;
    const elements = [];

    jQuery(`.${_checkedObject.errorClass}`).remove();

    _checkedObject.errorSection.css('position', 'relative');
    _checkedObject.errorSection.css('padding-bottom', '0');
    
    _checkedObject.elements.removeClass('inputError');

    _checkedObject.elements.each(function(index, element){
        elements.push(jQuery(element).parent());

        //console.log(elements[index]);

        if (element.checked) {
           isCorrect = true; 
        }
        
        if (element.selected) {
            isCorrect = true; 
        }

    });

    if(!isCorrect){
        _checkedObject.errorSection.css('padding-bottom', '3em');
    }

    showErrors(elements, _checkedObject.error, isCorrect, _checkedObject.errorSection);

    return isCorrect;
}

function showErrors(_errorElements, _errorHTML, _isCorrect, _errorSection) {
    
    if(!_isCorrect){
        jQuery( jQuery.parseHTML( _errorHTML ) ).appendTo(_errorSection);

        _errorElements.forEach(element => {
            element.addClass('inputError');
        });
    }
    
}

jQuery(document).ready(function(){
    start();
});