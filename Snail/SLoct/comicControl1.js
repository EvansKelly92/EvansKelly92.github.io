var pageNo = 1;
var bgChange = document.getElementById('body');

function next() {
    pageNo++;
    document.getElementById("page").src = 'Pages/' + pageNo + '.png';
    window.scrollTo(0, 0);
    spookMode();
}

function prev() {
    pageNo--;

    if (pageNo < 1){
        pageNo = 1;
    }
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
    window.scrollTo(0, 0);
    spookMode();
}

function end() {
    pageNo--;
    document.getElementById("page").src = 'Pages/' + pageNo + '.png';
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
