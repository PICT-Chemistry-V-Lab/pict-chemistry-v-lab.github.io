var c = 0;
var wavelength = 410;
var absorbance = 0;
function f1() {
  c++;
  if (c == 1) {
    document.getElementById('Green_LED').style.display = 'block';
    document.getElementById('Red_LED').style.display = 'none';
    document.getElementById('fun1').style.display = 'none';
  } else if (c == 51) {
    f51();
  } else if (c == 9) {
    f9();
  } else if (c == 17) {
    f17();
  } else if (c == 25) {
    f25();
  } else if (c == 33) {
    f33();
  } else if (c == 41) {
    f41();
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f2() {
  c++;
  if (c == 2) {
    document.getElementById('fun2').style.display = 'none';
    //document.getElementById("KMnO4_in_beaker").style.fill= "#9c44a3";
  } else if (c == 44) {
    f44();
    document.getElementById('KMnO4_in_beaker').style.fill = '#660066';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#660066';
    document.getElementById('KMnO4_in_dropper').style.fill = '#660066';
    document.getElementById('KMnO4_in_specto').style.fill = '#660066';
  } else if (c == 10) {
    f10();
    document.getElementById('KMnO4_in_beaker').style.fill = '#b15eba';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#b15eba';
    document.getElementById('KMnO4_in_dropper').style.fill = '#b15eba';
    document.getElementById('KMnO4_in_specto').style.fill = '#b15eba';
  } else if (c == 18) {
    f18();
    document.getElementById('KMnO4_in_beaker').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_dropper').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_specto').style.fill = '#963b9c';
  } else if (c == 26) {
    f26();
    document.getElementById('KMnO4_in_beaker').style.fill = '#812285';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#812285';
    document.getElementById('KMnO4_in_dropper').style.fill = '#812285';
    document.getElementById('KMnO4_in_specto').style.fill = '#812285';
  } else if (c == 34) {
    f34();
    document.getElementById('KMnO4_in_beaker').style.fill = '#660066';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#660066';
    document.getElementById('KMnO4_in_dropper').style.fill = '#660066';
    document.getElementById('KMnO4_in_specto').style.fill = '#660066';
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function extra2() {
  if (c == 6) {
    c++;
    f7();
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
    }, 1500);
  } else if (c == 48) {
    c++;
    f49();
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
    }, 1500);
  } else if (c == 14) {
    c++;
    f15();
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
    }, 1500);
  } else if (c == 38) {
    c++;
    f39();
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
    }, 1500);
  } else if (c == 22) {
    c++;
    f23();
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
    }, 1500);
  } else if (c == 30) {
    c++;
    f31();
    setTimeout(function () {
      document.getElementById('KMnO4_in_cuvette').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'none';
    }, 1500);
  }
}

