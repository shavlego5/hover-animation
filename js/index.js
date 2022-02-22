function full(event) {
  event.target.style.clipPath =
    "polygon(30% 0%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  }, 50);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  }, 100);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  }, 150);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 90%, 10% 70%, 10% 30%)";
  }, 200);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 10% 70%, 10% 30%)";
  }, 250);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 10% 30%)";
  }, 300);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
  }, 350);
}

function half(event) {
  event.currentTarget.children[0].children[0].style.marginTop = "-200px";
  event.currentTarget.children[0].children[1].style.marginLeft = "-200%";
  event.currentTarget.children[0].children[2].style.marginBottom = "-200px";
  event.currentTarget.children[0].style.background = "rgba(40, 116, 166, 0)";
  setTimeout(() => {
    event.target.style.borderRadius = "0px";
    event.target.parentNode.style.borderRadius = "0px";
  }, 200);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 10%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    }, 50);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    }, 100);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    }, 150);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 100%, 0% 70%, 0% 30%)";
    }, 200);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 0% 70%, 0% 30%)";
    }, 250);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 0% 30%)";
    }, 300);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
    }, 350);
  }, 450);
}

function expand(event) {
  event.currentTarget.style.clipPath =
    "polygon(0% 0%, 100% 0%, 100% 30%, 100% 100%, 70% 100%, 0% 100%, 0% 70%, 0% 30%)";
  event.currentTarget.children[0].style.background = "rgba(40, 116, 166, .8)";
  for (let i = 0; i < event.currentTarget.children[0].children.length; i++) {
    event.currentTarget.children[0].children[i].style.margin = "0";
  }
  setTimeout(() => {
    event.target.style.borderRadius = "30px";
    event.target.parentNode.style.borderRadius = "30px";
  }, 300);
}

function move(event) {
  let rect = event.target.getBoundingClientRect();
  let width = event.target.offsetWidth;
  let height = event.target.offsetHeight;
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log(x,y,width,height);

  //event.currentTarget.style.boxShadow = `${x}px ${y}px 10px 0px rgba(0,0,0,1)`;
}
