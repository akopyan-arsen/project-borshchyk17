function openModal() {
  document.getElementById('myModal').classList.add('is-open');
}

function closeModal() {
  document.getElementById('myModal').classList.remove('is-open');
}

var menuLinks = document.querySelectorAll('.menu-list');

function closeMobileMenu() {
  document.getElementById('myModal').classList.remove('is-open');
}

menuLinks.forEach(function(link) {
  link.addEventListener('click', closeMobileMenu);
});