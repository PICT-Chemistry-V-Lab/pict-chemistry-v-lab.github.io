var c = 0;
var P1 = '00:00';
var P2 = '00.00';
var P3 = '00.00';
document.getElementById('Pisplay2').style.display = 'none';
document.getElementById('Pisplay3').style.display = 'none';
document.getElementById('crucible0').style.display = 'block';
document.getElementById('crucible0').style.cursor = 'pointer';

//$("#Pisplay1").text(P1);
//$("#Pisplay2").text(P1);
//$("#Pisplay3").text(P1);

//coallid.click; coalincontainer.click; Containersticker.click;ContainerLabel.click;container.click
const container = document.querySelector('container');
container.disabled = true;
const coalincontainer = document.querySelector('coalincontainer');
coalincontainer.disabled = true;

//wt_coal=5&type_coal=peat&oven_temp=105&furnace_temp=800&wt_before_heating=25&wt_after_heating=20&wt_without_moisture=20&wt_without_vm=18&wt_ash=15&fur2=900
function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        '^(?:.*[&\\?]' +
          encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') +
          '(?:\\=([^&]*))?)?.*$',
        'i'
      ),
      '$1'
    )
  );
}

// Would write the value of the QueryString-variable called name to the console
$('#Pisplay1').text(getQueryStringValue('wt_coal'));
document.getElementById('Pisplay1').innerHTML = '00.00';

