document.querySelectorAll('#reportsTable button').forEach(button => {
    button.addEventListener('click', function() {
      const row = this.closest('tr');
      const select = row.querySelector('select');
      const status = select.value;
      const statusCell = row.querySelector('td:nth-child(3)');
  
      if (status === 'resolve') {
        statusCell.textContent = 'Resolved';
        statusCell.style.color = 'green';
      } else {
        statusCell.textContent = 'Ignored';
        statusCell.style.color = 'red';
      }
      
      select.value = ''; // Reset the dropdown
    });
  });
  