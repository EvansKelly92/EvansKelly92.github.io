var pageNo = 1;
var bgChange = document.getElementById('body');

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

document.addEventListener("keyup", e => {
    const k = e.key;
    if (k == "ArrowRight" || k == "ArrowUp" || k == " " || k == "d" || k == "w")
    {
        next();
    }
    else if (k == "ArrowLeft" || k == "ArrowDown" || k == "Backspace" || k == "a" || k == "s")
    {
        prev();
    }
 });


function next() {
    pageNo++;
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
    window.scrollTo(0, 0);
    if ((pageNo == 56) || (pageNo == 70))
    {
        spookMode();
    }
 
    orbs();
}

function prev() {
    pageNo--;

    if (pageNo < 1){
        pageNo = 1;
    }
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
    window.scrollTo(0, 0);

    if ((pageNo == 55) || (pageNo == 69))
    {
        spookMode();
    }
}

function end() {
    pageNo--;
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
}

function spookMode() {
    if ((pageNo == 56) || (pageNo == 69))
    {
        bgChange.classList.remove("normal");
        bgChange.classList.add("carcosa");
    }
    else 
    {
        bgChange.classList.remove("carcosa");
        bgChange.classList.add("normal");
    }
}

function orbs() 
{
    let myImage = document.getElementById("orb");
myImage.setAttribute("src", 'fire_orb.png');
context.drawImage(myImage, 10, 10);
}
