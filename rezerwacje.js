document.getElementById('rezerwacjeform').addEventListener('submit', function(event) {
   event.preventDefault();

   // Get the reCAPTCHA response
   const reCaptchaResponse = document.forms['rezerwacjeform'].elements['g-recaptcha-response'].value;

   // Send the reCAPTCHA response to the server for verification
   fetch('https://www.google.com/recaptcha/api/siteverify', {
      headers: {
         'Access-Control-Allow-Origin':  '*',
         'Access-Control-Allow-Methods': 'POST'
      },
      method: 'POST',
      mode: 'cors',
      body: new URLSearchParams({
         secret: '6Lc_SmApAAAAAJ1XYX6ZQoGlqjkYCa_gOeomZKeg',
         response: reCaptchaResponse
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log('success');
      } else {
        alert('Invalid reCAPTCHA response. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error verifying reCAPTCHA response:', error);
      alert('An error occurred while verifying the reCAPTCHA response. Please try again later.');
   });
});