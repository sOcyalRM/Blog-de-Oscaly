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
    rootMargin: "0px",
    threshold: .99
}
const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
})

