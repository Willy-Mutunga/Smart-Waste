document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Logging in with: \nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  });
  
  document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Registered successfully!\nName: ${name}\nEmail: ${email}`);
  });
  