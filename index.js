document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const email = document.getElementById('email').value.trim();
        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const termsChecked = document.getElementById('terms').checked;

        // Check if all required fields are filled
        if (email && firstName && lastName && termsChecked) {
            // Show success message
            messageElement.textContent = 'Successfully submitted!';
            messageElement.style.color = 'green';

            // Refresh the page after 3 seconds
            setTimeout(() => {
                messageElement.textContent = '';
                location.reload();
            }, 3000);
        } else {
            // Show error message
            messageElement.textContent = 'Please fill all the fields!';
            messageElement.style.color = 'red';
        }
    });
});
