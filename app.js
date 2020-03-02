const scriptURL =
    "https://script.google.com/macros/s/AKfycbyd3GF8leB2CBxltJ7q8DCUtRlcV5t8j86G30zNX9VyIGNdLdAf/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })
        .then(response => console.log("Success!", response))
        .catch(error => console.error("Error!", error.message));
});