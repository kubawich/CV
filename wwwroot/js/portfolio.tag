<portfolio>
  <div class="container row">
    <div class="column">      
      <h2 class="center-align">Projects on <a href="https://github.com/kubawich">my GitHub</a></h2>
      <h3 id="repos" class="center-align" style="font-weight:900;">Fetching Data</h3>
    </div>
  </div>
  <div class="container row">
    <h2 class="center-align">My skills</h2>
    <div class="bar valign-wrapper">
      <p>90%</p>
      <p>C#</p>
    </div>
    <div class="bar valign-wrapper">
      <p>70%</p>
      <p>ASP.NET core</p>
    </div>
    <div class="bar valign-wrapper">
      <p>60%</p>
      <p>Linux and DBs</p>
    </div>
    <div class="bar valign-wrapper">
      <p>80%</p>
      <p>Unity3D</p>
    </div>
    <div class="bar valign-wrapper">
      <p>50%</p>
      <p>Frontend</p>
    </div>
  </div>
    
  <script>
  let xmlhttp = new XMLHttpRequest();
  let url = "https://api.github.com/users/kubawich";
  let myArr;

  //Get data from github
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
</script>

</portfolio>