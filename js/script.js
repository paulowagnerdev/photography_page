const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target;
        }
    })
})

const imgs = document.querySelectorAll(".img");

imgs.forEach(img => {
    observer.observe(img);
})

