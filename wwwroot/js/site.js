let container = document.getElementById('content');

function Change(section) {
    if (section == `About`) {
        container.innerHTML = null;
        let about = document.createElement('about');
        container.appendChild(about);
        riot.mount(about, 'about');
    }
    else if (section == `Portfolio`) {
        container.innerHTML = null;
        let portfolio = document.createElement('portfolio');
        container.appendChild(portfolio);
        riot.mount(portfolio, 'portfolio');
    }
    else if (section == `Blog`) {
        container.innerHTML = null;
        let blog = document.createElement('blog');
        container.appendChild(blog);
        riot.mount(blog, 'blog');
    }
}
