const images = document.querySelectorAll('img');

images.forEach((img) =>{

    img.addEventListener('mouseover', ()=>{
        img.style.transform='scale(1,2)';
        img.style.transition=transform = 'transform 0,3s'
    });

     img.addEventListener('mouseover', ()=>{
        img.style.transform='scale(1)';
    });
    
    

}
)