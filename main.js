// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Add the .hidden class to the error modal
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");
  
  // Step 2: Add click event listeners to empty hearts
  document.querySelectorAll(".like-glyph").forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Step 3: Change the heart to a full heart
          if (heart.classList.contains("activated-heart")) {
            heart.classList.remove("activated-heart");
            heart.innerText = EMPTY_HEART;
          } else {
            heart.classList.add("activated-heart");
            heart.innerText = FULL_HEART;
          }
        })
        .catch((error) => {
          // Step 4: Handle the error
          const errorMessage = document.getElementById("modal-message");
          
          // Step 5: Display the error modal and message
          errorMessage.textContent = error;
          errorModal.classList.remove("hidden");
  
          // Step 6: Use setTimeout to hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });

});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
