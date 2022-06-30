var btnAbrirPopupS = document.getElementById('btn-abrir-popupS'),
    overlay = document.getElementById('overlay'),
    popupS = document.getElementById('popupS'),
    btnCerrarPopupS = document.getElementById('btn-cerrar-popupS');

btnAbrirPopupS.addEventListener('click', function(){
    overlay.classList.add('active');
    popupS.classList.add('active')
});

btnCerrarPopupS.addEventListener('click', function(){
    overlay.classList.remove('active');
    popupS.classList.add('remove')
});