function f1() {
  c = c + 1;
  if (c == 1) {
    setTimeout(function () {
      document.getElementById('Pisplay1').innerHTML = '00.00';
      //console.log(getQueryStringValue("wt_coal"));
      document.getElementById('crucible0').style.display = 'none';
      document.getElementById('crucible0').style.cursor = 'pointer';
      document.getElementById('fun1').style.display = 'none';
      document.getElementById('crucible_to_weighingmachine').style.display =
        'block';
      document.getElementById('crucible_to_weighingmachine').style.cursor =
        'pointer';
    }, 800);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f2() {
  c = c + 1;
  if (c == 2) {
    setTimeout(function () {
      document.getElementById('Pisplay1').innerHTML = getQueryStringValue(
        'wt_before_heating'
      );
      document.getElementById('fun2').style.display = 'none';
      document.getElementById('Crucibleinmachine').style.display = 'block';
      document.getElementById('Crucibleinmachine').style.cursor = 'pointer';
      document.getElementById('crucible_to_weighingmachine').style.display =
        'none';
    }, 2000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
    alert('You clicked on the wrong apparatus');
  }
}

function f3() {
  c = c + 1;
  if (c == 3) {
    document.getElementById('container').style.display = 'block';
    document.getElementById('container').style.cursor = 'pointer';
    document.getElementById('coalincontainer').style.display = 'block';
    document.getElementById('coalincontainer').style.cursor = 'pointer';

    setTimeout(function () {
      document.getElementById('Pisplay1').innerHTML = '00.00';
      document.getElementById('fun3').style.display = 'none';
    }, 2000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f4() {
  c = c + 1;
  if (c == 4) {
    document.getElementById('container').style.cursor = 'default';
    document.getElementById('coalincontainer').style.cursor = 'default';
    document.getElementById('fancyspoon').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('fun4').style.display = 'none';
      document.getElementById('fun4').style.cursor = 'pointer';
    }, 2000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f5() {
  c = c + 1;
  if (c == 5) {
    document.getElementById('fancyspoon').style.cursor = 'default';
    document.getElementById('tongs').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('fun5').style.display = 'none';
      document.getElementById('fancyspoon').style.display = 'none';
      document.getElementById('fancyspoon').style.cursor = 'pointer';
      document.getElementById('fancyspoon1').style.display = 'block';
      document.getElementById('fancyspoon1').style.cursor = 'pointer';
      document.getElementById('blackpowder').style.display = 'block';
      document.getElementById('blackpowder').style.cursor = 'pointer';
    }, 1000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f6() {
  c = c + 1;
  if (c == 6) {
    setTimeout(function () {
      document.getElementById('blackpowder').style.display = 'none';
      document.getElementById('blackpowder').style.cursor = 'pointer';
      document.getElementById('blackpowderinmachine').style.display = 'block';
      document.getElementById('blackpowderinmachine').style.cursor = 'pointer';
      document.getElementById('fun6').style.display = 'none';

      document.getElementById(
        'Cruciblefilledwithpowderistakentomachine'
      ).style.display = 'block';
      document.getElementById(
        'Cruciblefilledwithpowderistakentomachine'
      ).style.cursor = 'pointer';
      document.getElementById('Crucibleinmachine').style.display = 'none';
      document.getElementById('fancyspoon1').style.display = 'none';
    }, 1000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f7() {
  c = c + 1;
  if (c == 7) {
    document.getElementById(
      'Cruciblefilledwithpowderistakentomachine'
    ).style.cursor = 'default';

    document.getElementById('tongs').style.cursor = 'pointer';
    document.getElementById('tongs').style.display = 'block';
    setTimeout(function () {
      document.getElementById(
        'Cruciblefilledwithpowderistakentomachine'
      ).style.display = 'none';
      document.getElementById('fun7').style.display = 'none';
      document.getElementById('Pisplay1').innerHTML = getQueryStringValue(
        'wt_coal'
      );
      document.getElementById('Jonathan').innerHTML = getQueryStringValue(
        'wt_coal'
      );
      document.getElementById('tongswilltaketofurnace').style.display = 'block';
      document.getElementById('tongswilltaketofurnace').style.cursor =
        'pointer';
    }, 1800);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f8() {
  c = c + 1;
  if (c == 8) {
    document.getElementById('tongs').style.cursor = 'default';
    document.getElementById('Pisplay1').innerHTML = '00.00';
    document.getElementById('ovendooropen').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('tongswilltaketofurnace').style.display = 'none';
      document.getElementById('fun8').style.display = 'none';
      document.getElementById('Crucibleinoven').style.display = 'block';
      // document.getElementById("Crucibleinoven").style.cursor = "pointer"
      document.getElementById('blackpowderinoven').style.display = 'block';
      // document.getElementById("blackpowderinoven").style.cursor = "pointer"
      document.getElementById('ovendoor').style.display = 'none';
      document.getElementById('Pisplay2').style.display = 'block';
      // document.getElementById("Pisplay2").style.cursor = "pointer"
      document.getElementById('Pisplay2').innerHTML = getQueryStringValue(
        'oven_temp'
      );
      document.getElementById('ovendoorknob').style.display = 'none';
      document.getElementById('tongs').style.display = 'none';
      document.getElementById('blackpowderinmachine').style.display = 'none';
    }, 4000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f9() {
  c = c + 1;
  if (c == 9) {
    document.getElementById('ovendooropen').style.cursor = 'default';
    document.getElementById('ovendoor').style.cursor = 'pointer';
    document.getElementById('fun9').style.display = 'none';
    document.getElementById('Crucibleinoven').style.display = 'block';

    // document.getElementById("Crucibleinoven").style.cursor = "pointer"

    document.getElementById('blackpowderinoven').style.display = 'block';
    // document.getElementById("blackpowderinoven").style.cursor = "pointer"
    document.getElementById('ovendoor').style.display = 'block';

    document.getElementById('Pisplay2').style.display = 'none';
    document.getElementById('ovendoorknob').style.display = 'block';
    // document.getElementById("ovendoorknob").style.cursor = "pointer"
    document.getElementById('tongs3').style.display = 'block';
    document.getElementById('tongs3').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('Second').style.display = 'none';
      document.getElementById('First').style.display = 'block';
    }, 6000);
    setTimeout(function () {
      document.getElementById('First').style.display = 'none';
      document.getElementById('Second').style.display = 'block';
    }, 1000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f10() {
  c = c + 1;
  if (c == 10) {
    document.getElementById('ovendoor').style.cursor = 'default';
    document.getElementById('ovendoor').style.display = 'none';
    document.getElementById('Pisplay2').style.display = 'block';
    document.getElementById('Pisplay2').style.cursor = 'pointer';
    document.getElementById('ovendoorknob').style.display = 'none';
    document.getElementById('ovendoor').style.cursor = 'default';
    setTimeout(function () {
      document.getElementById('fun10').style.display = 'none';
      document.getElementById('ovendoor').style.display = 'block';
      // document.getElementById("ovendoor").style.cursor = "pointer"
      document.getElementById('Pisplay2').style.display = 'none';
      document.getElementById('ovendoorknob').style.display = 'block';
      // document.getElementById("ovendoorknob").style.cursor = "pointer"
      document.getElementById('Crucibleindessicator').style.display = 'block';

      document.getElementById('Crucibleindessicator').style.cursor = 'pointer';

      document.getElementById('blackpowderindessicator').style.display =
        'block';

      document.getElementById('blackpowderindessicator').style.cursor =
        'pointer';

      document.getElementById('Crucibleinoven').style.display = 'none';
      document.getElementById('blackpowderinoven').style.display = 'none';
    }, 4000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f11() {
  c = c + 1;
  if (c == 11) {
    setTimeout(function () {
      document.getElementById('Crucibleindessicator').style.display = 'none';
      document.getElementById('Crucibleindessicatortofurnace').style.display =
        'block';
      document.getElementById('Crucibleindessicatortofurnace').style.cursor =
        'pointer';
      document.getElementById('fun11').style.display = 'none';
      document.getElementById('tongs3').style.display = 'none';
      document.getElementById('Joseph').innerHTML = getQueryStringValue(
        'wt_without_moisture'
      );
      document.getElementById('Jotaro').innerHTML = getQueryStringValue(
        'wt_without_moisture'
      );
      document.getElementById('Pisplay1').innerHTML = getQueryStringValue(
        'wt_without_moisture'
      );
      document.getElementById('tongs4').style.display = 'block';
      // document.getElementById("tongs4").style.cursor = "pointer"
    }, 2000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f12() {
  c = c + 1;
  if (c == 12) {
    document.getElementById('tongs4').style.cursor = 'pointer';
    document.getElementById('Crucibleindessicatortofurnace').style.cursor =
      'default';

    document.getElementById('fun12').style.display = 'none';
    //document.getElementById("f").style.display= "block"
    document.getElementById('Pisplay1').innerHTML = '00.00';
    document.getElementById('blackpowderDtoWM1').style.display = 'block';
    document.getElementById('blackpowderDtoWM1').style.cursor = 'pointer';
    document.getElementById('cruciblelid').style.display = 'none';
    document.getElementById('smollid').style.display = 'block';
    document.getElementById('smollid').style.cursor = 'pointer';

    document.getElementById('blackpowderindessicator').style.display = 'none';
    setTimeout(function () {
      document.getElementById('blackpowderDtoWM1').style.display = 'none';
    }, 800);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f13() {
  c = c + 1;
  if (c == 13) {
    document.getElementById('YashKale').style.display = 'none';
    document.getElementById('furnacedooropen').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('furnacedoor').style.display = 'none';
      document.getElementById('Pisplay3').style.display = 'block';
      // document.getElementById("Pisplay3").style.cursor = "pointer"
      document.getElementById('furnacedoorknob').style.display = 'none';
      document.getElementById('Crucibleindessicatortofurnace').style.display =
        'none';
      //document.getElementById("tongs4").style.display="none"
      document.getElementById('Pisplay1').innerHTML = '00:00';
      document.getElementById('Crucibleinfurnace').style.display = 'block';
      // document.getElementById("Crucibleinfurnace").style.cursor = "pointer"
      document.getElementById('Pisplay3').innerHTML = getQueryStringValue(
        'furnace_temp'
      );
      document.getElementById('blackpowderinfurnace').style.display = 'block';
      // document.getElementById("blackpowderinfurnace").style.cursor = "pointer"
      document.getElementById('blackpowderinfurnace').style.display = 'none';
    }, 6000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f14() {
  c = c + 1;
  if (c == 14) {
    document.getElementById('Crucibleinfurnace').style.display = 'none';
    document.getElementById('blackpowderinfurnace').style.display = 'none';
    document.getElementById('smollid').style.display = 'none';
    document.getElementById('fun14').style.display = 'none';
    document.getElementById('furnacedoor').style.display = 'block';
    document.getElementById('furnacedoor').style.cursor = 'pointer';
    document.getElementById('Pisplay3').style.display = 'none';
    document.getElementById('furnacedoorknob').style.display = 'block';
    document.getElementById('furnacedoorknob').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('Third').style.display = 'none';
      document.getElementById('First').style.display = 'block';
    }, 6000);
    setTimeout(function () {
      document.getElementById('First').style.display = 'none';
      document.getElementById('Third').style.display = 'block';
    }, 1000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f15() {
  c = c + 1;
  if (c == 15) {
    document.getElementById('smollid').style.display = 'block';
    document.getElementById('smollid').style.cursor = 'pointer';
    document.getElementById('fun15').style.display = 'none';
    document.getElementById('furnacedoor').style.display = 'none';
    document.getElementById('Pisplay3').style.display = 'block';
    document.getElementById('Pisplay3').style.cursor = 'pointer';
    document.getElementById('Pisplay3').innerHTML = getQueryStringValue(
      'furnace_temp'
    );
    document.getElementById('furnacedoorknob').style.display = 'none';
    document.getElementById('Crucibleinfurnace').style.display = 'block';
    document.getElementById('Crucibleinfurnace').style.cursor = 'pointer';
    //
    //document.getElementById("smollid").style.display="block"
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f16() {
  c = c + 1;
  if (c == 16) {
    document.getElementById('smollid').style.display = 'none';

    document.getElementById('blackpowderinfurnace').style.display = 'block';
    document.getElementById('fun16').style.display = 'none';
    setTimeout(function () {
      //document.getElementById("cruciblelid").style.display = "block"
      document.getElementById('furnacedoor').style.display = 'block';
      document.getElementById('furnacedoor').style.cursor = 'pointer';
      document.getElementById('Pisplay3').style.display = 'none';
      document.getElementById('furnacedoorknob').style.display = 'block';
      // document.getElementById("furnacedoorknob").style.cursor = "pointer"
      document.getElementById('CrucibleindessicatortoWM').style.display =
        'block';
      document.getElementById('CrucibleindessicatortoWM').style.cursor =
        'pointer';
      document.getElementById('blackpowderDtoWM').style.display = 'block';
      // document.getElementById("blackpowderDtoWM").style.cursor = "pointer"
      document.getElementById('Crucibleinfurnace').style.display = 'none';
      document.getElementById('blackpowderinfurnace').style.display = 'none';
      document.getElementById('tongs4').style.display = 'none';
      document.getElementById('Pisplay3').innerHTML = getQueryStringValue(
        'furnace_temp'
      );
      document.getElementById('tongs5').style.display = 'block';
      // document.getElementById("tongs5").style.cursor = "pointer"
      document.getElementById('smollid').style.display = 'none';
    }, 1000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f17() {
  c = c + 1;
  if (c == 17) {
    document.getElementById('fun17').style.display = 'none';
    document.getElementById('tongs5').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('Pisplay1').innerHTML = getQueryStringValue(
        'wt_without_vm'
      );
      document.getElementById('Josuke').innerHTML = getQueryStringValue(
        'wt_without_vm'
      );
    }, 3000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f18() {
  c = c + 1;
  if (c == 18) {
    document.getElementById('tongs5').style.cursor = 'default';
    document.getElementById('fun18').style.display = 'none';
    setTimeout(function () {
      document.getElementById('Pisplay1').innerHTML = '00.00';
      document.getElementById('blackpowderDtoWM').style.display = 'none';
      document.getElementById('blackpowderinfurnace2').style.display = 'block';
      document.getElementById('blackpowderinfurnace2').style.cursor = 'pointer';
      document.getElementById('Crucibleinfurnace2').style.display = 'block';
      document.getElementById('Crucibleinfurnace2').style.cursor = 'pointer';
      document.getElementById('furnacedoor').style.display = 'none';
      document.getElementById('Pisplay3').style.display = 'block';
      document.getElementById('Pisplay3').style.cursor = 'pointer';
      document.getElementById('Pisplay3').innerHTML = getQueryStringValue(
        'fur2'
      );
      document.getElementById('furnacedoorknob').style.display = 'none';
      document.getElementById('CrucibleindessicatortoWM').style.display =
        'none';
    }, 3000);
    setTimeout(function () {
      document.getElementById('furnacedoor').style.display = 'block';
      document.getElementById('Pisplay3').style.display = 'none';
      document.getElementById('blackpowderinfurnace2').style.display = 'none';
      document.getElementById('Crucibleinfurnace2').style.display = 'none';
      document.getElementById('tongs5').style.display = 'none';
      document.getElementById('tongs6').style.display = 'block';
      document.getElementById('furnacedoorknob').style.display = 'block';
    }, 5000);
    setTimeout(function () {
      document.getElementById('Fourth').style.display = 'none';
      document.getElementById('First').style.display = 'block';
    }, 11000);
    setTimeout(function () {
      document.getElementById('First').style.display = 'none';
      document.getElementById('Fourth').style.display = 'block';
    }, 6000);
    setTimeout(function () {
      document.getElementById('furnacedoor').style.display = 'none';
      document.getElementById('Pisplay3').style.display = 'block';
      document.getElementById('Pisplay3').innerHTML = getQueryStringValue(
        'fur2'
      );
      document.getElementById('tongs5').style.display = 'none';
      document.getElementById('furnacedoorknob').style.display = 'none';
      document.getElementById('blackpowderinfurnace2').style.display = 'block';
      document.getElementById('Crucibleinfurnace2').style.display = 'block';
    }, 12000);
    setTimeout(function () {
      document.getElementById('furnacedoor').style.display = 'block';
      document.getElementById('Pisplay3').style.display = 'none';
      document.getElementById('furnacedoorknob').style.display = 'block';
    }, 18000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f19() {
  c = c + 1;
  if (c == 19) {
    document.getElementById('fun19').style.display = 'none';
    setTimeout(function () {
      document.getElementById('blackpowderinfurnace2').style.display = 'none';
      document.getElementById('Crucibleinfurnace2').style.display = 'none';
      document.getElementById('CrucibleindessicatortoWM2').style.display =
        'block';
      document.getElementById('CrucibleindessicatortoWM2').style.cursor =
        'pointer';
      document.getElementById('blackpowderDtoWM2').style.display = 'block';
      document.getElementById('blackpowderDtoWM2').style.cursor = 'pointer';
    }, 3000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}

function f20() {
  c = c + 1;
  if (c == 20) {
    document.getElementById('fun20').style.display = 'none';
    setTimeout(function () {
      document.getElementById('Giorno').innerHTML = getQueryStringValue(
        'wt_ash'
      );
      document.getElementById('Pisplay1').innerHTML = getQueryStringValue(
        'wt_ash'
      );
    }, 3000);
  } else {
    c = c - 1;
    alert('You clicked on the wrong apparatus');
  }
}
