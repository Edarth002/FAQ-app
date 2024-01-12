let plusIcon = "./assets/images/icon-plus.svg";
let minusIcon = "./assets/images/icon-minus.svg";
let Ans1 = document.getElementById("ans1");
let Que1 = document.getElementById("Que1");
let Ans2 = document.getElementById("ans2");
let Que2 = document.getElementById("Que2");
let Ans3 = document.getElementById("ans3");
let Que3 = document.getElementById("Que3");
let Ans4 = document.getElementById("ans4");
let Que4 = document.getElementById("Que4");
Que1.addEventListener("click", () => {
  if (Ans1.style.display === "none") {
    Ans1.style.display = "block";
    Que1.src = minusIcon;
  } else {
    Ans1.style.display = "none";
    Que1.src = plusIcon;
  }
});
Que2.addEventListener("click", () => {
  if (Ans2.style.display === "none") {
    Ans2.style.display = "block";
    Que2.src = minusIcon;
  } else {
    Ans2.style.display = "none";
    Que2.src = plusIcon;
  }
});
Que3.addEventListener("click", () => {
  if (Ans3.style.display === "none") {
    Ans3.style.display = "block";
    Que3.src = minusIcon;
  } else {
    Ans3.style.display = "none";
    Que3.src = plusIcon;
  }
});
Que4.addEventListener("click", () => {
  if (Ans4.style.display === "none") {
    Ans4.style.display = "block";
    Que4.src = minusIcon;
  } else {
    Ans4.style.display = "none";
    Que4.src = plusIcon;
  }
});
