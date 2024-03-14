fetch(menu.json)
//que hace esta linea? esta linea inicia la carga del archivo menu.json,fetch es una funcion de javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o un endpoint de API.
//como funciona? fecth devuelve una promesa que cuando se resuelve te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta no es directamente los datos en formato JSON , sino un objeto de respuesta queincluye varios detalles sobrela respuesta misma


.then(response => response.json())
//que hace?Esta linea toms el objeto de respuesta obtenido del fertch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto Javascript cesto asume el cuerpo de la respuesta esta formato JSON
.then(data=>{
    const menuContainer = document.getElementById('menu-container');
    //Que hace? aqui se procesan los datos json
    data.items.array.forEach(category => {
        const categoryTitle= document.createElement('h2');
        categoryTitle.textContent=category.category;
        menuContainer.appendChild(categoryTitle);
        const table = document.createElement('table');

    });





















})