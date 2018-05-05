
//BOT
function add() {
    for (var i = 1; i <= 7; i++) {
        iterrate(i);
    }
    
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


function sendtoDB(title, author, year, pages) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                console.log("added");
                let respond = document.getElementById('respond');
                respond.innerHTML = null;
                respond.innerHTML = `<h4>Pomyślnie dodano książkę do bazy i zaktualizowano listę na stronie</h4>`;
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

    if (name != null && author != null && year != null && pages != null) {
        sendtoDB(name, author, year, pages);
        setTimeout(function () {
            GetAll();    
        }, 2000);
    } else document.getElementById('respond').innerHTML = `<h4>Proszę uzupełnić wszytskie pola</h4>`
    
}

//Look for book

function lookForBook() {
    let result = document.getElementById('result');
    let result2 = document.getElementById('result2');
    let query_input = document.getElementById('look_title').value;

    if (document.getElementById('radio_title').checked == true) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    let res = JSON.parse(xmlhttp.responseText);
                    result.value = `Tytuł: ${res.title}  Autor: ${res.author}`;
                    result2.value = `Rok wydania: ${res.year} Strony: ${res.pages}`;
                }
            }
        };
        xmlhttp.open("GET", `http://localhost:51195/api/library/api/library/get/${1}/${query_input}`, true);
        xmlhttp.send();
    }
    else if (document.getElementById('radio_author').checked == true) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    let res = JSON.parse(xmlhttp.responseText);
                    result.value = `Tytuł: ${res.title}  Autor: ${res.author}`;
                    result2.value = `Rok wydania: ${res.year} Strony: ${res.pages}`;
                }
            }
        };
        xmlhttp.open("GET", `http://localhost:51195/api/library/api/library/get/${2}/${query_input}`, true);
        xmlhttp.send();
    }
    else if (document.getElementById('radio_year').checked == true) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    let res = JSON.parse(xmlhttp.responseText);
                    result.value = `Tytuł: ${res.title}  Autor: ${res.author}`;
                    result2.value = `Rok wydania: ${res.year} Strony: ${res.pages}`;
                }
            }
        };
        xmlhttp.open("GET", `http://localhost:51195/api/library/api/library/get/${3}/${query_input}`, true);
        xmlhttp.send();
    }
    else if (document.getElementById('radio_pages').checked == true) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    let res = JSON.parse(xmlhttp.responseText);
                    result.value = `Tytuł: ${res.title}  Autor: ${res.author}`;
                    result2.value = `Rok wydania: ${res.year} Strony: ${res.pages}`;
                }
            }
        };
        xmlhttp.open("GET", `http://localhost:51195/api/library/api/library/get/${4}/${query_input}`, true);
        xmlhttp.send();
    }
}


//Get all books
function GetAll() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                let x = JSON.parse(xmlhttp.responseText);
                PutToTable(Object.keys(x).length, x);                
            }
        }
    };
    xmlhttp.open("GET", 'http://localhost:51195/api/library/api/library/get/library', true);
    xmlhttp.send();
}
window.onload = GetAll

function PutToTable(max, x) {
    //Create structure
    for (var i = 0; i < max; i++) {
        let tr = document.createElement('tr');
        document.getElementById('database').appendChild(tr);
        for (var j = 0; j < 4; j++) {
            let td = document.createElement('td');
            document.getElementsByTagName('tr')[i+1].appendChild(td)
        }
    }
    //Fill table
    let rows = document.getElementById("database").getElementsByTagName("tr");
    for (var z = 1; z < max; z++) {
        rows[z].childNodes[0].innerText = `${x[z].title}`;
        rows[z].childNodes[1].innerText = `${x[z].author}`;
        rows[z].childNodes[2].innerText = `${x[z].year}`;
        rows[z].childNodes[3].innerText = `${x[z].pages}`;
    }
}

