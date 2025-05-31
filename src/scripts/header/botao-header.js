export default function initializeHeader() {
  const menuBtn = document.getElementById('menu-btn');
  const dropdownMenu = document.getElementById('dropdown-menu');

  // Inicializa dropdown fechado
  dropdownMenu.classList.add('transform', 'origin-top', 'scale-y-0', 'hidden');

  menuBtn.addEventListener('click', () => {
    // Toggle classes para dropdown
    dropdownMenu.classList.toggle('hidden');
    dropdownMenu.classList.toggle('scale-y-0');
    dropdownMenu.classList.toggle('scale-y-100');

    // Toggle classes para animação do botão (open e group-open)
    menuBtn.classList.toggle('open');
    menuBtn.classList.toggle('group-open');
  });

  // Fecha dropdown ao clicar fora
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden', 'scale-y-0');
      dropdownMenu.classList.remove('scale-y-100');
      menuBtn.classList.remove('open', 'group-open');
    }
  });
}
