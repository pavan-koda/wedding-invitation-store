// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ========== MOBILE MENU ==========
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navClose = document.getElementById('navClose');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
    navLinks.classList.add('active');
    navOverlay.classList.add('active');
    hamburger.classList.add('open');
}

function closeMenu() {
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburger.classList.remove('open');
}

hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

navClose.addEventListener('click', closeMenu);
navOverlay.addEventListener('click', closeMenu);

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll(
    '.service-card, .demo-card, .pricing-card, .step, .testimonial-card, .cta-content, .section-badge, .section-title, .section-subtitle'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 80);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.classList.add('reveal-on-scroll');
    revealObserver.observe(el);
});

// ========== COUNTER ANIMATION ==========
const counters = document.querySelectorAll('.stat-number');
let countersAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            countersAnimated = true;
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.count);
                let current = 0;
                const increment = target / 60;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 25);
            });
        }
    });
}, { threshold: 0.5 });

if (counters.length > 0) {
    counterObserver.observe(counters[0]);
}

// ========== FLOATING PARTICLES ==========
const particlesContainer = document.getElementById('particles');
const colors = ['#ff416c', '#ff4b2b', '#d81b60', '#8e24aa', '#e91e63', '#f48fb1'];

for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 12 + 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
}

// ========== FILTER TABS ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        serviceCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== DEMO MODAL ==========
const demoData = {
  wedding: {
    title: '💒 Wedding Invitation',
    wa: 'Hi!%20I%20want%20a%20Wedding%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#12001f 0%,#3d0a1f 50%,#1a0208 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#f9e4e8;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:10%;animation:dmFall 4s linear infinite;">🌸</span><span style="position:absolute;font-size:12px;left:58%;animation:dmFall 5s linear infinite 1.2s;">🌹</span><span style="position:absolute;font-size:14px;left:82%;animation:dmFall 4.5s linear infinite 2s;">🌸</span><span style="position:absolute;font-size:10px;left:35%;animation:dmFall 6s linear infinite 0.5s;">✨</span></div><p style="font-size:8px;letter-spacing:3px;color:#d4a0a8;text-transform:uppercase;margin:0 0 8px;">— You Are Cordially Invited —</p><p style="font-size:18px;font-weight:bold;color:#fff;margin:0;font-style:italic;">Praneeth</p><p style="font-size:16px;color:#e8b4c0;margin:3px 0;animation:dmPulse 2s infinite;">💕</p><p style="font-size:18px;font-weight:bold;color:#fff;margin:0 0 10px;font-style:italic;">Bhavya</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#e8b4c0,transparent);margin:0 auto 10px;"></div><p style="font-size:10px;color:#d4a0a8;margin:0 0 2px;">📅 February 19, 2026</p><p style="font-size:9px;color:#c09090;margin:0 0 14px;">🕙 10:00 AM • Hyderabad</p><div style="display:flex;gap:6px;margin-bottom:14px;"><div style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:6px 10px;text-align:center;"><div style="font-size:15px;font-weight:700;color:#fff;">15</div><div style="font-size:8px;color:#d4a0a8;">DAYS</div></div><div style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:6px 10px;text-align:center;"><div style="font-size:15px;font-weight:700;color:#fff;">08</div><div style="font-size:8px;color:#d4a0a8;">HRS</div></div><div style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:8px;padding:6px 10px;text-align:center;"><div style="font-size:15px;font-weight:700;color:#fff;">42</div><div style="font-size:8px;color:#d4a0a8;">MIN</div></div></div><div style="background:linear-gradient(135deg,#e91e63,#c2185b);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;animation:dmGlow 2s ease-in-out infinite;">Open Invitation ❤️</div></div>`
  },
  engagement: {
    title: '💍 Engagement Invitation',
    wa: 'Hi!%20I%20want%20an%20Engagement%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#1a0a2e 0%,#3d1a5e 50%,#1a0a2e 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#f0e0ff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:14px;left:15%;animation:dmFall 5s linear infinite;">✨</span><span style="position:absolute;font-size:12px;left:70%;animation:dmFall 4s linear infinite 1s;">💫</span><span style="position:absolute;font-size:10px;left:45%;animation:dmFall 6s linear infinite 2s;">⭐</span></div><p style="font-size:8px;letter-spacing:3px;color:#c9a0e8;text-transform:uppercase;margin:0 0 10px;">Ring Ceremony</p><div style="font-size:48px;margin:0 0 8px;animation:dmPulse 1.5s ease-in-out infinite;">💍</div><p style="font-size:18px;font-weight:bold;color:#fff;margin:0;font-style:italic;">Arjun & Priya</p><p style="font-size:10px;color:#c9a0e8;margin:6px 0 14px;">are getting Engaged!</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#c9a0e8,transparent);margin:0 auto 12px;"></div><div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:12px;padding:10px 18px;margin-bottom:14px;"><p style="font-size:11px;color:#dcc8f0;margin:0 0 4px;">📅 March 25, 2026</p><p style="font-size:10px;color:#b090d0;margin:0 0 4px;">🕒 6:30 PM onwards</p><p style="font-size:10px;color:#b090d0;margin:0;">📍 Grand Hall, Hyderabad</p></div><div style="background:linear-gradient(135deg,#9c27b0,#7b1fa2);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Join the Celebration 💍</div></div>`
  },
  birthday: {
    title: '🎂 Birthday Invitation',
    wa: 'Hi!%20I%20want%20a%20Birthday%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#0d0020 0%,#1a0040 50%,#0d0020 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#fff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:20px;left:5%;animation:dmFall 4s linear infinite;">🎈</span><span style="position:absolute;font-size:18px;left:80%;animation:dmFall 5s linear infinite 1s;">🎉</span><span style="position:absolute;font-size:16px;left:50%;animation:dmFall 4.5s linear infinite 2s;">🎊</span><span style="position:absolute;font-size:14px;left:25%;animation:dmFall 6s linear infinite 0.5s;">⭐</span></div><p style="font-size:8px;letter-spacing:3px;color:#f06292;text-transform:uppercase;margin:0 0 6px;">You're Invited!</p><div style="font-size:44px;margin:0 0 6px;animation:dmBounce 1.5s ease-in-out infinite;">🎂</div><p style="font-size:22px;font-weight:700;color:#f06292;margin:0;">Riya's</p><p style="font-size:16px;font-weight:600;color:#fff;margin:0 0 10px;">18th Birthday Party! 🎉</p><div style="width:50px;height:2px;background:linear-gradient(90deg,#e91e63,#ff9800);margin:0 auto 12px;border-radius:2px;"></div><p style="font-size:10px;color:#f8bbd9;margin:0 0 2px;">📅 April 10, 2026</p><p style="font-size:10px;color:#f8bbd9;margin:0 0 2px;">🕖 6:00 PM – 10:00 PM</p><p style="font-size:10px;color:#f8bbd9;margin:0 0 14px;">📍 The Party Lounge, Banjara Hills</p><div style="background:linear-gradient(135deg,#e91e63,#ff9800);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;animation:dmBounce 2s ease-in-out infinite;">RSVP Now 🎊</div></div>`
  },
  housewarming: {
    title: '🏠 House Warming Invitation',
    wa: 'Hi!%20I%20want%20a%20House%20Warming%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#1a0800 0%,#3d1a00 50%,#1a0800 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#ffe8cc;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;"><span style="position:absolute;font-size:12px;left:10%;top:22%;animation:dmTwinkle 2s ease-in-out infinite;">🪔</span><span style="position:absolute;font-size:10px;left:80%;top:18%;animation:dmTwinkle 2.5s ease-in-out infinite 0.5s;">🌸</span><span style="position:absolute;font-size:8px;left:45%;top:10%;animation:dmTwinkle 3s ease-in-out infinite 1s;">✨</span></div><p style="font-size:9px;letter-spacing:3px;color:#ffcc88;text-transform:uppercase;margin:0 0 8px;">Griha Pravesh</p><div style="font-size:44px;margin:0 0 8px;animation:dmBounce 3s ease-in-out infinite;">🏠</div><p style="font-size:16px;font-weight:bold;color:#ffd180;margin:0 0 4px;">Sharma Family</p><p style="font-size:10px;color:#ffb74d;margin:0 0 12px;">warmly invites you to the</p><p style="font-size:14px;font-weight:600;color:#fff;margin:0 0 12px;">House Warming Ceremony & Pooja</p><div style="background:rgba(255,200,100,0.15);border:1px solid rgba(255,200,100,0.3);border-radius:12px;padding:10px 18px;margin-bottom:14px;"><p style="font-size:10px;color:#ffcc88;margin:0 0 3px;">📅 May 5, 2026 • Vastu Shanti</p><p style="font-size:10px;color:#ffb74d;margin:0 0 3px;">🕘 9:00 AM – 12:00 PM</p><p style="font-size:10px;color:#ffb74d;margin:0;">📍 Plot No. 45, Jubilee Hills</p></div><div style="background:linear-gradient(135deg,#ff8f00,#e65100);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Bless Our New Home 🙏</div></div>`
  },
  anniversary: {
    title: '🎉 Anniversary Party Invitation',
    wa: 'Hi!%20I%20want%20an%20Anniversary%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#0d001a 0%,#2d0a2d 50%,#0d001a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#f9e0ff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:14px;left:8%;animation:dmFall 4s linear infinite;">❤️</span><span style="position:absolute;font-size:12px;left:75%;animation:dmFall 5s linear infinite 1.5s;">💜</span><span style="position:absolute;font-size:10px;left:40%;animation:dmFall 4.5s linear infinite 2.5s;">✨</span></div><p style="font-size:8px;letter-spacing:3px;color:#ce93d8;text-transform:uppercase;margin:0 0 8px;">Celebrating Together</p><div style="font-size:42px;margin:0 0 6px;animation:dmPulse 2s ease-in-out infinite;">❤️</div><p style="font-size:26px;font-weight:800;color:#fff;margin:0;">25<sup style="font-size:14px;">th</sup></p><p style="font-size:13px;color:#ce93d8;margin:2px 0 8px;">Wedding Anniversary</p><p style="font-size:16px;font-weight:bold;color:#fff;font-style:italic;margin:0 0 12px;">Ramesh & Sunita</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#ce93d8,transparent);margin:0 auto 12px;"></div><p style="font-size:10px;color:#ce93d8;margin:0 0 2px;">📅 June 15, 2026</p><p style="font-size:10px;color:#b39ddb;margin:0 0 14px;">🕖 7:00 PM • Royal Banquet Hall</p><div style="background:linear-gradient(135deg,#9c27b0,#e91e63);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Join the Celebration 🎉</div></div>`
  },
  baby: {
    title: '👶 Baby Shower Invitation',
    wa: 'Hi!%20I%20want%20a%20Baby%20Shower%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#e8f4fd 0%,#fce4ec 50%,#e8f5e9 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#424242;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:5%;animation:dmFall 5s linear infinite;">⭐</span><span style="position:absolute;font-size:12px;left:75%;animation:dmFall 4s linear infinite 1s;">🌟</span><span style="position:absolute;font-size:10px;left:45%;animation:dmFall 6s linear infinite 2s;">✨</span></div><p style="font-size:8px;letter-spacing:3px;color:#f48fb1;text-transform:uppercase;margin:0 0 8px;">A Little One Is Coming!</p><div style="font-size:44px;margin:0 0 6px;animation:dmBounce 2s ease-in-out infinite;">👶</div><p style="font-size:18px;font-weight:700;color:#e91e63;margin:0 0 4px;">Baby Shower</p><p style="font-size:12px;color:#666;margin:0 0 12px;">for</p><p style="font-size:16px;font-weight:600;color:#424242;margin:0 0 12px;">Neha & Rohan Mehta</p><div style="display:flex;gap:8px;margin-bottom:12px;"><span style="background:#fce4ec;padding:4px 10px;border-radius:20px;font-size:9px;color:#e91e63;">👗 It's a Girl!</span><span style="background:#e8eaf6;padding:4px 10px;border-radius:20px;font-size:9px;color:#3949ab;">🎁 Games & Gifts</span></div><p style="font-size:10px;color:#666;margin:0 0 2px;">📅 July 20, 2026 • 4:00 PM</p><p style="font-size:10px;color:#666;margin:0 0 14px;">📍 Home, Kondapur</p><div style="background:linear-gradient(135deg,#e91e63,#f48fb1);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">RSVP to Join 🎀</div></div>`
  },
  festival: {
    title: '🙏 Festival & Pooja Invitation',
    wa: 'Hi!%20I%20want%20a%20Festival%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#1a0800 0%,#3d1500 50%,#1a0800 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#ffe8cc;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;"><span style="position:absolute;font-size:14px;left:8%;top:25%;animation:dmDiya 1.5s ease-in-out infinite;">🪔</span><span style="position:absolute;font-size:12px;left:78%;top:22%;animation:dmDiya 2s ease-in-out infinite 0.5s;">🪔</span><span style="position:absolute;font-size:10px;left:45%;top:12%;animation:dmTwinkle 2s ease-in-out infinite 1s;">✨</span></div><p style="font-size:22px;color:#ffcc00;margin:0 0 4px;animation:dmPulse 2s infinite;">🕉️</p><p style="font-size:9px;letter-spacing:3px;color:#ffcc88;text-transform:uppercase;margin:0 0 8px;">Satyanarayan Pooja</p><div style="font-size:38px;margin:0 0 8px;animation:dmDiya 1.5s ease-in-out infinite;">🪔</div><p style="font-size:15px;font-weight:bold;color:#ffd180;margin:0 0 4px;">Reddy Family</p><p style="font-size:10px;color:#ffb74d;margin:0 0 12px;">seeks your divine blessings</p><div style="background:rgba(255,200,100,0.15);border:1px solid rgba(255,200,100,0.3);border-radius:12px;padding:10px 16px;margin-bottom:14px;"><p style="font-size:10px;color:#ffcc88;margin:0 0 3px;">📅 August 9, 2026</p><p style="font-size:10px;color:#ffb74d;margin:0 0 3px;">🕘 9:00 AM – 1:00 PM</p><p style="font-size:10px;color:#ffb74d;margin:0;">📍 H.No 23, Sainikpuri</p></div><div style="background:linear-gradient(135deg,#ff8f00,#bf360c);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Bless Us 🙏</div></div>`
  },
  graduation: {
    title: '🎓 Graduation Party Invitation',
    wa: 'Hi!%20I%20want%20a%20Graduation%20Party%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#000d1a 0%,#0a1a3d 50%,#000d1a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#fff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:10%;animation:dmFall 4s linear infinite;">⭐</span><span style="position:absolute;font-size:12px;left:70%;animation:dmFall 5s linear infinite 1s;">🌟</span><span style="position:absolute;font-size:10px;left:40%;animation:dmFall 6s linear infinite 2s;">✨</span></div><p style="font-size:9px;letter-spacing:3px;color:#ffd54f;text-transform:uppercase;margin:0 0 8px;">Congratulations!</p><div style="font-size:44px;margin:0 0 6px;animation:dmBounce 2s ease-in-out infinite;">🎓</div><p style="font-size:18px;font-weight:700;color:#ffd54f;margin:0 0 4px;">Kavya Sharma</p><p style="font-size:11px;color:#90caf9;margin:0 0 4px;">B.Tech in Computer Science</p><p style="font-size:10px;color:#78909c;margin:0 0 12px;">JNTU Hyderabad – 2026</p><div style="background:rgba(255,215,0,0.1);border:1px solid rgba(255,215,0,0.3);border-radius:12px;padding:10px 18px;margin-bottom:14px;"><p style="font-size:11px;color:#ffd54f;font-weight:600;margin:0 0 4px;">🎉 Graduation Party!</p><p style="font-size:10px;color:#90caf9;margin:0 0 3px;">📅 April 30, 2026 • 7:00 PM</p><p style="font-size:10px;color:#90caf9;margin:0;">📍 The Regency, Madhapur</p></div><div style="background:linear-gradient(135deg,#1565c0,#0288d1);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Join the Celebration 🥂</div></div>`
  },
  party: {
    title: '🥂 Party / Get-Together Invitation',
    wa: 'Hi!%20I%20want%20a%20Party%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#06001a 0%,#1a0040 50%,#06001a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#fff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:18px;left:5%;animation:dmFall 3s linear infinite;">🎊</span><span style="position:absolute;font-size:14px;left:85%;animation:dmFall 4s linear infinite 0.8s;">🎉</span><span style="position:absolute;font-size:12px;left:50%;animation:dmFall 5s linear infinite 1.5s;">✨</span><span style="position:absolute;font-size:10px;left:25%;animation:dmFall 4.5s linear infinite 2s;">⭐</span></div><div style="font-size:38px;margin:0 0 8px;animation:dmBounce 1s ease-in-out infinite;">🥂</div><p style="font-size:24px;font-weight:800;background:linear-gradient(135deg,#ff6ec7,#aa00ff,#ff6500);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0;">LET'S PARTY!</p><p style="font-size:11px;color:#b39ddb;margin:6px 0 12px;">You're officially invited 🎊</p><div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:10px 18px;margin-bottom:14px;"><p style="font-size:12px;font-weight:600;color:#ff6ec7;margin:0 0 4px;">Aarav's Farewell Bash</p><p style="font-size:10px;color:#90caf9;margin:0 0 3px;">📅 March 28, 2026</p><p style="font-size:10px;color:#90caf9;margin:0 0 3px;">🕗 7:00 PM – 12:00 AM</p><p style="font-size:10px;color:#90caf9;margin:0;">📍 Sky Lounge, Hitec City</p></div><p style="font-size:9px;color:#b39ddb;margin:0 0 12px;">Dress Code: Neon / Glow ✨</p><div style="background:linear-gradient(135deg,#aa00ff,#e91e63);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">RSVP Now 🎊</div></div>`
  },
  couple: {
    title: '💕 Girlfriend / Boyfriend Surprise',
    wa: 'Hi!%20I%20want%20a%20Girlfriend/Boyfriend%20Surprise%20Page',
    html: `<div style="background:linear-gradient(160deg,#0d001a 0%,#2d0a1f 50%,#0d001a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#f9e0ff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:5%;animation:dmFall 4s linear infinite;">❤️</span><span style="position:absolute;font-size:12px;left:75%;animation:dmFall 5s linear infinite 1s;">💕</span><span style="position:absolute;font-size:14px;left:40%;animation:dmFall 4.5s linear infinite 2s;">🌹</span><span style="position:absolute;font-size:10px;left:58%;animation:dmFall 6s linear infinite 0.5s;">✨</span></div><p style="font-size:8px;letter-spacing:3px;color:#f48fb1;text-transform:uppercase;margin:0 0 8px;">For You, My Love 💌</p><div style="font-size:44px;margin:0 0 6px;animation:dmPulse 1.5s ease-in-out infinite;">❤️</div><p style="font-size:16px;font-weight:bold;color:#fff;font-style:italic;margin:0 0 8px;">"You are the reason I smile every single day..."</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#f48fb1,transparent);margin:0 auto 10px;"></div><div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(244,143,177,0.2);border:1px solid rgba(244,143,177,0.3);border-radius:20px;padding:4px 10px;font-size:9px;color:#f48fb1;">📸 Our Photos</span><span style="background:rgba(244,143,177,0.2);border:1px solid rgba(244,143,177,0.3);border-radius:20px;padding:4px 10px;font-size:9px;color:#f48fb1;">🎵 Our Song</span><span style="background:rgba(244,143,177,0.2);border:1px solid rgba(244,143,177,0.3);border-radius:20px;padding:4px 10px;font-size:9px;color:#f48fb1;">💌 Love Letter</span></div><p style="font-size:10px;color:#f48fb1;margin:0 0 12px;">From Kiran, With Love 💕</p><div style="background:linear-gradient(135deg,#e91e63,#9c27b0);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;animation:dmGlow 2s ease-in-out infinite;">Open Your Surprise ❤️</div></div>`
  },
  valentine: {
    title: "❤️ Valentine's Day Special",
    wa: "Hi!%20I%20want%20a%20Valentine's%20Day%20Surprise%20Page",
    html: `<div style="background:linear-gradient(160deg,#1a0008 0%,#3d0010 50%,#1a0008 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#fce4ec;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:18px;left:5%;animation:dmFall 3.5s linear infinite;">❤️</span><span style="position:absolute;font-size:14px;left:80%;animation:dmFall 4.5s linear infinite 0.8s;">💕</span><span style="position:absolute;font-size:16px;left:50%;animation:dmFall 4s linear infinite 1.5s;">🌹</span><span style="position:absolute;font-size:12px;left:25%;animation:dmFall 5s linear infinite 2s;">💖</span><span style="position:absolute;font-size:10px;left:65%;animation:dmFall 3s linear infinite 2.5s;">💗</span></div><p style="font-size:8px;letter-spacing:3px;color:#f48fb1;text-transform:uppercase;margin:0 0 8px;">Happy Valentine's Day</p><div style="font-size:52px;margin:0 0 8px;animation:dmPulse 1.2s ease-in-out infinite;">❤️</div><p style="font-size:20px;font-weight:bold;color:#fff;font-style:italic;margin:0 0 6px;">Be My Valentine?</p><p style="font-size:11px;color:#f48fb1;margin:0 0 14px;line-height:1.6;">"Every love story is beautiful,<br>but ours is my favourite."</p><div style="display:flex;gap:16px;margin-bottom:14px;"><div style="text-align:center;"><div style="font-size:20px;">📸</div><div style="font-size:8px;color:#f48fb1;margin-top:2px;">Our Story</div></div><div style="text-align:center;"><div style="font-size:20px;">🎵</div><div style="font-size:8px;color:#f48fb1;margin-top:2px;">Our Song</div></div><div style="text-align:center;"><div style="font-size:20px;">💌</div><div style="font-size:8px;color:#f48fb1;margin-top:2px;">Love Letter</div></div></div><div style="background:linear-gradient(135deg,#c62828,#e91e63);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;animation:dmGlow 1.5s ease-in-out infinite;">Open With Love ❤️</div></div>`
  },
  birthdaywish: {
    title: '🎂 Birthday Wish Page',
    wa: 'Hi!%20I%20want%20a%20Birthday%20Wish%20Page',
    html: `<div style="background:linear-gradient(160deg,#06000d 0%,#1a0040 50%,#06000d 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#fff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:14px;left:8%;animation:dmFall 4s linear infinite;">⭐</span><span style="position:absolute;font-size:10px;left:75%;animation:dmFall 5s linear infinite 1s;">🌟</span><span style="position:absolute;font-size:12px;left:40%;animation:dmFall 4.5s linear infinite 2s;">✨</span></div><p style="font-size:8px;letter-spacing:3px;color:#ba68c8;text-transform:uppercase;margin:0 0 6px;">Surprise!</p><div style="font-size:44px;margin:0 0 4px;animation:dmBounce 2s ease-in-out infinite;">🎂</div><p style="font-size:10px;color:#ce93d8;margin:0 0 8px;">🕯️🕯️🕯️🕯️🕯️🕯️🕯️</p><p style="font-size:20px;font-weight:700;background:linear-gradient(135deg,#ce93d8,#f48fb1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 4px;">Happy Birthday!</p><p style="font-size:16px;font-weight:600;color:#fff;margin:0 0 10px;">Meera! 🎉</p><div style="background:rgba(186,104,200,0.2);border:1px solid rgba(186,104,200,0.3);border-radius:12px;padding:10px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#ce93d8;font-style:italic;line-height:1.6;margin:0;">"Wishing you a day as<br>beautiful as your smile! 💜"</p></div><div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(186,104,200,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#ce93d8;">📸 Memories</span><span style="background:rgba(186,104,200,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#ce93d8;">🎵 Your Song</span></div><div style="background:linear-gradient(135deg,#7b1fa2,#e91e63);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Birthday Surprise 🎁</div></div>`
  },
  proposal: {
    title: '💝 Proposal Page',
    wa: 'Hi!%20I%20want%20a%20Proposal%20Page',
    html: `<div style="background:linear-gradient(160deg,#0d0008 0%,#2d0018 40%,#1a000d 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px;font-family:Georgia,serif;color:#fce4ec;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:18px;left:2%;animation:dmFall 3s linear infinite;">🌹</span><span style="position:absolute;font-size:14px;left:14%;animation:dmFall 4s linear infinite 0.4s;">🌸</span><span style="position:absolute;font-size:12px;left:27%;animation:dmFall 3.5s linear infinite 0.9s;">🌺</span><span style="position:absolute;font-size:16px;left:40%;animation:dmFall 5s linear infinite 0.2s;">🌷</span><span style="position:absolute;font-size:10px;left:52%;animation:dmFall 4.5s linear infinite 1.4s;">🌸</span><span style="position:absolute;font-size:14px;left:63%;animation:dmFall 3.8s linear infinite 0.7s;">🌹</span><span style="position:absolute;font-size:12px;left:76%;animation:dmFall 4.2s linear infinite 1.8s;">🌺</span><span style="position:absolute;font-size:10px;left:88%;animation:dmFall 3.3s linear infinite 1.1s;">💮</span><span style="position:absolute;font-size:8px;left:20%;animation:dmFall 5s linear infinite 2.4s;">🌼</span><span style="position:absolute;font-size:8px;left:72%;animation:dmFall 4s linear infinite 2.9s;">🌸</span><span style="position:absolute;font-size:6px;left:47%;animation:dmFall 4.8s linear infinite 0.6s;">✨</span><span style="position:absolute;font-size:10px;left:34%;animation:dmFall 3.5s linear infinite 1.9s;">💕</span><span style="position:absolute;font-size:8px;left:58%;animation:dmFall 4s linear infinite 2.2s;">🌷</span></div><p style="font-size:11px;margin:0 0 4px;letter-spacing:1px;">🌸 🌹 💐 🌹 🌸</p><p style="font-size:8px;letter-spacing:3px;color:#f48fb1;text-transform:uppercase;margin:0 0 6px;">A Magical Moment</p><div style="font-size:46px;margin:0 0 5px;animation:dmBounce 2s ease-in-out infinite;">💍</div><p style="font-size:20px;font-weight:bold;color:#fff;font-style:italic;margin:0 0 3px;">Will You</p><p style="font-size:24px;font-weight:800;background:linear-gradient(135deg,#e91e63,#f48fb1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 6px;">Marry Me?</p><p style="font-size:10px;color:#f48fb1;margin:0 0 8px;line-height:1.6;">"You're the missing piece<br>of my heart... 💕"</p><p style="font-size:13px;margin:0 0 8px;letter-spacing:1px;">🌷 🌸 🌺 🌸 🌷</p><div style="display:flex;gap:8px;margin-bottom:8px;justify-content:center;"><div style="background:linear-gradient(135deg,#e91e63,#c2185b);color:#fff;padding:10px 18px;border-radius:25px;font-size:12px;font-weight:700;animation:dmPulse 1.5s ease-in-out infinite;">YES! 💍</div><div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:#fff;padding:10px 18px;border-radius:25px;font-size:12px;font-weight:700;">Hmm... 😅</div></div><p style="font-size:9px;color:#f48fb1;margin:0;">— with all my love, Rahul 🌹 —</p></div>`
  },
  annivsurprise: {
    title: '🎀 Anniversary Surprise',
    wa: 'Hi!%20I%20want%20an%20Anniversary%20Surprise%20Page',
    html: `<div style="background:linear-gradient(160deg,#0d0808 0%,#2d0a14 50%,#0d0808 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#fce4ec;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:14px;left:8%;animation:dmFall 4s linear infinite;">❤️</span><span style="position:absolute;font-size:12px;left:78%;animation:dmFall 5s linear infinite 1s;">🌹</span><span style="position:absolute;font-size:10px;left:42%;animation:dmFall 5s linear infinite 2s;">💕</span></div><p style="font-size:8px;letter-spacing:3px;color:#f48fb1;text-transform:uppercase;margin:0 0 8px;">Happy Anniversary</p><div style="font-size:40px;margin:0 0 6px;animation:dmPulse 2s ease-in-out infinite;">❤️</div><p style="font-size:28px;font-weight:800;color:#fff;margin:0;">3</p><p style="font-size:12px;color:#f48fb1;margin:0 0 8px;">Amazing Years Together</p><p style="font-size:16px;font-weight:bold;color:#fff;font-style:italic;margin:0 0 10px;">Sai & Divya</p><div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(244,143,177,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#f48fb1;">📸 Our Journey</span><span style="background:rgba(244,143,177,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#f48fb1;">🎵 Our Song</span><span style="background:rgba(244,143,177,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#f48fb1;">💌 Message</span></div><p style="font-size:10px;color:#f48fb1;font-style:italic;margin:0 0 12px;">"Here's to forever... 💕"</p><div style="background:linear-gradient(135deg,#c62828,#e91e63);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Surprise 🎀</div></div>`
  },
  friendship: {
    title: '👫 Friendship Day / BFF Page',
    wa: 'Hi!%20I%20want%20a%20Friendship%20Day%20Surprise%20Page',
    html: `<div style="background:linear-gradient(160deg,#001a1a 0%,#003333 50%,#001a1a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#e0f7fa;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:5%;animation:dmFall 4s linear infinite;">⭐</span><span style="position:absolute;font-size:12px;left:80%;animation:dmFall 5s linear infinite 1s;">✨</span><span style="position:absolute;font-size:14px;left:45%;animation:dmFall 4.5s linear infinite 2s;">🌟</span></div><div style="font-size:42px;margin:0 0 6px;animation:dmBounce 2s ease-in-out infinite;">👫</div><p style="font-size:18px;font-weight:700;background:linear-gradient(135deg,#4dd0e1,#f06292);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 4px;">Best Friends</p><p style="font-size:12px;color:#80deea;margin:0 0 10px;">Forever & Always! 🤞</p><div style="background:rgba(77,208,225,0.1);border:1px solid rgba(77,208,225,0.3);border-radius:12px;padding:10px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#80deea;font-style:italic;line-height:1.6;margin:0;">"Friends like you are rare,<br>precious, and absolutely mad! 🤣💙"</p></div><div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(77,208,225,0.15);padding:4px 10px;border-radius:20px;font-size:9px;color:#4dd0e1;">📸 Memories</span><span style="background:rgba(240,98,146,0.15);padding:4px 10px;border-radius:20px;font-size:9px;color:#f06292;">🎵 Our Vibes</span><span style="background:rgba(77,208,225,0.15);padding:4px 10px;border-radius:20px;font-size:9px;color:#4dd0e1;">💬 Inside Jokes</span></div><p style="font-size:10px;color:#80deea;margin:0 0 12px;">From: Aakash, Your Bestie 😄</p><div style="background:linear-gradient(135deg,#00838f,#006064);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open BFF Surprise 👫</div></div>`
  },
  apology: {
    title: '🤱 Apology / Sorry Page',
    wa: 'Hi!%20I%20want%20an%20Apology%20/%20Sorry%20Page',
    html: `<div style="background:linear-gradient(160deg,#050a14 0%,#0d1a2e 50%,#050a14 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#e3f2fd;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:12px;left:10%;animation:dmFall 6s linear infinite;">💧</span><span style="position:absolute;font-size:10px;left:75%;animation:dmFall 7s linear infinite 1.5s;">💙</span></div><div style="font-size:44px;margin:0 0 8px;animation:dmPulse 2s ease-in-out infinite;">🥺</div><p style="font-size:22px;font-weight:700;color:#90caf9;margin:0 0 6px;">I'm So Sorry</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#90caf9,transparent);margin:0 auto 12px;"></div><div style="background:rgba(144,202,249,0.1);border:1px solid rgba(144,202,249,0.2);border-radius:12px;padding:12px 16px;margin-bottom:14px;"><p style="font-size:10px;color:#90caf9;font-style:italic;line-height:1.7;margin:0;">"I know I hurt you,<br>and I genuinely regret it.<br>You mean everything to me. 💙"</p></div><div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(144,202,249,0.1);padding:4px 10px;border-radius:20px;font-size:9px;color:#90caf9;">💌 My Letter</span><span style="background:rgba(144,202,249,0.1);padding:4px 10px;border-radius:20px;font-size:9px;color:#90caf9;">📸 Our Moments</span></div><p style="font-size:10px;color:#78909c;margin:0 0 12px;">— From Vikram, with regret 💙 —</p><div style="background:linear-gradient(135deg,#1565c0,#0288d1);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open My Sorry Page 🙏</div></div>`
  },
  thankyou: {
    title: '🎁 Thank You Page',
    wa: 'Hi!%20I%20want%20a%20Thank%20You%20Page',
    html: `<div style="background:linear-gradient(160deg,#061a0a 0%,#0d3318 50%,#061a0a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#e8f5e9;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:8%;animation:dmFall 5s linear infinite;">🌸</span><span style="position:absolute;font-size:12px;left:78%;animation:dmFall 4s linear infinite 1s;">🌺</span><span style="position:absolute;font-size:14px;left:45%;animation:dmFall 6s linear infinite 2s;">✨</span></div><div style="font-size:44px;margin:0 0 8px;animation:dmBounce 3s ease-in-out infinite;">🙏</div><p style="font-size:22px;font-weight:700;color:#a5d6a7;margin:0 0 6px;">Thank You</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#a5d6a7,transparent);margin:0 auto 12px;"></div><div style="background:rgba(165,214,167,0.1);border:1px solid rgba(165,214,167,0.2);border-radius:12px;padding:12px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#a5d6a7;font-style:italic;line-height:1.7;margin:0;">"From the bottom of our hearts,<br>thank you for being part of<br>our special day! 🙏💚"</p></div><div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(165,214,167,0.15);padding:4px 10px;border-radius:20px;font-size:9px;color:#a5d6a7;">📸 Event Photos</span><span style="background:rgba(165,214,167,0.15);padding:4px 10px;border-radius:20px;font-size:9px;color:#a5d6a7;">💌 Message</span></div><p style="font-size:10px;color:#81c784;margin:0 0 12px;">— With love, The Sharma Family 💚 —</p><div style="background:linear-gradient(135deg,#2e7d32,#388e3c);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Thank You Page 💐</div></div>`
  },
  mothers: {
    title: "💐 Mother's Day Tribute",
    wa: "Hi!%20I%20want%20a%20Mother's%20Day%20Page",
    html: `<div style="background:linear-gradient(160deg,#1a040a 0%,#3d0a1f 50%,#1a040a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#fce4ec;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:5%;animation:dmFall 5s linear infinite;">🌸</span><span style="position:absolute;font-size:12px;left:80%;animation:dmFall 4s linear infinite 1s;">🌺</span><span style="position:absolute;font-size:14px;left:45%;animation:dmFall 6s linear infinite 2s;">💐</span></div><p style="font-size:8px;letter-spacing:3px;color:#f48fb1;text-transform:uppercase;margin:0 0 6px;">Happy Mother's Day</p><div style="font-size:44px;margin:0 0 8px;animation:dmBounce 3s ease-in-out infinite;">💐</div><p style="font-size:20px;font-weight:700;color:#f48fb1;margin:0 0 4px;">For You, Amma</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#f48fb1,transparent);margin:0 auto 12px;"></div><div style="background:rgba(244,143,177,0.1);border:1px solid rgba(244,143,177,0.2);border-radius:12px;padding:12px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#f8bbd9;font-style:italic;line-height:1.7;margin:0;">"You are my first love,<br>my forever hero,<br>my greatest blessing. 💕"</p></div><div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(244,143,177,0.15);padding:4px 10px;border-radius:20px;font-size:9px;color:#f48fb1;">📸 Our Memories</span><span style="background:rgba(244,143,177,0.15);padding:4px 10px;border-radius:20px;font-size:9px;color:#f48fb1;">💌 Love Letter</span></div><div style="background:linear-gradient(135deg,#c2185b,#e91e63);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Tribute 💐</div></div>`
  },
  fathers: {
    title: "👨 Father's Day Tribute",
    wa: "Hi!%20I%20want%20a%20Father's%20Day%20Page",
    html: `<div style="background:linear-gradient(160deg,#000d1a 0%,#0a1a33 50%,#000d1a 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#e3f2fd;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:12px;left:10%;animation:dmTwinkle 3s ease-in-out infinite;">⭐</span><span style="position:absolute;font-size:10px;left:80%;animation:dmTwinkle 2.5s ease-in-out infinite 1s;">🌟</span></div><p style="font-size:8px;letter-spacing:3px;color:#90caf9;text-transform:uppercase;margin:0 0 6px;">Happy Father's Day</p><div style="font-size:44px;margin:0 0 8px;animation:dmBounce 3s ease-in-out infinite;">👨</div><p style="font-size:20px;font-weight:700;color:#90caf9;margin:0 0 4px;">For My Nanna</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#90caf9,transparent);margin:0 auto 12px;"></div><div style="background:rgba(144,202,249,0.1);border:1px solid rgba(144,202,249,0.2);border-radius:12px;padding:12px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#90caf9;font-style:italic;line-height:1.7;margin:0;">"You are my strength,<br>my guiding light,<br>my superhero. 💙"</p></div><div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(144,202,249,0.1);padding:4px 10px;border-radius:20px;font-size:9px;color:#90caf9;">📸 Our Moments</span><span style="background:rgba(144,202,249,0.1);padding:4px 10px;border-radius:20px;font-size:9px;color:#90caf9;">💌 My Message</span></div><div style="background:linear-gradient(135deg,#1565c0,#0d47a1);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Tribute 💙</div></div>`
  },
  newyear: {
    title: '🎊 New Year Wishes',
    wa: 'Hi!%20I%20want%20a%20New%20Year%20Greeting%20Page',
    html: `<div style="background:linear-gradient(160deg,#000006 0%,#0a001a 50%,#000006 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#fff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:18px;left:5%;animation:dmFall 2.5s linear infinite;">🎆</span><span style="position:absolute;font-size:16px;left:80%;animation:dmFall 3s linear infinite 0.8s;">🎇</span><span style="position:absolute;font-size:14px;left:45%;animation:dmFall 3.5s linear infinite 1.5s;">✨</span><span style="position:absolute;font-size:12px;left:25%;animation:dmFall 4s linear infinite 2s;">🌟</span><span style="position:absolute;font-size:10px;left:65%;animation:dmFall 2.8s linear infinite 1s;">⭐</span></div><p style="font-size:8px;letter-spacing:3px;color:#ffd54f;text-transform:uppercase;margin:0 0 8px;">Countdown Begins!</p><div style="font-size:38px;margin:0 0 6px;animation:dmPulse 1.5s ease-in-out infinite;">🎆</div><p style="font-size:22px;font-weight:800;background:linear-gradient(135deg,#ffd54f,#ffab40,#ff6e40);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 4px;">Happy New Year</p><p style="font-size:32px;font-weight:900;color:#ffd54f;margin:0 0 10px;">2027! 🎊</p><div style="display:flex;gap:6px;margin-bottom:14px;justify-content:center;"><div style="background:rgba(255,213,79,0.1);border:1px solid rgba(255,213,79,0.3);border-radius:8px;padding:6px 10px;text-align:center;"><div style="font-size:15px;font-weight:700;color:#ffd54f;">00</div><div style="font-size:8px;color:#ffcc02;">DAYS</div></div><div style="background:rgba(255,213,79,0.1);border:1px solid rgba(255,213,79,0.3);border-radius:8px;padding:6px 10px;text-align:center;"><div style="font-size:15px;font-weight:700;color:#ffd54f;">00</div><div style="font-size:8px;color:#ffcc02;">HRS</div></div><div style="background:rgba(255,213,79,0.1);border:1px solid rgba(255,213,79,0.3);border-radius:8px;padding:6px 10px;text-align:center;"><div style="font-size:15px;font-weight:700;color:#ffd54f;">00</div><div style="font-size:8px;color:#ffcc02;">MIN</div></div></div><p style="font-size:10px;color:#ffcc02;font-style:italic;margin:0 0 12px;">"May 2027 bring you<br>love, success & happiness! 🌟"</p><div style="background:linear-gradient(135deg,#ff6f00,#ffd54f);color:#1a1a1a;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:700;">Open Wishes 🎊</div></div>`
  },
  diwali: {
    title: '🪔 Diwali / Dasara Greetings',
    wa: 'Hi!%20I%20want%20a%20Diwali%20Greeting%20Page',
    html: `<div style="background:linear-gradient(160deg,#0d0500 0%,#2a1000 50%,#0d0500 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#ffe8cc;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;"><span style="position:absolute;font-size:16px;left:5%;top:50%;animation:dmDiya 1.5s ease-in-out infinite;">🪔</span><span style="position:absolute;font-size:14px;left:82%;top:50%;animation:dmDiya 2s ease-in-out infinite 0.5s;">🪔</span><span style="position:absolute;font-size:12px;left:10%;animation:dmFall 4s linear infinite;">✨</span><span style="position:absolute;font-size:10px;left:70%;animation:dmFall 5s linear infinite 1s;">⭐</span></div><div style="display:flex;gap:8px;margin-bottom:8px;"><span style="font-size:24px;animation:dmDiya 1.5s ease-in-out infinite;">🪔</span><span style="font-size:24px;animation:dmDiya 1.8s ease-in-out infinite 0.3s;">🪔</span><span style="font-size:24px;animation:dmDiya 1.5s ease-in-out infinite 0.6s;">🪔</span></div><p style="font-size:22px;font-weight:800;color:#ffd54f;margin:0 0 2px;">Subh Deepawali</p><p style="font-size:14px;color:#ffcc02;margin:0 0 10px;">शुभ दीपावली 🙏</p><div style="width:60px;height:1px;background:linear-gradient(90deg,transparent,#ffd54f,transparent);margin:0 auto 12px;"></div><div style="background:rgba(255,213,79,0.1);border:1px solid rgba(255,213,79,0.3);border-radius:12px;padding:10px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#ffcc02;font-style:italic;line-height:1.7;margin:0;">"May the festival of lights<br>fill your life with happiness,<br>health & prosperity! 🪔"</p></div><p style="font-size:10px;color:#ffb74d;margin:0 0 12px;">From: Patel Family</p><div style="background:linear-gradient(135deg,#f57f17,#e65100);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Greetings 🪔</div></div>`
  },
  christmas: {
    title: '🎄 Christmas Greetings',
    wa: 'Hi!%20I%20want%20a%20Christmas%20Greeting%20Page',
    html: `<div style="background:linear-gradient(160deg,#020a00 0%,#0a1a00 50%,#020a00 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#e8f5e9;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:14px;left:8%;animation:dmSnow 4s linear infinite;">❄️</span><span style="position:absolute;font-size:10px;left:75%;animation:dmSnow 5s linear infinite 1s;">⛄</span><span style="position:absolute;font-size:12px;left:45%;animation:dmSnow 4.5s linear infinite 2s;">❄️</span><span style="position:absolute;font-size:8px;left:25%;animation:dmSnow 6s linear infinite 0.5s;">⭐</span></div><div style="font-size:44px;margin:0 0 6px;animation:dmBounce 2s ease-in-out infinite;">🎄</div><p style="font-size:20px;font-weight:700;color:#a5d6a7;margin:0 0 2px;">Merry Christmas!</p><p style="font-size:14px;color:#81c784;margin:0 0 10px;">& Happy New Year 🎁</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#a5d6a7,transparent);margin:0 auto 12px;"></div><div style="background:rgba(165,214,167,0.1);border:1px solid rgba(165,214,167,0.2);border-radius:12px;padding:10px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#a5d6a7;font-style:italic;line-height:1.7;margin:0;">"May Santa bring you<br>all the joy your heart desires!<br>Ho Ho Ho! 🎅🎁"</p></div><div style="display:flex;gap:8px;justify-content:center;margin-bottom:12px;"><span style="font-size:20px;">🎁</span><span style="font-size:20px;">🔔</span><span style="font-size:20px;">🦌</span><span style="font-size:20px;">⭐</span></div><p style="font-size:9px;color:#81c784;margin:0 0 12px;">From: The Johnson Family 🎄</p><div style="background:linear-gradient(135deg,#2e7d32,#c62828);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Greetings 🎄</div></div>`
  },
  eid: {
    title: '🌙 Eid / Ramadan Wishes',
    wa: 'Hi!%20I%20want%20an%20Eid%20Greeting%20Page',
    html: `<div style="background:linear-gradient(160deg,#001a14 0%,#002a20 50%,#001a14 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:Georgia,serif;color:#e0f2f1;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:10px;left:10%;top:20%;animation:dmTwinkle 2s ease-in-out infinite;">⭐</span><span style="position:absolute;font-size:8px;left:80%;top:15%;animation:dmTwinkle 2.5s ease-in-out infinite 0.5s;">✨</span><span style="position:absolute;font-size:10px;left:50%;top:8%;animation:dmTwinkle 3s ease-in-out infinite 1s;">🌟</span><span style="position:absolute;font-size:8px;left:30%;top:75%;animation:dmTwinkle 2.2s ease-in-out infinite 1.5s;">⭐</span><span style="position:absolute;font-size:6px;left:70%;top:80%;animation:dmTwinkle 3s ease-in-out infinite 0.8s;">✨</span></div><div style="font-size:44px;margin:0 0 6px;animation:dmPulse 2s ease-in-out infinite;">🌙</div><p style="font-size:22px;font-weight:700;color:#80cbc4;margin:0 0 2px;">Eid Mubarak</p><p style="font-size:14px;color:#26a69a;margin:0 0 10px;">عيد مبارك 🌟</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#80cbc4,transparent);margin:0 auto 12px;"></div><div style="background:rgba(128,203,196,0.1);border:1px solid rgba(128,203,196,0.2);border-radius:12px;padding:10px 16px;margin-bottom:12px;"><p style="font-size:10px;color:#80cbc4;font-style:italic;line-height:1.7;margin:0;">"May Allah bless you with<br>happiness and peace this Eid.<br>Eid Mubarak! 🌙"</p></div><div style="display:flex;gap:8px;justify-content:center;margin-bottom:12px;"><span style="font-size:20px;animation:dmTwinkle 2s ease-in-out infinite;">⭐</span><span style="font-size:20px;animation:dmTwinkle 2.5s ease-in-out infinite 0.3s;">🌙</span><span style="font-size:20px;animation:dmTwinkle 2s ease-in-out infinite 0.6s;">⭐</span></div><p style="font-size:9px;color:#4db6ac;margin:0 0 12px;">From: Khan Family 🌙</p><div style="background:linear-gradient(135deg,#00695c,#004d40);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Open Greetings 🌙</div></div>`
  },
  corporate: {
    title: '🏢 Business / Corporate Event',
    wa: 'Hi!%20I%20want%20a%20Corporate%20Event%20Invitation',
    html: `<div style="background:linear-gradient(160deg,#001428 0%,#002244 50%,#001428 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#e8edf2;text-align:center;position:relative;overflow:hidden;"><div style="background:linear-gradient(135deg,#1565c0,#0288d1);width:50px;height:50px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;font-size:22px;">🏢</div><p style="font-size:9px;letter-spacing:3px;color:#90caf9;text-transform:uppercase;margin:0 0 6px;">You're Invited</p><p style="font-size:16px;font-weight:700;color:#fff;margin:0 0 2px;">TechCorp Annual</p><p style="font-size:14px;font-weight:600;color:#64b5f6;margin:0 0 12px;">Product Launch 2026</p><div style="width:50px;height:1px;background:linear-gradient(90deg,transparent,#64b5f6,transparent);margin:0 auto 12px;"></div><div style="background:rgba(100,181,246,0.1);border:1px solid rgba(100,181,246,0.2);border-radius:12px;padding:10px 16px;margin-bottom:12px;text-align:left;"><p style="font-size:10px;color:#90caf9;margin:0 0 4px;">📅 April 15, 2026</p><p style="font-size:10px;color:#90caf9;margin:0 0 4px;">🕖 6:00 PM – 9:00 PM</p><p style="font-size:10px;color:#90caf9;margin:0 0 4px;">📍 Hitec City Convention Centre</p><p style="font-size:10px;color:#90caf9;margin:0;">👔 Business Formal</p></div><div style="background:rgba(100,181,246,0.1);border:1px solid rgba(100,181,246,0.2);border-radius:20px;padding:4px 12px;margin-bottom:12px;"><p style="font-size:9px;color:#64b5f6;margin:0;">RSVP by April 10 • Limited Seats</p></div><div style="background:linear-gradient(135deg,#1565c0,#0288d1);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">RSVP Now →</div></div>`
  },
  custom: {
    title: '🌟 Custom / Anything Else',
    wa: 'Hi!%20I%20have%20a%20custom%20idea%20for%20a%20digital%20page',
    html: `<div style="background:linear-gradient(160deg,#06000d 0%,#1a0033 50%,#06000d 100%);height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;font-family:'Poppins',sans-serif;color:#fff;text-align:center;position:relative;overflow:hidden;"><div style="position:absolute;inset:0;pointer-events:none;overflow:hidden;"><span style="position:absolute;font-size:16px;left:5%;animation:dmFall 3s linear infinite;">⭐</span><span style="position:absolute;font-size:14px;left:80%;animation:dmFall 4s linear infinite 0.8s;">🌟</span><span style="position:absolute;font-size:12px;left:50%;animation:dmFall 5s linear infinite 1.5s;">✨</span><span style="position:absolute;font-size:10px;left:25%;animation:dmFall 4.5s linear infinite 2s;">💫</span><span style="position:absolute;font-size:18px;left:65%;animation:dmFall 3.5s linear infinite 1s;">🌈</span></div><div style="font-size:48px;margin:0 0 8px;animation:dmPulse 1.5s ease-in-out infinite;">🪄</div><p style="font-size:20px;font-weight:800;background:linear-gradient(135deg,#f48fb1,#ce93d8,#90caf9,#80cbc4,#a5d6a7,#fff176);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0 0 4px;">Your Dream Page</p><p style="font-size:11px;color:#b39ddb;margin:0 0 14px;">Any Idea. Any Occasion. Any Style! ✨</p><div style="display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap;justify-content:center;"><span style="background:rgba(244,143,177,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#f48fb1;">💌 Love Pages</span><span style="background:rgba(144,202,249,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#90caf9;">🎂 Wishes</span><span style="background:rgba(206,147,216,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#ce93d8;">🎉 Events</span><span style="background:rgba(128,203,196,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#80cbc4;">🏆 Tributes</span><span style="background:rgba(255,241,118,0.2);padding:4px 10px;border-radius:20px;font-size:9px;color:#fff176;">🌟 Anything!</span></div><div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:10px 16px;margin-bottom:14px;"><p style="font-size:10px;color:#ce93d8;font-style:italic;line-height:1.6;margin:0;">"Have a unique idea? Share it<br>with us and watch the magic! 🪄"</p></div><div style="background:linear-gradient(135deg,#7b1fa2,#1565c0,#00838f);color:#fff;padding:9px 22px;border-radius:25px;font-size:11px;font-weight:600;">Start Your Custom Page ✨</div></div>`
  }
};

