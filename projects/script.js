//Set up the first collapsible
let collapsibleOne = document.getElementById("collapsibleOne");
let contentOne = document.getElementById("contentOne");
//When we click, if the display is set to "block" (i.e. showing), set it to "none" (i.e. not showing). And vice versa if we click again
collapsibleOne.onclick = function() {
    if (contentOne.style.display == "block") {
        contentOne.style.display = "none";
    } else if (contentOne.style.display == "" || contentOne.style.display == "none") {
        /*that 'content.style.display ==""' is necessary, because, for some reason, the display by default is simply "empty", hence we need the empty quotes as part of an "or" condition. SPECIAL SPECIAL THANKS TO ABHISHEK RAMJIT FOR HELPING ME SOLVE THIS IN LIKE UNDER TWO MINUTES. Abhishek is a legend. */
        contentOne.style.display = "block";
    }
}

//Set up the second collapsible

let collapsibleTwo = document.getElementById("collapsibleTwo");
let contentTwo = document.getElementById("contentTwo");

collapsibleTwo.onclick = function() {
    if (contentTwo.style.display == "block") {
        contentTwo.style.display = "none";
    } else if (contentTwo.style.display == "" || contentTwo.style.display == "none") {
        /*that 'content.style.display ==""' is necessary, because, for some reason, the display by default is simply "empty", hence we need the empty quotes as part of an "or" condition. SPECIAL SPECIAL THANKS TO ABHISHEK RAMJIT FOR HELPING ME SOLVE THIS IN LIKE UNDER TWO MINUTES. Abhishek is a legend. */
        contentTwo.style.display = "block";
    }
}

//Set up the third collapsible

let collapsibleThree = document.getElementById("collapsibleThree");
let contentThree = document.getElementById("contentThree");

collapsibleThree.onclick = function() {
    if (contentThree.style.display == "block") {
        contentThree.style.display = "none";
    } else if (contentThree.style.display == "" || contentThree.style.display == "none") {
        /*that 'content.style.display ==""' is necessary, because, for some reason, the display by default is simply "empty", hence we need the empty quotes as part of an "or" condition. SPECIAL SPECIAL THANKS TO ABHISHEK RAMJIT FOR HELPING ME SOLVE THIS IN LIKE UNDER TWO MINUTES. Abhishek is a legend. */
        contentThree.style.display = "block";
    }
}

//This code and its related references in the other files here was adapted from W3Schools: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_password" and "https://www.w3schools.com/howto/howto_js_toggle_password.asp"
//Setup the "Show Password" checkbox
function pwFunction() {
    let pw = document.getElementById("pw");
    if (pw.type == "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}

//Setup functions for scroll button
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