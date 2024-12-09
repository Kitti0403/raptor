document.getElementById("navbar").innerHTML =
` 
    <div class="header">
        <div class="nav">
            <a class="logo" href="../index.html">
                <div>
                    <img id="logo_img" alt="logo" src="../images/rawr.png">
                </div>
            </a>

             <a id="timeline" href="../pages/timeline.html"><button class="btn">
                Timeline
            </button></a>

            <a id="jurassic" href="../pages/jurassic.html"><button class="btn"> 
                Jurassic Park
            </button></a>

            <div id="clock"></div>

            <div id="myLinks">
                <a href="../pages/timeline.html">Timeline</a>
                <a href="../pages/jurassic.html">Jurassic Park</a>
            </div>
            <a href="javascript:void(0);" class="icon" onclick="bugerMenu()">
                <i class="fa-solid fa-bars"></i>
            </a>
        </div>
    </div>
`;

document.getElementById("footer").innerHTML =
`
    <p>Annus Kitti  -  Doba Sándor  -  Muzsik Csilla</p>
`
function bugerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }