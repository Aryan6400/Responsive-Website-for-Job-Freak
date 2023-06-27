const home = document.getElementById("home");
const about = document.getElementById("about");
const work = document.getElementById("work");
const contact = document.getElementById("contact");

const homebtn = document.getElementById("home-btn");
const aboutbtn = document.getElementById("about-btn");
const workbtn = document.getElementById("work-btn");
const contactbtn = document.getElementById("contact-btn");

function clicked(){
    let text = this.textContent;
    if(text=="Home"){
        home.classList.remove("hidden");
        about.classList.add("hidden");
        work.classList.add("hidden");
        contact.classList.add("hidden");
    }
    if(text=="About Us"){
        home.classList.add("hidden");
        about.classList.remove("hidden");
        work.classList.add("hidden");
        contact.classList.add("hidden");
    }
    if(text=="Our Work"){
        home.classList.add("hidden");
        about.classList.add("hidden");
        work.classList.remove("hidden");
        contact.classList.add("hidden");
    }
    if(text=="Contact Us"){
        home.classList.add("hidden");
        about.classList.add("hidden");
        work.classList.add("hidden");
        contact.classList.remove("hidden");
    }
}

homebtn.addEventListener("click", clicked);
aboutbtn.addEventListener("click", clicked);
workbtn.addEventListener("click", clicked);
contactbtn.addEventListener("click", clicked);
