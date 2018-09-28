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
        percentages: [{
                'percent': 80,
                'color': '#3180B8',
                'title': 'Ingreso de estudiantes'
            },
            {
                'percent': 75,
                'color': '#4ADBEA',
                'title': 'Ingreso Directores'
            },
            {
                'percent': 70,
                'color': '#49EBA8',
                'title': 'Ingreso de Jurados'
            },
            {
                'percent': 50,
                'color': '#FFCA35',
                'title': 'Total visitas'
            }
        ],
        multiPercentageLegend: 1,
        replacePercentageByText: '',
        backgroundColor: '#eee'

    });
});

//Circle library
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var colors = [
        ['#D3B6C6', '#4B253A'],
        ['#FCE6A4', '#EFB917'],
        ['#BEE3F7', '#45AEEA'],
        ['#F8F9B6', '#D2D558']
    ],
    circles = [];

var child = document.getElementById('circles-' + 1),
    percentage = 80;
circles.push(Circles.create({
    id: child.id,
    value: percentage,
    radius: 60,
    width: 10,
    colors: colors[1 - 1]
}));


/*for (var i = 1; i <= 4; i++) {
    var child = document.getElementById('circles-' + i),
        percentage = 3.42 + (i * 9.84);

    circles.push(Circles.create({
        id:         child.id,
        value:		percentage,
        radius:     60,
        width:      10,
        colors:     colors[i - 1]
    }));
}*/

document.getElementById('change-value-button').onclick = function () {
    for (var i = 0, l = circles.length; i < l; i++)
        circles[i].update(20, 250);
};

document.getElementById('add-width-button').onclick = function () {
    for (var i = 0, l = circles.length; i < l; i++) {
        circles[i].updateWidth(20);
    }
};

document.getElementById('substract-width-button').onclick = function () {
    for (var i = 0, l = circles.length; i < l; i++)
        circles[i].updateWidth(10);
};

document.getElementById('colors-button').onclick = function () {
    colors = shuffle(colors);
    for (var i = 0, l = circles.length; i < l; i++)
        circles[i].updateColors(colors[i]);
};