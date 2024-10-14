document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const message = document.getElementById('message');
  
    if (name && email && password) {
      message.textContent = 'Profile updated successfully!';
      message.style.color = '#4caf50';
      document.getElementById('profileForm').reset();
    } else {
      message.textContent = 'Please fill out all fields.';
      message.style.color = 'red';
    }
  });
  