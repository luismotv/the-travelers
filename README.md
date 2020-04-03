# the-travelers
Humber College - Web Programming and Design - ITC-5103-0NB - Team Traveler: phase one project
#web page without the videos in https://luismotv.github.io/the-travelers/

#instructions
 - main.css
    - lines 1 to 7 "*": Reset and set some setting for all the elements.

    - lines 9 to 13 "body": Give a fixed width to the webpage and center it.  

    - lines 24 to 28 "header {    display: grid;    grid-template-columns: 0.5fr 3fr 1fr;": Use the grid css property to organize the four elements of the header as desired.
        - "grid-template-columns: 0.5fr 3fr 1fr;" divides the "header" element into 3 columns. "fr" it is a measure unit, so "3fr" measures three times the space of "1fr", and "0.5fr" measures half the space of "1fr".
        - "grid-template-columns: 0.5fr 3fr 1fr;" has only three measures ("0.5fr" "3fr" "1fr"), so it will only affects three elements, and these elements will be in the same row. One of the elements will be placed in a second row. This will be defined in each element through the properies "grid-column" and "grid-row".
    
    - lines 31 to 32 "#breadcrumbs {grid-column: 1 / 3;": 
        - "grid-row: 2;" sends the element to the second row
        - "grid-column: 1 / 3;" makes the element occupy a space from the column's line 1 to the column's line line 3

    - lines 54 to 56 "#main-menu {    grid-column: 1;    grid-row: 1;"
        - "grid-row: 1" sends the element to the first row.
        - "grid-column: 1" makes the occupy its space of "0.5fr" from the column's line 1.

    - lines 59 to 61 "#main-title {    grid-column: 2;    grid-row: 1;":
        - "grid-row: 1" places the element in the first row.
        - "grid-column: 2" makes the element occupy its space of "3fr" from column's line 2

    - lines 65 to 67 "#main-logo {     grid-column: 3;     grid-row: 1;" :
        - "grid-row: 1" places the element in the first row.
        - "grid-column: 3" makes the element occupy its space of "1fr" from column's line 3

    - lines 112 to 114 "#banner> div{     position: relative;" :
        - The banner element will use a effect called "Hero image", this means that some text will be displayed over the image or video. In order to achieve this effect, the container of all the elements must have a "relative" position, so the other elements will organize according to the container.
    - lines 119 to 125 "#banner> div > div> span { ...; position: absolute;top: 20%;" : 
        -  "position: absolute" will make the element to 



#Changes 2020-03-25

    In the ...-details.html page:

    - "<tr><th colspan="6"><h3>Traveler type:</h3> </th></tr>"
        - around line 359.
        - update the HTML by adding an "h3" tag as showed above.

    - "<th colspan="6"><h4>Best time of the year to travel</h4></th>"
        - around line 296
        - update the HTML by changing from an "h3" tag to an "h4" tag as showed above.

    - "<th colspan="6"><h4>What are your thoughts?</h4></th>"
        - around line 353
        - update the HTML by changing from an "h3" tag to an "h4" tag as showed above.

    - "<th><h4>Visited cities</h4></th>"
        - around line 385
        - update the HTML by changing from an "h3" tag to an "h4" tag as showed above.

    - "<td colspan="5"><input type="email" name="email" placeholder="yourmail@yourdomain.com"></td>"
        - around line 293
        - update the HTML by adding the attribute "placeholder" as showed above.

    
    In the index.html page:

    - "<div class="phone-number">
					<p>Call <a href="tel:+6494452687">445-2663</a> For support </p>
				</div>
				
				<address>
					<span class="email">Write us to <a href="mailto:info@thetravelers.com">The Travelers</a></span>
					<span class="address">Visit us at: <b>123 Bloor Street, ON Box 564</b></span>
					<span class="country">Canada</span>
				</address>"
        - around line 208
        - replace all the HTML between the "section" tags with the code above.

    In the main country.html page:

    - "<section id="country-details-menu">"
    - around line 147, where the menu of each country is.
    - add an "id" attribute to the "section" tag as above. 


/*********************************************************************************************************/
PHASE 03 Javascript

