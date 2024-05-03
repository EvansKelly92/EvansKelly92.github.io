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
 
    backgroundChange();
}

function prev() {
    pageNo--;

    if (pageNo < 1){
        pageNo = 1;
    }
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
    window.scrollTo(0, 0);

    backgroundChange();
}

function end() {
    pageNo--;
    document.getElementById("page").src = 'PagesR1/' + pageNo + '.png';
}

function backgroundChange ()
{
    switch (pageNo) {
        case 55:
            bgChange.classList.remove("carcosa");
            bgChange.classList.add("normal");
            break;
        
        case 56: 
            bgChange.classList.remove("normal");
            bgChange.classList.add("carcosa"); 
            break;

        case 69: 
            bgChange.classList.remove("normal");
            bgChange.classList.add("carcosa"); 
            break;

        case 70:
            bgChange.classList.remove("carcosa");
            bgChange.classList.add("normal");
            break;

        case 76:
            bgChange.classList.remove("sploosh");
            bgChange.classList.add("normal"); 
            break;

        case 77:
            bgChange.classList.remove("normal");
            bgChange.classList.add("sploosh"); 
            break;

        case 78:
            bgChange.classList.remove("sploosh");
            bgChange.classList.add("normal"); 
            break;

        default: break;
    }
}
