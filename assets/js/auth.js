document.addEventListener('DOMContentLoaded', function() {
    // Check if userCode exists in localStorage
    const storedCode = localStorage.getItem('userCode');
    
    if (storedCode) {
        // If the code is already set, ask the user to enter their code to login
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let enteredCode = document.getElementById('userCode').value;

            if (enteredCode === storedCode) {
                // Successful login
                window.location.href = 'dashboard.html';
            } else {
                // Show invalid code message
                alert('Invalid code. Please try again.');
            }
        });
    } else {
        // If no code is set, ask the user to set a new one
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let newCode = document.getElementById('userCode').value;

            if (newCode.trim()) {
                // Save the new code to localStorage
                localStorage.setItem('userCode', newCode);
                alert('Your new code has been set! You can now log in.');
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter a valid code.');
            }
        });
    }
});
