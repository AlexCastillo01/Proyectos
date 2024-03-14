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

        const tableHead = <tr><th>foto</th><th>Descripcion</th><th>precio</th></tr>;
        let tableBody = '';
        //como funciona? para cada categoria de los datos , se realizan varios pasos
        //crear un titulo para la categoria: se crea un elemnto  <h2> para el titulo de la categoria se establece su contenido de texto al nombre de la categoria (category.category), y luego se agrega al contenedor de menu.
        //crear una tabla para los elementos de esa categoria.Primero se define el encabezado de la tabla (<th>foto</th>thdescripcion</th><th>precio</th>).

        category.items.forEach(item => [
            tableBody += <tr>
                <td><img src= "${item.image}" alt="{item.name}"></img></td>
                <td>${item.image} - ${item.description}</td>
                <td>${item.price}</td>

            </tr>
            
        ]);
        //que hace? para cada item dentro de category.iotems dentro de category.items,se concentena una nueva fila(<tr>) a tableBody.Esta fila contiene una celda para la imagen del elemento (usando el archivo src para la URL de la imagen y "alt" para el texto alternativo), tra la celda para el nombre y la descripcion de elemento y una tercera celda para el orecio del elemento.
        table.innerHTML = tableHead + tableBody;
        //que hace? una vez conmpletadas todas las filas de la tabla para los elemntos de una categoria, se combina el encabezado de la tabla (tableHead) con el cuerpo de la tabla (tableBody)y se establece como el contenido HTML de la tabla.Finalmente esta tabla se añade al contenedor del menu en la pagina web.
        });

        })
        //poblar la tabla con los elementos: para cada item dentro de una categoria,se crea una fila (<tr></tr>)con tres celdas (<td></td>): una para la imagen (con un elemento <img>), otra para el nombre y descripcion del item, y una ultima para el precio .Esto se hace concatenado la nueva fila a una variable tableBody.
        //finalizar y mostrar la tabla; una vez que todas las filas han sido agregadas a tableBody , se establece el contenido interno (innerHTML)de la tabla combinando el encabezado con el cuerpo , luego,  esta tabla completa se agrega al contenedor del menu en el documento





















