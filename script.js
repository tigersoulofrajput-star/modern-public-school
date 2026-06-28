/* ==========================
   MODERN PUBLIC SCHOOL
   SCRIPT.JS
========================== */

// Welcome Message
window.onload = function () {
    console.log("Modern Public School Website Loaded Successfully");
};

// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
});

// Reveal Animation
const reveal = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    let height = window.innerHeight;

    reveal.forEach(sec=>{

        let top = sec.getBoundingClientRect().top;

        if(top < height-100){
            sec.classList.add("active");
        }

    });

});

// Card Hover Effect
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="scale(1.05)";
card.style.transition=".4s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="scale(1)";

});

});

// Button Animation

const btn=document.querySelectorAll(".btn");

btn.forEach(button=>{

button.addEventListener("click",()=>{

alert("Admission Form Will Open Soon.");

});

});

// Scroll To Top Button

let topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.padding="12px 18px";
topBtn.style.fontSize="22px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#0b3d91";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 10px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Footer Year

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Modern Public School | All Rights Reserved.";

}

console.log("JavaScript Loaded Successfully");
