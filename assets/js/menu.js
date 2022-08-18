export function menu(){
    class MobileNavbar {
        constructor(mobileMenu, navList, navLinks, navLinks2){
            this.mobileMenu= document.querySelector (mobileMenu);
            this.navList= document.querySelector(navList);
            this.navLinks=document.querySelector(navLinks);
            this.navLinks2=document.querySelector(navLinks2);
            this.activeClass = "active";
            this.handleClick= this.handleClick.bind(this);
        
        
        }
        
animateLinks(){
    
this.navLinks.forEach((link, index)=> {
    link.style.animation
    ? (link.style.animation = "")
    : (link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
    }s`);
}); 
    
 }
  
 handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
 }

 addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks2.forEach((item)=>{
        item.addEventListener("click,this.handleClick");
    });
 }

 init(){
    if (this.mobileMenu){
        this.addClickEvent();
    }
    return this;
 }
}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    ".nav-list li a"
);
mobileNavbar.init();
}