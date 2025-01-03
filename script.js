document.querySelector('.read-more-btn').addEventListener('click', function () {
    const moreText = document.querySelector('.more-text');
    const btn = this;
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        btn.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        btn.textContent = 'Read More';
    }
});
function toggleDescription(button) {
    var portfolioItem = button.closest('.portfolio-item'); // Get the closest portfolio item container
    var shortDescription = portfolioItem.querySelector('.short-description');
    var fullDescription = portfolioItem.querySelector('.full-description');

    // Check if the full description is hidden or visible
    if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
        fullDescription.style.display = 'block';
        shortDescription.style.display = 'none';
        button.textContent = 'Read Less';
    } else {
        fullDescription.style.display = 'none';
        shortDescription.style.display = 'block';
        button.textContent = 'Read More';
    }
}
const textElement = document.querySelector('.typing-text');
const text = 'Ashwini Anil';
let index = 0;
let typing = true;

function typeText() {
    if (typing) {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
        } else {
            typing = false; // Stop typing and start deleting
            setTimeout(() => {
                typeText();
            }, 1000); // Pause before deleting
            return;
        }
    } else {
        if (index > 0) {
            textElement.textContent = text.slice(0, index - 1);
            index--;
        } else {
            typing = true; // Start typing again
        }
    }
    setTimeout(typeText, typing ? 200 : 100); // Adjust speed for typing and deleting
}

typeText();
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    // Reset error messages
    document.querySelectorAll(".error").forEach(function(error) {
        error.style.display = "none";
    });
    
    // Validate Name
    let name = document.getElementById("name");
    if (name.value.trim() === "") {
        document.getElementById("name-error").style.display = "inline-block";
        isValid = false;
    }
    
    // Validate Email
    let email = document.getElementById("email");
    if (!email.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        document.getElementById("email-error").style.display = "inline-block";
        isValid = false;
    }
    
    // Validate Message
    let message = document.getElementById("message");
    if (message.value.trim() === "") {
        document.getElementById("message-error").style.display = "inline-block";
        isValid = false;
    }
    
    // Show success message if valid
    if (isValid) {
        document.getElementById("contact-form").reset();
        document.getElementById("success-message").style.display = "block";
        setTimeout(function() {
            document.getElementById("success-message").style.display = "none";
        }, 5000);
    }
});


