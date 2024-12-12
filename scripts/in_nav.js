document.getElementById("in_nav").innerHTML =
` 
    <div class="header">
        <div class="nav">
            <a class="logo" href="index.html">  
                <img id="logo_img" alt="logo" src="images/rawr.png">
            </a>

             <a id="timeline" href="pages/timeline.html"><button class="btn">
                Timeline
            </button></a>

            <a id="jurassic" href="pages/jurassic.html"><button class="btn"> 
                Jurassic Park
            </button></a>

            <div id="clock"></div>


            <div class="dropdown" onclick="bugerMenu()">
                <div class="container" onclick="myFunction(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>

                    <div id="myDropdown" class="dropdown-content">
                        <a href="pages/timeline.html">Timeline</a>
                        <a href="pages/jurassic.html">Jurassic world</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
document.getElementById("footer").innerHTML =
`
    <p>Annus Kitti  -  Doba Sándor  -  Muzsik Csilla</p>
`

  function bugerMenu() {
    document.getElementById("myDropdown").classList.toggle("slhow");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction(x) {
    x.classList.toggle("change");
  }
  