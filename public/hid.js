document.addEventListener('DOMContentLoaded', function() {
    const healthIdInput = document.getElementById('health-id');
    const qrImage = document.getElementById('qr-code');
  
    // Call the function to generate a random ID when the page loads
    generateRandomId();
  
    function generateRandomId() {
        const min = 100000000;
        const max = 999999999;
        const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
        healthIdInput.value = randomId;
      
        const medicalRecord = `
      Health ID: ${randomId}
      Name: Armaan Khan
      Age: 21
      Gender: Male
      Blood Group: B+
      Allergies: None
      Medical History: Asthma (2019), Knee Surgery (2022)
      Emergency Contact: 9876543210
      `;
      
        const qrData = encodeURIComponent(medicalRecord);
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrData}&size=150x150`;
      }
      
    }
  );
  