- For javascript is easier to use jQuery, but the first part of the code is made using vanilla javascrpt, and just the jQuery event to detect when all the html tags of the webpage are ready. This is very important. If javascript executes before all the HTML tags are ready, it will produce an error because it will not be able to find the HTML element.

- The jQuery function to detect when all the HTML tags are ready is:
    - jQuery(document).ready(function () {
        //code to be executed when the webpage is ready
      });
    - you can also write it like:
        - $(document).ready(function () {
            //code to be executed when the webpage is ready
          });
    - or like:
        -  jQuery(document).ready(functionToExecute());
           
           functioToExecute() {
                //code to be executed
           }
- The jQuery library must be included before any other javascript code, in the head tag:
    - <script src="js/jquery-3.4.1.min.js"></script>
    - after the previous line we can include any other scripts: <script src="js/behavior.js"></script>

- The file "behavior.js" is used for the "index.html" file
    - first the keyword "let" is used to create some variables and save a references to some html elements that we need in order to apply some effect. 
        - In lines 4 to 12, the "nav" tag with the "main-menu" id that contains the menu button and a list of links to every country page are saved in variables.
        - In line 16, some instructions, like "document.getElementsByTagName" return an array, and one of the elements of the array contains a reference to the HTML element that we are looking for. For example: the  menuButton[0] contains the element "<button type="button">Menu</button>"
        - In line 12, we need to get a reference to the all the list elements that contains the first gallery after the video banner, we do this with this line: "let countriesImagesButtons = document.getElementById('countries-images').getElementsByTagName('li');" this line returns an array containing all the li elements of the first gallerey contained in the element with the id "countries-images".
        



#Resources

Style a table -> https://www.w3schools.com/css/css_table.asp

Apply Hero-image effect -> https://www.w3schools.com/howto/howto_css_hero_image.asp

Use the grid property to organize elements inside it -> https://developer.mozilla.org/en-US/docs/Web/CSS/grid

Organize an element inside a grid according to column lines -> https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column

Place an element inside a grid in the specified row -> https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row

use position relative or absolut to achieve some effect -> https://developer.mozilla.org/en-US/docs/Web/CSS/position

How to center elements -> https://www.w3schools.com/css/css_align.asp

How to center elements using "flex" -> https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container

Applying "text-shadow" -> https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

Forum's question about How to apply a style to every item but the last -> li:not(:last-child)::after { content: ","; }
li:last-child::after { content: "."; } -> https://stackoverflow.com/questions/2351623/combining-css-pseudo-elements-after-the-last-child

Since links "a" inside a table can not be given style directly, the solution is to skip the table element in the css tree -> section a {/*sytles*/}, NOT -> section > table > tr > td > a {}

Use images in the "content" -> https://developer.mozilla.org/en-US/docs/Web/CSS/content

Apply filter effects to elements -> https://developer.mozilla.org/en-US/docs/Web/CSS/filter

How to add a class to an HTML element with javascript -> https://www.w3schools.com/howto/howto_js_add_class.asp

CSS animation with transitions -> https://developer.mozilla.org/en-US/docs/Web/CSS/transition

CSS transitions, How to use them -> https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions

How to embed hosted in your own hosting using @font-face -> https://css-tricks.com/snippets/css/using-font-face/

How to embed multiple fonts using the same name -> https://stackoverflow.com/questions/28279989/multiple-font-weights-one-font-face-query/28339483

How to use animations -> https://developer.mozilla.org/en-US/docs/Web/CSS/animation#single-animation-play-state

How to replay an animation -> https://www.emailonacid.com/blog/article/email-development/restart-css-animations-in-email-using-active-pseudo-class/

How to use the classList property in javascript -> https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

How to use the mouseleave or mouseout events -> https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event

How to keep the final state of an animation, so it does not loop -> https://stackoverflow.com/questions/12991164/maintaining-the-final-state-at-end-of-a-css3-animation

How to use animation events in javascript -> https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event

How to remove an event listener -> https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

More about transitions in css -> https://tympanus.net/codrops/css_reference/transition/





#Tools

Convert the fonts of your system to webfonts -> https://www.fontsquirrel.com/tools/webfont-generator

Test regular expressions, it also includes a manual about how to use them -> https://regexr.com/



