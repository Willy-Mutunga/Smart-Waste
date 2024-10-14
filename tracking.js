const reports = [
    { id: 1, location: 'Downtown', type: 'Plastic', status: 'Pending' },
    { id: 2, location: 'Park Avenue', type: 'Organic', status: 'In Progress' },
    { id: 3, location: '5th Street', type: 'Hazardous', status: 'Resolved' }
  ];
  
  function populateReportTable() {
    const tbody = document.querySelector('#reportTable tbody');
    tbody.innerHTML = '';
  
    if (reports.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4">No reports available</td></tr>';
      return;
    }
  
    reports.forEach(report => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${report.id}</td>
        <td>${report.location}</td>
        <td>${report.type}</td>
        <td>${report.status}</td>
      `;
      tbody.appendChild(row);
    });
  }
  
  document.addEventListener('DOMContentLoaded', populateReportTable);
  