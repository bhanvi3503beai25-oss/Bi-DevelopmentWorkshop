// alert("Hello from js");
function viewProfile() {
    alert("Welcome to Jane Doe's Profile!");

    document.querySelector(".profile-card").innerHTML = `
        <img src="jane.png" alt="Jane">
        <h2>Jane Doe</h2>
        <p>Web Developer</p>
        <p>Email: jane@gmail.com</p>
        <p>Skills: HTML, CSS, JavaScript</p>
        <button onclick="goBack()">Go Back</button>
    `;
}

function goBack() {
    location.reload();
}
