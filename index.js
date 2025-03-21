
//* Typed.js
var typed = new Typed('#typing-text', {
    strings: ['<b>Software Engineer</b>.',
        '<b>Web Developer</b>.',
        '<b>Android App Developer</b>.',
        '<b>Cyber Security Enthusiast</b>.',
        // '<b>Adopting New Tech</b>.',
        //  '&amp; a second sentence.'
    ],
    typeSpeed: 100,
    backSpeed: 80,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
});


// About Section 

function showPhoneNumber(element) {
    let phoneNumber = element.querySelector('.phone_number');
    phoneNumber.textContent = '+92 345 152 0203';
}
function hidePhoneNumber(element) {
    let phoneNumber = element.querySelector('.phone_number');
    phoneNumber.textContent = '+92 345 *** **03';
}

// Contact Section

let sendMessage = document.querySelector("form");

let formAction = (event) => {
    event.preventDefault();

    let senderName = document.getElementById("name").value;
    let senderEmail = document.getElementById("email").value;
    let senderSubject = document.getElementById("subject").value;
    let senderMessage = document.getElementById("message").value;
    senderName = encodeURIComponent(senderName)
    senderEmail = encodeURIComponent(senderEmail)
    senderSubject = encodeURIComponent(senderSubject)
    senderMessage = encodeURIComponent(senderMessage)


    console.log("Name: ", senderName);
    console.log("Email: ", senderEmail);
    console.log("Subject: ", senderSubject);
    console.log("Message: ", senderMessage);

    const mailToLink = `mailto:asherfraz@gmail.com?subject=${senderSubject}&body=${senderMessage}`;
    console.log(mailToLink);
    // window.open(mailToLink);

    window.location.href = mailToLink
}

sendMessage.addEventListener("submit", formAction);