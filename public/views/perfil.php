<?php require_once "partials/header.html" ?>

<main class="container-fluid text-white vh-100 d-flex align-items-center justify-content-center p-5 container-home">
    <div class="container mb-5">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <div class="card shadow-lg rounded-3 border-0 overflow-hidden container-carta">
                    <div class="card-body p-4 p-md-5 bg-white"> <div class="row">
                            <div class="col-md-4 text-center mb-4 mb-md-0 border-end pe-4 nombre-perfil">
                                <img src="../assets/img/perfil/perfil.png" alt="Foto de Perfil" class="rounded-circle mb-3 border border-4 border-secondary">
                                <h3 class="fw-bold mb-1 text-uppercase">PRUEBA</h3>
                                <p class="text-primary fw-medium small text-muted">Administratzailea (Admin)</p>
                            </div>
                            
                            <div class="col-md-8 ps-md-5">
                                <h4 class="mb-4 text-secondary border-bottom pb-2 fw-semibold">Informazio Pertsonala</h4>
                                
                                <ul class="list-unstyled">
                                    <li class="mb-3">
                                        <p class="mb-0 text-muted small"><i class="bi bi-envelope me-2"></i> Email-a:</p>
                                        <p class="fw-normal fs-6 text-dark ms-3">a@a.com</p>
                                    </li>
                                    <li class="mb-3">
                                        <p class="mb-0 text-muted small"><i class="bi bi-person me-2"></i> Izena:</p>
                                        <p class="fw-normal fs-6 text-dark ms-3">prueba</p>
                                    </li>
                                    <li class="mb-3">
                                        <p class="mb-0 text-muted small"><i class="bi bi-person-fill me-2"></i> Abizena:</p>
                                        <p class="fw-normal fs-6 text-dark ms-3">prueba</p>
                                    </li>
                                </ul>

                                <hr class="mt-4 mb-3">
                                
                                <a href="/logout.php" class="text-decoration-none btn btn-danger fw-medium d-inline-block align-items-center"><i class="fas fa-sign-out-alt me-1"></i> Saioa Itxi</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
</main>

<?php require_once "partials/footer.html" ?>