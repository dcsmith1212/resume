const resume = document.querySelector('.resume');

const sizeResume = () => {
    if (window.innerWidth < 850) {
        resume.style.transform = `scale(${window.innerWidth / 850})`;
        resume.style['-moz-transform-origin'] = 'top';
        resume.style['-o-transform-origin'] = 'top';
        resume.style['-webkit-transform-origin'] = 'top';
    }
}

window.addEventListener('resize', sizeResume);

sizeResume();