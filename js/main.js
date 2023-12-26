//STUFF I DIDN'T USE
// document.addEventListener('scroll', ()=>{
//     let bg = document.querySelector('.header')

//     bg.style.backgroundSize = `${45% - window.pageYOffset / 2.3}%`
// })


window.onscroll = function() {
    let image = document.querySelector('.header');
    let imageOffset = image.offsetTop;
    let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > imageOffset) {
      image.style.opacity = "0.3";
    } else {
      image.style.opacity = "0.6";
    }
  };

  // laser audio
  document.querySelectorAll('.btn-accent').forEach(el=> {
      el.addEventListener('click', ()=> {
          document.querySelector('#laser').play()
      })
  })
  // slide audio
  document.querySelectorAll('.btn-slide').forEach(el=> {
      el.addEventListener('click', ()=> {
          document.querySelector('#slide').play()
      })
  })
  // charge menu audio
  document.querySelectorAll('#wrapper').forEach(el=> {
      el.addEventListener('click', ()=> {
          document.querySelector('#charge').play()
      })
  })

  //OLD MENU
  // document.querySelector('.wrapperMenu').addEventListener('click', ()=>{
  //     document.querySelector('.leftSide').classList.toggle('activeLeft')
  //     document.querySelector('.rightSide').classList.toggle('activeRight')
  // })

  document.querySelector('#wrapper').addEventListener('click', ()=>{

         let user = document.querySelector('#user')
         let list = document.querySelector('#list')
         let settings = document.querySelector('#settings')
         let envelope = document.querySelector('#envelope')
         let geo = document.querySelector('#geo')
         let overlay = document.querySelector('.overlay')

         user.classList.toggle('active')
         list.classList.toggle('active')
         settings.classList.toggle('active')
         envelope.classList.toggle('active')
         geo.classList.toggle('active')
         overlay.classList.toggle('active')
      })
  

