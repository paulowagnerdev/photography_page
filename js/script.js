const observer = new IntersectionObserver((entries,observer) => {
    entries.forEach(entry => {

        if(!entry.isIntersecting) return

        const imagem = entry.target;
        imagem.src = imagem.src.replace("&w=10&", "&w=2000&");
        console.log(imagem.src);
    })
}, {})

const imgs = document.querySelectorAll(".lazy");

imgs.forEach(img => {
    observer.observe(img);
})


window.scrollTo({
    top: '0',
    behavior: 'smooth'
})
