import ekipoakService from './services/ekipoakService.js';
import kategoriakService from './services/kategoriakService.js';

let kategoriak = [];
document.addEventListener('DOMContentLoaded', async () => {
    kategoriak = await kategoriakService.getAll();
    const ekipoak = await ekipoakService.getAll();
    renderizarTabla(ekipoak);
});

document.querySelector('#sumarEkipo').addEventListener('click', () => ikusiGehitu());

document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.querySelector('.bilatuInput');
    const tabla = document.getElementById('tabla-ekipoak');

    const filasTabla = tabla.querySelector('tbody').rows;
    const indicesBusqueda = [1, 3, 4];

    inputBusqueda.addEventListener('keyup', function () {
        const filtro = inputBusqueda.value.toLowerCase().trim();

        for (let i = 0; i < filasTabla.length; i++) {
            const fila = filasTabla[i];
            let encontrado = false;

            for (let j = 0; j < indicesBusqueda.length; j++) {
                const indice = indicesBusqueda[j];
                const celda = fila.cells[indice];

                if (celda) {
                    const textoCelda = celda.textContent.toLowerCase().trim();

                    if (textoCelda.includes(filtro)) {
                        encontrado = true;
                        break;
                    }
                }
            }

            if (encontrado) {
                fila.style.display = '';
            } else {
                fila.style.display = 'none';
            }
        }
    });
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
                <div class="d-flex gap-3 justify-content-end"> 
                    <button class="btnIkusi btn btn-sm btn-warning" alt='Informazio gehiago'><i class="fa-solid fa-eye"></i></button>
                    <button class="btnEditatu btn btn-sm btn-warning" alt='Editatu objektua'><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btnEzabatu btn btn-sm btn-danger" alt='Ezabatu objektua'><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
    `;
        tr.querySelector('.btnIkusi').addEventListener('click', () => ikusi(e));
        tr.querySelector('.btnEditatu').addEventListener('click', () => editatu(e));
        tr.querySelector('.btnEzabatu').addEventListener('click', () => confirmEzabatuModal(e));
        tbody.appendChild(tr);
    });
}


//Modal Editatu
function editatu(ekipoa) {
    const modalElement = document.getElementById('ekipoModal');
    const modal = new bootstrap.Modal(modalElement);

    const modalTitle = document.querySelector('#inbentarioaModalLabel');
    modalTitle.textContent = 'Ekipoa editatu';

    const modalBody = document.querySelector('#ekipoModal .modal-body');
    modalBody.innerHTML = `
    <form id="formEditKokaleku" class="needs-validation" novalidate>
      <div class="mb-3">
        <label class="form-label"><strong>ID</strong></label>
        <input disabled type="text" class="form-control" id="idInput" value="${ekipoa.id}">
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>izena</strong></label>
        <input type="text" class="form-control" id="izenaInput" value="${ekipoa.izena}" required>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>deskribapena</strong></label>
        <input type="text" class="form-control" id="deskribapenaInput" value="${ekipoa.deskribapena}" required>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>marka</strong></label>
        <input type="text" class="form-control" id="markaInput" value="${ekipoa.marka}" required>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>modeloa</strong></label>
        <input type="text" class="form-control" id="modeloInput" value="${ekipoa.modelo}" required>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>stock</strong></label>
        <input type="text" class="form-control" id="stockInput" value="${ekipoa.stock}" required>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>kategoria</strong></label>
        <select class="form-select" id="kategoriaInput" value="${ekipoa.idKategoria}"></select>
      </div>
    </form>
  `;

    const select = modalBody.querySelector('#kategoriaInput');
    kategoriak.forEach(g => {
        const option = document.createElement('option');
        option.value = g.id;
        option.textContent = g.izena;
        if (g.id === ekipoa.idKategoria) option.selected = true;
        select.appendChild(option);
    });

    modal.show();
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

function ikusiGehitu() {
    const modal = new bootstrap.Modal(document.getElementById('ekipoakGehituModal'));
    modal.show();
}





//Modal ezabatzeko konfirmazioa
function confirmEzabatuModal(item) {
    const modalTitle = document.querySelector('#ezabatuModalLabel');

    modalTitle.textContent = `${item.izena} Ekipoa ezabatuko duzu`;


    const modal = new bootstrap.Modal(document.getElementById('ezabatuModal'));
    modal.show();

    const confirmBtn = document.querySelector('#confirmEzabatuBtn');
    confirmBtn.onclick = async () => {
        try {

            await ekipoakService.delete(item.id);


            modal.hide();
            location.reload();

        } catch (errorea) {
            console.error('Errorea elementua ezabatzean:', errorea);
        }
    };
}

//Gordetzeko datuak
async function gordeDatuak() {
    const modalElement = document.getElementById('ekipoModal');
    const form = modalElement.querySelector('form');

    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }

    try {

        const id = document.querySelector('#idInput').value;
        const izena = document.querySelector('#izenaInput').value;
        const deskribapena = document.querySelector('#deskribapenaInput').value;
        const marka = document.querySelector('#markaInput').value;
        const modeloa = document.querySelector('#modeloInput').value;
        const stock = document.querySelector('#stockInput').value;
        const kategoria = document.querySelector('#kategoriaInput').value;

        if (!izena) {
            alert('Izena falta da');
            return;
        }

        await ekipoakService.update(id, izena, deskribapena, marka, modeloa, stock, kategoria);

        const modal = bootstrap.Modal.getInstance(document.getElementById('ekipoModal'));
        modal.hide();
        location.reload();
    } catch (errorea) {
        console.error('Errorea datuak gordetzean:', errorea);
        alert('Errorea datuak gordetzean');
    }
}

document.querySelector('#btnGorde').addEventListener('click', gordeDatuak);