function extra1() {
  c++;
  if (c == 5) {
    f5();
    setTimeout(function () {
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else if (c == 47) {
    f47();
    setTimeout(function () {
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else if (c == 13) {
    f13();
    setTimeout(function () {
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else if (c == 21) {
    f21();
    setTimeout(function () {
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else if (c == 29) {
    f29();
    setTimeout(function () {
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else if (c == 37) {
    f37();
    setTimeout(function () {
      document.getElementById('cuvette3').style.display = 'none';
      document.getElementById('cuvette2_v2').style.display = 'block';
    }, 1500);
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f3() {
  if (c == 45) {
    c++;
    f45();
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  }
  if (c == 2) {
    c++;
    document.getElementById('fun3').style.display = 'none';
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  } else if (c == 10) {
    c++;
    f11();
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  } else if (c == 18) {
    c++;
    f19();
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  } else if (c == 26) {
    c++;
    f27();
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  } else if (c == 34) {
    c++;
    f35();
    setTimeout(function () {
      document.getElementById('cuvette2').style.display = 'none';
      document.getElementById('cuvette3').style.display = 'block';
    }, 1500);
  }
}

function f4() {
  c++;
  if (c == 4) {
    document.getElementById('fun4').style.display = 'none';
    setTimeout(function () {
      document.getElementById('KMnO4_in_dropper').style.display = 'block';
    }, 1500);
  } else if (c == 46) {
    f46();
  } else if (c == 12) {
    f12();
  } else if (c == 36) {
    f36();
  } else if (c == 20) {
    f20();
  } else if (c == 28) {
    f28();
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}
function f47() {
  document.getElementById('fun47').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_dropper').style.display = 'none';
  }, 1500);
}
function f5() {
  document.getElementById('fun5').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_dropper').style.display = 'none';
  }, 1500);
}

function f6() {
  c++;
  if (c == 6) {
    document.getElementById('fun6').style.display = 'none';
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
  } else if (c == 48) {
    f48();
  } else if (c == 14) {
    f14();
  } else if (c == 38) {
    f38();
  } else if (c == 22) {
    f22();
  } else if (c == 30) {
    f30();
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f7() {
  document.getElementById('fun7').style.display = 'none';
  setTimeout(function () {
    document.getElementById('cuvette2').style.display = 'none';
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('close5').style.display = 'block';
    document.getElementById('KMnO4_in_specto').style.display = 'block';
  }, 1500);
}
function f49() {
  document.getElementById('fun49').style.display = 'none';
  setTimeout(function () {
    document.getElementById('cuvette2').style.display = 'none';
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('close5').style.display = 'block';
    document.getElementById('KMnO4_in_specto').style.display = 'block';
  }, 1500);
}

function f8() {
  c++;
  if (c == 8) {
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

    var B = [];
    var k = 0;
    var totalvalues = 0; //enter total number of values here
    setInterval(function () {
      x1 = A[k];
      y1 = B[k];
      if (k <= totalvalues) {
        document.getElementById('Pisplay1').innerHTML = wavelength;
        document.getElementById('Pisplay2').innerHTML = absorbance;
        k += 1;
      }
      if (k == totalvalues) {
        document.getElementById('fun8').style.display = 'none';
      }
    }, 700);
    g1();
    /*for (wavelength=510; wavelength<=540; wavelength++)
        {
            absorbance = A[wavelength-510];
            g1();
        } */
  } else if (c == 16) {
    f16();
  } else if (c == 24) {
    f24();
  } else if (c == 32) {
    f32();
  } else if (c == 40) {
    f40();
  } else if (c == 50) {
    f50();
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f9() {
  document.getElementById('close4').style.display = 'none';
  document.getElementById('close5').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  document.getElementById('close2').style.display = 'none';
  document.getElementById('close3').style.display = 'none';
  document.getElementById('close7').style.display = 'none';
  document.getElementById('close6').style.display = 'none';
  document.getElementById('KMnO4_in_specto').style.display = 'none';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('cuvette1').style.display = 'block';
  document.getElementById('water_in_cuvette').style.display = 'block';
  document.getElementById('cuvette2').style.display = 'block';
  document.getElementById('KMnO4_in_cuvette').style.display = 'block';
  document.getElementById('fun9').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('water_in_cuvette').style.display = 'block';
  }, 1500);
}
function f51() {
  document.getElementById('close4').style.display = 'none';
  document.getElementById('close5').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  document.getElementById('close2').style.display = 'none';
  document.getElementById('close3').style.display = 'none';
  document.getElementById('close7').style.display = 'none';
  document.getElementById('close6').style.display = 'none';
  document.getElementById('KMnO4_in_specto').style.display = 'none';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('cuvette1').style.display = 'block';
  document.getElementById('water_in_cuvette').style.display = 'block';
  document.getElementById('cuvette2').style.display = 'block';
  document.getElementById('KMnO4_in_cuvette').style.display = 'block';
  document.getElementById('fun51').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('water_in_cuvette').style.display = 'block';
  }, 1500);
}
function f10() {
  document.getElementById('fun10').style.display = 'none';
}

function f11() {
  document.getElementById('fun11').style.display = 'none';
}
function f45() {
  document.getElementById('fun45').style.display = 'none';
}
function f46() {
  document.getElementById('fun46').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_dropper').style.display = 'block';
  }, 1500);
}

function f12() {
  document.getElementById('fun12').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_dropper').style.display = 'block';
  }, 1500);
}
function f13() {
  document.getElementById('fun13').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_dropper').style.display = 'none';
  }, 1500);
}

function f14() {
  document.getElementById('fun14').style.display = 'none';
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
}

function f48() {
  document.getElementById('fun14').style.display = 'none';
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
}

function f15() {
  document.getElementById('fun15').style.display = 'none';
  setTimeout(function () {
    document.getElementById('cuvette2').style.display = 'none';
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('close5').style.display = 'block';
    document.getElementById('KMnO4_in_specto').style.display = 'block';
  }, 1500);
}

function f16() {
  wavelength = 417;
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
  var B = [];
  var k = 0;
  var totalvalues = 0; //enter total number of values here
  setInterval(function () {
    x1 = A[k];
    y1 = B[k];
    if (k <= totalvalues) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      k += 1;
    }
    if (k == totalvalues) {
      document.getElementById('fun16').style.display = 'none';
    }
  }, 700);
  g1();
}

function f17() {
  document.getElementById('close4').style.display = 'none';
  document.getElementById('close5').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  document.getElementById('close2').style.display = 'none';
  document.getElementById('close3').style.display = 'none';
  document.getElementById('close7').style.display = 'none';
  document.getElementById('close6').style.display = 'none';
  document.getElementById('KMnO4_in_specto').style.display = 'none';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('cuvette1').style.display = 'block';
  document.getElementById('water_in_cuvette').style.display = 'block';
  document.getElementById('cuvette2').style.display = 'block';
  document.getElementById('KMnO4_in_cuvette').style.display = 'block';
  document.getElementById('fun17').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('water_in_cuvette').style.display = 'block';
  }, 1500);
}

function f18() {
  document.getElementById('fun18').style.display = 'none';
}

function f19() {
  document.getElementById('fun19').style.display = 'none';
}

function f20() {
  document.getElementById('fun20').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_dropper').style.display = 'block';
  }, 1500);
}

function f21() {
  document.getElementById('fun21').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_dropper').style.display = 'none';
  }, 1500);
}

function f22() {
  document.getElementById('fun22').style.display = 'none';
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
}

function f23() {
  document.getElementById('fun23').style.display = 'none';
  setTimeout(function () {
    document.getElementById('cuvette2').style.display = 'none';
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('close5').style.display = 'block';
    document.getElementById('KMnO4_in_specto').style.display = 'block';
  }, 1500);
}

function f24() {
  wavelength = 510;

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
  var B = [];
  var k = 0;
  var totalvalues = 0; //enter total number of values here
  setInterval(function () {
    x1 = A[k];
    y1 = B[k];
    if (k <= totalvalues) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      k += 1;
    }
    if (k == totalvalues) {
      document.getElementById('fun24').style.display = 'none';
    }
  }, 700);
  g1();
}

