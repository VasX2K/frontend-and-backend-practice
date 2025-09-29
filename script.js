// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Форма отправлена! Спасибо за ваше сообщение.');
    this.reset();
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#2c3e50';
        header.style.backdropFilter = 'none';
    }
});

// CTA button functionality
document.querySelector('.cta-button')?.addEventListener('click', function() {
    alert('Спасибо за интерес! Скоро появятся новые проекты.');
});

// Project cards interaction
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        alert('Проект в разработке... Скоро будет готов!');
    });
});