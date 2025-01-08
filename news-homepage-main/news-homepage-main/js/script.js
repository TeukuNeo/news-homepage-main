const openMenu = document.getElementById('open-menu')
const sidebar = document.getElementById('nav-links')

openMenu.addEventListener('click', function(e){
    e.preventDefault
    sidebar.classList.toggle('show-navbar')
    console.log('Buka menu...')
})

document.addEventListener('click', function(e) {
    if (!openMenu.contains(e.target) && !sidebar.contains(e.target)){
       sidebar.classList.remove('show-navbar') 
    }
})
