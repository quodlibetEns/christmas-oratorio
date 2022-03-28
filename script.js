// 1. FIRST PICTURE HEIGHT FIX

//first we get the total height of the text in the intro
function getTotalHeight() {

    const intro = document.getElementById('intro');
    const introChildren = intro.childNodes;

    let totalHeight = 0;

    for (let i = 0; i < introChildren.length; i++) {
        iHeight = introChildren[i].offsetHeight;
        if (typeof(iHeight) == 'number') {
            totalHeight += iHeight;
        }
    }

    return totalHeight;
}

//now we set the max height of the picture of st thomas to not exceed the text in the intro

let newHeight = getTotalHeight().toString() + "px";
document.getElementById('right-img-1').style.maxHeight = newHeight;

// 2. ACCESSIBILITY MENU

const accessibilityPopUp = document.getElementById('accessibility-pop-up');
const accessibilityButton = document.getElementById('accessibility-button');
const closeAccessibilityPopUp = document.getElementById('close-accessibility-pop-up');

// Trigger and close pop-up
accessibilityButton.addEventListener('click', function() {
    accessibilityPopUp.style.display = "block";
})

closeAccessibilityPopUp.addEventListener('click', function() {
    accessibilityPopUp.style.display = "none";
})

// store the default state of the items effected
const root = document.querySelector(':root');
const jumpButton = document.getElementById('jump-button');
var contrast = false;
var largeFont = false;
var sansSerif = false;

// Toggle high contrast
// To fix: Currently if a the css prefers-contrast @media query is triggered, this will still assume contrast is off on page load
document.getElementById('high-contrast').addEventListener('click', function() {
    if (contrast == false) {
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--main-color', 'rgb(102, 10, 30)');
        root.style.setProperty('--highlight-color', 'rgb(102, 10, 30)');
        contrast = true;
    } else if (contrast == true) {
        root.style.setProperty('--background-color', 'rgba(255, 245, 245, 1)');
        root.style.setProperty('--main-color', '#cf2946');
        root.style.setProperty('--highlight-color', '#f37f9c');
        contrast = false;
    }
})

// Toggle large font size

document.getElementById('font-size').addEventListener('click', function() {
    if (largeFont == false) {
        root.style.setProperty('font-size', '32px');
        document.getElementById('header').style.height = "70px";
        jumpButton.style.fontSize = "32px";
        largeFont = true;
    } else if (largeFont == true) {
        root.style.setProperty('font-size', '16px');
        document.getElementById('header').style.height = "50px";
        jumpButton.style.fontSize = "16px";
        largeFont = false;
    }
})

// Toggle sans-serif font

document.getElementById('sans-serif').addEventListener('click', function() {
    if (sansSerif == false) {
        root.style.setProperty('font-family', 'Arial, Helvetica, sans-serif');
        sansSerif = true;
    } else if (sansSerif == true) {
        root.style.setProperty('font-family', '"Sorts Mill Goudy", serif');
        sansSerif = false;
    }
})

// 3. SCROLL-TO-TOP BUTTON
// largely copied off w3schools

const scrollButton = document.getElementById('scroll-to-top');

// make visible only when user scrolls down
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// function on click - scroll to top
scrollButton.addEventListener('click', function() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Everything else
})

// 4. MISCELLANEA

// Change jumpButton bgcolor when link within it is in focus
const jumpButtonLink = document.getElementById('jump-button-link');
jumpButtonLink.addEventListener('focus', function() {
    jumpButton.style.backgroundColor = 'var(--main-color)';
})
jumpButtonLink.addEventListener('blur', function() {
    jumpButton.style.backgroundColor = 'var(--highlight-color)';
})