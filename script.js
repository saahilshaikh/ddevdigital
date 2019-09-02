/** loader **/
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});

/** NAVIGATION **/

var hamburger=document.querySelector(".hamburger");
var fullMenu=document.querySelector(".full-menu");
var getInTouch=document.querySelector(".get-in-touch a");

var ln=document.querySelector(".full-menu-context-social .ln");
var ig=document.querySelector(".full-menu-context-social .ig");
var fb=document.querySelector(".full-menu-context-social .fb");
var tw=document.querySelector(".full-menu-context-social .tw");

var audio1 = new Audio('hamburger.wav');
var audio2=new Audio('getintouch.wav');

hamburger.addEventListener("click",openFullMenu);

getInTouch.addEventListener("click",getIntouch);
getInTouch.addEventListener("mouseover",getIntouchMO);

document.querySelector(".full-menu-context-main ul").addEventListener("click",closeMenu);

ln.addEventListener("click",socialPop);
ln.addEventListener("mouseover",socialPop);
ig.addEventListener("click",socialPop);
ig.addEventListener("mouseover",socialPop);
fb.addEventListener("click",socialPop);
fb.addEventListener("mouseover",socialPop);
tw.addEventListener("click",socialPop);
tw.addEventListener("mouseover",socialPop);

document.querySelector(".container").addEventListener("scroll",ProgressPos);

function ProgressPos(){
  var pos=document.querySelector(".container").scrollTop;
  var limit=document.querySelector(".container").scrollHeight-document.querySelector(".container").clientHeight;
  var progress=Math.round((pos/limit)*100);
  if(progress>10){
    document.querySelector(".progress-bar").style.width=progress+"%";
  }
  else{
    document.querySelector(".progress-bar").style.width="0%";
  }
}

function openFullMenu(){
    hamburger.classList.toggle("open");
    fullMenu.classList.toggle("full-menu-open");
    document.querySelector(".navbar").classList.toggle("nav-trans");
    document.querySelector(".main-menu").classList.toggle("disable-main-menu");
    document.querySelector(".company-logo").classList.toggle("disable-company-logo");
    audio1.play();
}

function closeMenu(){
  hamburger.classList.toggle("open");
  fullMenu.classList.toggle("full-menu-open");
  document.querySelector(".navbar").classList.toggle("nav-trans");
  document.querySelector(".main-menu").classList.toggle("disable-main-menu");
  document.querySelector(".company-logo").classList.toggle("disable-company-logo");
  audio1.play();
}

function getIntouch(){
    audio1.play();
    closeMenu();
}

function getIntouchMO(){
  audio2.play();
}

function socialPop(){
    audio1.play();
}



/** BANNER **/

