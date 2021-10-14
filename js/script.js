// Initialize Firebase (ADD YOUR OWN DATA)
  var firebaseConfig = {
    apiKey: "AIzaSyAa3KBtjGOCc_DYAA-jMnAeCCm32UPpr3g",
    authDomain: "contactform-portfolio-10328.firebaseapp.com",
    projectId: "contactform-portfolio-10328",
    storageBucket: "contactform-portfolio-10328.appspot.com",
    messagingSenderId: "210845179107",
    appId: "1:210845179107:web:3e18dc37d98ef3859079d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subjecct, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      subject:subject,
      message:message
    });
  }



// ==========================================================================================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// ==============================================================================================


// ========================
//      Theme Function
// ========================

function themeFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");


    var bg=document.getElementById("intro-section").style; 
    var x=document.querySelectorAll('input[type=text]');
    
    

// ======== Logo & Icon Changing =========

    var icon = document.getElementById("icon").className;
    if(icon == "fas fa-moon")
    {
        document.getElementById("icon").className="far fa-moon";
        document.getElementById("icon").style.color="#eeeeee";
        document.getElementById("logo-img").src="img/RKM_Logo_Black_bg.svg";
        bg.backgroundImage="url(img/boat_bg_black.jpg)";

        // cards color change
        document.getElementById("card1").src="img/website-design_b.png";
        document.getElementById("card2").src="img/Development_b.png";
        document.getElementById("card3").src="img/Problem-solving_b.png";

        // placeholder color change
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "#000000";
        }
        document.querySelector('input[type=email]').style.backgroundColor = "#000000";
        document.querySelector('textarea').style.backgroundColor = "#000000";
    }
    else
    {
        document.getElementById("icon").className="fas fa-moon";
        document.getElementById("icon").style.color="#111111";
        document.getElementById("logo-img").src="img/RKM_logo.svg";
        bg.backgroundImage="url(img/boat_bg.jpg)";

        // cards color change
        document.getElementById("card1").src="img/website-design.png";
        document.getElementById("card2").src="img/Development.png";
        document.getElementById("card3").src="img/Problem-solving.png";

        // placeholder color change
        for (i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "#ffffff";
        }
        document.querySelector('input[type=email]').style.backgroundColor = "#ffffff";
        document.querySelector('textarea').style.backgroundColor = "#ffffff";
        
    }
    

 }