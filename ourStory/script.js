//This code and its related references in the other files here was adapted from W3: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_password" and "https://www.w3schools.com/howto/howto_js_toggle_password.asp"
//Setup the "Show Password" function
function pwFunction() {
    let pw = document.getElementById("pw");
    if (pw.type == "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}

//Setup functions for Scroll-to-top button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    //get refs
    let scrollButton = document.getElementById("scrollButton");
    //if you scrol down more than 20px;
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Click on the scrollButton to scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}