let about = document.getElementById("About").style;
let portfolio = document.getElementById("Portfolio").style;
let blog = document.getElementById("Blog").style;

portfolio.visibility = "hidden";
blog.visibility = "hidden";

function Change(section) {
    if (section == `About`) {
        about.visibility = "visible";
        portfolio.visibility = "hidden";
        blog.visibility = "hidden";
        about.height = "auto";
        portfolio.height = "0px";
        blog.height = "0px";
    }
    else if (section == `Portfolio`) {
        about.visibility = "hidden";
        portfolio.visibility = "visible";
        blog.visibility = "hidden";
        portfolio.height = "auto";
        about.height = "0px";
        blog.height = "0px";
    }
    else if (section == `Blog`) {
        about.visibility = "hidden";
        blog.visibility = "visible";
        portfolio.visibility = "hidden";
        blog.height = "auto";
        about.height = "0px";
        portfolio.height = "0px";
    }
}
