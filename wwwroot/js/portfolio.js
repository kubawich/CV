riot.tag2('portfolio', '<div class="container row"> <div class="column"> <h2 class="center-align">Projects on <a href="https://github.com/kubawich">my GitHub</a></h2> <h2 id="repos" class="center-align" style="font-weight:900;">Fetching Data</h2 > </div> </div> <br> <div class="chart"> <div class="bar-1"></div> <div class="bar-2"></div> <div class="bar-3"></div> <div class="bar-4"></div> <div class="bar-5"></div> <div class="bar-6"></div> </div>', '', '', function(opts) {
  let xmlhttp = new XMLHttpRequest();
  let url = "https://api.github.com/users/kubawich";
  let myArr;

  xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
  myArr = JSON.parse(this.responseText);
  let Repos = document.getElementById("repos");
  Repos.innerText = myArr.public_repos;
  console.log(myArr);
  }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
});