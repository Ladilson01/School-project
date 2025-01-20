let index = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.remove('ativo');
        if (i === idx) slide.classList.add('ativo');
    });
}

prev.addEventListener('click', () => {
    index = index === 0 ? slides.length - 1 : index - 1;
    showSlide(index);
});

next.addEventListener('click', () => {
    index = index === slides.length - 1 ? 0 : index + 1;
    showSlide(index);
});

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);
