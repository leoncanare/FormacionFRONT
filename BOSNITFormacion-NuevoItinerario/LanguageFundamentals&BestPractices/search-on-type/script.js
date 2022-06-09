const urlApi = 'https://digimon-api.vercel.app/api/digimon'

//Div donde pintamos la data recogida y filtrada. 
const elementsList = document.getElementById('digiListContainer');
//Input en el que realizamos la busqueda.
const elementsSearch = document.getElementById('searchDigimon');
//Seleccionamos todos los bontones con la clase .btn
const filterButtons = document.querySelectorAll('.btn');
document.get
let elements = [];

//Por cada boton que seleccionamos anterirormente asignamos un eventListener y obtenemos suide colocandole en el nivel de digimon que querramos mostrar y buscar por pantalla.
filterButtons.forEach((button) => {
    button.addEventListener('click',(res) => {
        levelSelect = res.currentTarget.id; 
        enableButtons();
        document.getElementById(levelSelect).disabled = true;
        loadList();
    });
});

//Este metodo lo necesitamos para hablitar el boton al seleccionar otro nivel.
function enableButtons() {
    filterButtons.forEach(elem => elem.disabled = false);
}

//Metodo que se encarga de obtener los datos de nuestra api filtrados por nuestros botones y pintarlos por pantalla con nuestra funcion displayElements.
const loadList = async () => {
    try {
        const res = await 
        fetch(`https://digimon-api.vercel.app/api/digimon/level/${levelSelect}`);
        elements = await res.json();
        displayElements(elements);
    } catch (err) {
        console.error(err);
    }
};

//Metodo que se encarga de generar la estructura de cada elemento que mostremos por pantalla. Para ello utilizamos .map que nos permite por cada elemento generar la siguiente estructura.
const displayElements = (object) => {
    const htmlString = object
    .map((element) => {
        return `
        <li class="elementList">
            <h2>${element.name}</h2>
            <p><b>Nivel:</b> ${element.level}</p>
            <img src="${element.img}"></img>
        </li>
        `;
    })
    .join('');
    elementsList.innerHTML = htmlString;
};

//Generamos un metodo que retorna cualquier insercion de campos que realicemos en nuestro input, retorna los elementos que coincidan con las letras del nobre de nuestro digimon.
elementsSearch.addEventListener('keyup',(res) =>{
    const stringSearch = res.target.value.toLowerCase();
    
    const elemnetsFiltered = elements.filter((characters) => {
        return (
            characters.name.toLowerCase().includes(stringSearch)
            );
    });
    displayElements(elemnetsFiltered);
});

    

