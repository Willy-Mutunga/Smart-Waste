const reports = [
    { id: 1, location: 'Downtown', type: 'Plastic', status: 'Pending' },
    { id: 2, location: 'Park Avenue', type: 'Organic', status: 'In Progress' },
    { id: 3, location: '5th Street', type: 'Hazardous', status: 'Resolved' },
    { id: 4, location: 'Broadway', type: 'Plastic', status: 'Resolved' },
    { id: 5, location: 'Green Park', type: 'Organic', status: 'Pending' }
  ];
  
  const statusCounts = reports.reduce((acc, report) => {
    acc[report.status] = (acc[report.status] || 0) + 1;
    return acc;
  }, {});
  
  const typeCounts = reports.reduce((acc, report) => {
    acc[report.type] = (acc[report.type] || 0) + 1;
    return acc;
  }, {});
  
  const ctx1 = document.getElementById('statusChart').getContext('2d');
  new Chart(ctx1, {
    type: 'pie',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: ['#66bb6a', '#ffa726', '#29b6f6'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
  
  const ctx2 = document.getElementById('typeChart').getContext('2d');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: Object.keys(typeCounts),
      datasets: [{
        label: 'Number of Reports',
        data: Object.values(typeCounts),
        backgroundColor: '#66bb6a',
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
  