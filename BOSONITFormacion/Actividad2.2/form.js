//Boton enviar datos
let buttonSubmit = document.getElementById('btn_submit');

buttonSubmit.addEventListener('click', function(){
    let input = document.getElementById('input_nombre');
    let input2 = document.getElementById('input_apellido');
    let input3 = document.getElementById('input_contraseña');
    let input5 = document.getElementById('input_em');
    let input6 = document.getElementById('input_ciudad');
    let input8 = document.getElementById('input_fech_ini');
    let input10 = document.getElementById('input_fech_fin');
    
    if(input_nombre.value == ""){
        alert('Error: El nombre esta vacio.');
    }
    else if(input_apellido.value == ""){
        alert('Error: El apellido esta vacio.');
    }
    else if(input_contraseña.value == ""){
        alert('Error: La contraseña esta vacia.');
    }
    else if(input_em.value == ""){
        alert('Error: El email esta vacio.');
    }
    else if(input_ciudad.value == ""){
        alert('Error: El campo ciudad esta vacio.');
    }
    else if(input_fech_ini.value == ""){
        alert('Error: La fecha de creación esta vacia.');
    }
    else if(input_fech_fin.value == ""){
        alert('Error: La fecha de finalización esta vacia.');
    }
    else{
        alert('Se enviaron tus datos');
    }
    
});

//Botton limpiar datos
let buttonClean = document.getElementById('btn_clean');

buttonClean.addEventListener('click', function(){
    let input = document.getElementById('input_nombre');
    input.value = '';

    let input2 = document.getElementById('input_apellido');
    input2.value = '';

    let input3 = document.getElementById('input_contraseña');
    input3.value = '';

    let input4 = document.getElementById('input_em_emp');
    input4.value = '';

    let input5 = document.getElementById('input_em');
    input5.value = '';

    let input6 = document.getElementById('input_ciudad');
    input6.value = '';

    let input7 = document.getElementById('input_atv');
    input7.value.checked = false;

    let input8 = document.getElementById('input_fech_ini');
    input8.value = '';

    let input9 = document.getElementById('input_url');
    input9.value = '';

    let input10 = document.getElementById('input_fech_fin');
    input10.value = '';

    alert('Se limpiaron todos tus datos.');
});




const uploadPersonas = async() =>{
    
    try{    
        //function fetch(input : RequestInfo)
        const respuesta = await fetch('http://localhost:3000/personas');
        
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();
        
            console.log(datos);
            
        }else{
            console.log('No conocemos su error ponganse en contacto con nosotros');
        }

    }catch(error){
        console.log(error);
    }
}
uploadPersonas();



//marcamos por consola json-server "nombre de bd" en la ubicacion del proyecto