var consejos;
consejos = document.querySelector(".consejos");
var buenosConsejos = [
    '"Evalúa tus necesidades:" Determina cuánta sombra necesitas, dónde la necesitas y cuánto espacio tienes disponible para instalar un toldo o una sombrilla.',
    '"Solicita garantías:" Pregunta sobre las garantías ofrecidas por el proveedor, especialmente para protegerte en caso de defectos de fabricación.',
    '"Consulta sobre la instalación:" Averigua si la instalación está incluida en la compra y si no, asegúrate de que puedas instalarlo de manera segura o contratar a un profesional.',
    '"Compara precios:" Compara los costos de alquiler de diferentes proveedores y busca ofertas especiales o descuentos por temporada.',
    '"Verifica la disponibilidad:" Asegúrate de que el toldo o la sombrilla que deseas alquilar esté disponible en las fechas deseadas.',
    '"Considera el diseño:" Elije un diseño que se adapte al estilo de tu espacio exterior y sea estéticamente atractivo.',
    '"Pide recomendaciones:" Consulta con amigos, familiares o vecinos que tengan experiencia en la compra o alquiler de toldos y sombrillas para obtener recomendaciones.',
    '"Prueba la facilidad de uso:" Si es posible, prueba el mecanismo de apertura y cierre del toldo o sombrilla para asegurarte de que sea fácil de usar.',
    '"Considera la movilidad:" Si planeas mover la sombrilla con frecuencia, elige una que sea fácil de transportar y montar.',
    '"Negocia si es necesario:" No dudes en negociar el precio, especialmente si estás comprando un producto caro o alquilando a largo plazo.',
    '"Evalúa tus necesidades:" Determina cuánta sombra necesitas, dónde la necesitas y cuánto espacio tienes disponible para instalar un toldo o una sombrilla.',
    '"Establece un presupuesto:" Decide cuánto estás dispuesto a gastar en un toldo o sombrilla. Esto te ayudará a buscar opciones que se ajusten a tu presupuesto.',
    '"Revisa las opiniones:" Busca opiniones y reseñas en línea sobre los productos y servicios de los proveedores que estás considerando.',
    '"Mide el espacio:" Mide el área donde planeas instalar el toldo o sombrilla para asegurarte de que encajará de manera adecuada.',
    '"Considera la durabilidad:" Busca materiales resistentes a la intemperie, como telas de alta calidad y estructuras de aluminio o acero inoxidable.',
];

let numRandom=Math.round(Math.random()*(buenosConsejos.length));
if(numRandom<buenosConsejos.length){
    let anuncio=document.createElement("div");
    anuncio.textContent=buenosConsejos[numRandom];
    consejos.appendChild(anuncio);
} else{
    let vuelveRecargar=document.createElement("div");
    vuelveRecargar.textContent="Vuelve a Recargar para darte un buen consejo de que toldo y/o sombrilla puedes alquilar y/o comprar";
    consejos.appendChild(vuelveRecargar);
}

let cajaAnuncio = document.querySelector('aside');

let boton=document.querySelector(".cerrar");
boton.addEventListener('click',()=>{
    cajaAnuncio.style.display = 'none';
});