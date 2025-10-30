import erabiltzaileakService from './services/erabiltzaileakService.js';
document.addEventListener('DOMContentLoaded', async () => {
    const erabiltzaileak = await erabiltzaileakService.getAll();
    renderizarTabla(erabiltzaileak);
});



function renderizarTabla(erabiltzaileak) {
    const tbody = document.querySelector('#tabla-erabiltzaileak tbody');
    tbody.innerHTML = '';

    erabiltzaileak.forEach(e => {
        const tr = document.createElement('tr');
        let rolaTxt = '';
        if (e.rola === 'A') {
            rolaTxt = 'Administratzailea';
        } else {
            rolaTxt = 'Erabiltzailea';
        }
        tr.innerHTML = `
            <td>${e.nan}</td>
            <td>${e.izena}</td>
            <td>${e.abizena}</td>
            <td>${e.erabiltzailea}</td>
            <td>${rolaTxt}</td>
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


function ikusi(erabiltzailea) {
  const modalBody = document.querySelector('#erabiltzaileakModal .modal-body');
  let rolaTxt = '';
        if (erabiltzailea.rola === 'A') {
            rolaTxt = 'Administratzailea';
        } else {
            rolaTxt = 'Erabiltzailea';
        }
  modalBody.innerHTML = `
    <p><strong>NAN:</strong> ${erabiltzailea.nan}</p>
    <p><strong>Izena:</strong> ${erabiltzailea.izena}</p>
    <p><strong>Abizena:</strong> ${erabiltzailea.abizena}</p>
    <p><strong>Erabiltzailea:</strong> ${erabiltzailea.erabiltzailea}</p>
    <p><strong>Rola:</strong> ${rolaTxt}</p>
  `;
  const modal = new bootstrap.Modal(document.getElementById('erabiltzaileakModal'));
  modal.show();
}