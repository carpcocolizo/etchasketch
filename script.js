function normalSizeGrid() {
    for (let i = 0; i < 256; i++) {
      let container = document.querySelector("#container");
      let h = document.createElement("div");
      h.classList.add("normalGrid");
      container.appendChild(h);
    }
}

normalSizeGrid();

let drawBlack = document.querySelectorAll(".normalGrid");

drawBlack.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = color;
  });
});

let backToWhite = document.querySelector("#white")
backToWhite.addEventListener("click", () => {
  white();
});

function white() {
  drawBlack.forEach((div) => {
    div.style.cssText = "background:white"
  });
}

let smallSize = document.querySelector("#small")
smallSize.addEventListener("click", () => {
  clear(); small(); letItDraw();
});

function clear () {
  let containers = document.querySelector("#container");
  containers.innerHTML = " "
}

function small () { 
  for (let i = 0; i < 64; i++) {
    let container = document.querySelector("#container");
    let j = document.createElement("div");
    j.classList.add("smallGrid");
    container.appendChild(j);
  }
}

function letItDraw() {
  let drawBlack = document.querySelectorAll(".smallGrid");

  drawBlack.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.style.backgroundColor = color;
    });
  });
  let backToWhite = document.querySelector("#white")
  backToWhite.addEventListener("click", () => {
  white();
  });

  function white() {
  drawBlack.forEach((div) => {
    div.style.cssText = "background:white"
  });
}
}

let bigSize = document.querySelector("#big")
bigSize.addEventListener("click", () => {
  clear(); big(); letItDrawBig();
});

function big () { 
  for (let i = 0; i < 4096; i++) {
    let container = document.querySelector("#container");
    let k = document.createElement("div");
    k.setAttribute("id","bigGrid");
    container.appendChild(k);
  }
}

function letItDrawBig() {
  let drawBlack = document.querySelectorAll("#bigGrid");

  drawBlack.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.style.backgroundColor = color;
    });
  });
  let backToWhite = document.querySelector("#white")
  backToWhite.addEventListener("click", () => {
  white();
  });

  function white() {
  drawBlack.forEach((div) => {
    div.style.cssText = "background:white"
  });
}
}

let normalSize = document.querySelector("#normal")
normalSize.addEventListener("click", () => {
  clear(); normalSizeGrid(); letItDrawNormal();
});

function letItDrawNormal() {
  let drawBlack = document.querySelectorAll(".normalGrid");

  drawBlack.forEach((div) => {
    div.addEventListener("mouseover", () => {
    div.style.backgroundColor = color;
    });
  });
  let backToWhite = document.querySelector("#white")
  backToWhite.addEventListener("click", () => {
  white();
  });

  function white() {
  drawBlack.forEach((div) => {
    div.style.cssText = "background:white"
  });
}
}

let colorInput = document.getElementById("colorSelector");
color = document.getElementById("colorSelector").value;
colorInput.addEventListener("input", () => {
  check(); clear(); lookSize(); selectColor();
});

function selectColor() {
  if (x == "big") {
    let drawBlack = document.querySelectorAll("#bigGrid");
    color = document.getElementById("colorSelector").value;

    drawBlack.forEach((div) => {
      div.addEventListener("mouseover", () => {
      div.style.backgroundColor = color;
      });
    });
    let backToWhite = document.querySelector("#white")
    backToWhite.addEventListener("click", () => {
    white();
    });

    function white() {
    drawBlack.forEach((div) => {
    div.style.cssText = "background:white"
    });
    }
  } else if (x == "normal") {
      let drawBlack = document.querySelectorAll(".normalGrid");
      color = document.getElementById("colorSelector").value;

      drawBlack.forEach((div) => {
        div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color;
        });
      });
      let backToWhite = document.querySelector("#white")
      backToWhite.addEventListener("click", () => {
        white();
      });

      function white() {
      drawBlack.forEach((div) => {
        div.style.cssText = "background:white"
      });
      }
  } else {
    let drawBlack = document.querySelectorAll(".smallGrid");
    color = document.getElementById("colorSelector").value;

    drawBlack.forEach((div) => {
      div.addEventListener("mouseover", () => {
      div.style.backgroundColor = color;
      });
    });
    let backToWhite = document.querySelector("#white")
    backToWhite.addEventListener("click", () => {
    white();
    });

    function white() {
    drawBlack.forEach((div) => {
    div.style.cssText = "background:white"
    });
    }
  }
}

function lookSize() {
  if (x == "big") {
    big();
  } else if (x == "normal") {
    normalSizeGrid();
  } else {
    small();
  }
}

let x = ""
function check() {
  if (document.querySelectorAll("#bigGrid").length > 0) {
    x = "big"
  } else if (document.querySelectorAll(".normalGrid").length > 0) {
    x = "normal"
  } else {
    x = "small"
  }
}

