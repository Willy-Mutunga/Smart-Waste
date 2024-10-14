document.addEventListener('DOMContentLoaded', function() {
    const notificationsList = document.getElementById('notificationsList');
  
    function addNotification(message) {
      const listItem = document.createElement('li');
      listItem.textContent = message;
      notificationsList.appendChild(listItem);
    }
  
    addNotification('New: We have introduced a new waste segregation program.');
  });
  