function f25() {
  document.getElementById('close4').style.display = 'none';
  document.getElementById('close5').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  document.getElementById('close2').style.display = 'none';
  document.getElementById('close3').style.display = 'none';
  document.getElementById('close7').style.display = 'none';
  document.getElementById('close6').style.display = 'none';
  document.getElementById('KMnO4_in_specto').style.display = 'none';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('cuvette1').style.display = 'block';
  document.getElementById('water_in_cuvette').style.display = 'block';
  document.getElementById('cuvette2').style.display = 'block';
  document.getElementById('KMnO4_in_cuvette').style.display = 'block';
  document.getElementById('fun25').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('water_in_cuvette').style.display = 'block';
  }, 1500);
}

function f26() {
  document.getElementById('fun26').style.display = 'none';
}
function f27() {
  document.getElementById('fun27').style.display = 'none';
}
function f28() {
  document.getElementById('fun28').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_dropper').style.display = 'block';
  }, 1500);
}
function f29() {
  document.getElementById('fun29').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_dropper').style.display = 'none';
  }, 1500);
}

function f30() {
  document.getElementById('fun30').style.display = 'none';
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
}

function f31() {
  document.getElementById('fun31').style.display = 'none';
  setTimeout(function () {
    document.getElementById('cuvette2').style.display = 'none';
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('close5').style.display = 'block';
    document.getElementById('KMnO4_in_specto').style.display = 'block';
  }, 1500);
}

function f32() {
  wavelength = 510;

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
  var B = [];
  var k = 0;
  var totalvalues = 0; //enter total number of values here
  setInterval(function () {
    x1 = A[k];
    y1 = B[k];
    if (k <= totalvalues) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      k += 1;
    }
    if (k == totalvalues) {
      document.getElementById('fun32').style.display = 'none';
    }
  }, 700);
  g1();
}
function f33() {
  document.getElementById('close4').style.display = 'none';
  document.getElementById('close5').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  document.getElementById('close2').style.display = 'none';
  document.getElementById('close3').style.display = 'none';
  document.getElementById('close7').style.display = 'none';
  document.getElementById('close6').style.display = 'none';
  document.getElementById('KMnO4_in_specto').style.display = 'none';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('cuvette1').style.display = 'block';
  document.getElementById('water_in_cuvette').style.display = 'block';
  document.getElementById('cuvette2').style.display = 'block';
  document.getElementById('KMnO4_in_cuvette').style.display = 'block';
  document.getElementById('fun33').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('water_in_cuvette').style.display = 'block';
  }, 1500);
}
function f44() {
  document.getElementById('fun44').style.display = 'none';
}
function f34() {
  document.getElementById('fun34').style.display = 'none';
}

