const canvas = document.getElementById('cinematicCanvas');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const particles = [];
const particleCount = 200; 

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * height;
    }

    reset() {
        this.x = Math.random() * width;
        this.y = height + 50;

        this.isEmber = Math.random() < 0.3;

        this.z = Math.random() * 1.5 + 0.5; 
        
        if (this.isEmber) {
            this.size = (Math.random() * 2 + 1) * this.z;
            this.vy = -(Math.random() * 3 + 2) * this.z; 
            this.vx = (Math.random() - 0.5) * 2;
            this.life = Math.random() * 0.8 + 0.2; 
            this.decay = Math.random() * 0.01 + 0.005; 
        } else {
            this.size = (Math.random() * 4 + 2) * this.z;
            this.vy = -(Math.random() * 1 + 0.2) * this.z; 
            this.vx = (Math.random() - 0.5) * 1.5;
            this.life = Math.random() * 0.5 + 0.1; 
            this.decay = Math.random() * 0.002 + 0.001;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.1;
        }
    }

    update(time) {
        const wind = Math.sin(time * 0.001 + this.y * 0.01) * 0.5;
        this.x += this.vx + wind;
        this.y += this.vy;
        
        if (!this.isEmber) {
            this.rotation += this.rotSpeed;
        }

        this.life -= this.decay;

        if (this.life <= 0 || this.y < -50 || this.x < -50 || this.x > width + 50) {
            this.reset();
        }
    }

    draw(ctx) {
        if (this.isEmber) {
            ctx.globalCompositeOperation = 'screen';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            
            ctx.fillStyle = `rgba(255, 200, 50, ${this.life})`;
            ctx.shadowBlur = this.size * 5;
            ctx.shadowColor = `rgba(255, 50, 0, ${this.life})`;
            
            ctx.fill();
            ctx.shadowBlur = 0; 
            ctx.globalCompositeOperation = 'source-over';
        } else {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            
            if (this.z > 1.2) {
                ctx.filter = `blur(${this.z}px)`;
            }

            ctx.fillStyle = `rgba(20, 20, 20, ${this.life})`;
            ctx.beginPath();
            ctx.moveTo(-this.size, -this.size/2);
            ctx.lineTo(this.size/2, -this.size);
            ctx.lineTo(this.size, this.size/2);
            ctx.lineTo(-this.size/2, this.size);
            ctx.closePath();
            ctx.fill();
            
            ctx.restore();
        }
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animate(time) {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
        p.update(time);
        p.draw(ctx);
    });

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);