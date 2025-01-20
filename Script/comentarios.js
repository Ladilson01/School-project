// Controle de Slider de Testemunhos
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

document.querySelector('.next').addEventListener('click', () => {
    changeTestimonial(currentTestimonial + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeTestimonial(currentTestimonial - 1);
});

function changeTestimonial(index) {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (index + testimonials.length) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

changeTestimonial(0);