document.addEventListener('DOMContentLoaded', init, false);
function init() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('./sw.js').then(function (registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
}

let container = document.getElementById('content');

let xmlhttp = new XMLHttpRequest();
let url = "https://api.github.com/users/kubawich";
let myArr;

function Change(section) {

    document.querySelector('.divider').scrollIntoView({
        behavior: 'smooth',
        block: "start"
    });

    document.getElementById("top").addEventListener("click", function (event) {}, false);

    if (section === `About`) {
        container.innerHTML = null;
        let about = document.createElement('about');
        container.appendChild(about);
        riot.mount(about, 'about');
    }
    else if (section === `Portfolio`) {
        

        container.innerHTML = null;
        let portfolio = document.createElement('portfolio');
        container.appendChild(portfolio);
        riot.mount(portfolio, 'portfolio');
    }
    else if (section === `Blog`) {
        container.innerHTML = null;
        let blog = document.createElement('blog');
        container.appendChild(blog);
        riot.mount(blog, 'blog');
    }
}


