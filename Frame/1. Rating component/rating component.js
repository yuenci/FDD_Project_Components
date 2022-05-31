let raters = ["rater-1", "rater-2", "rater-3", "rater-4", "rater-5"];
//please add all  ids of raters  into list

window.onload = function () {
    for (let index = 0; index < raters.length; index++) {
        const element = document.getElementById(raters[index]);
        let list = JSON.parse(localStorage.getItem(raters[index]));
        if (element) {
            if (list) {
                element.children[5].innerHTML = calculateAvg(list);
            } else {
                element.children[5].innerHTML = "10";
            }
        }
    }
}


for (let index = 0; index < raters.length; index++) {
    const element = raters[index];
    let rater = document.getElementById(element);
    let stars = rater.children;
    for (let i = 0; i < 5; i++) {
        const ele = stars[i];
        addStarEvent(ele, raters[index], i, stars)
    }
}


function addStarEvent(obj, elementName, id, parentObj) {
    obj.addEventListener("mouseout",
        function () {
            for (let index = 0; index < 5; index++) {
                const element = parentObj[index];
                element.className = "";
                element.innerHTML = `☆`;
            }
        })

    obj.addEventListener("mouseover", function () {
        for (let index = 0; index < id + 1; index++) {
            const element = parentObj[index];
            element.className = "rate-yel-star"
            element.innerHTML = "★";
        }
    })

    obj.onclick = function () {
        let data = localStorage.getItem(elementName);
        if (data) {
            let dataList = JSON.parse(data);
            dataList.push((id + 1) * 2);
            localStorage.setItem(elementName, JSON.stringify(dataList));

            let average = calculateAvg(dataList)
            parentObj[5].innerHTML = average;

            alert(`Thanks for the rating! You are NO.${dataList.length} raters. At present, the average score of this movie is ${average}.`)
        }
        else {
            localStorage.setItem(elementName, JSON.stringify([(id + 1) * 2]))
            parentObj[5].innerHTML = (id + 1) * 2;
            alert("Thanks for the rating! You are First raters")
        }

    }
}

function calculateAvg(list) {
    let sum = 0;
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        sum += element
    }
    return Math.floor(sum / list.length);
}