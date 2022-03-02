
    let navList = document.querySelector('.navlist')
    let burger = document.querySelector('.burger')
    let cross = document.querySelector('.cross')

 burger.addEventListener('click', ()=>{
    navList.classList.toggle('active')
    burger.style.opacity = '-1';
    cross.style.display = 'block'

    
})

cross.addEventListener('click', ()=>{
    navList.classList.toggle('active')
    burger.style.opacity = '1';
    cross.style.display = 'none'
    
})


