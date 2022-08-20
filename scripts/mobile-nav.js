const button = document.getElementById('mobile-nav-button');
const mobileNav = document.getElementById('mobile-nav');

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}

toggle_visibility('mobile-nav')