function openDemo(id) {
    const demo = demoData[id];
    if (!demo) return;
    document.getElementById('demoTitle').textContent = demo.title;
    document.getElementById('demoScreen').innerHTML = demo.html;
    document.getElementById('demoOrderBtn').href = `https://api.whatsapp.com/send?phone=918500752407&text=${demo.wa}`;
    document.getElementById('demoOverlay').classList.add('active');
    document.getElementById('demoPopup').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDemo() {
    document.getElementById('demoOverlay').classList.remove('active');
    document.getElementById('demoPopup').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('demoClose').addEventListener('click', closeDemo);
document.getElementById('demoOverlay').addEventListener('click', closeDemo);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDemo(); });

document.querySelectorAll('.btn-demo').forEach(btn => {
    btn.addEventListener('click', () => openDemo(btn.dataset.demo));
});

// ========== OFFERS SECTION ==========
function getOfferTimeLeft(validUntil) {
    const end = new Date(validUntil);
    end.setHours(23, 59, 59, 999);
    const diff = end - new Date();
    if (diff <= 0) return null;
    return {
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000)
    };
}

function renderOfferCard(o) {
    const tl = getOfferTimeLeft(o.validUntil);
    if (!tl) return '';
    const themeGrads = {
        pink:   'linear-gradient(135deg,#e91e63 0%,#ad1457 100%)',
        purple: 'linear-gradient(135deg,#9c27b0 0%,#6a1b9a 100%)',
        orange: 'linear-gradient(135deg,#ff6f00 0%,#e65100 100%)',
        blue:   'linear-gradient(135deg,#1565c0 0%,#0277bd 100%)',
        green:  'linear-gradient(135deg,#2e7d32 0%,#1b5e20 100%)'
    };
    const grad = themeGrads[o.theme] || themeGrads.pink;
    return `
    <div class="offer-card" style="--offer-bg:${grad};">
        <div class="offer-badge">${o.badge}</div>
        <h3 class="offer-title">${o.title}</h3>
        ${o.description ? `<p class="offer-desc">${o.description}</p>` : ''}
        ${(o.originalPrice || o.salePrice) ? `
        <div class="offer-price">
            ${o.originalPrice ? `<span class="offer-original">₹${o.originalPrice}</span>` : ''}
            ${o.salePrice ? `<span class="offer-sale">₹${o.salePrice}</span>` : ''}
        </div>` : ''}
        <div class="offer-countdown" id="countdown-${o.id}">
            <div class="offer-count-item"><span>${String(tl.d).padStart(2,'0')}</span><small>Days</small></div>
            <div class="offer-count-item"><span>${String(tl.h).padStart(2,'0')}</span><small>Hrs</small></div>
            <div class="offer-count-item"><span>${String(tl.m).padStart(2,'0')}</span><small>Min</small></div>
            <div class="offer-count-item"><span>${String(tl.s).padStart(2,'0')}</span><small>Sec</small></div>
        </div>
        <a href="https://api.whatsapp.com/send?phone=918500752407&text=Hi!%20I%20want%20to%20grab%20the%20offer%3A%20${encodeURIComponent(o.title)}" target="_blank" class="offer-btn">
            <i class="fa-brands fa-whatsapp"></i> Grab This Offer
        </a>
    </div>`;
}

