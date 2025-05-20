const defaultOptions = [
  'Ir al cine','Leer un libro','Salir a caminar',
  'Probar una receta nueva','Llamar a un amigo','Ver un documental'
];
let options = JSON.parse(localStorage.getItem('decisions')) || defaultOptions;
const saveOptions = () =>
  localStorage.setItem('decisions', JSON.stringify(options));


const generateBtn    = document.getElementById('generateBtn');
const addBtn         = document.getElementById('addBtn');
const newOptionInput = document.getElementById('newOption');
const result         = document.getElementById('result');
const showListBtn    = document.getElementById('showListBtn');
const listPanel      = document.getElementById('listPanel');
const optionsList    = document.getElementById('optionsList');
const closeListBtn   = document.getElementById('closeListBtn');
const themeToggle    = document.getElementById('themeToggle');
const bodyEl         = document.body;


themeToggle.addEventListener('click', () => {
  if (bodyEl.classList.contains('light')) {
    bodyEl.classList.replace('light','dark');
    themeToggle.textContent = 'Modo Claro';
  } else {
    bodyEl.classList.replace('dark','light');
    themeToggle.textContent = 'Modo Oscuro';
  }
});


addBtn.addEventListener('click', () => {
  const value = newOptionInput.value.trim();
  if (value) {
    options.push(value);
    saveOptions();
    newOptionInput.value = '';
    newOptionInput.focus();
    alert('Opción añadida: '+value);
  }
});

showListBtn.addEventListener('click', () => {
  optionsList.innerHTML = '';
  options.forEach((opt, i) => {
    const li  = document.createElement('li');
    const inp = document.createElement('input');
    inp.value = opt;
    inp.addEventListener('change', () => {
      options[i] = inp.value;
      saveOptions();
    });
    const del = document.createElement('button');
    del.textContent = '🗑';
    del.addEventListener('click', () => {
      options.splice(i,1);
      saveOptions();
      li.remove();
    });
    li.append(inp, del);
    optionsList.append(li);
  });
  listPanel.style.display = 'block';
});
closeListBtn.addEventListener('click', () => {
  listPanel.style.display = 'none';
});

generateBtn.addEventListener('click', e => {
  const rect = generateBtn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size/2;
  const y = e.clientY - rect.top  - size/2;
  Object.assign(ripple.style, {
    width:  size+'px',
    height: size+'px',
    left:   x+'px',
    top:    y+'px'
  });
  ripple.classList.add('ripple');
  generateBtn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);

  const idx = Math.floor(Math.random() * options.length);
  result.classList.add('hidden');
  setTimeout(() => {
    result.textContent = options[idx];
    result.classList.remove('hidden');
    result.classList.add('show');
  }, 200);
});
