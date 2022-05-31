let muscisIDsList = ["music1", "music2", "music3"]
// please add music id into above list

let musicCards = document.getElementsByClassName("music-card");
if (musicCards) {
    for (let index = 0; index < musicCards.length; index++) {
        const element = musicCards[index];
        element.onmouseover = function () {
            stopAllMusic();
            let musicELe = document.getElementById(muscisIDsList[index])
            musicELe.loop = false;
            musicELe.play();
        }

        element.onmouseout = function () {
            stopAllMusic();
        }
    }
}

function stopAllMusic() {
    for (let index = 0; index < muscisIDsList.length; index++) {
        const element = document.getElementById(muscisIDsList[index]);
        element.load();
    }
}
