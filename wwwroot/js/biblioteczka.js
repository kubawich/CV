//BOT
function add() {
    for (var i = 1; i <= 7; i++) {
        iterrate(i);
}

function iterrate(i) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                let response = JSON.parse(this.responseText)
                let title = response.items[0].volumeInfo.title.toString().replace(/\s/g, '');                
                let author = response.items[0].volumeInfo.authors[0].toString().replace(/\s/g, '');
                let date = response.items[0].volumeInfo.publishedDate.toString().replace(/\s/g, '');
                let pages = response.items[0].volumeInfo.pageCount.toString().replace(/\s/g, '');
                console.log(title, author, date, pages);
                sendtoDB(title, author, date, pages)
            }
        }
    };

    xmlhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=apache&maxResults=1&startIndex=${i+20}&printType=books&key=AIzaSyCZFu9F5AQBRhztVvsOBglOep0FlSU7-Fo`, true);
    xmlhttp.send();
    }
}

function sendtoDB(title, author, year, pages) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                console.log("added");
            }
        }
    };

    xmlhttp.open("GET", `http://localhost:51195/api/library/api/library/${title}/${author}/${year}/${pages}`, true);
    xmlhttp.send();
}

//Add book

function fetchForm() {
    let name = document.getElementById('nm').value;
    let author = document.getElementById('aut').value;
    let year = document.getElementById('rl').value;
    let pages = document.getElementById('pgs').value;

    sendtoDB(name, author, year, pages);
}