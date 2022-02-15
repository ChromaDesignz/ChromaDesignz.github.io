//preloader

$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
});

//navbar

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn')


menuBtn.onclick = function () {
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains("active")?"hidden":"";
}
closeBtn.onclick = function () {
    menu.classList.remove('active');
    document.body.style.overflow = menu.classList.contains("active")?"hidden":"";
}

//Navbar Close While Click On Nav Links
const navlinks = document.querySelectorAll('.menu ul li a')
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click" , function() {
    menu.classList.remove("active");
    document.body.style.overflow = menu.classList.contains("active")?"hidden":"";
  });
}







const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value =="") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function validation()
{
    var email = document.getElementById("email").value
    ;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
        form.classList.add("valid")
        form.classList.remove("invalid")
    }
    else
    {
        form.classList.remove("valid")
        form.classList.add("invalid")
    }
}