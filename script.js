function toggleMenu() {
  console.log("toggleMenu() called"); // Verificar si la función está siendo llamada
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleArrowVisibility() {
  const arrow = document.querySelector('.arrow_up');
  const profileSection = document.getElementById('profile');

  // Si la sección de perfil está visible en la ventana, oculta la flecha; de lo contrario, muestre la flecha.
  if (isElementInViewport(profileSection)) {
    arrow.style.display = 'none';
  } else {
    arrow.style.display = 'block';
  }
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

// Agrega un event listener para escuchar el evento de desplazamiento y llamar a la función toggleArrowVisibility
window.addEventListener('scroll', toggleArrowVisibility);

// Llama a la función toggleArrowVisibility inicialmente para verificar la visibilidad de la flecha al cargar la página
toggleArrowVisibility();

function toggleArrowVisibility() {
  const arrow = document.querySelector('.arrow_up');
  const profileSection = document.getElementById('profile');

  if (isElementInViewport(profileSection)) {
    arrow.classList.add('hidden'); // Agrega la clase hidden cuando la sección profile está visible
  } else {
    arrow.classList.remove('hidden'); // Remueve la clase hidden cuando la sección profile no está visible
  }
}


