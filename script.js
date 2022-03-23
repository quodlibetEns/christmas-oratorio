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