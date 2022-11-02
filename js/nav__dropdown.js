let Menu__dropdown = document.querySelector('.links');
let Lineas__Menu__1 = document.querySelector('.line:nth-child(1)');
let Lineas__Menu__2 = document.querySelector('.line:nth-child(2)');
let Lineas__Menu__3 = document.querySelector('.line:nth-child(3)');


document.querySelector('.icon__burger').onclick = () => {
    Lineas__Menu__1.classList.toggle('active');
    Lineas__Menu__2.classList.toggle('active');
    Lineas__Menu__3.classList.toggle('active');
    Menu__dropdown.classList.toggle('active');
}

document.querySelector('#item__1').onclick = () => {
    Menu__dropdown.classList.remove('active');
    Lineas__Menu__1.classList.remove('active');
    Lineas__Menu__2.classList.remove('active');
    Lineas__Menu__3.classList.remove('active');
}

document.querySelector('#item__2').onclick = () => {
    Menu__dropdown.classList.remove('active');
    Lineas__Menu__1.classList.remove('active');
    Lineas__Menu__2.classList.remove('active');
    Lineas__Menu__3.classList.remove('active');
}

document.querySelector('#item__3').onclick = () => {
    Menu__dropdown.classList.remove('active');
    Lineas__Menu__1.classList.remove('active');
    Lineas__Menu__2.classList.remove('active');
    Lineas__Menu__3.classList.remove('active');
}
document.querySelector('#item__4').onclick = () => {
    Menu__dropdown.classList.remove('active');
    Lineas__Menu__1.classList.remove('active');
    Lineas__Menu__2.classList.remove('active');
    Lineas__Menu__3.classList.remove('active');
}
document.querySelector('#item__5').onclick = () => {
    Menu__dropdown.classList.remove('active');
    Lineas__Menu__1.classList.remove('active');
    Lineas__Menu__2.classList.remove('active');
    Lineas__Menu__3.classList.remove('active');
}
document.querySelector('#item__6').onclick = () => {
    Menu__dropdown.classList.remove('active');
    Lineas__Menu__1.classList.remove('active');
    Lineas__Menu__2.classList.remove('active');
    Lineas__Menu__3.classList.remove('active');
}