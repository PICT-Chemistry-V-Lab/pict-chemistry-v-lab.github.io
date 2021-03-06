var c = 0;
var current = 0;
var Rudolph = 0;
var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;
var x1;
var y1;
var wavelength;
var absorbance = 0;
var ci, ci1;
var maxY;
var mi;
var heading;
var redpt = [];
var trd1 = [
  {
    x: 0.00007,
    y: 0.166,
    markerColor: 'black'
  },
  {
    x: 0.0005,
    y: 1.2311,
    markerSize: 'black'
  }
];
var dp1 = [
  {
    x: 0.00009,
    y: 0.1789
  },
  {
    x: 0.0001,
    y: 0.26875
  },

  {
    x: 0.00016,
    y: 0.398
  },
  {
    x: 0.0002,
    y: 0.5
  },
  {
    x: 0.00027,
    y: 0.6665
  },
  {
    x: 0.0004,
    y: 0.9775
  }
];
document.getElementById('beaker').style.display = 'block';
document.getElementById('cuvette2').style.display = 'block';
document.getElementById('water_in_cuvette').style.display = 'block';
document.getElementById('rect854').style.display = 'block';
document.getElementById('dial').style.display = 'block';

function f0() {
  document.getElementById('rect854').style.display = 'block';
  document.getElementById('Red_LED').style.cursor = 'pointer';
}

window.test = function (e) {
  if (e.value === '1') {
    maxY = 0.18;
    mi = 0.08;
    heading = 'Concentration: 0.00009 M';
    Kirti();
  } else if (e.value === '2') {
    maxY = 0.27;
    mi = 0.1;
    heading = 'Concentration: 0.0001 M';
    Aashna();
  } else if (e.value === '3') {
    maxY = 0.4;
    mi = 0.16;
    heading = 'Concentration: 0.00016 M';
    Neil();
  } else if (e.value === '4') {
    maxY = 0.7;
    mi = 0.32;
    heading = 'Concentration: 0.00027 M';

    Manasi();
  } else if (e.value === '5') {
    maxY = 1;
    mi = 0.64;
    heading = 'Concentration: 0.0004 M';
    Rathish();
  }
};

function Kirti() {
  current = 1;
  f2();
}
function Aashna() {
  current = 2;
  f2();
}
function Neil() {
  current = 3;
  f2();
}
function Manasi() {
  current = 4;
  f2();
}
function Rathish() {
  current = 5;
  f2();
}

function checkall() {
  if (
    flag1 == true &&
    flag2 == true &&
    flag3 == true &&
    flag4 == true &&
    flag5 == true
  ) {
    document.getElementById('fun11').style.display = 'none';
    c++;
  }
}

