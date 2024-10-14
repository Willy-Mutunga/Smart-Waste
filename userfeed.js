document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const feedback = document.getElementById('feedback').value;
  
    document.getElementById('responseMessage').textContent = 'Thank you for your feedback, ' + userName + '!';
    
    document.getElementById('feedbackForm').reset();
  });
  