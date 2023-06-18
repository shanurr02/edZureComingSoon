// JavaScript code for sending messages (you can customize this according to your needs)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.querySelector('input[type="email"]').value;
    if (email !== '') {
      alert('Message sent!');
      document.querySelector('input[type="email"]').value = '';
    }
  });
  