function redbutton() {
  c++;
  if (c == 1) {
    document.getElementById('rect854').style.cursor = 'default';
    document.getElementById('Green_LED').style.display = 'block';
    document.getElementById('Red_LED').style.display = 'none';
    document.getElementById('beaker').style.display = 'block';
    document.getElementById('beaker').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('fun1').style.display = 'none';
      document.getElementById('svg1').style.display = 'none';
      document.getElementById('svg2').style.display = 'block';
    }, 1000);
    setTimeout(function () {
      document.getElementById('svg1').style.display = 'block';
      document.getElementById('svg2').style.display = 'none';
      document.getElementById('Grinch').style.display = 'block';
      c++;
    }, 6000);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f1() {
  c++;
  if (c == 23) {
    f10();
  } else if (c == 10) {
    f10();
  } else if (c == 13) {
    c++;
    document.getElementById('Santa').style.display = 'none';
    setTimeout(function () {
      document.getElementById('fun13').style.display = 'none';
      document.getElementById('svg1').style.display = 'none';
      document.getElementById('svg3').style.display = 'block';
    }, 100);
    setTimeout(function () {
      document.getElementById('svg1').style.display = 'block';
      document.getElementById('svg3').style.display = 'none';
      document.getElementById('Grinch').style.display = 'none';
    }, 5000);
  } else if (c == 15) {
    document.getElementById('Santa').style.display = 'none';
    setTimeout(function () {
      document.getElementById('KMnO4_in_specto').style.fill = '#963b9c';
      document.getElementById('KMnO4_in_beaker').style.fill = '#963b9c';
      document.getElementById('KMnO4_in_cuvette').style.fill = '#963b9c';
      document.getElementById('KMnO4_in_micro pipette').style.fill = '#963b9c';
      document.getElementById('fun15').style.display = 'none';
      document.getElementById('svg1').style.display = 'none';
      document.getElementById('svg4').style.display = 'block';
    }, 100);
    setTimeout(function () {
      document.getElementById('svg1').style.display = 'block';
      document.getElementById('svg4').style.display = 'none';
    }, 5000);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f2() {
  document.getElementById('fun2').style.display = 'none';
  document.getElementById('KMnO4_in_beaker').style.display = 'block';
  if (current == 1) {
    document.getElementById('KMnO4_in_specto').style.fill = '#eeaaff';
    document.getElementById('KMnO4_in_beaker').style.fill = '#eeaaff';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#eeaaff';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#eeaaff';
  } else if (current == 2) {
    document.getElementById('KMnO4_in_specto').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_beaker').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#963b9c';
  } else if (current == 3) {
    document.getElementById('KMnO4_in_specto').style.fill = '#812285';
    document.getElementById('KMnO4_in_beaker').style.fill = '#812285';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#812285';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#812285';
  } else if (current == 4) {
    document.getElementById('KMnO4_in_specto').style.fill = '#660066';
    document.getElementById('KMnO4_in_beaker').style.fill = '#660066';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#660066';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#660066';
  } else if (current == 5) {
    document.getElementById('KMnO4_in_specto').style.fill = '#660066';
    document.getElementById('KMnO4_in_beaker').style.fill = '#660066';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#660066';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#660066';
  }
}
function f3() {
  c++;
  if (c == 3) {
    document.getElementById('beaker').style.cursor = 'default';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('cuvette2').style.cursor = 'pointer';
    document.getElementById('Grinch').style.display = 'none';
    document.getElementById('fun3').style.display = 'none';
  } else if (c == 16) {
    document.getElementById('fun16').style.display = 'none';
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f4() {
  c++;
  if (c == 4) {
    document.getElementById('micro pipette').style.display = 'block';
    document.getElementById('micro pipette').style.cursor = 'pointer';
    document.getElementById('cuvette2').style.cursor = 'default';
    document.getElementById('fun4').style.display = 'none';
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  } else if (c == 17) {
    document.getElementById('fun17').style.display = 'none';
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f5() {
  c++;
  if (c == 5) {
    document.getElementById('micro pipette').style.cursor = 'default';
    document.getElementById('cuvette3').style.display = 'block';
    document.getElementById('cuvette3').style.cursor = 'pointer';
    document.getElementById('fun5').style.display = 'none';
    setTimeout(function () {
      document.getElementById('KMnO4_in_micro pipette').style.display = 'block';
    }, 1500);
  } else if (c == 18) {
    document.getElementById('fun18').style.display = 'none';
    setTimeout(function () {
      document.getElementById('KMnO4_in_micro pipette').style.display = 'block';
    }, 1500);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f6() {
  c++;
  if (c == 6) {
    document.getElementById('cuvette3').style.cursor = 'default';

    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette1').style.cursor = 'pointer';
    document.getElementById('water_in_cuvette').style.display = 'block';
    document.getElementById('water_in_cuvette').style.cursor = 'pointer';
    document.getElementById('fun6').style.display = 'none';
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'block';
      document.getElementById('KMnO4_in_micro pipette').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else if (c == 19) {
    document.getElementById('fun19').style.display = 'none';
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'block';
      document.getElementById('KMnO4_in_micro pipette').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f7() {
  c++;
  if (c == 7) {
    document.getElementById('cuvette1').style.cursor = 'default';

    document.getElementById('water_in_cuvette').style.cursor = 'default';

    document.getElementById('cuvette2_v2').style.display = 'block';
    document.getElementById('cuvette2_v2').style.cursor = 'pointer';
    document.getElementById('fun7').style.display = 'none';
    setTimeout(function () {
      document.getElementById('cuvette1').style.display = 'none';
      document.getElementById('water_in_cuvette').style.display = 'none';
      document.getElementById('close').style.display = 'block';
      document.getElementById('close2').style.display = 'block';
      document.getElementById('close3').style.display = 'block';
      document.getElementById('close7').style.display = 'block';
      document.getElementById('close6').style.display = 'block';
      document.getElementById('close4').style.display = 'block';
    }, 1500);
  } else if (c == 20) {
    document.getElementById('fun20').style.display = 'none';
    setTimeout(function () {
      document.getElementById('cuvette1').style.display = 'none';
      document.getElementById('water_in_cuvette').style.display = 'none';
      document.getElementById('close').style.display = 'block';
      document.getElementById('close2').style.display = 'block';
      document.getElementById('close3').style.display = 'block';
      document.getElementById('close7').style.display = 'block';
      document.getElementById('close6').style.display = 'block';
      document.getElementById('close4').style.display = 'block';
    }, 1500);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f8() {
  c++;
  if (c == 8) {
    document.getElementById('cuvette2_v2').style.cursor = 'dial';
    document.getElementById('dial').style.display = 'block';
    document.getElementById('dial').style.cursor = 'pointer';
    document.getElementById('fun8').style.display = 'none';
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('close5').style.display = 'block';
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
      document.getElementById('KMnO4_in_specto').style.display = 'block';
      c++;
    }, 1500);
  } else if (c == 21) {
    document.getElementById('fun21').style.display = 'none';
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('close5').style.display = 'block';
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
      document.getElementById('KMnO4_in_specto').style.display = 'block';
      c++;
    }, 1500);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f9() {
  document.getElementById('rect854').style.display = 'block';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('rect854').style.cursor = 'pointer';
  if (c == 12) {
    document.getElementById('fun12').style.display = 'none';
    document.getElementById('Santa').style.display = 'block';
    document.getElementById('Santa').innerHTML =
      '<br>Absorbtion increases with increase in Concentration <br><br> Note down the λ<sub>max</sub> from the plot';
    g2();
  } else if (c == 22) {
    document.getElementById('fun22').style.display = 'none';
    document.getElementById('close4').style.display = 'none';
    document.getElementById('close5').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    document.getElementById('close2').style.display = 'none';
    document.getElementById('close3').style.display = 'none';
    document.getElementById('close7').style.display = 'none';
    document.getElementById('close6').style.display = 'none';
    document.getElementById('KMnO4_in_specto').style.display = 'none';
    document.getElementById('Santa').style.display = 'block';
    document.getElementById('Santa').style.display = 'block';
    document.getElementById('Santa').style.height = '142px';
    document.getElementById('Santa').innerHTML =
      'Note down the concentration (unknown) from the graph using absorbance value.';
    document.getElementById('Pisplay1').innerHTML = '528';
    document.getElementById('Pisplay2').innerHTML = '0.5';
    //add red dot here
    redpt.push({
      x: 0.0002,
      y: 0.5
    });
  } else if (c == 14) {
    document.getElementById('Santa').style.display = 'block';
    document.getElementById('Santa').innerHTML = "Verified Beer's Law";
    document.getElementById('Santa').style.fontSize = 40;
    document.getElementById('fun14').style.display = 'none';
    g3();
  } else if ((c == 9) | (c == 11)) {
    document.getElementById('fun9').style.display = 'none';
    document.getElementById('close4').style.display = 'none';
    document.getElementById('close5').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    document.getElementById('close2').style.display = 'none';
    document.getElementById('close3').style.display = 'none';
    document.getElementById('close7').style.display = 'none';
    document.getElementById('close6').style.display = 'none';
    document.getElementById('KMnO4_in_specto').style.display = 'none';
    if (current == 1) {
      flag1 = true;
      var A = [
        0.0006,
        0.0009,
        0.0015,
        0.0065,
        0.0195,
        0.0451,
        0.0905,
        0.1377,
        0.1789,
        0.1611,
        0.1568,
        0.1092,
        0.0383,
        0.0189,
        0.0152,
        0.0133,
        0.0109,
        0.0082,
        0.0055,
        0.0033,
        0.0031,
        0.0029
      ];

      var B = [
        417,
        426,
        427,
        442,
        458,
        474,
        490,
        506,
        528,
        538,
        554,
        570,
        586,
        602,
        618,
        634,
        650,
        666,
        682,
        698,
        699,
        700
      ];
      var k = 0;
      var totalvalues = 21; //enter total number of values here
      setInterval(function () {
        x1 = A[k];
        y1 = B[k];
        if (k <= totalvalues) {
          document.getElementById('Pisplay1').innerHTML = y1;
          document.getElementById('Pisplay2').innerHTML = x1.toFixed(3);
          k += 1;
        }
        if (k == totalvalues) {
          document.getElementById('fun9').style.display = 'none';
        }
      }, 700);
      g1();
    } else if (current == 2) {
      flag2 = true;
      var A = [
        0.005,
        0.006,
        0.006,
        0.019,
        0.049,
        0.109,
        0.199,
        0.246,
        0.269,
        0.26,
        0.253,
        0.242,
        0.099,
        0.049,
        0.04,
        0.035,
        0.029,
        0.023,
        0.016,
        0.01,
        0.01,
        0.01
      ];
      var B = [
        417,
        426,
        427,
        442,
        458,
        474,
        490,
        506,
        528,
        538,
        554,
        570,
        586,
        602,
        618,
        634,
        650,
        666,
        682,
        698,
        699,
        700
      ];
      var k = 0;
      var totalvalues = 21; //enter total number of values here
      setInterval(function () {
        x1 = A[k];
        y1 = B[k];
        if (k <= totalvalues) {
          document.getElementById('Pisplay1').innerHTML = y1;
          document.getElementById('Pisplay2').innerHTML = x1.toFixed(3);
          k += 1;
        }
        if (k == totalvalues) {
          document.getElementById('fun9').style.display = 'none';
        }
      }, 700);
      g1();
    } else if (current == 3) {
      flag3 = true;
      var A = [
        0.015,
        0.016,
        0.016,
        0.043,
        0.108,
        0.226,
        0.322,
        0.354,
        0.398,
        0.38,
        0.363,
        0.343,
        0.213,
        0.108,
        0.088,
        0.078,
        0.064,
        0.05,
        0.035,
        0.023,
        0.021,
        0.018
      ];
      var B = [
        417,
        426,
        427,
        442,
        458,
        474,
        490,
        506,
        528,
        538,
        554,
        570,
        586,
        602,
        618,
        634,
        650,
        666,
        682,
        698,
        699,
        700
      ];
      var k = 0;
      var totalvalues = 21; //enter total number of values here
      setInterval(function () {
        x1 = A[k];
        y1 = B[k];
        if (k <= totalvalues) {
          document.getElementById('Pisplay1').innerHTML = y1;
          document.getElementById('Pisplay2').innerHTML = x1.toFixed(3);
          k += 1;
        }
        if (k == totalvalues) {
          document.getElementById('fun9').style.display = 'none';
        }
      }, 700);
      g1();
    } else if (current == 4) {
      flag4 = true;
      var A = [
        0.029,
        0.031,
        0.033,
        0.085,
        0.213,
        0.412,
        0.563,
        0.608,
        0.667,
        0.613,
        0.588,
        0.55,
        0.411,
        0.215,
        0.174,
        0.154,
        0.128,
        0.1,
        0.07,
        0.045,
        0.043,
        0.04
      ];
      var B = [
        417,
        426,
        427,
        442,
        458,
        474,
        490,
        506,
        528,
        538,
        554,
        570,
        586,
        602,
        618,
        634,
        650,
        666,
        682,
        698,
        699,
        700
      ];
      var k = 0;
      var totalvalues = 21; //enter total number of values here
      setInterval(function () {
        x1 = A[k];
        y1 = B[k];
        if (k <= totalvalues) {
          document.getElementById('Pisplay1').innerHTML = y1;
          document.getElementById('Pisplay2').innerHTML = x1.toFixed(3);
          k += 1;
        }
        if (k == totalvalues) {
          document.getElementById('fun9').style.display = 'none';
        }
      }, 700);
      g1();
    } else if (current == 5) {
      flag5 = true;
      var A = [
        0.043,
        0.045,
        0.048,
        0.125,
        0.312,
        0.604,
        0.825,
        0.891,
        0.978,
        0.899,
        0.862,
        0.807,
        0.651,
        0.355,
        0.289,
        0.255,
        0.212,
        0.165,
        0.117,
        0.075,
        0.073,
        0.07
      ];
      var B = [
        417,
        426,
        427,
        442,
        458,
        474,
        490,
        506,
        528,
        538,
        554,
        570,
        586,
        602,
        618,
        634,
        650,
        666,
        682,
        698,
        699,
        700
      ];
      var k = 0;
      var totalvalues = 21; //enter total number of values here
      setInterval(function () {
        x1 = A[k];
        y1 = B[k];
        if (k <= totalvalues) {
          document.getElementById('Pisplay1').innerHTML = y1;
          document.getElementById('Pisplay2').innerHTML = x1.toFixed(3);
          k += 1;
        }
        if (k == totalvalues) {
          document.getElementById('fun9').style.display = 'none';
        }
      }, 700);
      g1();
    }
    checkall();
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f10() {
  document.getElementById('rect854').style.cursor = 'default';
  document.getElementById('cuvette1').style.display = 'block';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('water_in_cuvette').style.display = 'block';
  document.getElementById('cuvette2').style.display = 'block';
  document.getElementById('KMnO4_in_cuvette').style.display = 'block';
  if (c == 10) {
    document.getElementById('fun10').style.display = 'none';
  } else if (c == 23) {
    document.getElementById('fun23').style.display = 'none';
  }
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('water_in_cuvette').style.display = 'block';
    document.getElementById('Grinch').style.display = 'block';
    c++;
  }, 1500);
}

function g1() {
  var dps = []; // dataPoints
  var chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: heading
    },
    axisX: {
      title: 'Wavelength (nm)',
      maximum: 700,
      minimum: 410,
      interval: 50
    },
    axisY: {
      title: 'A',
      maximum: maxY,
      interval: mi,
      minimum: 0
    },
    data: [
      {
        type: 'line',
        dataPoints: dps
      }
    ]
  });
  //var op= 0;
  var xVal;
  var yVal;
  var updateInterval = 700;
  var dataLength = 31; // number of dataPoints visible at any point

  var updateChart = function (count) {
    count = count || 1;

    for (var j = 0; j < 31; j++) {
      yVal = x1;
      xVal = y1;
      dps.push({
        x: xVal,
        y: yVal
      });
    }

    if (dps.length > dataLength) {
      dps.shift();
    }

    if (xVal >= 700) clearInterval(ci1);
    chart.render();
  };
  updateChart(dataLength);
  ci1 = setInterval(function () {
    updateChart();
  }, updateInterval);
}

function g2() {
  var chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: 'Comaparison between samples of different concentrations',
      fontSize: 10
    },
    legend: {
      fontSize: 7
    },
    axisY: {
      minimum: 0,
      maximum: 1,
      interval: 0.3
    },
    /*   axisX: {
                valueFormatString: "MMM YYYY"
            },
            axisY2: {
                title: "Median List Price",
                prefix: "$",
                suffix: "K"
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                verticalAlign: "top",
                horizontalAlign: "center",
                dockInsidePlotArea: true,
                itemclick: toogleDataSeries
            },
        */
    data: [
      {
        type: 'line',
        //axisYType: "secondary",
        name: 'Sample 1',
        showInLegend: true,
        markerSize: 0,
        //yValueFormatString: "$#,###k",
        dataPoints: [
          { x: 417, y: 0.0006 },
          { x: 426, y: 0.0009 },
          { x: 427, y: 0.0015 },
          { x: 442, y: 0.0065 },
          { x: 458, y: 0.0195 },
          { x: 474, y: 0.0451 },
          { x: 490, y: 0.0905 },
          { x: 506, y: 0.1377 },
          { x: 528, y: 0.1789 },
          { x: 538, y: 0.1611 },
          { x: 554, y: 0.1568 },
          { x: 570, y: 0.1092 },
          { x: 586, y: 0.0383 },
          { x: 602, y: 0.0189 },
          { x: 618, y: 0.0152 },
          { x: 634, y: 0.0133 },
          { x: 650, y: 0.0109 },
          { x: 666, y: 0.0082 },
          { x: 682, y: 0.0055 },
          { x: 698, y: 0.0033 },
          { x: 699, y: 0.0031 },
          { x: 700, y: 0.0029 }
        ]
      },
      {
        type: 'line',
        //axisYType: "secondary",
        name: 'Sample2',
        showInLegend: true,
        markerSize: 0,
        //yValueFormatString: "$#,###k",
        dataPoints: [
          { x: 417, y: 0.005 },
          { x: 426, y: 0.006 },
          { x: 427, y: 0.006 },
          { x: 442, y: 0.019 },
          { x: 458, y: 0.049 },
          { x: 474, y: 0.109 },
          { x: 490, y: 0.199 },
          { x: 506, y: 0.246 },
          { x: 528, y: 0.269 },
          { x: 538, y: 0.26 },
          { x: 554, y: 0.253 },
          { x: 570, y: 0.242 },
          { x: 586, y: 0.099 },
          { x: 602, y: 0.049 },
          { x: 618, y: 0.04 },
          { x: 634, y: 0.035 },
          { x: 650, y: 0.029 },
          { x: 666, y: 0.023 },
          { x: 682, y: 0.016 },
          { x: 698, y: 0.01 },
          { x: 699, y: 0.01 },
          { x: 700, y: 0.01 }
        ]
      },
      {
        type: 'line',
        //axisYType: "secondary",
        name: 'Sample 3',
        showInLegend: true,
        markerSize: 0,
        //yValueFormatString: "$#,###k",
        dataPoints: [
          { x: 417, y: 0.015 },
          { x: 426, y: 0.016 },
          { x: 427, y: 0.016 },
          { x: 442, y: 0.043 },
          { x: 458, y: 0.108 },
          { x: 474, y: 0.226 },
          { x: 490, y: 0.322 },
          { x: 506, y: 0.354 },
          { x: 528, y: 0.398 },
          { x: 538, y: 0.38 },
          { x: 554, y: 0.363 },
          { x: 570, y: 0.343 },
          { x: 586, y: 0.213 },
          { x: 602, y: 0.108 },
          { x: 618, y: 0.088 },
          { x: 634, y: 0.078 },
          { x: 650, y: 0.064 },
          { x: 666, y: 0.05 },
          { x: 682, y: 0.035 },
          { x: 698, y: 0.023 },
          { x: 699, y: 0.029 },
          { x: 700, y: 0.028 }
        ]
      },
      {
        type: 'line',
        //axisYType: "secondary",
        name: 'Sample4',
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: '$#,###k',
        dataPoints: [
          { x: 417, y: 0.029 },
          { x: 426, y: 0.031 },
          { x: 427, y: 0.033 },
          { x: 442, y: 0.085 },
          { x: 458, y: 0.213 },
          { x: 474, y: 0.412 },
          { x: 490, y: 0.563 },
          { x: 506, y: 0.608 },
          { x: 528, y: 0.667 },
          { x: 538, y: 0.613 },
          { x: 554, y: 0.588 },
          { x: 570, y: 0.55 },
          { x: 586, y: 0.411 },
          { x: 602, y: 0.215 },
          { x: 618, y: 0.174 },
          { x: 634, y: 0.154 },
          { x: 650, y: 0.128 },
          { x: 666, y: 0.1 },
          { x: 682, y: 0.07 },
          { x: 698, y: 0.045 },
          { x: 699, y: 0.043 },
          { x: 700, y: 0.04 }
        ]
      },
      {
        type: 'line',
        //axisYType: "secondary",
        name: 'Sample5',
        showInLegend: true,
        markerSize: 0,
        //yValueFormatString: "$#,###k",
        dataPoints: [
          { x: 417, y: 0.043 },
          { x: 426, y: 0.045 },
          { x: 427, y: 0.048 },
          { x: 442, y: 0.125 },
          { x: 458, y: 0.312 },
          { x: 474, y: 0.604 },
          { x: 490, y: 0.825 },
          { x: 506, y: 0.891 },
          { x: 528, y: 0.978 },
          { x: 538, y: 0.899 },
          { x: 554, y: 0.862 },
          { x: 570, y: 0.807 },
          { x: 586, y: 0.651 },
          { x: 602, y: 0.355 },
          { x: 618, y: 0.289 },
          { x: 634, y: 0.255 },
          { x: 650, y: 0.212 },
          { x: 666, y: 0.165 },
          { x: 682, y: 0.117 },
          { x: 698, y: 0.075 },
          { x: 699, y: 0.073 },
          { x: 700, y: 0.07 }
        ]
      }
    ]
  });
  chart.render();

  function toogleDataSeries(e) {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

function g3() {
  var dps = []; // dataPoints
  var chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: 'Absorbance vs Concentration'
    },
    axisX: {
      minimum: 0
    },
    axisY: {
      minimum: 0,
      gridThickness: 0
    },
    data: [
      {
        type: 'line',
        lineColor: 'white',
        dataPoints: dp1
      },
      {
        type: 'line',
        lineColor: 'black',
        markerSize: 0,
        dataPoints: trd1
      },
      {
        type: 'line',
        lineColor: 'white',
        dataPoints: redpt,
        markerSize: 8
      }
    ]
  });
  //var op= 0;
  var xVal = 0.001;
  var yVal = 0.001;
  var updateInterval = 700;
  var dataLength = 31; // number of dataPoints visible at any point

  var updateChart = function (count) {
    count = count || 1;

    for (var j = 0; j < 5; j++) {
      yVal += 0.001;
      xVal += 0.001;
      dps.push({
        x: xVal,
        y: yVal
      });
    }

    if (dps.length > dataLength) {
      dps.shift();
    }
    if (xVal >= 0.0005 && c == 14) clearInterval(ci);
    chart.render();
  };
  updateChart(dataLength);
  ci = setInterval(function () {
    updateChart();
  }, updateInterval);
}
