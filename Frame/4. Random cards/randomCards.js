/*
 * @Author: Innis
 * @Description: 
 * @Date: 2022-05-30 11:19:49
 * @LastEditTime: 2022-05-31 22:12:18
 * @FilePath: \0522P-kk,lennon FDD project\Frame\4. Random cards\randomCards.js
 */

let container = document.getElementById("random-card-container")
let btn = document.getElementById("btn")

var img1, img2, img3, img4, img5, middleELe;
if (container) {
    let imgs = container.children;
    img1 = imgs[0];
    img2 = imgs[1];
    img3 = imgs[2];
    img4 = imgs[3];
    img5 = imgs[4];

    middleELe = imgs[2];
}
window.onload = function () {
    move(img3).scale(1.5, 1.5).end();
    // move(img1).y(random()).end();
    // move(img2).y(random()).end();
    // move(img4).y(random()).end();
    // move(img5).y(random()).end();
}

let positionDict = {
    "1": "0px",
    "2": "230px",
    "3": "485px",
    "4": "740px",
    "5": "970px"
}

if (container) {
    list = [img1, img2, img3, img4, img5];
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        element.onclick = function () {
            if (this == middleELe) {
                return false;
            }

            //side to middle
            move(element)
                .set("left", positionDict["3"])
                .scale(1.5, 1.5)
                .end();

            //middle to side
            let post = element.getAttribute("position")
            move(middleELe)
                .set("left", positionDict[post])
                .scale(1, 1)
                .y(random())
                .end();

            element.setAttribute("position", "3")
            middleELe.setAttribute("position", post)

            middleELe = element;
        }
    }
}




function random(min = 0, max = 150) {
    let random = Math.floor(Math.random() * (max - min)) + min
    if (Math.random() < 0.5) {
        return -1 * random;
    }
    return random;

}
