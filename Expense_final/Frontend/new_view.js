
fetch('../view2.php')
    .then(response => response.json())
    .then(data => {
        const labels = data.map(entry => entry.expense_category);
        const amounts = data.map(entry => entry.total_amount);

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Expense Categories',
                    data: amounts,
                    backgroundColor: [
                        '#44FF07',
                        '#FED60A',
                        '#FB0007',
                        '#3700FF',
                        '#FB13F3',
                        '#010101',
                        '#B03A2E'

                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
