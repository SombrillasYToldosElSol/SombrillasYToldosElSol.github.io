var nombre;
nombre = prompt("¿Cual es tu nombre?");
console.log(nombre);

let cajaBienvenida;
cajaBienvenida = document.querySelector("#bienvenida");
let cajaNombre;
cajaNombre = document.querySelector(".nombre");
let ponerNombre;

if(nombre != ""){
    ponerNombre=document.createElement("p");
    ponerNombre.textContent=nombre;
    cajaNombre.appendChild(ponerNombre);
    cajaBienvenida.style.display = "block";
    }
else{
    cajaBienvenida.style.display="none";
}

let boton=document.querySelector(".imgCerrar");
boton.addEventListener('click',()=>{
    cajaBienvenida.style.display = 'none';
});

