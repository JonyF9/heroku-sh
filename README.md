# heroku-sh
API superhero
El código fuente se compone de los siguientes archivos:
-css/style.css: contiene los estilos para las clases de paginación, imagen de fondo, formulario, tabla, y tarjeta que muestra un mensaje en caso de no encontrar resultados a la consulta. 

-index.php: su función es la de cargar el archivo home.html a través de un include_once.

-home.html: se compone de un formulario con una barra de búsqueda, un botón para ejecutar la consulta y otro botón para recargar la página.
            La consulta se ejecuta al hacer click en el botón Ver, se envía el texto de la barra de búsqueda a un script js en el archivo index.js.
            El resultado de la consulta se despliega en una tabla y si supera los 10 registros, se realiza una paginación donde se muestran 10 registros.
            La tabla tiene 3 campos: el # indica el número del registro obtenido en la consulta, Id es el identificador asociado al heroé y, por último el nombre del personaje.
            En caso de que la consulta no arroje resultados, se muestra una tarjeta html con el mensaje de 'invalid id' al buscar por Id, o 'character with given name not found'               al realizar la consulta por el nombre.
            
-js/index.js: contiene los scripts js para recibir los datos y enviar la respuesta obtenida a través de la consulta realizada a la API.
              la función buscar, obtiene en valor del texto de la barra de búsqueda, valida que no sea un campo vacío y verifica si se trata de una consulta por nombre o id. Si se               ingresa el caracter '/' este se reemplaza por ''.
              Las funciones busqueda_nombre y busqueda_id son las que hacen la consulta a la API con el método GET, si recibe una respuesta satisfactoria se envían los datos                     obtenidos a las funciones resultados_nombre y resultado_id respectivamente.
              En las funciones resultados_nombre, en caso de que la validación de que la respuesta sea satisfactoria, el JSON obtenido se asigna a dos arrays en el primer ciclo                 for. En la siguiente iteración for se asignan a un elemento html para poder mostrar el resultado en una tabla responsive. Si la respuesta es un error contenido en el               JSON, se muestra a través de una tarjeta html que el nombre no se encontró. 
              La función resultado_id funciona de manera similar, sólo que la respuesta al ser satisfactoria al hacer búsqueda por Id, el resultado da una única fila.

-js/paginacion.js: realiza la paginación de los datos que se van a mostrar en el html, limita la cantidad de registros por página a 10 elementos.

-img/comics.jfif: imagen de fondo para el html.
