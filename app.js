const scriptURL =
  "https://script.google.com/macros/s/AKfycbyd3GF8leB2CBxltJ7q8DCUtRlcV5t8j86G30zNX9VyIGNdLdAf/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  })
    .then(response => alert("Message Sent", response))
    .catch(error => alert("Error, Please try again", error.message));
});
let myInfo = document.querySelector("#personalInfo");
let diceGmInfo = document.querySelector("#dgInfo");
let colorGmInfo = document.querySelector("#cgInfo");

diceGmInfo.textContent =
  "Game that was created with JS from a JS bootcamp course.\
        Project has taught me about DOM manipulation with JS.";

colorGmInfo.textContent =
  "Color game that uses JS to manipulate the DOM and test the users \
        for rgb color knowlege.";
myInfo.textContent =
  "Hello, Im Eric A front end developer from Los Angeles,\
I have a bachelors degree in Computer Science, my primary programming language\
is javascript but I am also experience in Java and C. I have taken mulitple \
courses on web programming and am currently learning React JS. Happy Coding!";

/*function validateForm() {
            let email = document.forms["submit-to-google-sheet"]["email"].value;
            let firstName = document.forms["submit-to-google-sheet"]["firstName"].value;
            let lastName = document.forms["submit-to-google-sheet"]["lastName"].value;

            if (email == "" || firstName == "" || lastName == "") {
                alert("Missing Fields");
                return false;
            } else {
                alert("Message Sent");
            }

        }*/
