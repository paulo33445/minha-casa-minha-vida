// Script para inicializar o gráfico de desempenho do projeto (exemplo) - Cliente 1
var ctx1 = document.getElementById('projetoDesempenho1').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Projeto Bolacha',
            data: [10, 15, 7, 22, 18, 25],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Projeto Inovação',
            data: [8, 12, 6, 18, 14, 20],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Projeto Eficiência',
            data: [5, 10, 8, 15, 12, 18],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Script para inicializar o gráfico de desempenho do projeto (exemplo) - Cliente 2
var ctx2 = document.getElementById('projetoDesempenho2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Projeto Estratégia',
            data: [15, 20, 10, 25, 22, 30],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Projeto Inovação',
            data: [10, 15, 8, 20, 18, 25],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Projeto Eficiência',
            data: [6, 12, 9, 15, 14, 20],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Script para inicializar o gráfico de desempenho do projeto (exemplo) - Cliente 3
var ctx3 = document.getElementById('projetoDesempenho3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Projeto WebDesign',
            data: [12, 18, 10, 24, 20, 28],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Projeto E-commerce',
            data: [8, 14, 7, 18, 15, 22],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'Projeto Inovação',
            data: [10, 16, 9, 20, 18, 25],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
