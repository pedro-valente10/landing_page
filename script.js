function filtrarCards(btn, categoria) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.card').forEach(card => {
        if (categoria === 'todos' || card.dataset.categoria === categoria) {
          card.style.display = '';
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    }

function pedirProduto(nome) {
  const msg = encodeURIComponent('Olá! Gostaria de fazer um pedido: ' + nome);
  window.open('https://wa.me/5511999999999?text=' + msg, '_blank');
}


const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);