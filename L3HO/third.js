function changeText() {
    const messageElement = document.getElementById("message");
    messageElement.innerText = "Text changed!";
    messageElement.style.fontSize = "35px";
    }

    let originalMessage;
    let isOriginal = true;

    window.onload = function() {
        const messageElement = document.getElementById("message");
        originalMessage = messageElement.innerText;
        const buttonElement = document.getElementById("toggleTextButton");
        buttonElement.addEventListener("click", function() {
            toggleText();
        });
    };

    function toggleText() {
        const messageElement = document.getElementById("message");
        if (isOriginal) {
            messageElement.innerText = "Text changed! Re-click the button to change into its original state.";
            messageElement.style.fontSize = "24px"; // Change this value to the desired font size
        } else {
            messageElement.innerText = originalMessage;
            messageElement.style.fontSize = "16px"; // Change this value to the original font size
        }
        isOriginal = !isOriginal; // Toggle the state
    }