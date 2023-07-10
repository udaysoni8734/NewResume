document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contact-form');
    var submitBtn = document.getElementById('submit-btn');
  
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form values
      var name = document.getElementById('name').value;
      var mesage = document.getElementById('message').value;
      // Get other form field values
      console.log(message);
      // Compose email body
      var subject = 'Wanna Contact You';
      var body = 'I am ' + name + '\n' ;
      body += 'Message: ' + message + '\n';
      // Compose the rest of the email body with other form field values
  
      // Construct the email link
      var mailtoLink = 'mailto:udaysoni8734@gmail.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
  
      // Open the user's default email client with the pre-filled email details
      window.location.href = mailtoLink;
    });
  });
  