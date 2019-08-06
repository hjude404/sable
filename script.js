//This code and its related references in the other files here was adapted from W3: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_password" and "https://www.w3schools.com/howto/howto_js_toggle_password.asp"
//Setup the "Show Password" checkbox
function pwFunction() {
    let pw = document.getElementById("pw");
    if (pw.type == "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}