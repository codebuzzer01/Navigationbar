const btn = document.querySelector('.navbar_btn')
const link = document.querySelector('.nav_links')
btn.addEventListener('click',function() {
    let value = link.classList.contains('navbar_collapse')
  if (value) {
         link.classList.remove('navbar_collapse')
        btn.classList.remove('change')
    }
    else {
        link.classList.add('navbar_collapse')
        btn.classList.add('change')
    }
})