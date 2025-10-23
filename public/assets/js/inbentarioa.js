document.addEventListener('DOMContentLoaded', () => {
    InbentarioItems().then(renderizarTabla);
});

function InbentarioItems() {
    return new Promise(resolve => {
        const produktuak = [
            { id: 1, nombre: 'Mark', modelo: 'Otto', categoria: 'Otto', cantidad: 'Otto', extra1: 'Otto', extra2: '@mdo' },
            { id: 2, nombre: 'Jacob', modelo: 'Thornton', categoria: 'Thornton', cantidad: 'Thornton', extra1: 'Thornton', extra2: '@fat' },
            { id: 3, nombre: 'Larry the Bird', modelo: 'Larry the Bird', categoria: 'Larry the Bird', cantidad: 'Larry the Bird', extra1: 'Larry the Bird', extra2: '@twitter' }
        ];
        setTimeout(() => resolve(produktuak), 500);
    });
}

function renderizarTabla(produktuak) {
    const tbody = document.querySelector('#tabla-inbentarioa tbody');
    tbody.innerHTML = '';
    produktuak.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.nombre}</td>
      <td>${p.modelo}</td>
      <td>${p.categoria}</td>
      <td>${p.cantidad}</td>
      <td>
        <button class="btnIkusi"><i class="fa-solid fa-eye"></i></button></td>
      <td><button class="btnEditatu"><i class="fa-solid fa-pen-to-square"></i></button></td>
    `;
        tbody.appendChild(tr);
    });
}