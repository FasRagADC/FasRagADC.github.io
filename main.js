if ('serviceWorker' in navigator) {
    console.log('Si carga el SW');
    navigator.serviceWorker.register('https://fasragcorporation.github.io/sw.js')
        .then( resp => console.log('serviceWorkwr Cargo', resp))
        .catch(err => console.log('NO hay SW',err));
}else{
    console.log('Este navegador no soporta la PWA');
}