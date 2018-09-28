//Grafica circular
$(document).ready(function () {
    $("#gra-circular").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 7,
        backgroundBorderWidth: 7,
        textSize: 28,
        textStyle: 'font-size: 12px;',
        textColor: '#666',
        multiPercentage: 1,
        percentages: [
            {'percent': 80, 'color': '#3180B8', 'title': 'Ingreso de estudiantes' },
            {'percent': 75, 'color': '#4ADBEA', 'title': 'Ingreso Directores' },
            {'percent': 70, 'color': '#49EBA8', 'title': 'Ingreso de Jurados' },
            {'percent': 50, 'color': '#FFCA35', 'title': 'Total visitas' }
        ],
        multiPercentageLegend: 1,
        replacePercentageByText: '',
        backgroundColor: '#eee'
        
    });
});