function f35() {
  document.getElementById('fun35').style.display = 'none';
}
function f36() {
  document.getElementById('fun36').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_dropper').style.display = 'block';
  }, 1500);
}
function f37() {
  document.getElementById('fun37').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_dropper').style.display = 'none';
  }, 1500);
}
function f38() {
  document.getElementById('fun38').style.display = 'none';
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
}
function f39() {
  document.getElementById('fun39').style.display = 'none';
  setTimeout(function () {
    document.getElementById('cuvette2').style.display = 'none';
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('close5').style.display = 'block';
    document.getElementById('KMnO4_in_specto').style.display = 'block';
  }, 1500);
}
function f40() {
  wavelength = 510;
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
  var B = [];
  var k = 0;
  var totalvalues = 0; //enter total number of values here
  setInterval(function () {
    x1 = A[k];
    y1 = B[k];
    if (k <= totalvalues) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      k += 1;
    }
    if (k == totalvalues) {
      document.getElementById('fun40').style.display = 'none';
    }
  }, 700);
  g1();
}

function f50() {
  wavelength = 510;
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
  var B = [];
  var k = 0;
  var totalvalues = 0; //enter total number of values here
  setInterval(function () {
    x1 = A[k];
    y1 = B[k];
    if (k <= totalvalues) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      k += 1;
    }
    if (k == totalvalues) {
      document.getElementById('fun50').style.display = 'none';
    }
  }, 700);
  g1();
}

function f41() {
  document.getElementById('close4').style.display = 'none';
  document.getElementById('close5').style.display = 'none';
  document.getElementById('close').style.display = 'none';
  document.getElementById('close2').style.display = 'none';
  document.getElementById('close3').style.display = 'none';
  document.getElementById('close7').style.display = 'none';
  document.getElementById('close6').style.display = 'none';
  document.getElementById('KMnO4_in_specto').style.display = 'none';
  document.getElementById('Pisplay1').innerHTML = '';
  document.getElementById('Pisplay2').innerHTML = '';
  document.getElementById('cuvette1').style.display = 'block';
  document.getElementById('water_in_cuvette').style.display = 'block';
  document.getElementById('cuvette2').style.display = 'block';
  document.getElementById('KMnO4_in_cuvette').style.display = 'block';
  document.getElementById('fun41').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'none';
    document.getElementById('cuvette1').style.display = 'block';
    document.getElementById('cuvette2').style.display = 'block';
    document.getElementById('water_in_cuvette').style.display = 'block';
  }, 1500);
}

function f42() {
  console.log(c);
  c += 1;
  if (c == 42) {
    g2();
    document.getElementById('fun42').style.display = 'none';
    console.log(c);
  } else if (c == 43) {
    f43();
    document.getElementById('fun43').style.display = 'none';
  } else {
    c--;
    alert('You Clicked on the Wrong Apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f43() {
  g3();
}

function g1() {
  var dps = []; // dataPoints
  var chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: 'Absorbance (mM) vs Volume of Base added (nm)'
    },
    data: [
      {
        type: 'line',
        dataPoints: dps
      }
    ]
  });
  //var op= 0;
  var xVal = 0;
  var yVal = 0;
  var updateInterval = 700;
  var dataLength = 31; // number of dataPoints visible at any point

  var updateChart = function (count) {
    count = count || 1;

    for (var j = 0; j < 31; j++) {
      yVal = absorbance;
      xVal = wavelength;
      dps.push({
        x: xVal,
        y: yVal
      });
    }

    if (dps.length > dataLength) {
      dps.shift();
    }
    chart.render();
  };
  updateChart(dataLength);
  setInterval(function () {
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
    data: [
      {
        type: 'line',
        dataPoints: dps
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
    chart.render();
  };
  updateChart(dataLength);
  setInterval(function () {
    updateChart();
  }, updateInterval);
}
