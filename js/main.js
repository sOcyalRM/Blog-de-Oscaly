const images = document.querySelectorAll('.prof_figure');
console.log(images)

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img');

        image.classList.toggle('unset', entry.isIntersecting);
    });
}

const options = {
    root: null,
    rootMargin: "-56px",/*Hace mas pequeño el contenedor(el area que determina cuando aparecera y desaparecera la imagen) */
    threshold: .96
}
const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
})

