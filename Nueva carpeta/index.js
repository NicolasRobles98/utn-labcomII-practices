
    
let imagenesFondo = ["img/estrellacelus.jpg", "img/fotojet-2.jpg", "img/muchoscelus.jpg"]
let i = 0;
var imagen = document.getElementById("a");

function cambiarImg(){
    alert(i);

    switch (i){
        case 0:
            imagen.style.backgroundImage = "url('img/estrellacelus.jpg')";
            break;
        case 1:
            imagen.style.backgroundImage = "url('img/fotojet-2.jpg')";
            break;
        case 2:
            imagen.style.backgroundImage = "url('img/muchoscelus.jpg')";
            break;
    }
    if (i == 2){
        i = 0;
    }
    else{
        i++;
    }
        
}
let intervalo = setInterval(cambiarImg(), 1000);



// var i = 0;
// var imagenesFondo = [
//     "https://static.nike.com/a/images/w_1920,c_limit/73a6ec94-cea8-49b1-9838-b70cee0c042f/c%C3%B3mo-practicar-skateboarding-para-principiantes.jpg",
//     "https://res.cloudinary.com/jnto/image/upload/w_600,fl_lossy,f_auto,q_auto,c_scale/v1/media/filer_public/8d/a7/8da7f3e5-90c3-4aea-b16e-82fa08e851fb/01_istock-470933205_rvkb7w",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hYXS1wX82S7a5iFL326Wf4jnGtQEpcYMPQ&usqp=CAU"
// ];

// function cambiarImagen() {


//     if (i >= imagenesFondo.length) {
//         i = 0;
//     }

//     var header = document.getElementsByTagName("header")[0];

//     header.style.backgroundImage = url(${imagenesFondo[i]});

//     i += 1;
// }

// setInterval(cambiarImagen, 30000);









// miDiv.style.backgroundImage = "url('https://htmlmasters.tech/wp-content/uploads/logo_small.png')";
// setTimeout();


//CHATGPT VERSION 1



// function cambiarImg() {
//     var imagenes = document.getElementsByClassName("cabecera");
//     var imagenesFondo = [
//         'url("img/estrellacelus.jpg")',
//         'url("img/fotojet-2.jpg")',
//         'url("img/muchoscelus.jpg")'
//     ];

//     for (var i = 0; i < 3; i++) {
//         setTimeout(function () {
//             imagenes[0].style.backgroundImage = imagenesFondo[i % 3];
//         }, i * 3000);
//     }
// }

// cambiarImg();



//CHATGPT VERSION 2




// function cambiarImg() {
//     var imagenes = document.getElementsByClassName("cabecera");
//     var i = 0;

//     function cambiarImagen() {
//         switch (i) {
//             case 0:
//                 imagenes[0].style.backgroundImage = 'url("img/estrellacelus.jpg")';
//                 break;
//             case 1:
//                 imagenes[0].style.backgroundImage = 'url("img/fotojet-2.jpg")';
//                 break;
//             case 2:
//                 imagenes[0].style.backgroundImage = 'url("img/muchoscelus.jpg")';
//                 break;
//         }

//         i = (i + 1) % 3;
//     }

//     setInterval(cambiarImagen, 3000);
// }
