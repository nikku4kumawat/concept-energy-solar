const header=document.getElementById("header");
const progress=document.getElementById("progressBar");
const backTop=document.getElementById("backTop");
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("mainNav");

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>20);
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(h>0?(window.scrollY/h)*100:0)+"%";
  backTop.classList.toggle("show",window.scrollY>650);
  document.querySelectorAll("section[id]").forEach(sec=>{
    const top=sec.offsetTop-120,bottom=top+sec.offsetHeight;
    const link=document.querySelector('.main-nav a[href="#'+sec.id+'"]');
    if(link && window.scrollY>=top && window.scrollY<bottom){
      document.querySelectorAll(".main-nav>a").forEach(a=>a.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelectorAll(".nav-dropdown>a").forEach(a=>{
  a.addEventListener("click",e=>{
    if(window.innerWidth<=860){e.preventDefault();a.parentElement.classList.toggle("open")}
  });
});
backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach((el,i)=>{el.style.transitionDelay=Math.min((i%6)*60,300)+"ms";observer.observe(el)});

document.getElementById("year").textContent=new Date().getFullYear();

const form=document.getElementById("estimateForm");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const success=document.getElementById("formSuccess");
  success.classList.add("show");
  form.reset();
  setTimeout(()=>success.classList.remove("show"),7000);
});
