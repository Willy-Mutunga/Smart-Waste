document.getElementById('wasteReportForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const location = document.getElementById('location').value;
    const wasteType = document.getElementById('wasteType').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];
  
    let message = `Waste Report Submitted!\nLocation: ${location}\nType: ${wasteType}\nDescription: ${description}`;
    
    if (image) {
      message += `\nImage: ${image.name}`;
    }
  
    alert(message);
  });
  