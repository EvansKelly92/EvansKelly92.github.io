var pageNo = 1;

function next() {
    pageNo++;
    document.getElementById("page").src = pageNo + '.png';
}

function prev() {
    pageNo--;
    document.getElementById("page").src = pageNo + '.png';
}

