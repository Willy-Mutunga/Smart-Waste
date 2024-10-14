document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const responseMessage = document.getElementById('responseMessage');
  
    if (name && email && message) {
      responseMessage.textContent = 'Thank you for your feedback!';
      responseMessage.style.color = '#4caf50';
      document.getElementById('feedbackForm').reset();
    } else {
      responseMessage.textContent = 'Please fill out all fields.';
      responseMessage.style.color = 'red';
    }
  });
  