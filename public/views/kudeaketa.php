<?php
require_once __DIR__ . '/../../src/require_auth.php';
$CURRENT_USER = require_auth_view('login');
?>
<?php require_once "partials/header.html" ?>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
<div class="contenedor my-5">
  <h1 class="mb-5">Kudeaketa</h1>

    <ul class="nav nav-tabs" id="kudeaketaTab" role="tablist">
    <li class="nav-item" >
      <button class="nav-link active" id="kokalekuak-tab"
              data-bs-toggle="tab"
              data-bs-target="#kokalekuak"
              type="button"
              role="tab"
              aria-controls="kokalekuak"
              aria-selected="true">
        Kokalekuak
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" id="kategoriak-tab"
              data-bs-toggle="tab"
              data-bs-target="#kategoriak"
              type="button"
              role="tab"
              aria-controls="kategoriak"
              aria-selected="false">
        Kategoriak
      </button>
    </li>
    <li class="nav-item">
      <button class="nav-link" id="link-tab"
              data-bs-toggle="tab"
              data-bs-target="#link"
              type="button"
              role="tab"
              aria-controls="link"
              aria-selected="false">
        Link
      </button>
    </li>
  </ul>




  <!-- Contenido de las tabs -->
  <div class="tab-content mt-4" id="myTabContent">
    <div class="tab-pane fade show active" id="kokalekuak" role="tabpanel" aria-labelledby="kokalekuak-tab">
    <!--Kokalekuen taula -->
        <table class=" table  table-hover" id="tabla-kokalekuak">
            <thead>
            <tr>
                <th scope="col">Etiketa</th>
                <th scope="col">id gela</th>
                <th scope="col">hasiera data</th>
                <th scope="col">amaiera data</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <div class="tab-pane fade" id="kategoriak" role="tabpanel" aria-labelledby="kategoriak-tab">
    <!--kategorien taula -->
        <table class=" table  table-hover" id="tabla-kategoriak">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">izena</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <div class="tab-pane fade" id="link" role="tabpanel" aria-labelledby="link-tab">
    <!--gelen taula -->
        <table class=" table  table-hover" id="tabla-gelak">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">izena</th>
                <th scope="col">taldea</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
  </div>
</div>

</div>
<script type="module" src="../assets/js/kudeaketa.js"></script>
<?php require_once "partials/footer.html" ?>

