c = 0;
p = 0;
function f0() {
  document.getElementById("beaker").style.display = "block";
  document.getElementById("beaker").style.cursor = "pointer";
}
function f1() {
  if (c == 0) {
    document.getElementById("beaker").style.cursor = "default";
    /* document.getElementById("aceticacidcontainer").style.display="block"; */
    document.getElementById("aceticacidcontainer").style.cursor = "pointer";
    c = c + 1;
    setTimeout(function () {
      document.getElementById("fun1").style.display = "none";
    }, 1000);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}
function f2() {
  document.getElementById("aceticacidcontainer").style.cursor = "default";
  document.getElementById("measuringcylinder").style.display = "block";
  document.getElementById("measuringcylinder").style.cursor = "pointer";

  if (c == 1) {
    c = c + 1;
    setTimeout(function () {
      document.getElementById("fun2").style.display = "none";
    }, 1500);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}
function f3() {
  document.getElementById("measuringcylinder").style.cursor = "default";

  ////////////////////////////////////////////////////////////////////////////c=4
  /* document.getElementById("measuringcylinder").style.cursor="default";
document.getElementById("phenolcontainer").style.display="block";
document.getElementById("phenolcontainer").style.cursor="pointer";    */
  if ((c == 2) | (c == 4) | (c == 10)) {
    if (c == 2) {
      document.getElementById("formaldehydeconatiner").style.display = "block";
      document.getElementById("formaldehydeconatiner").style.cursor = "pointer";
    } else if (c == 4) {
      document.getElementById("phenolcontainer").style.display = "block";
      document.getElementById("phenolcontainer").style.cursor = "pointer";
    }
    /*  else if(c==10){
        document.getElementById("H2SO4container").style.display="block";
document.getElementById("H2SO4container").style.cursor="pointer";
    } */
    c = c + 1;
    if (p == 0) {
      document.getElementById("fun3").style.display = "none";
      setTimeout(function () {
        document.getElementById("liq_late").style.display = "block";
      }, 5000);
      p++;
    } else if (p == 1) {
      document.getElementById("fun5").style.display = "none";
      p++;
    } else if (p == 2) {
      p++;
    }
    setTimeout(function () {
      document.getElementById("liq2").style.display = "block";
    }, 1000);
    setTimeout(function () {
      document.getElementById("liq2").style.display = "none";
      document.getElementById("measuringcylindertilt").style.display = "block";
      document.getElementById("measuringcylinder").style.display = "none";
      document.getElementById("liq3tilt").style.display = "block";
    }, 3500);
    setTimeout(function () {
      document.getElementById("measuringcylinder").style.display = "block";
      document.getElementById("measuringcylindertilt").style.display = "none";
      document.getElementById("liq3tilt").style.display = "none";
      if (p == 3) {
        document.getElementById("glassrod").style.display = "block";
        document.getElementById("fun10").style.display = "none";
      }
    }, 6000);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}

function f4() {
  document.getElementById("formaldehydeconatiner").style.pointer = "default";
  document.getElementById("measuringcylinder").style.display = "block";
  document.getElementById("measuringcylinder").style.cursor = "pointer";

  if (c == 3) {
    c = c + 1;
    setTimeout(function () {
      document.getElementById("fun4").style.display = "none";
    }, 1500);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}
function f5() {
  document.getElementById("phenolcontainer").style.cursor = "default";

  if (c == 5) {
    c = c + 1;
    setTimeout(function () {
      document.getElementById("fun6").style.display = "none";
      document.getElementById("fancyspoon1").style.display = "block";
      document.getElementById("fancyspoon1").style.cursor = "pointer";
    }, 1500);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}
function f6() {
  /*  document.getElementById("measuringcylinder").style.cursor="default";
document.getElementById("phenolcontainer").style.display="block";
document.getElementById("phenolcontainer").style.cursor="pointer";   */

  document.getElementById("fancyspoon1").style.cursor = "default";

  if (c == 6) {
    c = c + 1;
    setTimeout(function () {
      document.getElementById("fun7").style.display = "none";
      document.getElementById("fancyspoon2").style.display = "block";
      document.getElementById("fancyspoon2").style.cursor = "pointer";
      document.getElementById("fancyspoon1").style.display = "none";
      document.getElementById("whitepowder").style.display = "block";
    }, 3000);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}

function f7() {
  document.getElementById("fancyspoon2").style.cursor = "default";

  if (c == 7) {
    c = c + 1;
    setTimeout(function () {
      document.getElementById("fun8").style.display = "none";
      document.getElementById("fancyspoon3").style.display = "block";
      document.getElementById("fancyspoon3").style.cursor = "pointer";
      document.getElementById("fancyspoon2").style.display = "none";
      document.getElementById("whitepowderinmachine").style.display = "block";
      document.getElementById("whitepowder").style.display = "none";
      document.getElementById("Pisplay2").style.display = "block";
      document.getElementById("Pisplay1").style.display = "none";
    }, 2000);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}

function f8() {
  document.getElementById("fancyspoon3").style.cursor = "default";

  if (c == 8) {
    c = c + 1;
    document.getElementById("Pisplay1").style.display = "block";
    document.getElementById("Pisplay2").style.display = "none";
    setTimeout(function () {
      document.getElementById("fun9").style.display = "none";
      document.getElementById("fancyspoon3").style.display = "none";
      document.getElementById("whitepowderinmachine").style.display = "none";
      document.getElementById("whitepowder").style.display = "none";
    }, 3000);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}

function f9() {
  document.getElementById("glassrod").style.cursor = "pointer";
  if (c == 9) {
    c = c + 1;
    setTimeout(function () {
      document.getElementById("fun11").style.display = "none";
    }, 1500);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}

function f10() {
  if (c == 11) {
    setTimeout(function () {
      document.getElementById("fun12").style.display = "none";
      document.getElementById("slime").style.display = "block";
    }, 1500);
  } else {
    alert("You Clicked on the Wrong Apparatus. \nRestarting the experiment...");
    location.reload();
  }
}
