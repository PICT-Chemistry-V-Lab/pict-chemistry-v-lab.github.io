var c = 0;
var experimentstarted = false;
//?v1=1&n1=1&n2=1&inc=1

var V1 = 50;
var V2 = 0;
var N1 = 0.1;
var N2 = 0.5;
var pH = 2;
var equiFound = false;
var dps = []; // dataPoints
var trd1 = [];
var trd2 = [];
let ci;
//hardcoded a value here. It can be changed
var max_base = 13.5;

conductance = {
  0: 15.75,
  0.5: 14.67,
  1: 13.64,
  1.5: 12.45,
  2: 11.44,
  2.5: 10.41,
  3: 9.43,
  3.5: 8.38,
  4: 7.57,
  4.5: 6.65,
  5: 5.78,
  5.5: 4.77,
  6: null,
  6.5: 5,
  7: 5.46,
  7.5: 6.132,
  8: 6.5,
  8.5: 7,
  9: 7.6,
  9.5: 8.25,
  10: 8.9,
  10.5: 9.75,
  11: 10.4,
  11.5: 11,
  12: 11.83,
  12.5: 12.586,
  13: null,
  13.5: null
};

function f1() {
  c++;
  if (c == 1) {
    g();
    document.getElementById('fun1').style.display = 'none';
    document.getElementById('knob_ON').style.display = 'none';
    document.getElementById('drop').style.display = 'block';
    experimentstarted = true;
    const loop = setInterval(function () {
      if (V2 >= max_base) clearInterval(loop);
      document.getElementById('ripple_m').style.display = 'block';
      document.getElementById('ripple_o').style.display = 'block';
      document.getElementById('ripple_i').style.display = 'block';
      setTimeout(function () {
        document.getElementById('ripple_o').style.display = 'none';
        document.getElementById('ripple_m').style.display = 'none';
        document.getElementById('ripple_i').style.display = 'none';
      }, 500);
      updatevalueondisplay();
    }, 700);
  } else if (c == 2) {
    document.getElementById('knob_ON').style.display = 'block';
    document.getElementById('fun3').style.display = 'none';
    document.getElementById('drop').style.display = 'none';
    var insid = document.getElementById('ripple_i');
    var mid = document.getElementById('ripple_m');
    var out = document.getElementById('ripple_o');
    insid.remove();
    mid.remove();
    out.remove();
  } else {
    c--;
    alert('You clicked on the Wrong Apparatus, Refresh to avoid Glithes');
  }
}

function f2() {
  document.getElementById('fun2').style.display = 'none';
}

function updatevalueondisplay() {
  V2 += 0.5;

  //calculate pH here; I have termporarily simply incremented
  console.log(V2, conductance[V2]);
  pH = conductance[V2];

  if (V2 <= max_base) {
    document.getElementById('Pisplay1').innerHTML = pH;
    final = pH;
  } else {
    experimentstarted = false;
    pH = final;
    f2();
  }
}

//code for chart

function g() {
  var chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: 'Conductance vs Volume of Titrant (NaOH) added',
      fontSize: 20
    },
    axisX: {
      title: 'Volume of Strong Base (ml)',
      maximum: max_base,
      minimum: 0,
      interval: 1
    },
    axisY: [
      {
        title: 'Conductance of solution',
        maximum: 16,
        interval: 2,
        gridThickness: 0,
        minimum: 2
      }
    ],
    data: [
      {
        type: 'line',
        lineColor: 'white',
        markerSize: 6,
        dataPoints: dps
      },
      {
        type: 'line',
        lineColor: 'black',
        markerSize: 0,
        dataPoints: trd1
      },
      {
        type: 'line',
        markerSize: 0,
        lineColor: 'black',
        dataPoints: trd2
      }
    ]
  });
  //var op= 0;
  var xVal = 0;
  var yVal = 0;
  var updateInterval = 700;
  var dataLength = max_base; // number of dataPoints visible at any point

  var updateChart = function (count) {
    count = count || 1;

    for (var j = 0; j < max_base; j = j + 0.5) {
      yVal = conductance[V2];
      xVal = V2;

      if (V2 <= 6) {
        dps.push({
          x: xVal,
          y: yVal
        });
      } else if (V2 > 6 && V2 <= max_base) {
        dps.push({
          x: xVal,
          y: yVal
        });
      } else {
        //draw trend line
        trd1.push({
          x: 0,
          y: 15.545,
          markerColor: 'black'
        });
        trd1.push({
          x: 6.33,
          y: 3,
          markerColor: 'black'
        });
        trd2.push({
          x: 12.5,
          y: 12.295,
          markerColor: 'black'
        });
        trd2.push({
          x: 5.86,
          y: 3.89,
          markerSize: 8,
          markerColor: 'red'
        });

        trd2.push({
          x: 5.056,
          y: 3,
          markerColor: 'black'
        });

        f2();
        const drop = document.getElementById('drop');
        drop.remove();
        clearInterval(ci);
        break;
      }
    }

    chart.render();
  };
  updateChart(dataLength);
  ci = setInterval(function () {
    updateChart();
  }, updateInterval);
}

function onSubmit() {
  let norm = document.getElementById('normality');
  let stre = document.getElementById('strength');

  if (norm.value !== '0.0586') {
    norm.style.border = 'solid 3px red';
    document.getElementById('n-wrong').style.display = 'inline';
    document.getElementById('n-right').style.display = 'none';
  } else {
    norm.style.border = 'solid 3px green';
    document.getElementById('n-right').style.display = 'inline';
    document.getElementById('n-wrong').style.display = 'none';
  }
  if (stre.value !== '2.1389') {
    stre.style.border = 'solid 3px red';
    document.getElementById('s-wrong').style.display = 'inline';
    document.getElementById('s-right').style.display = 'none';
  } else {
    stre.style.border = 'solid 3px green';
    document.getElementById('s-right').style.display = 'inline';
    document.getElementById('s-wrong').style.display = 'none';
  }
}

function onReset() {
  let norm = document.getElementById('normality');
  let stre = document.getElementById('strength');

  norm.value = '';
  stre.value = '';
  norm.style.border = 'none';
  stre.style.border = 'none';
  document.getElementById('n-wrong').style.display = 'none';
  document.getElementById('n-right').style.display = 'none';
  document.getElementById('s-wrong').style.display = 'none';
  document.getElementById('s-right').style.display = 'none';
}
