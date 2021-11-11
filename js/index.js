function buscar(){
  var v = document.getElementById('nombre').value;
  var string = v.replace("/","");
    if(v != ''){
      var e = parseInt(string);
      if(isNaN(e)){
        busqueda_nombre(string);
      }
      else{
        busqueda_id(string);
      }
    }
    else{
      tabla();
    }
  }

function busqueda_nombre(v){
  $.ajax({
    headers: {"Accept": "application/json"},
    type: "GET",
    url: "https://superheroapi.com/api.php/10226566386123269/search/" + v + '',
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    beforeSend: function(xhr){
      xhr.withCredentials = true;
      $("#developers").children().remove();
    },
    success: function (data) {
      resultados_nombre(data);
      var s = document.getElementById('search');
      var b = document.getElementById('nombre');
      s.disabled = true;
      b.disabled = true;
    },
    failure: function (data) {
     alert(data.responseText);
    },
    error: function (data) {
     alert(data.responseText);
    }
   });
}

function busqueda_id(v){
    $.ajax({
      headers: {"Accept": "application/json"},
      type: "GET",
      url: "https://superheroapi.com/api.php/10226566386123269/" + v + '',
      crossDomain: true,
      contentType: "application/json",
      dataType: "json",
      beforeSend: function(xhr){
        xhr.withCredentials = true;
      },
      success: function (data) {
       resultado_id(data);
       var s = document.getElementById('search');
       var b = document.getElementById('nombre');
       s.disabled = true;
       b.disabled = true;
      },
      failure: function (data) {
       alert(data.responseText);
      },
      error: function (data) {
       alert(data.responseText);
      }
     });
}

function resultados_nombre(data){
  var tabla = document.getElementById('hero');
  var div = document.getElementById('data_tabla');
  var card = document.getElementById('info');
  if(data['response'] == 'success'){
    var datos = data['results'];
    var id = [];
    var nombre = [];
    var f = datos.length;
    card.style.visibility = 'hidden';
    div.style.visibility = 'visible';
    div.style.display = 'block';
    card.style.display = 'none';
    tabla.innerHTML = "";
    for(var i = 0; i < f; i++){
      id[i] = datos[i]['id'];
      nombre[i] = datos[i]['name'];
    }
    var elemento = "";
    for(var i = 0; i < f; i++){
      elemento = '<tr><td colspan="4">'+(i+1)+'</td><td colspan="4">'+id[i]+'</td><td colspan="7">'+nombre[i]+'</td></tr>';
      tabla.insertAdjacentHTML('beforeend', elemento);
    }
    paginar();
  }
  else{
    div.style.display = 'none';
    card.style.visibility = 'visible';
    card.innerHTML = "";
    card.style.display = 'block';
    card.innerHTML = '<div class="card-body">'+data['error']+'</div>';
  }
}

function resultado_id(data){
  var tabla = document.getElementById('hero');
  var div = document.getElementById('data_tabla');
  var card = document.getElementById('info');
  if(data['response'] == 'success'){
    var datos = [];
    datos['id'] = data['id'];
    datos['name'] = data['name'];
    card.style.visibility = 'visible';
    div.style.visibility = 'none';
    div.style.display = 'none';
    card.style.display = 'block';
    tabla.innerHTML = "";
    elemento = '<tr><td colspan="4">'+'1'+'</td><td colspan="4">'+datos['id']+'</td><td colspan="7">'+datos['name']+'</td></tr>';
    tabla.insertAdjacentHTML('beforeend', elemento);
    paginar();
  }
  else{
    div.style.visibility = 'none';
    div.style.display = 'none';
    card.style.visibility = 'visible';
    card.innerHTML = ""
    card.style.display = 'block';
    card.innerHTML = '<div class="card-body">'+data['error']+'</div></div>';
  }
}

function tabla() {
  var display = document.getElementById('data_tabla');
  var card = document.getElementById('info');
  display.style.visibility = 'hidden';
  card.style.display = 'none';
}

function nuevo(){
  location.reload();
}
