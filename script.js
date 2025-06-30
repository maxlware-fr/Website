//
// █▀▄▀█ ▄▀█ █▀▄ █▄░█ █░█ ▄█░ █▀█ ▄▀█ █▀█ █▀▀
// █░▀░█ █▀█ █▄▀ █░▀█ █▀█ ░█▄ █▄█ █▀█ █▀▄ ██▄
// 
// Version : 9.2
//

console.log("█▀▄▀█ ▄▀█ █▀▄ █▄░█ █░█ ▄█░ █▀█ ▄▀█ █▀█ █▀▀")
console.log("░▀░█ █▀█ █▄▀ █░▀█ █▀█ ░█▄ █▄█ █▀█ █▀▄ ██▄")

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-trail');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    createParticle(e.clientX, e.clientY);
});

function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(counter);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

const funFacts = [
    "Je peux coder en mangeant des pizzas 🍕",
    "J'ai déjà debuggé en rêve 💤",
    "Mon IDE préféré est VS Code + 50 extensions 🛠️",
    "Je préfère les tabs aux espaces 🎸",
    "J'ai 20 projets non finis dans mon GitHub 📂",
    "J'ai déjà essayé de coder en mangeant... 🍕"
];

document.getElementById('fact-generator').addEventListener('click', () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.querySelector('.fun-fact').textContent = randomFact;
});

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function createParticle(x, y) {
    particles.push({
        x, y,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: `hsl(${Math.random() * 60 + 200}, 100%, 50%)`,
        life: 100
    });
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX;
        particles[i].y += particles[i].speedY;
        particles[i].life--;
        
        if (particles[i].life <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animateParticles() {
    handleParticles();
    drawParticles();
    requestAnimationFrame(animateParticles);
}

animateParticles();

VanillaTilt.init(document.querySelectorAll(".bento-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      const content = document.getElementById('main-content');

      loader.classList.add('fade-out');
      document.body.classList.remove('loading');

      setTimeout(() => {
        loader.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('visible');
      }, 600);
    }, 1500);
  });


