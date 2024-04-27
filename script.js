function toggleMenu() {
  console.log("toggleMenu() called"); // Verificar si la función está siendo llamada
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Función para verificar si un elemento está visible en la ventana del navegador
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function toggleArrowVisibility() {
  const arrow = document.querySelector('.arrow_up');
  const desktopNav = document.getElementById('desktop-nav');

  if (isElementInViewport(desktopNav)) {
    arrow.classList.add('hidden'); // Agrega la clase hidden cuando el nav está visible
  } else {
    arrow.classList.remove('hidden'); // Remueve la clase hidden cuando el nav no está visible
  }
}
// Obtener la imagen con la clase .profile-picture
const profilePicture = document.querySelector('.profile-picture');

// Agregar un controlador de eventos de clic a la imagen
profilePicture.addEventListener('click', redirectToAbout);

// Definir la función para redirigir a 'about me'
function redirectToAbout() {
  // Redirigir a la sección 'about'
  window.location.href = '#about';
}


// Agrega un event listener para escuchar el evento de desplazamiento y llamar a la función toggleArrowVisibility
window.addEventListener('scroll', toggleArrowVisibility);

// Llama a la función toggleArrowVisibility inicialmente para verificar la visibilidad de la flecha al cargar la página
toggleArrowVisibility();
