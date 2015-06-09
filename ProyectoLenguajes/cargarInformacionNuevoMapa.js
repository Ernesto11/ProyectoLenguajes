
function nuevoMapa(){


  if(document.getElementById("ingresarNombreMapa").value==""){
		alert("Por favor ingrese la informacion solicitada!!");
	}
  else {
     window.location = ('LibretaViajero.html');
  }

}

function inicializarMapaInformativo() {

  var lugarInicial = new google.maps.LatLng(-25.363882,131.044922);
  

  var mapOptions = {
    zoom: 2,
    center: lugarInicial,
  }

  var mapa = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


  var marcador = new google.maps.Marker({
      position: lugarInicial,
      map: mapa,
      
  });

  var listaLugaresLatitud = [23.634501,7.53998,51.165691,-14.235004,-11.202692]; 
  var listaLugaresLongitud= [-102.55278,-5.54708,10.451526,-51.925279,17.8738869];


  for(var i=0; i<listaLugaresLongitud.length; ++i){

      var lugar = "lugar"+i.toString();     
      lugar = new google.maps.LatLng(listaLugaresLatitud[i],listaLugaresLongitud[i]);

      var marcadorSitios = "marcador"+i.toString();
      
      marcadorSitios = new google.maps.Marker({
        position: lugar,
        map: mapa,
      
      });
      
  }

  if (document.getElementById("radioTrazar").checked==true){

     document.getElementById("radioDistancias").disabled = false;
     document.getElementById("mostrarButton").disabled = false;

     var linea_trazar = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          
          google.maps.drawing.OverlayType.POLYLINE,
        ]
      },

      polylineOptions: {
      fillColor: '#ffff00',
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1
    }

    });
    

    linea_trazar.setMap(mapa);
  }
}

function mostrarDistancias(){

   var opt = document.createElement("option");
        // Add an Option object to Drop Down/List Box
        document.getElementById("listbox1").options.add(opt);


        // Assign text and value to Option object
        opt.text = "3";
        opt.value = "3";
  window.location = ('MostrarDistancias.html');


}