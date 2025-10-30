import ekipoakService from './services/ekipoakService.js';
document.addEventListener('DOMContentLoaded', async () => {
    const ekipoak = await ekipoakService.getAll();
    renderizarTabla(ekipoak);
});



function renderizarTabla(ekipoak) {
    const tbody = document.querySelector('#tabla-ekipoak tbody');
    tbody.innerHTML = '';

    ekipoak.forEach(e => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.izena}</td>
            <td>${e.deskribapena}</td>
            <td>${e.marka}</td>
            <td>${e.modelo}</td>
            <td>${e.stock}</td>
            <td>${e.idKategoria}</td>
            <td>
                <button class="btnIkusi">
                    <i class="fa-solid fa-eye"></i>
                </button>
            </td>
            <td>
                <button class="btnEditatu"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
    `;
    tr.querySelector('.btnIkusi').addEventListener('click', () => ikusi(e));
        tbody.appendChild(tr);
    });
}


function ikusi(ekipoa) {
  const modalBody = document.querySelector('#ekipoakModal .modal-body');
  modalBody.innerHTML = `
    <p><strong>ID:</strong> ${ekipoa.id}</p>
    <p><strong>Izena:</strong> ${ekipoa.izena}</p>
    <p><strong>Deskribapena:</strong> ${ekipoa.deskribapena}</p>
    <p><strong>Marka:</strong> ${ekipoa.marka}</p>
    <p><strong>Modeloa:</strong> ${ekipoa.modelo}</p>
    <p><strong>Stock:</strong> ${ekipoa.stock}</p>
    <p><strong>Kategoria ID:</strong> ${ekipoa.idKategoria}</p>
  `;
  const modal = new bootstrap.Modal(document.getElementById('ekipoakModal'));
  modal.show();
}