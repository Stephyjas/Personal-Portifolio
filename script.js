/* ==================================
   JASHLIN PORTFOLIO SCRIPT
   DARK GREY + PURPLE ANIMATIONS
   ================================== */


// Loader

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        setTimeout(()=>{

            loader.style.display="none";

        },800);

    }

});





// Navbar scroll effect

const nav=document.querySelector("nav");


window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        nav.classList.add("sticky");

    }

    else{

        nav.classList.remove("sticky");

    }

});







// Smooth scrolling

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        document.querySelector(
            link.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });


    });


});








// Typing Animation

const typing = document.getElementById("typing");


const words = [

    "Artificial Intelligence Student",

    "Data Science Enthusiast",

    "Software Developer",

    "Python Programmer",

    "AI Professional"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;



function typeEffect(){


    let current = words[wordIndex];


    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

    }



    if(charIndex === current.length){

        deleting = true;

        setTimeout(typeEffect,1000);

        return;

    }



    if(charIndex === 0 && deleting){

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

    }



    setTimeout(

        typeEffect,

        deleting ? 70 : 140

    );


}



// Cursor Animation

const cursor = document.createElement("span");

cursor.textContent = "|";

cursor.classList.add("typing-cursor");


if(typing){

    typing.appendChild(cursor);

    typeEffect();

}


// Scroll Reveal Animation


const reveals=document.querySelectorAll(".reveal");


function revealOnScroll(){


    reveals.forEach(item=>{


        let top=
        item.getBoundingClientRect().top;


        if(top < window.innerHeight-100){


            item.classList.add("show");


        }


    });


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();








// Create Background Particles


const particles=document.querySelector(".particles");


if(particles){


for(let i=0;i<70;i++){


    let dot=document.createElement("span");


    dot.style.left=
    Math.random()*100+"%";


    dot.style.animationDelay=
    Math.random()*5+"s";


    dot.style.animationDuration=
    (5+Math.random()*8)+"s";


    particles.appendChild(dot);


}

}








// Skill Logo Animation


const skillCards=
document.querySelectorAll(".skill-card");


skillCards.forEach(card=>{


    card.addEventListener(
        "mouseenter",
        ()=>{

            card.style.transform=
            "translateY(-10px) scale(1.05)";

        }
    );


    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform=
            "translateY(0) scale(1)";

        }
    );


});








// Project 3D Hover Effect


const projects=
document.querySelectorAll(".project-card");


projects.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let x=e.offsetX;

let y=e.offsetY;


let rotateX=
-(y-card.clientHeight/2)/15;


let rotateY=
(x-card.clientWidth/2)/15;



card.style.transform=
`
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform=
"rotateX(0) rotateY(0) scale(1)";


});


});








// Scroll Top Button


const topBtn=
document.querySelector(".top-btn");


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>400){


topBtn.classList.add("show");


}

else{


topBtn.classList.remove("show");


}


});




if(topBtn){


topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};


}







console.log(
"Jashlin Portfolio Loaded Successfully 🚀"
);
/*==============================
        RESUME ANIMATION
==============================*/

// Floating Animation
const resume = document.querySelector(".resume-container");

window.addEventListener("mousemove", (e) => {

    if (!resume) return;

    const x = (window.innerWidth / 2 - e.pageX) / 45;
    const y = (window.innerHeight / 2 - e.pageY) / 45;

    resume.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave", () => {

    if (!resume) return;

    resume.style.transform =
        "rotateX(0deg) rotateY(0deg)";

});

/*==============================
      Reveal Animation
==============================*/

const resumeCards = document.querySelectorAll(".resume-box");

const resumeObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("resume-show");

        }

    });

}, {

    threshold: .2

});

resumeCards.forEach(card => {

    resumeObserver.observe(card);

});
function toggleMenu(){
    let menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}
/* CLOSE MOBILE MENU AFTER CLICK */

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        if (menuBtn) {
            menuBtn.classList.remove("active");
        }

    });

});
// MOBILE MENU TOGGLE

function toggleMenu(){

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// CLOSE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click",()=>{

        document.getElementById("navMenu")
        .classList.remove("active");

    });

});