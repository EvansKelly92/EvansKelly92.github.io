var pageNo = 1;

function next() {
    pageNo++;
    document.getElementById("page").src = 'Pages/' + pageNo + '.png';
    window.scrollTo(0, 0);
}

function prev() {
    pageNo--;

    if (pageNo < 1){
        pageNo = 1;
    }
    document.getElementById("page").src = 'Pages/' + pageNo + '.png';
    window.scrollTo(0, 0);
}

