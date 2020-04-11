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

let commentsArea;

let submitFormObject;

function start(){

    
    section = jQuery('#share-your-experience');
    personalDataErrorSection = jQuery('#share-your-experience tr:nth-child(2) td');

    submitFormObject = {
        submitButton: document.getElementById('submit-experience'),
        errorSection: jQuery('#share-your-experience tr:nth-child(15)'),
        errorClass: 'error-box-form',
        successClass: 'success-box-form',
        errorMessage: '<div class="error-box-form"><span class="error">Please fill the form correctly</span></div>',
        successMessage: '<div class="success-box-form"><span class="success">Thank you, your information has been sent!</span></div>'
    }

    submitFormObject.submitButton.addEventListener('click', validateForm);

}

function createObjects() {

    uploadPhoto = {
        elements: Array.from(jQuery('input:file#upload-photo')[0].files),
        errorSection: jQuery('#share-your-experience tr:nth-child(14)'),
        errorClass: 'error-box-upload',
        error: '<div class="error-box-upload"><span class="error">Please upload at least one photo</span></div>'
    };

    commentsArea = {
        elements: jQuery('.comments-area'),
        errorSection: jQuery('#share-your-experience tr:nth-child(13)'),
        errorClass: 'error-box-comments',
        error: '<div class="error-box-comments"><span class="error">Please share some of your thoughts</span></div>'
    };

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
        error: '<span class="error">Please enter your first name</span>',
        reference: jQuery('#fname')
    };

    lastName = {
        element: jQuery('#lname'),
        value: jQuery('#lname').val().trim(),
        error: '<span class="error">Please enter your last name</span>',
        reference: jQuery('#lname')
    };
    age = {
        element: jQuery('#age'),
        value: jQuery('#age').val().trim(),
        regExp : new RegExp(/^\d+$/),
        error: '<span class="error">Please enter your age</span>',
        errorType: '<span class="error">Please enter only numbers</span>',
        reference: jQuery('#age')
    };

    email = {
        element: jQuery('#email'),
        value: jQuery('#email').val().trim(),
        regExp : new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
        error: '<span class="error">Please enter your email</span>',
        errorType: '<span class="error">Please enter a valid email address</span>',
        reference: jQuery('#email')
    };

    personalData = [firstName, lastName, age, email];
}

function validateForm(event) {

    createObjects();

    //console.log(event);

    //reassign again the file to the array, to verify if there is a photo.
    //uploadPhoto.elements =  Array.from(jQuery('input:file#upload-photo')[0].files);

    //DO NOT use prevent default here, causes unexpected behavior (?)
    let isCorrect = false;

    

    const f1 = validateTextData();
    const f2 = validateChecked(bestTimeToTravel);
    const f3 = validateChecked(travelerType);
    const f4 = validateChecked(visitedCities);
    const f5 = validateTextArea(commentsArea);
    const f6 = validateFiles(uploadPhoto);

    console.log(f1, f2, f3, f4, f5, f6);
    
    if(f1 && f2 && f3 && f4 && f5 && f6) {
        isCorrect = true;
    }

    submitForm(isCorrect);
}

function submitForm(_isCorrect) {

    jQuery(`.${submitFormObject.errorClass}`).remove();
    jQuery(`.${submitFormObject.successClass}`).remove();
    
    if(_isCorrect){
        jQuery( jQuery.parseHTML( submitFormObject.successMessage ) ).appendTo(submitFormObject.errorSection);
    }else{
        jQuery( jQuery.parseHTML( submitFormObject.errorMessage ) ).appendTo(submitFormObject.errorSection); 
    }
}

function validateFiles(_filesObject) {

    let isCorrect = true;
    let elements = [];

    jQuery(`.${_filesObject.errorClass}`).remove();

    _filesObject.errorSection.css('position', 'relative');
    _filesObject.errorSection.css('padding-bottom', '0');

    if(_filesObject.elements.length === 0) {
        isCorrect = false;
        elements.push(jQuery(_filesObject.errorSection));
    }

    if(!isCorrect){
        _filesObject.errorSection.css('padding-bottom', '3em');
    }

    showErrors(elements, _filesObject.error, isCorrect, _filesObject.errorSection);

    return isCorrect;

}

function validateTextData() {

    //console.log('validate text');

    /*personalData.forEach(element => {
        element.value = element.reference.val().trim();
    });*/

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
    console.log(errorElements);
    errorHTML += '</div>';

    showErrors(errorElements, errorHTML, isCorrect, personalDataErrorSection);

    return isCorrect;
}

function validateTextArea(_textObject) {
    
    let isCorrect = true;
    const elements = [];

    jQuery(`.${_textObject.errorClass}`).remove();

    _textObject.errorSection.css('position', 'relative');
    _textObject.errorSection.css('padding-bottom', '0');

    _textObject.elements.removeClass('inputError');

    _textObject.elements.each(function(index, element){
        elements.push(jQuery(element).parent());

        if(element.value.trim().length > 0){
            isCorrect = true;
        }else{
            isCorrect = false;
        }

    });

    if(!isCorrect){
        _textObject.errorSection.css('padding-bottom', '3em');
    }

    showErrors(elements, _textObject.error, isCorrect, _textObject.errorSection);

    return isCorrect;
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