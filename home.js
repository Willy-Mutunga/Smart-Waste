document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const feedback = document.getElementById('feedback').value;
    document.getElementById('responseMessage').textContent = 'Thank you for your feedback, ' + userName + '!';
    document.getElementById('feedbackForm').reset();
});

const isAdmin = true;

if (isAdmin) {
    const adminModules = document.querySelectorAll('.admin-only');
    adminModules.forEach(module => {
        module.classList.add('show');
    });
}
