/* CSS Document 

TemplateMo 601 Chain Summit

https://templatemo.com/tm-601-chain-summit

*/

/* JavaScript Document
   Modified for HERCULES Project
*/

// Animate counter numbers (Updated logic for larger numbers like ports)
function animateCounters() {
   const counters = document.querySelectorAll('.stat-number');
   counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      // Ajustamos la velocidad dependiendo del tamaño del número
      const duration = 2000; // 2 segundos total
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      
      let current = 0;

      const timer = setInterval(() => {
         current += increment;
         
         // Si nos pasamos, mostramos el target final
         if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
         } else {
            counter.textContent = Math.floor(current);
         }
      }, stepTime);
   });
}

// Neural Network Animation (Mantener igual, encaja con el tema técnico)
function createNeuralNetwork() {
   const canvas = document.createElement('canvas');
   const ctx = canvas.getContext('2d');
   const container = document.getElementById('neuralNetwork');
   
   // Set canvas size
   function resize() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
   }
   
   window.addEventListener('resize', resize);
   resize();
   container.appendChild(canvas);

   const nodes = [];
   const maxNodes = 50;

   // Create nodes
   for (let i = 0; i < maxNodes; i++) {
      nodes.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         vx: (Math.random() - 0.5) * 2,
         vy: (Math.random() - 0.5) * 2
      });
   }

   function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ffff';
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';

      // Update and draw nodes
      nodes.forEach((node, i) => {
         node.x += node.vx;
         node.y += node.vy;

         // Bounce off walls
         if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
         if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

         ctx.beginPath();
         ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
         ctx.fill();

         // Connect nearby nodes
         for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[j].x - node.x;
            const dy = nodes[j].y - node.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
               ctx.beginPath();
               ctx.moveTo(node.x, node.y);
               ctx.lineTo(nodes[j].x, nodes[j].y);
               ctx.stroke();
            }
         }
      });

      requestAnimationFrame(draw);
   }

   draw();
}

// Particle System (Mantener igual)
function createParticles() {
   const container = document.getElementById('particles');
   const particleCount = 30;

   for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 10 + 5;
      particle.style.animation = `float ${duration}s infinite linear`;
      
      container.appendChild(particle);
   }
}

// Mobile Menu Toggle
function toggleMenu() {
   const navLinks = document.querySelector('.nav-links');
   const mobileMenu = document.querySelector('.mobile-menu');
   navLinks.classList.toggle('active');
   mobileMenu.classList.toggle('active');
}

// Initialize everything when page loads
window.addEventListener('load', () => {
   animateCounters();
   createNeuralNetwork();
   createParticles();
   // updateCountdown(); // Eliminado ya que no es un evento con fecha
});