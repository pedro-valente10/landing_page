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
    const el = document.getElementById('contato');
    el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
    const input = el.querySelector('input[placeholder*="Produto"]');
    if (input) {
        input.value = nome;
        input.focus();
    }
    }, 600);
}

function enviarFormulario(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'Pedido enviado! ✓';
    btn.style.background = '#5a8a3e';
    setTimeout(() => {
    btn.textContent = 'Enviar Pedido ✦';
    btn.style.background = '';
    e.target.reset();
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);