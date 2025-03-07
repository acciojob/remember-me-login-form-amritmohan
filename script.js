//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const checkbox = document.getElementById("checkbox");
            const submitButton = document.getElementById("submit");
            const existingButton = document.getElementById("existing");
            
            // Check if credentials exist in localStorage
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");
            
            if (savedUsername && savedPassword) {
                existingButton.style.display = "block";
            }
            
            document.getElementById("login-form").addEventListener("submit", (event) => {
                event.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;
                alert("Logged in as " + username);
                
                if (checkbox.checked) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }
                
                existingButton.style.display = localStorage.getItem("username") ? "block" : "none";
            });
            
            existingButton.addEventListener("click", () => {
                alert("Logged in as " + localStorage.getItem("username"));
            });
        });