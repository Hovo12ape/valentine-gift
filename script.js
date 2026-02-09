// TELEPORT
function secretJump(id) {
  if (navigator.vibrate) navigator.vibrate(40);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// PASSWORD
function checkPassword() {
  const value = document.getElementById("pass").value;
  if (value.toLowerCase() === "love") {
    secretJump("letter");
    startTyping();
  } else {
    alert("Not quite ❤️");
  }
}

// TYPEWRITER
const text = `Ես նույնիսկ չեմ կարող բառերով ամբողջությամբ բացատրել,
թե որքան կարևոր ես դու իմ կյանքում։
Դու իմ երջանկությունն ես,
իմ խաղաղությունը,
իմ ամենասիրելի զգացմունքը։

Ես գնահատում եմ քեզ,
քո սիրտը,
քո հոգին,
քո ժպիտը։

Ես սիրում եմ քեզ ավելի,
քան բառերը կարող են ասել։`;

let i = 0;
function startTyping() {
  const el = document.getElementById("typeText");
  el.innerHTML = "";
  i = 0;
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 40);
}

// DARK MODE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// MUSIC
const music = document.getElementById("bgMusic");
document.getElementById("musicToggle").onclick = () => {
  music.paused ? music.play() : music.pause();
};

// HEARTS
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 500);
