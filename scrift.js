const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = window.scrollY;
const offset = section.offsetTop - 300;
const height = section.offsetHeight;

if(top >= offset && top < offset + height){
section.classList.add("show");
}

});

});
// SECTION REVEAL

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", reveal);

function reveal(){

sections.forEach(section=>{

const revealTop = section.getBoundingClientRect().top;
const revealPoint = 150;

if(revealTop < window.innerHeight - revealPoint){
section.classList.add("show");
}

});

}

reveal();


// CARD REVEAL

const cards = document.querySelectorAll(
'.card, .project-card, .internship-card'
);

window.addEventListener("scroll", ()=>{

cards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){
card.classList.add("show");
}

});

});


// CURSOR WATERMARK

const watermark =
document.getElementById("cursor-watermark");

document.addEventListener("mousemove",(e)=>{

watermark.style.left = e.clientX + "px";
watermark.style.top = e.clientY + "px";

});
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
},{
    threshold:0.2
});

const hiddenElements = document.querySelectorAll(
".hidden, .card, .project-card, .internship-card"
);

hiddenElements.forEach((el)=>{
    observer.observe(el);
});
document.addEventListener("mousemove",(e)=>{
    document.querySelector(".waves").style.transform =
    `translateX(${e.clientX * 0.01}px)`;
});
let isScrolling = false;

window.addEventListener("wheel", function(e){

    if(isScrolling) return;

    isScrolling = true;

    let sections = document.querySelectorAll("section");
    let current = 0;

    sections.forEach((section,index)=>{
        const rect = section.getBoundingClientRect();

        if(rect.top <= 100 && rect.bottom >= 100){
            current = index;
        }
    });

    if(e.deltaY > 0 && current < sections.length-1){
        sections[current+1].scrollIntoView({
            behavior:"smooth"
        });
    }

    if(e.deltaY < 0 && current > 0){
        sections[current-1].scrollIntoView({
            behavior:"smooth"
        });
    }

    setTimeout(()=>{
        isScrolling = false;
    },800);

});
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    observer.observe(sec);
});