// ========== OFFERS DATA (Global) ==========
// Edit this list to update offers for everyone!
const globalOffers = [
    {
        id: 1,
        title: "Valentine's Special",
        badge: "50% OFF",
        description: "Get a romantic surprise page + music!",
        originalPrice: 199,
        salePrice: 99,
        validUntil: "2026-02-28",
        theme: "pink",
        active: true
    },
    {
        id: 2,
        title: "New Year Deal",
        badge: "SAVE ₹150",
        description: "Get a sparkling New Year greeting page for your friends and family.",
        originalPrice: 249,
        salePrice: 99,
        validUntil: "2027-01-05",
        theme: "orange", // Can be: pink, purple, orange, blue, green
        active: true
    },
];

function loadOffers() {
    // 1. Try to get Admin overrides from LocalStorage
    const localData = localStorage.getItem('wis_offers');
    const offers = localData ? JSON.parse(localData) : globalOffers;

    const today = new Date(); today.setHours(0, 0, 0, 0);
    const active = offers.filter(o => {
        if (!o.active) return false;
        const end = new Date(o.validUntil); end.setHours(23, 59, 59, 999);
        return end >= today;
    });

    const section = document.getElementById('offers-section');
    if (!section) return; // Exit if the offers section isn't on the page

    if (active.length === 0) {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
        document.getElementById('offersGrid').innerHTML = active.map(renderOfferCard).join('');
        
        // Start countdown timers for the active offers
        setInterval(() => {
            active.forEach(o => {
                const el = document.getElementById(`countdown-${o.id}`);
                if (!el) return;
                const tl = getOfferTimeLeft(o.validUntil);
                if (!tl) { el.innerHTML = '<span style="color:rgba(255,255,255,0.5);font-size:12px;">Expired</span>'; return; }
                const spans = el.querySelectorAll('.offer-count-item span');
                if (spans.length !== 4) return;
                spans[0].textContent = String(tl.d).padStart(2,'0');
                spans[1].textContent = String(tl.h).padStart(2,'0');
                spans[2].textContent = String(tl.m).padStart(2,'0');
                spans[3].textContent = String(tl.s).padStart(2,'0');
            });
        }, 1000);

        // Add the scroll-reveal effect to the newly added offer cards
        document.querySelectorAll('.offer-card').forEach(el => {
            el.classList.add('reveal-on-scroll');
            revealObserver.observe(el);
        });
    }
}

loadOffers();

// ========== VISITOR TRACKING & LOGGING ==========
(function trackVisit() {
    const NAMESPACE = 'wedding-invitation-store';
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // Format: 2025-02-19

    const month = today.slice(0, 7);               // Format: 2025-02
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const device = isMobile ? 'device_mobile' : 'device_desktop';

    // Helper to hit an endpoint (fire and forget)
    const hit = (key) => {
        fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${key}/up`).catch(e => console.error(e));
    };

    // 1. Increment Total Global Visits
    hit('visits');
    // 2. Increment Today's Count (for Weekly Graph)
    hit(`date_${today}`);
    // 3. Increment Month Count
    hit(`month_${month}`);
    // 4. Increment Device Type (for Pie Chart)
    hit(device);
})();
