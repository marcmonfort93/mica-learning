// Menú móvil
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const labels = burger.dataset.labels ? burger.dataset.labels.split('|') : ['Abrir el menú', 'Cerrar el menú'];
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? labels[1] : labels[0]);
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Filtro de cursos
const chips = document.querySelectorAll('.chip');
const courses = document.querySelectorAll('.course');

function filterCourses(value) {
  chips.forEach((c) => {
    const on = c.dataset.filter === value;
    c.classList.toggle('is-on', on);
    c.setAttribute('aria-pressed', String(on));
  });
  courses.forEach((card) => {
    card.hidden = !(value === 'tots' || card.dataset.cat.split(' ').includes(value));
  });
}
chips.forEach((c) => c.addEventListener('click', () => filterCourses(c.dataset.filter)));

// Los accesos de "Qué buscas" aplican el filtro correspondiente
document.querySelectorAll('.path[data-go]').forEach((p) => {
  p.addEventListener('click', () => filterCourses(p.dataset.go));
});

// Formularios (simulados: en este prototipo no se envía nada)
document.querySelectorAll('form[data-lead]').forEach((form) => {
  const ok = form.querySelector('.form__ok');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    ok.hidden = false;
    form.reset();
  });
});
