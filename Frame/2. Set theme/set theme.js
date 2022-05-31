// all the swich btn must use class name "theme-switch-btn"

let whiteFont = ["id1", "id2", "class1"];
let whiteBackgound = ["square"];
// please put id or class names into list

var theme = localStorage.getItem("themeMode");
if (!theme) {
    localStorage.setItem("themeMode", "dark");
    theme = "dark";
    changeInlineClass("dark")
} else {
    if (theme == "dark") {
        changeInlineClass("dark")
    } else {
        changeInlineClass("light")
    }
}

let switchBtns = document.getElementsByClassName("theme-switch-btn");
for (let index = 0; index < switchBtns.length; index++) {
    const element = switchBtns[index];
    element.onclick = function () {
        let themeCache = localStorage.getItem("themeMode");
        if (themeCache == "dark") {
            changeInlineClass("light");
            localStorage.setItem("themeMode", "light");
        }
        else if (themeCache == "light") {
            changeInlineClass("dark");
            localStorage.setItem("themeMode", "dark");
        }
    }
}




function changeInlineClass(mode) {
    let fontColor, bgcColor;
    if (mode == "dark") {
        fontColor = "black";
        bgcColor = "black";

        document.body.style.backgroundColor = "white";
    }
    else if (mode == "light") {
        fontColor = "white";
        bgcColor = "white";
        document.body.style.backgroundColor = "black";
    }

    for (let index = 0; index < whiteFont.length; index++) {
        const element = whiteFont[index];
        let idEle = document.getElementById(element)
        let classELe = document.getElementsByClassName(element)
        if (idEle) {
            idEle.style.color = fontColor;
            continue;
        }
        else if (classELe.length > 0) {
            for (let index = 0; index < classELe.length; index++) {
                const element = classELe[index];
                element.style.color = fontColor;
            }
        }
    }

    for (let index = 0; index < whiteBackgound.length; index++) {
        const element = whiteBackgound[index];
        let idEle = document.getElementById(element)
        let classELe = document.getElementsByClassName(element)
        if (idEle) {
            idEle.style.backgroundColor = bgcColor;
            continue;
        }
        else if (classELe.length > 0) {
            for (let index = 0; index < classELe.length; index++) {
                const element = classELe[index];
                element.style.backgroundColor = bgcColor;
            }

        }
    }
}