var c = 0;
var wavelength = 510;
var absorbance = 0;
function f1() {
  c++;
  if (c == 1) {
    document.getElementById('Green_LED').style.display = 'block';
    document.getElementById('Red_LED').style.display = 'none';
    document.getElementById('fun1').style.display = 'none';
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
  } else if (c == 10) {
    f10();
    document.getElementById('KMnO4_in_beaker').style.fill = '#b15eba';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#b15eba';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#b15eba';
    document.getElementById('KMnO4_in_specto').style.fill = '#b15eba';
  } else if (c == 18) {
    f18();
    document.getElementById('KMnO4_in_beaker').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#963b9c';
    document.getElementById('KMnO4_in_specto').style.fill = '#963b9c';
  } else if (c == 26) {
    f26();
    document.getElementById('KMnO4_in_beaker').style.fill = '#812285';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#812285';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#812285';
    document.getElementById('KMnO4_in_specto').style.fill = '#812285';
  } else if (c == 34) {
    f34();
    document.getElementById('KMnO4_in_beaker').style.fill = '#660066';
    document.getElementById('KMnO4_in_cuvette').style.fill = '#660066';
    document.getElementById('KMnO4_in_micro pipette').style.fill = '#660066';
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
      document.getElementById('KMnO4_in_micro pipette').style.display = 'block';
    }, 1500);
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

