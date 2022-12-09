
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

var loadPage;

function loading() {
    loadPage = setTimeout(displayPage, 2100);
}


function displayPage() {
    document.getElementById("page-loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}


window.onscroll = function() {fixNav()};

var navBar = document.getElementById("nav");
var fixed = nav.offsetTop;

function fixNav() {
    if (window.pageYOffset >= fixed) {
        nav.classList.add("fixed")
    } else {
        navBar.classList.remove("fixed")
    }
}

$(document).ready(function() {
    $("img-card").on('click', function(event) {
        if (this.has !== "") {
            event.preventDefault();

            var has = this.hash

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            })
        }
    })
})

var videoOne = document.getElementById("SDFVideo");

function interact() {
    if (SDFVideo.paused)
    SDFVideo.play();
 else SDFVideo.pause();
}

function loop() {
    videoOne.loop = true;
}