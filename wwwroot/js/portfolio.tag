﻿<portfolio>
  <div class="container row" id="Portfolio">
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
  <div class="container row">
    <div >      
      <h2 class="center-align">Projects on <a href="https://github.com/kubawich">my GitHub</a></h2>
      <h1 id="repos" class="center-align" style="font-weight:500;">Fetching Data</h1>
    </div>
  </div>
  <div class="container row">
    <div class="col s12">
      <h2 class="center-align">Contact</h2>
      <div id="img_links" class="center-align">        
        <a href="https://twitter.com/KubaWichlinski" target="_blank">
          <img src="/fonts/twitter.png" width="55" height="55"></img>
        </a>
        <a href="http://www.linkedin.com/in/jakubwichlinski" target="_blank">
          <img src="/fonts/linkedin.svg" width="55" height="55"></img>
        </a>
        <a href="https://github.com/kubawich" target="_blank">
          <img src="/fonts/git.svg" width="55" height="55"></img>
        </a>
        <a href="https://www.youtube.com/channel/UC8ojD7gMlvd54-YGf2fR3Ag?view_as=subscriber" target="_blank">
          <img src="/fonts/yt.png" width="55" height="55"></img>
        </a>
      </div>
      <h5 class="center-align">
        Here's <a href="https://jakub.wichlinski.pl/cv">my CV</a> where You can find my contact data.
      </h5>
      <h5 class="center-align">
       If You prefer other method, You can contact me through <a href="http://nsfwpics.pw/aditional/contact">this form</a> on one of my websites.
      </h5>
    </div>
  </div>
  <div class="container row">
    <h2 class="center-align" style="font-weight:600;">Latest projects</h2>
    <br></br>
    <figure class="full-width parallax">
    </figure>    
    <h2 class="center-align">NSFWpics.pw</h2>
    <br />
    <h5 class="story">
      <a href="http://nsfwpics.pw">NSFWpics</a> is my first web project. I got idea for porn imageboard when I wrote web crawler which downloads +18 photos from internet.
      Finishing coding it took me 1.5 months, and this time includes, server scripting, automation scripts, learning API, REST, Razor, ASP.NET, routing and dynamic content generation, and mostly frontend technologies.
      <p>Stack I used for this project:</p>
      <ul style="list-style-image: url('../fonts/chevron.svg'); line-height:2.8rem;" class="col s12 m8 offset-m3">
        <li>ASP.NET core 2.0 Razor</li>
        <li>Vanila JS, VUE, RiotJS</li>
        <li>CSS, materialize, Roboto</li>
        <li>Ubuntu 16.4, NGinx, Python 2.7, Bash</li>
        <li>Git</li>
      </ul>
    </h5>
  </div>



  <style>
    .showcase{width:100% !important;}
    #img_links>a{
      margin:20px;
      }
  </style>
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