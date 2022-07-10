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

var accessibilityPopUpVisible = false; // initilaise state of popup

// Trigger and close pop-up
accessibilityButton.addEventListener('click', () => {
    if (accessibilityPopUpVisible == false) {
        accessibilityPopUp.style.setProperty('display', 'block');
        accessibilityPopUpVisible = true;
    } else {
        accessibilityPopUp.style.setProperty('display', 'none');
        accessibilityPopUpVisible = false;
    }
})

closeAccessibilityPopUp.addEventListener('click', () => {
        accessibilityPopUp.style.display = "none";
        accessibilityPopUpVisible = false;
    })

// store the default state of the items effected
const root = document.querySelector(':root');
const jumpButton = document.getElementById('jump-button');
var contrast = false;
var largeFont = false;
var sansSerif = false;

// Toggle high contrast
// To fix: Currently if a the css prefers-contrast @media query is triggered, this will still assume contrast is off on page load
document.getElementById('high-contrast').addEventListener('click', () => {
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

// Toggle sans-serif font

document.getElementById('sans-serif').addEventListener('click', () => {
    if (sansSerif == false) {
        root.style.setProperty('font-family', 'Arial, Helvetica, sans-serif');
        sansSerif = true;
    } else if (sansSerif == true) {
        root.style.setProperty('font-family', '"Sorts Mill Goudy", serif');
        sansSerif = false;
    }
})

// 3. PRIVACY BANNER

// Open or close click on privacy button, and move main content out of the way

var bannerVisible = false; // store the initial banner state

const banner = document.getElementById('privacy-banner'); //the banner to show/hide
const main = document.getElementById('main'); //the content to move

document.getElementById('privacy-button').addEventListener('click', () => {
    if (bannerVisible == false) {
        banner.style.setProperty('display', 'block');
        main.style.setProperty('margin-top', '500px');
        bannerVisible = true;
    } else {
        banner.style.setProperty('display', 'none');
        main.style.setProperty('margin-top', '0')
        bannerVisible = false;
    }
})

// 4. MISCELLANEA

// Ensure the jump-to-music link with role="button" behaves like a button
// I.e. space key needs to trigger link
document.getElementById('jump-button').addEventListener('keyup', (e) => {
    if (e.code == "Space") {
        document.getElementById('part1').scrollIntoView();
    }
})  