function f5() {
  document.getElementById('fun5').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_micro pipette').style.display = 'none';
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

function f8() {
  c++;
  if (c == 8) {
    var A = [
      1.452,
      1.448,
      1.438,
      1.438,
      1.432,
      1.441,
      1.444,
      1.47,
      1.5,
      1.536,
      1.587,
      1.635,
      1.678,
      1.724,
      1.746,
      1.764,
      1.77,
      1.772,
      1.789,
      1.784,
      1.756,
      1.744,
      1.719,
      1.683,
      1.655,
      1.639,
      1.631,
      1.61,
      1.611,
      1.626,
      1.654
    ];
    setInterval(function () {
      absorbance = A[wavelength - 510];
      y1 = wavelength;
      x1 = absorbance;
      if (wavelength <= 540) {
        document.getElementById('Pisplay1').innerHTML = wavelength;
        document.getElementById('Pisplay2').innerHTML = absorbance;
        wavelength += 1;
      }
      if (wavelength == 540) {
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

function f10() {
  document.getElementById('fun10').style.display = 'none';
}

function f11() {
  document.getElementById('fun11').style.display = 'none';
}

function f12() {
  document.getElementById('fun12').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_micro pipette').style.display = 'block';
  }, 1500);
}
function f13() {
  document.getElementById('fun13').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_micro pipette').style.display = 'none';
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
  wavelength = 510;
  var A = [
    2.011,
    2.015,
    2.011,
    2.006,
    2.033,
    2.028,
    2.033,
    2.04,
    2.045,
    2.042,
    2.07,
    2.086,
    2.082,
    2.087,
    2.082,
    2.088,
    2.128,
    2.11,
    2.15,
    2.143,
    2.125,
    2.118,
    2.12,
    2.106,
    2.11,
    2.1,
    2.09,
    2.09,
    2.08,
    2.07,
    2.06
  ];
  setInterval(function () {
    absorbance = A[wavelength - 510];
    y1 = wavelength;
    x1 = absorbance;
    if (wavelength <= 540) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      wavelength += 1;
    }
    if (wavelength == 540) {
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
    document.getElementById('KMnO4_in_micro pipette').style.display = 'block';
  }, 1500);
}

function f21() {
  document.getElementById('fun21').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_micro pipette').style.display = 'none';
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
    2.135,
    2.14,
    2.14,
    2.16,
    2.18,
    2.203,
    2.22,
    2.243,
    2.264,
    2.27,
    2.28,
    2.299,
    2.36,
    2.361,
    2.364,
    2.368,
    2.37,
    2.38,
    2.388,
    2.371,
    2.37,
    2.365,
    2.36,
    2.301,
    2.295,
    2.29,
    2.285,
    2.285,
    2.28,
    2.28,
    2.275
  ];
  setInterval(function () {
    absorbance = A[wavelength - 510];
    y1 = wavelength;
    x1 = absorbance;
    if (wavelength <= 540) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      wavelength += 1;
    }
    if (wavelength == 537) {
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
    document.getElementById('KMnO4_in_micro pipette').style.display = 'block';
  }, 1500);
}
function f29() {
  document.getElementById('fun29').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_micro pipette').style.display = 'none';
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
    2.47,
    2.48,
    2.49,
    2.5,
    2.51,
    2.52,
    2.53,
    2.54,
    2.55,
    2.56,
    2.57,
    2.58,
    2.59,
    2.6,
    2.61,
    2.62,
    2.63,
    2.65,
    2.666,
    2.64,
    2.62,
    2.6,
    2.59,
    2.59,
    2.58,
    2.56,
    2.54,
    2.45,
    2.451,
    2.46,
    2.48
  ];
  setInterval(function () {
    absorbance = A[wavelength - 510];
    y1 = wavelength;
    x1 = absorbance;
    if (wavelength <= 540) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      wavelength += 1;
    }
    if (wavelength > 535) {
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

function f34() {
  document.getElementById('fun34').style.display = 'none';
}

function f35() {
  document.getElementById('fun35').style.display = 'none';
}
function f36() {
  document.getElementById('fun36').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_micro pipette').style.display = 'block';
  }, 1500);
}
function f37() {
  document.getElementById('fun37').style.display = 'none';
  setTimeout(function () {
    document.getElementById('KMnO4_in_cuvette').style.display = 'block';
    document.getElementById('KMnO4_in_micro pipette').style.display = 'none';
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
    2.717,
    2.728,
    2.739,
    2.75,
    2.761,
    2.772,
    2.783,
    2.794,
    2.805,
    2.816,
    2.827,
    2.838,
    2.849,
    2.86,
    2.871,
    2.882,
    2.893,
    2.915,
    2.9326,
    2.904,
    2.882,
    2.86,
    2.849,
    2.849,
    2.838,
    2.816,
    2.794,
    2.695,
    2.6961,
    2.706,
    2.728
  ];
  setInterval(function () {
    absorbance = A[wavelength - 510];
    y1 = wavelength;
    x1 = absorbance;
    if (wavelength <= 540) {
      document.getElementById('Pisplay1').innerHTML = wavelength;
      document.getElementById('Pisplay2').innerHTML = absorbance;
      wavelength += 1;
    }
    if (wavelength > 535) {
      document.getElementById('fun40').style.display = 'none';
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
    console.log(c);
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
          { x: 510, y: 1.452 },
          { x: 511, y: 1.448 },
          { x: 512, y: 1.438 },
          { x: 513, y: 1.438 },
          { x: 514, y: 1.432 },
          { x: 515, y: 1.441 },
          { x: 516, y: 1.444 },
          { x: 517, y: 1.47 },
          { x: 518, y: 1.5 },
          { x: 519, y: 1.536 },
          { x: 520, y: 1.587 },
          { x: 521, y: 1.635 },
          { x: 522, y: 1.678 },
          { x: 523, y: 1.724 },
          { x: 524, y: 1.746 },
          { x: 525, y: 1.764 },
          { x: 526, y: 1.77 },
          { x: 527, y: 1.772 },
          { x: 528, y: 1.789 },
          { x: 529, y: 1.784 },
          { x: 530, y: 1.756 },
          { x: 531, y: 1.744 },
          { x: 532, y: 1.719 },
          { x: 533, y: 1.683 },
          { x: 534, y: 1.655 },
          { x: 535, y: 1.639 },
          { x: 536, y: 1.631 },
          { x: 537, y: 1.61 },
          { x: 538, y: 1.611 },
          { x: 539, y: 1.626 },
          { x: 540, y: 1.654 }
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
          { x: 510, y: 2.011 },
          { x: 511, y: 2.015 },
          { x: 512, y: 2.011 },
          { x: 513, y: 2.006 },
          { x: 514, y: 2.033 },
          { x: 515, y: 2.028 },
          { x: 516, y: 2.033 },
          { x: 517, y: 2.04 },
          { x: 518, y: 2.045 },
          { x: 519, y: 2.042 },
          { x: 520, y: 2.07 },
          { x: 521, y: 2.086 },
          { x: 522, y: 2.082 },
          { x: 523, y: 2.087 },
          { x: 524, y: 2.082 },
          { x: 525, y: 2.088 },
          { x: 526, y: 2.128 },
          { x: 527, y: 2.11 },
          { x: 528, y: 2.15 },
          { x: 529, y: 2.143 },
          { x: 530, y: 2.125 },
          { x: 531, y: 2.118 },
          { x: 532, y: 2.12 },
          { x: 533, y: 2.106 },
          { x: 534, y: 2.11 },
          { x: 535, y: 2.1 },
          { x: 536, y: 2.09 },
          { x: 537, y: 2.09 },
          { x: 538, y: 2.08 },
          { x: 539, y: 2.07 },
          { x: 540, y: 2.06 }
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
          { x: 510, y: 2.135 },
          { x: 511, y: 2.14 },
          { x: 512, y: 2.14 },
          { x: 513, y: 2.16 },
          { x: 514, y: 2.18 },
          { x: 515, y: 2.203 },
          { x: 516, y: 2.22 },
          { x: 517, y: 2.243 },
          { x: 518, y: 2.264 },
          { x: 519, y: 2.27 },
          { x: 520, y: 2.28 },
          { x: 521, y: 2.299 },
          { x: 522, y: 2.36 },
          { x: 523, y: 2.361 },
          { x: 524, y: 2.364 },
          { x: 525, y: 2.368 },
          { x: 526, y: 2.37 },
          { x: 527, y: 2.38 },
          { x: 528, y: 2.388 },
          { x: 529, y: 2.371 },
          { x: 530, y: 2.37 },
          { x: 531, y: 2.365 },
          { x: 532, y: 2.36 },
          { x: 533, y: 2.301 },
          { x: 534, y: 2.295 },
          { x: 535, y: 2.29 },
          { x: 536, y: 2.285 },
          { x: 537, y: 2.285 },
          { x: 538, y: 2.28 },
          { x: 539, y: 2.28 },
          { x: 540, y: 2.275 }
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
          { x: 510, y: 2.47 },
          { x: 511, y: 2.48 },
          { x: 512, y: 2.49 },
          { x: 513, y: 2.5 },
          { x: 514, y: 2.51 },
          { x: 515, y: 2.52 },
          { x: 516, y: 2.53 },
          { x: 517, y: 2.54 },
          { x: 518, y: 2.55 },
          { x: 519, y: 2.56 },
          { x: 520, y: 2.57 },
          { x: 521, y: 2.58 },
          { x: 522, y: 2.59 },
          { x: 523, y: 2.6 },
          { x: 524, y: 2.61 },
          { x: 525, y: 2.62 },
          { x: 526, y: 2.6 },
          { x: 527, y: 2.65 },
          { x: 528, y: 2.666 },
          { x: 529, y: 2.64 },
          { x: 530, y: 2.62 },
          { x: 531, y: 2.6 },
          { x: 532, y: 2.59 },
          { x: 533, y: 2.59 },
          { x: 534, y: 2.58 },
          { x: 535, y: 2.56 },
          { x: 536, y: 2.54 },
          { x: 537, y: 2.45 },
          { x: 538, y: 2.451 },
          { x: 539, y: 2.46 },
          { x: 540, y: 2.48 }
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
          { x: 510, y: 2.717 },
          { x: 511, y: 2.728 },
          { x: 512, y: 2.739 },
          { x: 513, y: 2.75 },
          { x: 514, y: 2.761 },
          { x: 515, y: 2.772 },
          { x: 516, y: 2.783 },
          { x: 517, y: 2.794 },
          { x: 518, y: 2.805 },
          { x: 519, y: 2.816 },
          { x: 520, y: 2.827 },
          { x: 521, y: 2.838 },
          { x: 522, y: 2.849 },
          { x: 523, y: 2.86 },
          { x: 524, y: 2.871 },
          { x: 525, y: 2.882 },
          { x: 526, y: 2.893 },
          { x: 527, y: 2.915 },
          { x: 528, y: 2.9326 },
          { x: 529, y: 2.904 },
          { x: 530, y: 2.882 },
          { x: 531, y: 2.86 },
          { x: 532, y: 2.849 },
          { x: 533, y: 2.849 },
          { x: 534, y: 2.58 },
          { x: 535, y: 2.838 },
          { x: 536, y: 2.816 },
          { x: 537, y: 2.794 },
          { x: 538, y: 2.695 },
          { x: 539, y: 2.6961 },
          { x: 540, y: 2.706 }
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
