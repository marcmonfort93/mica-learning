// Menú mòbil
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Tanca el menú' : 'Obre el menú');
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Filtre de cursos
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

// Els accessos de "Què busques?" apliquen el filtre corresponent
document.querySelectorAll('.path[data-go]').forEach((p) => {
  p.addEventListener('click', () => filterCourses(p.dataset.go));
});

// Formulari (simulat: en aquest prototip no s'envia res)
const form = document.getElementById('form');
const ok = document.getElementById('ok');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  ok.hidden = false;
  form.reset();
});
