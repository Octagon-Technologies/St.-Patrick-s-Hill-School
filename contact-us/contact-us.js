// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// import { Resend } from "resend";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7naE1T75aMnw6HW0GHc03L-EupoKOJAg",
  authDomain: "st-patrick-3bab3.firebaseapp.com",
  projectId: "st-patrick-3bab3",
  storageBucket: "st-patrick-3bab3.firebasestorage.app",
  messagingSenderId: "870462095226",
  appId: "1:870462095226:web:4c935572997ec4cee860c3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// const db = app.firestore();
const db = firebase.firestore(app);
const contactMessagesRef = db.collection("messages");
const snackbar = document.querySelector(".snackbar");
const submitBtn = document.getElementById("submit-btn");

document
  .querySelector("form")
  .addEventListener("submit", async function (submitEvent) {
    submitEvent.preventDefault();

    const message = {
      firstName: document.getElementById("fname").value,
      lastName: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      details: document.getElementById("details").value,
      timestamp: Date(),
    };

    try {
      await contactMessagesRef.add(message);

    //   const resend = new Resend("re_S6VGAhNy_P4umMf1K2THbhMMN1rznLqBM");

    //   resend.emails.send({
    //     from: "stpatrickshillschool@yahoo.com",
    //     to: "andrewchelimo2000@gmail.com",
    //     subject: "Inquiry received",
    //     html: "<p>Your inquiry has been received by our team. We will get to you soonest with available information. Feel free to visit our school from Monday to Saturday. Have a lovely day!<br><br>Sincerely,<br>The IT Team @ St Patrick Hills School</p>",
    //   });
        
        fetch("/.netlify/functions/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: "Andrew",
            lastName: "Chelimo",
            email: "andrew@example.com",
            phone: "0712345678",
            message: "I’m interested in admissions.",
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));

      // $(snackbar).toggleClass("active", true)
      snackbar.classList.add("success");
      console.log(`snackbar.classList is ${snackbar.classList.value}`);
      setTimeout(() => {
        console.log(
          `Success: 1500 ms over. snackbar.classList is ${snackbar.classList.value}`
        );
        snackbar.classList.remove("success");
        submitEvent.target.reset();
      }, 2000);
    } catch (e) {
      snackbar.innerHTML = `<p>Message <span>not submitted</span></p> `;
      snackbar.classList.add("error");
      setTimeout(() => {
        console.log(
          `Error: 1500 ms over. snackbar.classList is ${snackbar.classList.value}`
        );
        snackbar.classList.remove("error");
      }, 2000);
    }
  });

const form = document.querySelector("form");
const fields = form.querySelectorAll("input, textArea");

function checkFormFilled() {
  let isFilled = Array.from(fields).every((field) => field.value.trim() !== "");
  console.log(`isFilled is ${isFilled}`);
  $(submitBtn).toggleClass("ready", isFilled);
}

fields.forEach((field) => {
  field.addEventListener("input", () => checkFormFilled());
});
