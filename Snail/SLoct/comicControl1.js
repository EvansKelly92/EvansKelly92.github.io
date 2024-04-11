var pageNo = 1;
var bgChange = document.getElementById('body');

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
}

function prev() {
    pageNo--;

    if (pageNo < 1){
        pageNo = 1;
    }
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
    window.scrollTo(0, 0);
}

function end() {
    pageNo--;
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
}

function spookMode() {
    if (pageNo >= 25 && pageNo <= 39)
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
