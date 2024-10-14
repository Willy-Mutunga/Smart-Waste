const reports = [
    { id: 1, location: 'Downtown', type: 'Plastic', status: 'Pending' },
    { id: 2, location: 'Park Avenue', type: 'Organic', status: 'In Progress' },
    { id: 3, location: '5th Street', type: 'Hazardous', status: 'Resolved' }
  ];
  
  function populateAdminTable() {
    const tbody = document.querySelector('#adminReportTable tbody');
    tbody.innerHTML = '';
  
    if (reports.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5">No reports to manage</td></tr>';
      return;
    }
  
    reports.forEach((report, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${report.id}</td>
        <td>${report.location}</td>
        <td>${report.type}</td>
        <td>${report.status}</td>
        <td class="actions">
          <select data-index="${index}">
            <option value="Pending" ${report.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="In Progress" ${report.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
            <option value="Resolved" ${report.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
          </select>
          <button onclick="updateStatus(${index})">Update</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }
  
  function updateStatus(index) {
    const select = document.querySelector(`select[data-index="${index}"]`);
    const newStatus = select.value;
    reports[index].status = newStatus;
    alert(`Report ID ${reports[index].id} status updated to ${newStatus}`);
    populateAdminTable();
  }
  
  document.addEventListener('DOMContentLoaded', populateAdminTable);
  