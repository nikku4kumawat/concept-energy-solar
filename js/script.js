/* CONCEPT RAYS ENERGY — COMMON COMPONENTS + INTERACTIONS */
const path=location.pathname.split('/').pop()||'index.html';
const isHome=path===''||path==='index.html';
const pageHref=(file,hash='')=>isHome ? `${file}${hash?'#'+hash:''}` : `${file}${hash?'#'+hash:''}`;
const servicePages=[
 ['Residential Rooftop EPC','residential-rooftop-epc.html'],['Industrial Rooftop EPC','industrial-rooftop-epc.html'],['Ground Mount Solar','ground-mount-solar.html'],['Grid Connected Solar','grid-connected-solar.html'],['PPA Work','ppa-solar.html'],['PM-KUSUM Projects','pm-kusum.html'],['O&M Services','solar-om.html'],['Solar Investment','solar-investment.html']
];
const industryPages=[
 ['Residential','residential-industry.html'],['Hotels & Resorts','hotel-industry.html'],['Commercial Buildings','commercial-industry.html'],['Industries & Factories','factory-industry.html'],['Schools & Colleges','education-industry.html'],['Hospitals','hospital-industry.html'],['PGs & Hostels','pg-hostel-industry.html'],['Agriculture & Farms','agriculture-industry.html'],['Gardens & Outdoor Spaces','garden-industry.html'],['Shops & Showrooms','retail-industry.html']
];
function renderCommonLayout(){
 if(!document.getElementById('progressBar')) document.body.insertAdjacentHTML('afterbegin','<div class="progress-bar" id="progressBar"></div>');
 const serviceLinks=servicePages.map(([n,u])=>`<a href="${u}">${n}</a>`).join('');
 const industryLinks=industryPages.map(([n,u])=>`<a href="${u}">${n}</a>`).join('');
 const header=`<header class="site-header" id="header"><div class="container nav-wrap">
 <a class="brand" href="index.html#home"><img src="assets/images/concept-rays-energy-logo.png" alt="Concept Rays Energy Pvt Ltd logo"></a>
 <button class="menu-toggle" id="menuToggle" aria-label="Open navigation"><i class="fa-solid fa-bars"></i></button>
 <nav class="main-nav" id="mainNav">
 <a data-page="home" href="index.html#home">Home</a><a data-page="about" href="about.html">About</a>
 <div class="nav-dropdown"><a href="#">Solar Solutions <i class="fa-solid fa-chevron-down"></i></a><div class="dropdown-menu">${serviceLinks}</div></div>
 <div class="nav-dropdown"><a href="#">Industries <i class="fa-solid fa-chevron-down"></i></a><div class="dropdown-menu">${industryLinks}</div></div>
 <a data-page="projects" href="projects.html">Projects</a><a data-page="process" href="our-process.html">Our Process</a><a data-page="contact" href="contact.html">Contact</a>
 <a class="nav-cta" href="contact.html#contact-form">Get Free Consultation <i class="fa-solid fa-arrow-right"></i></a></nav></div></header>`;
 document.body.insertAdjacentHTML('afterbegin',header);
 const footer=`<footer class="footer"><div class="container footer-top"><div class="footer-brand"><img src="assets/images/concept-rays-energy-logo.png" alt="Concept Rays Energy Pvt Ltd logo"><p>Concept Rays Energy Pvt Ltd is one of the leading company in Rajasthan PM KUSUM Projects.</p><p>CIN No. U35105RJ2025PTC103831</p><p>GST. 08AAMCC8410D1ZS</p><div class="socials"><a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a><a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a></div></div><div><h4>Quick Links</h4><a href="index.html">Home</a><a href="about.html">About</a><a href="projects.html">Projects</a><a href="our-process.html">Our Process</a><a href="contact.html">Contact</a></div><div><h4>Solar Solutions</h4><a href="residential-rooftop-epc.html">Rooftop EPC</a><a href="ground-mount-solar.html">Ground Mount Solar</a><a href="ppa-solar.html">PPA Work</a><a href="pm-kusum.html">PM-KUSUM Projects</a><a href="solar-om.html">O&amp;M Services</a><a href="solar-investment.html">Solar Investment</a></div><div><h4>Contact Us</h4><p><i class="fa-solid fa-phone"></i> +91 9782000121</p><p><i class="fa-solid fa-envelope"></i> cncptenergy@gmail.com</p><p><i class="fa-solid fa-location-dot"></i> Plot No. 17, Kanha Enclave,<br>Jagatpura, Jaipur - 303012</p><a class="footer-cta" href="contact.html#contact-form">Get Free Consultation</a></div></div><div class="footer-bottom"><div class="container"><span>© <span id="year"></span> Concept Rays Energy Pvt Ltd. All Rights Reserved.  Powered by <a href="https://agilesolutions.co.in/"target="_blank"> ❤️Agile Edtech Solutions Pvt. Ltd.</a></span><span>Formerly Known As Concept Energy • Future Energy</span></div></div></footer>`;
 document.body.insertAdjacentHTML('beforeend',footer);
 document.body.insertAdjacentHTML('beforeend',`<div class="floating-actions"><a class="float whatsapp" href="https://wa.me/918949639885" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><span>WhatsApp</span></a><a class="float phone" href="tel:+919782000121"><i class="fa-solid fa-phone"></i><span>Call</span></a><a class="float location" href="https://www.google.com/maps/search/?api=1&query=Plot+No.+17%2C+Kanha+Enclave%2C+Jagatpura%2C+Jaipur+303012" target="_blank" rel="noopener"><i class="fa-solid fa-location-dot"></i><span>Location</span></a></div><button class="back-top" id="backTop"><i class="fa-solid fa-arrow-up"></i></button>`);
}
renderCommonLayout();
const header=document.getElementById('header'),progress=document.getElementById('progressBar'),backTop=document.getElementById('backTop'),menuToggle=document.getElementById('menuToggle'),nav=document.getElementById('mainNav');
function scrollUI(){header.classList.toggle('scrolled',scrollY>20);const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?scrollY/h*100:0)+'%';backTop.classList.toggle('show',scrollY>650);}
addEventListener('scroll',scrollUI,{passive:true});scrollUI();
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.main-nav>a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.nav-dropdown>a').forEach(a=>a.addEventListener('click',e=>{if(innerWidth<=860){e.preventDefault();a.parentElement.classList.toggle('open')}}));
backTop?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const activeMap={about:'about.html',projects:'projects.html',process:'our-process.html',contact:'contact.html'};
Object.entries(activeMap).forEach(([k,v])=>{if(path===v)document.querySelector(`[data-page="${k}"]`)?.classList.add('active')});
if(path.includes('solar')||path==='residential-rooftop-epc.html'||path==='industrial-rooftop-epc.html'||path==='ground-mount-solar.html'||path==='grid-connected-solar.html'||path==='ppa-solar.html'||path==='pm-kusum.html') document.querySelector('.nav-dropdown:nth-of-type(1)>a')?.classList.add('active');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=Math.min(i%6*60,300)+'ms';observer.observe(el)});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('.project-large').forEach(card=>card.style.display=filter==='all'||card.dataset.type===filter?'block':'none')}));
document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const s=form.querySelector('.form-success');if(s){s.classList.add('show');form.reset();setTimeout(()=>s.classList.remove('show'),6000)}}));
