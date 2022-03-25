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

document.getElementById('high-contrast').addEventListener('click', function() {
    if (contrast == false) {
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--main-color', '#a13');
        root.style.setProperty('--highlight-color', '#a13');
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