class TypeWriter {
    constructor(txtElement, words, wait) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<h1 class="txt">${this.txt}</h1>`;
  
      // Initial Type Speed
      let typeSpeed = 150;
  
      if(this.isDeleting) {
        typeSpeed /= 3;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed =200;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  /**WHY **/
  var header = document.querySelector(".slider-main");
  var btns = header.getElementsByClassName("slider-main-items");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click",currentClick);
}
  function currentClick(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  }

  document.querySelector(".slide-item-1").addEventListener("click",change1);
  function change1(){
    document.querySelector(".slider-sub h1").innerHTML="Cost Effective Web Development";
    document.querySelector(".slider-sub h2").innerHTML="With the best web design company in India like Intlum, forget about any hassle with your web development programs. We have developers with expertise in various technologies like WordPress, Magento, Custom PHP and much more at the most affordable price.";
  }
  document.querySelector(".slide-item-2").addEventListener("click",change2);
  function change2(){
    document.querySelector(".slider-sub h1").innerHTML="Talented Team";
    document.querySelector(".slider-sub h2").innerHTML="Our team of talented individuals come from different fields and possess different expertise in terms of UI-UX design, coding, web analysis, app development, project management, and conversion optimization.";
  }
  document.querySelector(".slide-item-3").addEventListener("click",change3);
  function change3(){
    document.querySelector(".slider-sub h1").innerHTML="Free Consultation And Guidance";
    document.querySelector(".slider-sub h2").innerHTML="No matter what query you have in your mind, we are there with all the solutions. Our free website consultation and guidance will take your website and business to the height you have always aimed at.";
  }
  document.querySelector(".slide-item-4").addEventListener("click",change4);
  function change4(){
    document.querySelector(".slider-sub h1").innerHTML="SEO Friendly Websites";
    document.querySelector(".slider-sub h2").innerHTML="Being the leading digital marketing agency in Kolkata, we understand Google algorithms better than anyone else. If you want to have a website that dominates the search engine results, we are here to build the most SEO friendly website that drives traffic.";
  }
  document.querySelector(".slide-item-5").addEventListener("click",change5);
  function change5(){
    document.querySelector(".slider-sub h1").innerHTML="Custom Development";
    document.querySelector(".slider-sub h2").innerHTML="We respect your creativity and that’s why our custom development will always help you convert your unique ideas into a dynamic website. From the website redesign to custom development, we serve all.";
  }
  document.querySelector(".slide-item-6").addEventListener("click",change6);
  function change6(){
    document.querySelector(".slider-sub h1").innerHTML="UI-UX That Converts";
    document.querySelector(".slider-sub h2").innerHTML="We craft website designs that pay a lot of attention to the user experience and conversion. The perfectly crafted User Interface and User Experience are something that help keeping the audience engaged and love any particular website.";
  }
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

  /** CONTACT-FORM **/

  function validateFormOnSubmit(contact) {
    var error=0;
    error += validateName(contact.name);
    error += validateEmail(contact.email);
    error += validatePhone(contact.phone);
    error += validateMessage(contact.message);
    console.log(error);
    if (error > 0) {
      console.log("failedSUBMIT");
        return false;
    }
    else {
      console.log("SUBMIT");
        return true;
    }
}

// validate required fields
function validateName(name) {
  var error=0;
    if (name.value.length == 0) {
        name.style.outline = "2px solid #ff9f9f";
        document.getElementById('name-error').innerHTML = "The required field has not been filled in";
        error = error + 1;
    } else {
        name.style.outline = '0';
        document.getElementById('name-error').innerHTML = '';
    }
    return error;
}

// validate email as required field and format
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
  var error=0;
    var temail = trim(email.value); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.outline = "2px solid #ff9f9f";
        document.getElementById('email-error').innerHTML = "Please enter an email address.";
        error = error + 1;
    } else if (!emailFilter.test(temail)) { //test email for illegal characters
        email.style.outline = "2px solid #ff9f9f";
        document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
        error = error + 1;
    } else if (email.value.match(illegalChars)) {
        email.style.outline = "2px solid #ff9f9f";
        error = error + 1;
        document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
    } else {
        email.style.outline = '0';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}

// validate phone for required and format
function validatePhone(phone) {
    var error = "0";
    var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "Please enter a phone number";
        phone.style.outline = "2px solid #ff9f9f";
        error = error + 1;
    } else if (isNaN(parseInt(stripped))) {
      error = error + 1;
        document.getElementById('phone-error').innerHTML = "The phone number contains illegal characters.";
        phone.style.outline = "2px solid #ff9f9f";
    } else if (stripped.length < 10) {
      error = error + 1;
        document.getElementById('phone-error').innerHTML = "The phone number is too short.";
        phone.style.outline = "2px solid #ff9f9f";
    } else {
        phone.style.outline = '0';
        document.getElementById('phone-error').innerHTML = '';
    }
    return error;
}

function validateMessage(message) {
  var error=0;
    if (message.value.length == 0) {
        message.style.outline = "2px solid #ff9f9f";
        document.getElementById('message-error').innerHTML = "The required field has not been filled in";
        error = error + 1;
    } else {
      message.style.outline = '0';
      document.getElementById('message-error').innerHTML = '';
    }
    return error;
}