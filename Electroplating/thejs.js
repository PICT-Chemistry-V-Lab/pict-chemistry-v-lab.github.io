var c = 0;
var t = 0;
document.getElementById('beaker7').style.cursor = 'pointer';
c = c + 1;
function f1() {
  if (c == 1) {
    document.getElementById('beaker7').style.cursor = 'default';
    document.getElementById('box').style.cursor = 'pointer';
    document.getElementById('fun1').style.display = 'none';
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f2() {
  c = c + 1;
  if (c == 2) {
    document.getElementById('box').style.cursor = 'default';
    document.getElementById('weighingmachine7').style.cursor = 'pointer';
    document.getElementById('shield').style.cursor = 'pointer';
    document.getElementById('Display').style.cursor = 'pointer';

    document.getElementById('fun2').style.display = 'none';
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f3() {
  c = c + 1;
  delayInMilliseconds = 1000;
  if (c == 3) {
    document.getElementById('weighingmachine7').style.cursor = 'default';
    document.getElementById('shield').style.cursor = 'default';
    document.getElementById('Display').style.cursor = 'default';
    document.getElementById('fancyspoon').style.cursor = 'pointer';
    document.getElementById('fun3').style.display = 'none';
    setTimeout(function () {
      document.getElementById('hellomoto1').style.display = 'block';
    }, 0);
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f4() {
  c = c + 1;
  var p = 0;
  if (c == 4) {
    delayInMilliseconds = 1000;
    document.getElementById('fun4').style.display = 'none';
    setInterval(function () {
      p = p + 1;
      if (p == 1) {
        document.getElementById('fancyspoon').style.cursor = 'default';
        document.getElementById('bluepowder2').style.display = 'block';
        document.getElementById('bluepowder2').style.cursor = 'pointer';
        document.getElementById('fancyspoon2').style.display = 'block';
        document.getElementById('fancyspoon2').style.cursor = 'pointer';
        document.getElementById('fancyspoon').style.display = 'none';
      }
      if (p == 2) {
        // document.getElementById("zero").style.display="none";
        //document.getElementById("thirtynine").style.display="block";
        // document.getElementById("fancyspoon2").style.display= "none";
      }
    }, delayInMilliseconds);
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f5() {
  c = c + 1;
  if (c == 5) {
    document.getElementById('fun5').style.display = 'none';

    setTimeout(function () {
      document.getElementById('hellomoto1').style.display = 'none';
      document.getElementById('hellomoto2').style.display = 'block';
      // document.getElementById("hellomoto2").style.cursor="pointer";
      document.getElementById('fancyspoon2').style.display = 'none';
      document.getElementById('fancyspoon3').style.display = 'block';
      document.getElementById('fancyspoon3').style.cursor = 'pointer';
    }, 1000);
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f6() {
  // document.getElementById("Glassrod").style.cursor="pointer";

  c = c + 1;
  if (c == 6) {
    document.getElementById('fun6').style.display = 'none';
    document.getElementById('bluepowder').style.display = 'block';
    document.getElementById('bluepowder').style.cursor = 'pointer';
    document.getElementById('bluepowder2').style.display = 'none';
    document.getElementById('hellomoto2').style.display = 'none';
    document.getElementById('hellomoto1').style.display = 'block';
    document.getElementById('glassrod').style.cursor = 'pointer';

    // document.getElementById("hellomoto1").style.cursor="pointer";
    setTimeout(function () {
      document.getElementById('fancyspoon3').style.display = 'none';
      document.getElementById('bluepowder').style.display = 'none';
    }, 2000);
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f7() {
  c = c + 1;
  if (c == 7) {
    document.getElementById('glassrod').style.cursor = 'default';
    document.getElementById('Battery1').style.cursor = 'pointer';

    document.getElementById('fun7').style.display = 'none';
    document.getElementById('sandpaper').style.cursor = 'pointer';
    setTimeout(function () {
      document.getElementById('glassrod').style.display = 'none';
    }, 5000);
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f8() {
  c = c + 1;
  if (c == 8) {
    document.getElementById('sandpaper').style.cursor = 'default';
    document.getElementById('Battery1').style.cursor = 'default';
    document.getElementById('fun8').style.display = 'none';
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f9() {
  c = c + 1;
  if (c == 9) {
    document.getElementById('fun9').style.display = 'none';
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f10() {
  c = c + 1;
  if (c == 11) {
    document.getElementById('ironnail-8').style.display = 'block';
    document.getElementById('blackwire').style.display = 'block';
    document.getElementById('blackwire').style.cursor = 'pointer';
    document.getElementById('clip1').style.display = 'block';
    document.getElementById('clip1').style.cursor = 'pointer';
    document.getElementById('ironnail').style.display = 'none';
    document.getElementById('fun10').style.display = 'none';
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f11() {
  c = c + 1;
  if (c == 10) {
    document.getElementById('metalplate-1').style.display = 'block';
    document.getElementById('metalplate-1').style.cursor = 'pointer';
    document.getElementById('redwire-2').style.display = 'block';
    document.getElementById('redwire-2').style.cursor = 'pointer';
    document.getElementById('clip2').style.display = 'block';
    document.getElementById('clip2').style.cursor = 'pointer';
    document.getElementById('metalplate').style.display = 'none';
    document.getElementById('fun11').style.display = 'none';
    setInterval(function () {
      document.getElementById('ironnail').style.display = 'block';
      document.getElementById('ironnail').style.cursor = 'pointer';
    }, 1000);
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f12() {
  c = c + 1;
  if (c == 12) {
    document.getElementById('fun12').style.display = 'none';
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function f13() {
  c = c + 1;
  if (c == 13) {
    document.getElementById('fun8').style.display = 'none';
  } else {
    c = c - 1;
    alert('You Clicked the wrong apparatus. \nRestarting the experiment...');
    location.reload();
  }
}

function add1() {
  f12();
}
/* function callit(){
     element= document.getElementById('fancyspoon2');
     svg.removeChild('fancyspoon')
 } */
