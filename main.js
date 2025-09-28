const presentBox = document.getElementById('present-box');
const heartsContainer = document.getElementById('hearts-container');
const surpriseCard = document.getElementById('surprise-card');
const internalParticles = document.querySelector('.internal-particles');
const audio = document.getElementById('surprise-audio');

// Cria partículas externas (corações, estrelas)
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const symbols = ['❤️','💖','💘','✨','🌸','🎉'];
  heart.textContent = symbols[Math.floor(Math.random()*symbols.length)];

  const x = (Math.random()*400-200)+'px';
  const y = -(Math.random()*400+100)+'px';
  const rotate = (Math.random()*720)+'deg';

  heart.style.setProperty('--x',x);
  heart.style.setProperty('--y',y);
  heart.style.setProperty('--rotate',rotate);

  heartsContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),1500);
}

// Partículas internas do card
function createInternalParticle() {
  const p = document.createElement('div');
  p.classList.add('card-particle');
  const symbols = ['💖','✨','🌸'];
  p.textContent = symbols[Math.floor(Math.random()*symbols.length)];
  p.style.left = Math.random()*90+'%';
  internalParticles.appendChild(p);
  setTimeout(()=>p.remove(),2000);
}

presentBox.addEventListener('click',()=>{
  // Explosão externa
  for(let i=0;i<50;i++){
    setTimeout(createHeart,i*10);
  }

  // Tampa animada
  presentBox.querySelector('.lid').style.transform='rotateX(60deg)';

  // Esconde a caixa
  setTimeout(()=>{ presentBox.style.display='none'; },300);

  // Mostra card
  setTimeout(()=>{
    surpriseCard.classList.add('show');
    // toca música
    audio.play();
    // cria partículas internas contínuas
    setInterval(createInternalParticle,200);
  },500);
});