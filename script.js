document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('mainTitle');

    if (title) {
        title.addEventListener('click', () => {
            const span = title.querySelector('span');
            span.style.color = span.style.color === 'var(--neon-blue)' ? 'var(--neon-purple)' : 'var(--neon-blue)';
            alert("System Info: Sakinah's Theme Activated! ✨");
        });
    }

    const form = document.getElementById('formKontak');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const respon = document.getElementById('responDOM');
            respon.textContent = "Pesan berhasil dikirim! 🚀";
            respon.style.color = "lightgreen";

            form.reset();
        });
    }
});