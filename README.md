# the-travelers
Humber College - Web Programming and Design - ITC-5103-0NB - Team Traveler: phase one project
#web page without the videos in https://luismotv.github.io/the-travelers/

#instructions
 - main.css
    - lines 1 to 7: Reset and set some setting for all the elements.

    - lines 9 to 13: Give a fixed width to the webpage and center it.  

    - lines 24 to 28 "header {    display: grid;    grid-template-columns: 0.5fr 3fr 1fr;": Use the grid css property to organize the four elements of the header as desired.
        - "grid-template-columns: 0.5fr 3fr 1fr;" divides the "header" element into 3 columns. "fr" it is a measure unit, so "3fr" measures three times the space of "1fr", and "0.5fr" measures half the space of "1fr".
        - "grid-template-columns: 0.5fr 3fr 1fr;" has only three measures, so it will only affects three elements, and these elements will be in the same row. One of the elements will be placed in a second row. This will be defined in each element through the properies "grid-column" and "grid-row".
    
    - lines 31 to 32 "#breadcrumbs {grid-column: 1 / 3;": 
        - "grid-row: 2;" sends the element to the second row
        - "grid-column: 1 / 3;" makes the element occupy a space from the column's line 1 to the column's line line 3

    - lines 54 to 56 "#main-menu {    grid-column: 1;    grid-row: 1;"
        - "grid-row: 1" sends the element to the first row.
        - "grid-column: 1" makes the occupy its space of "0.5fr" from the column's line 1.

    - lines 59 to 61 "#main-title {    grid-column: 2;    grid-row: 1;":
        -  


#Resources
Use the grid property to organize elements inside it -> https://developer.mozilla.org/en-US/docs/Web/CSS/grid

How to center elements -> https://www.w3schools.com/css/css_align.asp

How to center elements using "flex" -> https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container

Applying "text-shadow" -> https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

Forum's question about How to apply a style to every item but the last -> li:not(:last-child)::after { content: ","; }
li:last-child::after { content: "."; } -> https://stackoverflow.com/questions/2351623/combining-css-pseudo-elements-after-the-last-child

Since links "a" inside a table can not be given style directly, the solution is to skip the table element in the css tree -> section a {/*sytles*/}, NOT -> section > table > tr > td > a {}

Use images in the "content" -> https://developer.mozilla.org/en-US/docs/Web/CSS/content

Apply filter effects to elements -> https://developer.mozilla.org/en-US/docs/Web/CSS/filter
