const tipeo = new Typed(".tipeo", {
    strings: [
        '<i class="palabras">Desarrollador Web</i>',
        '<i class="palabras">Freelancer</i>',
        '<i class="palabras">Diseñador</i>',
        '<i class="palabras">Programador Java</i>'
    ],
    typeSpeed: 100, //velocidad en milisegundos para poner una letra.
    startDelay: 150, //Tiempo de retraso en iniciar la animación.
    backSpeed: 50, // Velocidad en milisegundos para borrar una letra.
    smartBackspace: true, //Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, //Alternar el orden en el que escribe las palabras.
    backDelay: 1000, // Tiempo de espera despues que se termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, //Cantidad de veces a repetir el array. false=infinite.
    showCursor: true, // Mostrar cursor palpitando.
    cursorChar: '|', // Caracter para el cursor
    contentType:'html' //'html' ó 'null' para texto sin formato.
});

// var edad = prompt("Cuantos años tienes?")
//     if( edad >= 18){
//         alert(`Tu edad es ${edad}, puedes acceder al sitio`)
//     } else if(edad < 18){
//         alert("No puedes acceder al sitio")
//     }
