document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("resume", onResume, false);
	
	var height = getRealContentHeight()-60;
	$("#tblhome").attr("height",height);
	$("#tblhome3").attr("height",height);
	
	var email = localStorage.getItem("email");
	
	
	if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
		
		window.location.href = "Login.html";
		
	}
	
	IDPage = getParameterByName('id');
	ODPage = getParameterByName('od');
	
	
	localStorage.setItem("palla1", "0")
	localStorage.setItem("palla2", "0")
	
	if(IDPage!=1){
	  localStorage.setItem("exit", "0")
	}

	
	isTabHolded=false;
	

	var map;
	var refreshIntervalId;
	var refreshIntervalId33;
	var refreshPos;
	var prefi2000;
	var item1;
	var item2;
	var item3;
	var variabile;
	
	$(document).on("touchstart", "#pass1", function(e){ richiesta1() });
	$(document).on("touchstart", "#pass2", function(e){ richiesta2() });
	$(document).on("touchstart", "#pass3", function(e){ richiesta3() });
	
	$(document).on("tap", "#ric1", function(e){
		magia3()
	});

	
	$(document).on("touchstart", "#esci", function(e){

				   
				   $("#pass1").hide();
				   $("#pass2").hide();
				   $("#pass3").hide();
				   $("#esci").hide();
				   
				   $("#blob2").hide();

				   
				   for(i=0; i<10000; i++)
				   {
				     window.clearInterval(i);
				   }
				   
				   resetta1(1);

   });
	
	
	$(document).on("touchstart", "#inizia", function(e){
		start();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
    
	$(document).on("touchstart", "#resetta", function(e){
		window.location.href = "index.html";
	});
	
	$(document).on("touchstart", "#mappa6", function(e){
				   
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
				   
	if(connectionStatus=='online'){
				   
		resetta1();
	}
	else
	{
		window.location.href = "index.html";
	}
				   
				   
	});
	
	$(document).on("tap", "#XX", function(e){
		window.location.href = "index.html";
	});
	
	$(document).on("tap", "#XXX", function(e){
		window.location.href = "index.html";
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#XX3", function(e){
		$.mobile.changePage ($("#win2"));
	    resetta1(1);
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#back3", function(e){
		inviopasseggero(3);
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#back4", function(e){
				   inviopasseggero(3);
				   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
				   });
	
	$(document).on("tap", "#xchiudi", function(e){
		chiudix();
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	
	$(document).on("tap", "#gratis", function(e){
		inviopasseggero(1);
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	
	$(document).on("tap", "#offerta", function(e){
		inviopasseggero(2);
		if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
	});
	

	if(IDPage==1){
		resetta1(1);
	}
	
	$(document).keydown(function (eventObj){
		getKey(eventObj);
    });
	

    $(".spinner").show();
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
    
    if(connectionStatus=='online'){
        $('#noconn').hide();
		
        var geostory = localStorage.getItem("geostory");
		
        
    if (geostory == 'NO'){
		navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
        
        function onSuccess(position) {
            var ciao = position.coords.latitude;
            var ciao1 = position.coords.longitude;
            
            localStorage.setItem("lat", ciao)
            localStorage.setItem("lng", ciao1)
            
            localStorage.setItem("geostory", "SI")
        }
        
        
        function onError(error) {
			navigator.geolocation.getCurrentPosition(onSuccess, onError1, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
        }
        
        function onError1(error) {
            localStorage.setItem("geostory", "NO")
            
            navigator.notification.alert(
               'Non riesco a rilevare la tua posizione',
                alertDismissed,
                'Attenzione',
                'OK'
               );
        
            $(".spinner").hide();
        }
    }
    else{
        var latitudine = localStorage.getItem("lat");
        var longitudine = localStorage.getItem("lng");
        
        localStorage.setItem("geostory", "SI")
        
        $(".spinner").hide();
    }
		
		
								  var lat = localStorage.getItem("lat");
								  var lng = localStorage.getItem("lng");
		
		
								  //var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
								  //var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
		
								  localStorage.setItem("lat", lat)
								  localStorage.setItem("lng", lng)
		

								  codeLatLng(lat,lng);
    
}
    
    else{
		navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		
		
		window.location.href = "index.html";
		
		
    }
	
	
	if(IDPage==2){
		window.location.href = "#win2";
		resetta2();
	}
}

function chiama(km) {
	alert(km)
}

function CenterControl(controlDiv, map) {
	
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'transparent';
	controlUI.style.border = '0px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 0px 0px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '22px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to recenter the map';
	controlUI.style.height = '60px';
	controlUI.style.width = '320px';
	//controlUI.style.display = 'none';
	controlDiv.appendChild(controlUI);
	
	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	controlText.style.fontSize = '12px';
	controlText.style.lineHeight = '30px';
	controlText.style.paddingLeft = '5px';
	controlText.style.paddingRight = '5px';
	controlText.innerHTML = '<br><table width="100%"><tr><td align="right"><a id="XXX" href="index.html" rel="external"><img src="img/xx.png" width="25px"></a></td></tr></table>';
	controlUI.appendChild(controlText);
	
	//<input id="viale" name="viale" type="text" value="'+ localStorage.getItem("Via") +'">
	//var g = document.createElement('div');
	//g.id ='sopra':
	//controlUI.appendChild(g);
	// Setup the click event listeners: simply set the map to Chicago.
	//controlUI.addEventListener('click', function() {
		//alert();
		//map.setCenter(chicago);
	//});
	
}

function getKey(key){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
		
		inviopasseggero(3);
		
	}
	
}

function cambiap() {
    $('#footer').show();
    $.mobile.changePage ($("#home"));
}

function cambiah() {

    window.location.href = "index.html";
    
}

function nodiv() {
	 alert(22);
	 $("#sopra").hide();
	
}

function sidiv() {

	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	
}


function alertDismissed() {
    $(".spinner").hide();
}

function onConfirm(button) {
    $(".spinner").hide();
    
    if (button==1){
        window.location.href = "Token.html";
    }
    
}

function codeLatLng(lati,lngi) {
    var geocoder;
    geocoder = new google.maps.Geocoder();
    //var input = "41.875094, 12.478151";
    //var latlngStr = input.split(',', 2);
    var lat = parseFloat(lati);
    var lng = parseFloat(lngi);
    var latlng = new google.maps.LatLng(lat, lng);
    
    geocoder.geocode({'latLng': latlng}, function(results, status) {
	 if (status == google.maps.GeocoderStatus.OK) {
	 if (results[1]) {
	 
		/*var tabella = '<table align="center" border="0" width="310px" height="60px">';
		tabella = tabella + '<tr><td align="center" width="50px"><a href="maps:daddr=41.913010,12.442009&saddr=41.875094,12.478151"><img src="images/pin.png" width="32px"></a></td><td align="left"><font color="white" size="2">'+ results[1].formatted_address +'</font></td></tr>';
		tabella = tabella + '</table>';*/
	 
		var viadotto = results[1].formatted_address;
	 
		localStorage.setItem("Via", viadotto)
					 
		document.getElementById("viale").value = viadotto;
	 
		$('#classifica').html('');
		$(".spinner").hide();
		//funzioneradar();
	 
	 } else {
	  /*navigator.notification.alert(
	   'Non riesco a rilevare la tua posizione',  // message
		alertDismissed,         // callback
		'Attenzione',            // title
		'OK'                  // buttonName
	  );*/
		$(".spinner").hide();
		//funzioneradar();
	 }
	 } else {
	  /*navigator.notification.alert(
	   'Non riesco a rilevare la tua posizione',  // message
		 alertDismissed,         // callback
		 'Attenzione',            // title
		 'OK'                  // buttonName
	 );*/
	 
		$(".spinner").hide();
		//funzioneradar();
	 }
	 });
}

function funzioneradar() {
$(function() {
  
  var $rad = $('#rad'),
  $obj = $('.obj'),
  deg = 0,
  rad = 75; //   = 321/2
  
  $obj.each(function(){
            var data = $(this).data(),
            pos = {X:data.x, Y:data.y},
            getAtan = Math.atan2(pos.X-rad, pos.Y-rad),
            getDeg = ~~(-getAtan/(Math.PI/180) + 180);
            $(this).css({left:pos.X, top:pos.Y}).attr('data-atDeg', getDeg);
            });
  
  (function rotate() {
   $rad.css({transform: 'rotate('+ deg +'deg)'});
   $('[data-atDeg='+deg+']').stop().fadeTo(0,1).fadeTo(1700,0.2);
   
   // LOOP
   setTimeout(function() {
              deg = ++deg%360;
              rotate();
              }, 25);
   })();
  });
}

function getRealContentHeight() {
	var header = $.mobile.activePage.find("div[data-role='header']:visible");
	var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
	var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
	var viewport_height = $(window).height();
    
	var content_height = viewport_height - header.outerHeight() ;//footer.outerHeight(); -48
	if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
		content_height -= (content.outerHeight() - content.height());
	}
	
	return content_height;
}

function mappatura() {
    $('#footer').hide();
    
    $("#btn").click();
}

function gps() {
    $("#gps2").click();
}

function verificawifi(){
    $("#verifica").click();
}

function onResume() {
	
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){
	
	setTimeout(function() {
	   //localStorage.setItem("geostory", "NO")
	   //clearInterval(refreshIntervalId);
		
		for(i=0; i<10000; i++)
		{
		window.clearInterval(i);
		}
			   
	   resetta1(1);
	}, 200);
		
	}
	else{
		window.location.href = "index.html";
	}
}

function getDistance(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1);
	var a =
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
	Math.sin(dLon/2) * Math.sin(dLon/2)
	;
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}


function resetta1(focus) {
	
	localStorage.setItem("fatto","0")
	
	//PRESS TO MARKER
	$(function(){
   $(document).bind( "taphold", tapholdHandler );
	  //$( "div.box" ).bind( "taphold", tapholdHandler );
	  
	  
	  function tapholdHandler( event ){
	  $( event.target ).addClass( "taphold" );
	  isTabHolded=true;
	  }
	  });	//----------------
	
	
	var connectionStatus = false;
	connectionStatus = navigator.onLine ? 'online' : 'offline';
	
	if(connectionStatus=='online'){

	//var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	

	//$("#btn").click();
	//marker.setMap(null);
	//ido.setVisible(false);
	
	//var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
	//var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
	
	//localStorage.setItem("lat", lat)
    //localStorage.setItem("lng", lng)

	
	var latlng = new google.maps.LatLng(lat, lng, 1);
	
	var $content = $("#win2 div:jqmData(role=content)");
    $content.height (getRealContentHeight());
                                                              
	  var options = {
	  zoom : 13,
	  center : latlng,
	  mapTypeId : google.maps.MapTypeId.ROADMAP,
	  scrollwheel	: false,
	  zoomControl: true
  
	  };
		
	  map = new google.maps.Map($content[0], options);
	
	  $.mobile.changePage ($("#win2"));
	  setTimeout(function() {
		 google.maps.event.trigger(map, "resize");
		 map.setCenter(latlng);
	  }, 600);

	
	var contentString1 =
	
	'<div class="popup">'+
	'<h2> My Pub</h2>'+
	'<p>Example Strasse n.1</b>'+
	'</div>';
	
	var infowindow = new google.maps.InfoWindow({
												content: contentString1,
												maxWidth: 200,
												maxHeight: 150,
												});
	
	var beaches = [];
	var markers = [];//some array
	var posizione = 1;
	var distanza = "";
	var numero = "";
	
	beaches.push(['Tua Posizione',lat,lng,1,0,0])
	
	//alert("http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"");
		
		var myLatLng = new google.maps.LatLng(lat, lng, 1);
		
		var icon = new google.maps.MarkerImage("img/autista.png", null, null, null, new google.maps.Size(50,50));
		//alert(myLatLng + beach[0])
		
		
		marker2 = new google.maps.Marker ({
										  map : map,
										  icon: icon,
										  optimized: false,
										  position : myLatLng,
										  content:'<div class="popup">Tua Posizione</div>',
										  title: '1',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: 1
										  });
		
		google.maps.event.addListener(marker2, 'click', function() {
									  
									  infowindow.setContent(this.content);
									  infowindow.open(map, this);
									  
									  });
		
		var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
		var iconnn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
		
		// marker1.setMap(null);
		
		
		marker1 = new google.maps.Marker ({
										  map : map,
										  icon: icon,
										  optimized: false,
										  position : myLatLng,
										  //content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
										  title: '',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: -10
										  });
		
		marker3 = new google.maps.Marker ({
										  map : map,
										  icon: iconn,
										  optimized: false,
										  position : myLatLng,
										  //content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
										  title: '',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: -11
										  });
		
		marker4 = new google.maps.Marker ({
										  map : map,
										  icon: iconnn,
										  optimized: false,
										  position : myLatLng,
										  //content:'<div class="popup">'+ beach[0] +'<br>Km'+ beach[5] +'<br><a href="#home3">Cliccami</a></div>',
										  title: '',
										  //label: ''+ beach[1] +','+ beach[2] +'',
										  zIndex: -12
										  });
		
	if(focus==1){
		$("#btninizia").hide();
		$("#pass1").hide();
		$("#pass2").hide();
		$("#pass3").hide();
		$("#esci").hide();
		$("#blob2").hide();
		
		//$("#loading").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==3){
				  $("#pass1").hide();
				  $("#pass2").hide();
				  $("#pass3").hide();
				  }
				  
				  
				  if(item.Token==4){
				  $("#pass1").hide();
				  $("#pass2").hide();
				  $("#pass3").hide();
				  $("#esci").hide();
				  
				  //resetta1(1);
				  
				  
				  marker1.setMap(null);
				  
				  var isVisible3 = marker3.getVisible();
				  if(isVisible3){
				  marker3.setMap(null);
				  }
				  
				  
				  var isVisible4 = marker4.getVisible();
				  if(isVisible4){
				  marker4.setMap(null);
				  }
				  
				  
				  
				  }
				  
				  
				  distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
				  
				  beaches.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_pass])
				  
				  
				if(posizione==1){
				  item1 = item.id_richiesta;
				  
				  $("#pass1").show();
				  $("#esci").show();
				  
				  if(item.stato==3){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  if(item.stato==1){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
				  }

				  
				  var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
				  var iconn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
				  var iconnn = new google.maps.MarkerImage("img/1p.png", null, null, null, new google.maps.Size(1,1));
				  
						// marker1.setMap(null);
				  var myLatLng1 = new google.maps.LatLng(item.lat,item.lng, 1);
				  
				  marker1 = new google.maps.Marker ({
													map : map,
													icon: icon,
													optimized: false,
													position : myLatLng1,
													content:'<div class="popup">'+item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">Cliccami</a></div>',
													title: '1',
													//label: ''+ beach[1] +','+ beach[2] +'',
													zIndex: -1
													});
				  
				}
				  
				if(posizione==2){
				  item2 = item.id_richiesta;
				  $("#pass2").show();
				  
				  if(item.stato==3){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  if(item.stato==1){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
				  }

				  
				  var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
				  //alert(myLatLng + beach[0] + beach[5])
				  
				  var myLatLng2 = new google.maps.LatLng(item.lat,item.lng, 1);
				  
				  //marker3.setMap(null);
				  
						marker3 = new google.maps.Marker ({
														  map : map,
														  icon: icon,
														  optimized: false,
														  position : myLatLng2,
														  content:'<div class="popup">'+item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">Cliccami</a></div>',
														  title: '2',
														  //label: ''+ beach[1] +','+ beach[2] +'',
														  zIndex: -10
														  });

				  
				}
				  if(posizione==3){
				  item3 = item.id_richiesta;
				  $("#pass3").show();
				  
				  if(item.stato==3){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  if(item.stato==1){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  
				  var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
				  //alert(myLatLng + beach[0] + beach[5])
				  
				  var myLatLng3 = new google.maps.LatLng(item.lat,item.lng, 1);
				  
				  //marker4.setMap(null);
				  marker4 = new google.maps.Marker ({
													map : map,
													icon: icon,
													optimized: false,
													position : myLatLng3,
													content:'<div class="popup">'+item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">Cliccami</a></div>',
													title: '4',
													//label: ''+ beach[1] +','+ beach[2] +'',
													zIndex: -100
													});
				  
				  }

				posizione = (posizione+1);
				  
			});
		   
		   
		   },
		   error: function(){
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);*/
		   
		   },
		   dataType:"jsonp"});

	
		//$("#blob1").attr("href", "javascript:alert()");

	   var centerControlDiv = document.createElement('div');
	   centerControlDiv.setAttribute('id', 'sopra');
	   var centerControl = new CenterControl(centerControlDiv, map);
	  
	   centerControlDiv.index = 1;
	   map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
	
		
		timer()
		
		//posizionegps()

	}
	
	
	/*INSERT TAP PROLUNGATO*/
	
	//google.maps.event.addListener(map, 'click', function(e) {
		//placeMarker(e.latLng, map);
								  
		//alert(e.latLng);
								  
	//});

	
	/*function placeMarker(position, map) {
		
		if (isTabHolded){
			var icon = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
			marker4 = new google.maps.Marker({
											position: position,
											map: map,
											icon: icon,
											content:'<div class="popup">ORA</div>',
											optimized: false
											});
			
			setTimeout(function() {

					   google.maps.event.addListener(marker4, "tap", function (event) {
										  var latitude2 = this.position.lat();
										  var longitude2 = this.position.lng();
													 
										  infowindow.setContent(this.position);
										  infowindow.open(map, this);
										  //alert(this.position);
										  }); //end addListener
			
					   map.panTo(position);
					   isTabHolded=false;

			}, 300);
		}
	}*/
	
	//---------------------------
		
		function onSuccess22(position) {
			
			//alert("timer22")
			
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			
			localStorage.setItem("lat", lat)
			localStorage.setItem("lng", lng)
			
			//var lat = localStorage.getItem("lat");
			//var lng = localStorage.getItem("lng");
			var latlng = new google.maps.LatLng(lat, lng);
			
			marker2.setPosition(latlng);
			map.setCenter(latlng);
			
			//localStorage.setItem("lat", ciao)
			//localStorage.setItem("lng", ciao1)
		}

		
		function onSuccess2(position) {
			
			//alert("timer")
			
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
			
			localStorage.setItem("lat", lat)
			localStorage.setItem("lng", lng)
			
			//var lat = localStorage.getItem("lat");
			//var lng = localStorage.getItem("lng");
			var latlng = new google.maps.LatLng(lat, lng);
			
			marker2.setPosition(latlng);
			//map.setCenter(latlng);
			
			//localStorage.setItem("lat", ciao)
            //localStorage.setItem("lng", ciao1)
        }
        

        function onError2(error) {
            //var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
			navigator.geolocation.watchPosition(onSuccess2, onError3, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
        }
	
        function onError3(error) {
            localStorage.setItem("geostory", "NO")
            
			window.location.href = "index.html";
        }
		
		
function posizionegps(){

	refreshPos = setInterval(function() {
		var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
		//onSuccess2();
	}, 2000);
}
	
	
function timer(){
	
	refreshIntervalId = setInterval(function() {
									//$("#pass1").hide();
									//$("#pass2").hide();
									//$("#pass3").hide();
									
									//var watchID = navigator.geolocation.getCurrentPosition(onSuccess22, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
									
									//onSuccess22();
									
									
									var lat = localStorage.getItem("lat");
									var lng = localStorage.getItem("lng");
									
									//var lat = "41.770447";  //  "41.783780"  "41.783780" localStorage.getItem("lat")
									//var lng = "12.373529";  //  "12.364947"  "12.364947" localStorage.getItem("lng")
									
									var beaches1 = [];
									var posizione = 1;
									var distanza = "";
									
									$("#loading").hide();
									$("#esci").show();
									
									
									beaches1.push(['Tua Posizione',lat,lng,1,0,0,0])
									
									var centromap = new google.maps.LatLng(lat, lng, posizione);
									
									$.ajax({
										   type:"GET",
										   url:"http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
										   contentType: "application/json",
										   //data: {ID: "Lazio"}, LIMIT 10
										   timeout: 7000,
										   jsonp: 'callback',
										   crossDomain: true,
										   success:function(result){
										   
										   $.each(result, function(i,item){
												  
												  if(item.Token==3){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  }
												  
												  
												  if(item.Token==4){
												  $("#pass1").hide();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  $("#esci").hide();
												  
												  //resetta1(1);
												  

												  marker1.setMap(null);
												  
												  var isVisible3 = marker3.getVisible();
												  if(isVisible3){
												  marker3.setMap(null);
												  }
												  
												  
												  var isVisible4 = marker4.getVisible();
												  if(isVisible4){
												  marker4.setMap(null);
												  }
												  
												  
												  
												  }
												  
												  
												  if(item.Token==1){
												  
												  var myLatLng = new google.maps.LatLng(item.lat, item.lng, posizione);
												  
												  distanza = getDistance(lat,lng,item.lat,item.lng).toFixed(1);
												  
												  beaches1.push(["<h2>"+item.nick+"</h2><br>"+item.partenza,item.lat,item.lng,posizione,item.rating,item.distanza,item.id_richiesta])
												  
												  
												  
												  if(posizione==1){
												  item1 = item.id_richiesta;
												  if(localStorage.getItem("palla1")!=1){
											   
												     palla1()
												  
											       }
												  
												  /*$(document).on("tap", "#pass1", function(e){
																 //window.location.href = "#index3";
																 
																 
																 //localStorage.setItem("geostory", "NO")
																 for(i=0; i<10000; i++)
																 {
																 window.clearInterval(i);
																 }
																 
																 richiesta1(item.id_richiesta);
																 
																 });*/
												  
												  
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
												  
												  marker1.setMap(null);


												  
												  marker1 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup">'+ item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">GPS</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  
												  google.maps.event.addListener(marker1, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
	
												  
												  
												  $("#pass1").show();
												  $("#pass2").hide();
												  $("#pass3").hide();
												  
												  if(item.stato==3){
												  $("#pass1").removeClass("custom-pass").addClass("custom-pass3");
												  $("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
												  $("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
												  }
												  
												  if(item.stato==1){
												  $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
												  $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
												  $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  if(item.stato==0){
												  $("#pass1").removeClass("custom-pass1").addClass("custom-pass");
												  $("#pass1").removeClass("custom-pass2").addClass("custom-pass");
												  $("#pass1").removeClass("custom-pass3").addClass("custom-pass");
												  }
												  if(item.stato==2){
												  $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
												  $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
												  $("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
												  }
												  
												  
												  
												  }
												  
												  if(posizione==2){
												  item2 = item.id_richiesta;
												  /*$(document).on("tap", "#pass2", function(e){
																 //window.location.href = "#index3";
																 
																 //localStorage.setItem("geostory", "NO")
																 
																 for(i=0; i<10000; i++)
																 {
																 window.clearInterval(i);
																 }
																 
																 richiesta2(item.id_richiesta);
																 
																 
																 });*/
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
												  
												  marker3.setMap(null);
												  
												  marker3 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup">'+ item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">GPS</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  
												  google.maps.event.addListener(marker3, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
												  
												  $("#pass2").show();
												  $("#pass3").hide();
												  
												  if(item.stato==3){
												  $("#pass2").removeClass("custom-pass").addClass("custom-pass3");
												  $("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
												  $("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
												  }
												  
												  if(item.stato==1){
												  $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
												  $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
												  $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  if(item.stato==0){
												  $("#pass2").removeClass("custom-pass1").addClass("custom-pass");
												  $("#pass2").removeClass("custom-pass2").addClass("custom-pass");
												  $("#pass2").removeClass("custom-pass3").addClass("custom-pass");
												  }
												  if(item.stato==2){
												  $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
												  $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
												  $("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
												  }
												  
												  
												  
												  }
												  
												  if(posizione==3){
												  
												  item3 = item.id_richiesta;
												  
												  var icon3 = new google.maps.MarkerImage("img/passeggero.png", null, null, null, new google.maps.Size(30,50));
												  
												  
												  var isVisible4 = marker4.getVisible();
												  if(isVisible4){
												  marker4.setMap(null);
												  }
												  
												  
												  marker4 = new google.maps.Marker ({
																					map : map,
																					icon: icon3,
																					optimized: false,
																					position : myLatLng,
																					content:'<div class="popup">'+ item.nick +'<br>Km'+ item.distanza +'<br><a href="#home3">GPS</a></div>',
																					title: item.nick,
																					//label: ''+ beach[1] +','+ beach[2] +'',
																					zIndex: posizione
																					});
												  
												  google.maps.event.addListener(marker4, 'click', function() {
																				
																				infowindow.setContent(this.content);
																				infowindow.open(map, this);
																				
																				});
												  
												  $("#pass3").show();
												  
												  if(item.stato==3){
												  $("#pass3").removeClass("custom-pass").addClass("custom-pass3");
												  $("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
												  $("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
												  }
												  
												  if(item.stato==1){
												  $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
												  $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
												  $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
												  }
												  if(item.stato==0){
												  $("#pass3").removeClass("custom-pass1").addClass("custom-pass");
												  $("#pass3").removeClass("custom-pass2").addClass("custom-pass");
												  $("#pass3").removeClass("custom-pass3").addClass("custom-pass");
												  }
												  if(item.stato==2){
												  $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
												  $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
												  $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
												  }
												  
												  
												  }
												  
												  posizione = (posizione+1);
												  
												  }
												  
												  });

										   },
										   error: function(){
										   
										   
										   },
										   dataType:"jsonp"});
									
									setTimeout(function() {

										map.setCenter(centromap);

								 }, 1000);

																		
			}, 8000);
	
	}
		

 }
	
}


function magia2C(utente,pass) {
	
	for(i=0; i<10000; i++)
	{
		window.clearInterval(i);
	}
	
	//posizionegps2();
	
	//var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	var lat = localStorage.getItem("lat");
	var lng = localStorage.getItem("lng");
	
	var posizione = 1;
	var distanza = "";
	
	
	var centromap = new google.maps.LatLng(lat, lng, posizione);
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ pass +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  //cambiare icona
				  var icon2 = new google.maps.MarkerImage("img/pin.png", null, null, null, new google.maps.Size(30,40));
				  
				  if(utente==1){
				  
				  localStorage.setItem("id_richietaP1",item.id_richiesta)
				  
				  $("#pass2").hide();
				  $("#pass3").hide();
				  
				  if(item.stato==1){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  if(item.stato==3){
				  $("#pass1").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  marker1.setVisible(true);
				  marker1.setIcon(icon2);
				  
				  var isVisible3 = marker3.getVisible();
				  if(isVisible3){
				  marker3.setVisible(false);
				  }
				  
				  
				  var isVisible4 = marker4.getVisible();
				  if(isVisible4){
				  marker4.setVisible(false);
				  

				  }
				  
				  
				  
				  }
				  
				  if(utente==2){
				  localStorage.setItem("id_richietaP2",item.id_richiesta)
				  $("#pass1").hide();
				  $("#pass3").hide();
				  $("#pass2").show();
				  
				  if(item.stato==1){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  if(item.stato==3){
				  $("#pass2").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  marker1.setVisible(false);
				  
				  marker3.setVisible(true);
				  marker3.setIcon(icon2);
				  
				  var isVisible4 = marker4.getVisible();
				  if(isVisible4){
				  marker4.setVisible(false);
				  }
				  
				  
				  }
				  
				  if(utente==3){
				  localStorage.setItem("id_richietaP3",item.id_richiesta)
				  $("#pass1").hide();
				  $("#pass2").hide();
				  $("#pass3").show();
				  
				  if(item.stato==1){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
				  }
				  if(item.stato==0){
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass");
				  }
				  if(item.stato==2){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
				  $("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
				  }
				  if(item.stato==3){
				  $("#pass3").removeClass("custom-pass").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
				  $("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
				  }
				  
				  marker1.setVisible(false);
				  marker3.setVisible(false);
				  
				  marker4.setVisible(true);
				  marker4.setIcon(icon2);
				  
				  }
				  
				  
				  posizione = (posizione+1);
				  
				  }
				  else{
				  //marker1.setMap(null);
				  }
				  
				  });
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
	
	localStorage.setItem("fatto","1")
	
	
	refreshIntervalId33 = setInterval(function() {
									  
									  //var watchID = navigator.geolocation.getCurrentPosition(onSuccess22, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
									  
									  //onSuccess22();
									  
									  var lat = localStorage.getItem("lat");
									  var lng = localStorage.getItem("lng");
									  
									  var posizione = 1;
									  var distanza = "";
									  
									  
									  var centromap = new google.maps.LatLng(lat, lng, posizione);
									  
									  $.ajax({
											 type:"GET",
											 url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ pass +"&id_autista="+ localStorage.getItem("id_autista") +"",
											 //url:"http://purplemiles.com/www2/check_richiesta_autista.php?email="+ localStorage.getItem("email") +"&latitudine="+ localStorage.getItem("lat") +"&longitudine="+ localStorage.getItem("lng") +"&id_autista="+ localStorage.getItem("id_autista") +"",
											 contentType: "application/json",
											 //data: {ID: "Lazio"}, LIMIT 10
											 timeout: 7000,
											 jsonp: 'callback',
											 crossDomain: true,
											 success:function(result){
											 
											 $.each(result, function(i,item){
													
													if(item.Token==1){
													
													
													if(utente==1){
													
													localStorage.setItem("id_richietaP1",item.id_richiesta)
													
													$("#pass2").hide();
													$("#pass3").hide();
													
													if(item.stato==1){
													$("#pass1").removeClass("custom-pass").addClass("custom-pass1");
													$("#pass1").removeClass("custom-pass2").addClass("custom-pass1");
													$("#pass1").removeClass("custom-pass3").addClass("custom-pass1");
													}
													if(item.stato==0){
													$("#pass1").removeClass("custom-pass1").addClass("custom-pass");
													$("#pass1").removeClass("custom-pass2").addClass("custom-pass");
													$("#pass1").removeClass("custom-pass3").addClass("custom-pass");
													}
													if(item.stato==2){
													$("#pass1").removeClass("custom-pass").addClass("custom-pass2");
													$("#pass1").removeClass("custom-pass1").addClass("custom-pass2");
													$("#pass1").removeClass("custom-pass3").addClass("custom-pass2");
													}
													if(item.stato==3){
													$("#pass1").removeClass("custom-pass").addClass("custom-pass3");
													$("#pass1").removeClass("custom-pass1").addClass("custom-pass3");
													$("#pass1").removeClass("custom-pass2").addClass("custom-pass3");
													}
													}
													
													if(utente==2){
													localStorage.setItem("id_richietaP2",item.id_richiesta)
													$("#pass1").hide();
													$("#pass3").hide();
													$("#pass2").show();
													
													if(item.stato==1){
													$("#pass2").removeClass("custom-pass").addClass("custom-pass1");
													$("#pass2").removeClass("custom-pass2").addClass("custom-pass1");
													$("#pass2").removeClass("custom-pass3").addClass("custom-pass1");
													}
													if(item.stato==0){
													$("#pass2").removeClass("custom-pass1").addClass("custom-pass");
													$("#pass2").removeClass("custom-pass2").addClass("custom-pass");
													$("#pass2").removeClass("custom-pass3").addClass("custom-pass");
													}
													if(item.stato==2){
													$("#pass2").removeClass("custom-pass").addClass("custom-pass2");
													$("#pass2").removeClass("custom-pass1").addClass("custom-pass2");
													$("#pass2").removeClass("custom-pass3").addClass("custom-pass2");
													}
													if(item.stato==3){
													$("#pass2").removeClass("custom-pass").addClass("custom-pass3");
													$("#pass2").removeClass("custom-pass1").addClass("custom-pass3");
													$("#pass2").removeClass("custom-pass2").addClass("custom-pass3");
													}
													}
													
													if(utente==3){
													localStorage.setItem("id_richietaP3",item.id_richiesta)
													$("#pass1").hide();
													$("#pass2").hide();
													$("#pass3").show();
													
													if(item.stato==1){
													$("#pass3").removeClass("custom-pass").addClass("custom-pass1");
													$("#pass3").removeClass("custom-pass2").addClass("custom-pass1");
													$("#pass3").removeClass("custom-pass3").addClass("custom-pass1");
													}
													if(item.stato==0){
													$("#pass3").removeClass("custom-pass1").addClass("custom-pass");
													$("#pass3").removeClass("custom-pass2").addClass("custom-pass");
													$("#pass3").removeClass("custom-pass3").addClass("custom-pass");
													}
													if(item.stato==2){
													$("#pass3").removeClass("custom-pass").addClass("custom-pass2");
													$("#pass3").removeClass("custom-pass1").addClass("custom-pass2");
													$("#pass3").removeClass("custom-pass3").addClass("custom-pass2");
													}
													if(item.stato==3){
													$("#pass3").removeClass("custom-pass").addClass("custom-pass3");
													$("#pass3").removeClass("custom-pass1").addClass("custom-pass3");
													$("#pass3").removeClass("custom-pass2").addClass("custom-pass3");
													}
													}
													
													
													
													
													posizione = (posizione+1);
													
													}
													else{
													//marker1.setMap(null);
													}
													
													});
											 
											 
											 },
											 error: function(){
											 
											 /*navigator.notification.alert(
											  'Possibile errore di rete, riprova tra qualche minuto.',  // message
											  alertDismissed,         // callback
											  'Attenzione',           // title
											  'Done'                  // buttonName
											  );*/
											 
											 },
											 dataType:"jsonp"});
									  
									  
									  //var lat = localStorage.getItem("lat");
									  //var lng = localStorage.getItem("lng");
									  
									  //var lat = parseFloat("41.8337871");
									  //var lng = parseFloat("12.4757278" );
									  
									  //map.setCenter(centromap);
									  
									  localStorage.setItem("fatto","1")
									  
									  
									  
									  }, 10000);
	
	
	
	//---------------------------
	
	function posizionegps2(){
		
		refreshPos = setInterval(function() {
								 var watchID = navigator.geolocation.getCurrentPosition(onSuccess2, onError3, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
								 //onSuccess2();
								 }, 2000);
		
	}
	
	function onSuccess22(position) {
		
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		
		localStorage.setItem("lat", lat)
		localStorage.setItem("lng", lng)
		
		//var lat = localStorage.getItem("lat");
		//var lng = localStorage.getItem("lng");
		var latlng = new google.maps.LatLng(lat, lng);
		
		marker2.setPosition(latlng);
		//map.setCenter(latlng);
		
		//marker.setPosition(latlng);
		//map.setCenter(latlng);
		
		//localStorage.setItem("lat", ciao)
		//localStorage.setItem("lng", ciao1)
	}
	
	function onSuccess2(position) {
		
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		
		localStorage.setItem("lat", lat)
		localStorage.setItem("lng", lng)
		
		//var lat = localStorage.getItem("lat");
		//var lng = localStorage.getItem("lng");
		var latlng = new google.maps.LatLng(lat, lng);
		
		marker2.setPosition(latlng);
		//map.setCenter(latlng);
		
		//marker.setPosition(latlng);
		//map.setCenter(latlng);
		
		//localStorage.setItem("lat", ciao)
		//localStorage.setItem("lng", ciao1)
	}
	
	
	function onError2(error) {
		//var watchID = navigator.geolocation.watchPosition(onSuccess2, onError3, { timeout: 80000 });
		navigator.geolocation.watchPosition(onSuccess2, onError3, {timeout: 50000, enableHighAccuracy: false, maximumAge: 0 });
	}
	
	function onError3(error) {
		localStorage.setItem("geostory", "NO")
		
		window.location.href = "index.html";
	}
	
	
}


function magia3() {
	var pass = item1;
	$("#blob").hide();
	//magia(1,pass)
}



function cancella(id){
	
	 $.ajax({
	 type:"GET",
	 url:"http://purplemiles.com/www2/check_cancella.php?id="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
	 contentType: "application/json",
	 //data: {ID: "Lazio"}, LIMIT 10
	 timeout: 7000,
	 jsonp: 'callback',
	 crossDomain: true,
	 success:function(result){
	 
	 $.each(result, function(i,item){
		
			if(item.Token==1){
			   // window.location.href = "map.html?id=1";
			
			   /*$("#pass1").hide();
			   $("#pass2").hide();
			   $("#pass3").hide();
			   $("#esci").hide();

			
			$("#btninizia").show();*/
			
			//localStorage.setItem("exitto", "1")
			
			
			for(i=0; i<10000; i++)
			{
			window.clearInterval(i);
			}
			
			//setTimeout(function() {
			//localStorage.setItem("geostory", "NO")
			//clearInterval(refreshIntervalId33);
			//window.location.href = "map.html?id=1";
			//onResume();
			//}, 200);
			
			//window.location.href = "#win2";
			//onDeviceReady();
			
			onResume();
			//window.location.href = "map2.html?id=1";
			
			}
			else{
			 navigator.notification.alert(
										 'Impossibile cancellare la richiesta.',  // message
										  alertDismissed,         // callback
										 'Attenzione',           // title
										 'Done'                  // buttonName
										 );

			}
	 });
	 
	 
	 },
	 error: function(){
	 
	 navigator.notification.alert(
	 'Possibile errore di rete, riprova tra qualche minuto.',  // message
	 alertDismissed,         // callback
	 'Attenzione',           // title
	 'Done'                  // buttonName
	 );
	 
	 },
	 dataType:"jsonp"});
	 
}

function casa(){
	window.location.href = "map.html";
	
	}

function start() {
	//chiamo e setto a 1 lo stato dell'autista (ok lavoro)
	
	$("#btninizia").hide();
	$("#loading").show();
	
	resetta1(1);
	
}


function palla1() {
	//chiamo e leggo=1
	if(localStorage.getItem("exit")=="0"){
	  $("#blob").show();
    }
	$("#btninizia").hide();
	
	
	$("#btnpass").show();
	
	localStorage.setItem("palla1", "1")
	localStorage.setItem("exit", "1")
	
}

function palla2() {

	$("#blob3").show();
	$("#btninizia").hide();
	$("#pass2").show();
	
	localStorage.setItem("palla2", "1")
}

function resetta22() {
	//chiamo e leggo=1
	$("#blob").show();
	$("#btninizia").hide();
	$("#btnpass").show();
	
}

function richiesta1() {
	id = item1

	$("#risp1").show();
	$("#risp2").hide();
	$("#gps22").hide();
	$("#risp3").hide();
	$("#gps3").hide();
	
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  $("#nickblob").html("<font color='#cc33cc'>"+ item.nick +"</font>");
				  localStorage.setItem("id_nick", item.nick)
				  $("#nickhome3").html(item.nick);
				  
				  $("#quando").html("<b>Quando:</b><font color='#cc33cc'>"+ item.quando +", "+ item.ora +"</font>");
				  
				  $("#Da").html("<b>Da:</b><font color='#cc33cc'>"+ item.partenza +"</font>");
				  
				  $("#Ad").html("<b>A:</b><font color='#cc33cc'>"+ item.arrivo +"</font>");
				  
				  $("#Note").html("<b>Note:</b><font color='#cc33cc'>"+ item.distanza +"</font>");
				  
				  if(item.stato!=0){
				    //alert(id)
					$("#risp1").hide();
				  }
				  
				  if(item.stato==2){
				  //alert(item.stato)
				  $("#gps1").show();
				  $("#rif1").html("Annulla");
				  
				  $(document).on("tap", "#gps1", function(e){
						//clearInterval(refreshIntervalId);
						
						//alert(item.lat+","+item.lng);
						
						var addressLongLat = item.lat+","+item.lng;
	
						window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
						
						$("#blob2").hide();
								 
						e.stopImmediatePropagation();
								 
						e.preventDefault();
								 
						return false;
								 
					});
				  
				  }
				  else{
					$("#rif1").html("Rifiuta");
					$("#gps1").hide();
				  }
				  
				  }
				  else{
				  //marker1.setMap(null);
				  }
				  
			});
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   $("#blob2").show();
		   
		   },
		   dataType:"jsonp"});
	
	
	$("#close1").show();
	$("#close2").hide();
	$("#close3").hide();
	
	$("#xchiudi1").show();
	$("#xchiudi2").hide();
	$("#xchiudi3").hide();
	
	
	$(document).on("touchstart", "#xchiudi1", function(e){
		
		$("#blob2").hide();
		magia2C(1,id)
		
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});

	$(document).on("touchstart", "#close1", function(e){
		$("#pass1").hide();
				   
		$("#blob2").hide();
		cancella(id)
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

	});
	
	$(document).on("touchstart", "#risp1", function(e){
				   
				   $("#blob2").hide();
				   $.mobile.changePage ($("#home3"));
				   
				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;
				   
	});
	
}

function richiesta2() {
	id = item2
	$("#risp1").hide();
	$("#gps1").hide();
	$("#risp2").show();
	$("#risp3").hide();
	$("#gps3").hide();
	
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  $("#nickblob").html("<font color='#cc33cc'>"+ item.nick +"</font>");
				  
				  $("#quando").html("<b>Quando:</b><font color='#cc33cc'>"+ item.quando +", "+ item.ora +"</font>");
				  
				  $("#Da").html("<b>Da:</b><font color='#cc33cc'>"+ item.partenza +"</font>");
				  
				  $("#Ad").html("<b>A:</b><font color='#cc33cc'>"+ item.arrivo +"</font>");
				  
				  $("#Note").html("<b>Note:</b><font color='#cc33cc'>"+ item.distanza +"</font>");
				  
				  if(item.stato!=0){
					$("#risp2").hide();
				  if(item.stato==2){
				  //alert(item.stato)
				  $("#gps22").show();
				  $("#rif2").html("Annulla");
				  
				  $(document).on("tap", "#gps22", function(e){
								 //clearInterval(refreshIntervalId);
								 var addressLongLat = item.lat+","+item.lng;
	
	//var refff = window.open("http://www.google.com/maps?q=220, Via Zoe Fontana, Roma", '_system');
	//"http://maps.google.com/maps?daddr=41.929622,12.608878&dirflg=r"
	window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
								 });
				  
				  }
				  else{
					$("#rif2").html("Rifiuta");
				  }
				  }

				  
				  }
				  else{
				  //marker1.setMap(null);
				  }
				  
						});
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   $("#blob2").show();
		   
		   },
		   dataType:"jsonp"});
	
	$("#close2").show();
	$("#close1").hide();
	$("#close3").hide();
	
	$("#xchiudi2").show();
	$("#xchiudi1").hide();
	$("#xchiudi3").hide();
	
	
	
	$(document).on("touchstart", "#xchiudi2", function(e){

				   $("#blob2").hide();
				   magia2C(2,id)
				   
				   });

	$(document).on("touchstart", "#close2", function(e){
	$("#pass2").hide();
	$("#blob2").hide();
	cancella(id)
	
		
	e.stopImmediatePropagation();
		
	e.preventDefault();
		
	return false;
	});
	
	$(document).on("touchstart", "#risp2", function(e){
				   $("#blob2").hide();
				    $.mobile.changePage ($("#home3"));
				   
				   });
	
}

function richiesta3() {
	id = item3
	$("#risp3").show();
	$("#risp2").hide();
	$("#gps22").hide();
	$("#risp1").hide();
	$("#gps1").hide();
	
	//alert(2)
	localStorage.setItem("id_richiesta", id)
	
	$("#blob2").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_richiesta_autista_id.php?email="+ localStorage.getItem("email") +"&lat="+ localStorage.getItem("lat") +"&lng="+ localStorage.getItem("lng") +"&id_richiesta="+ id +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){
				  
				  $("#nickblob").html("<font color='#cc33cc'>"+ item.nick +"</font>");
				  
				  $("#quando").html("<b>Quando:</b><font color='#cc33cc'>"+ item.quando +", "+ item.ora +"</font>");
				  
				  $("#Da").html("<b>Da:</b><font color='#cc33cc'>"+ item.partenza +"</font>");
				  
				  $("#Ad").html("<b>A:</b><font color='#cc33cc'>"+ item.arrivo +"</font>");
				  
				  $("#Note").html("<b>Note:</b><font color='#cc33cc'>"+ item.distanza +"</font>");
				  
				  if(item.stato!=0){
				    $("#risp3").hide();
				  }
				  
				  if(item.stato==2){
				  //alert(item.stato)
				  $("#gps3").show();
				  $("#rif3").html("Annulla");
				  
				  $(document).on("tap", "#gps3", function(e){
								 //clearInterval(refreshIntervalId);
								 var addressLongLat = item.lat+","+item.lng;
	
	//var refff = window.open("http://www.google.com/maps?q=220, Via Zoe Fontana, Roma", '_system');
	//"http://maps.google.com/maps?daddr=41.929622,12.608878&dirflg=r"
	window.open("google.navigation:q="+ addressLongLat +"&mode=d" , '_system');
	
								 $("#blob2").hide();
								 
								 e.stopImmediatePropagation();
								 
								 e.preventDefault();
								 
								 return false;
								 
								 });
				  
				  }
				  else{
				  //$("#gps2").hide();
				  $("#rif3").html("Rifiuta");
				  }
				  
				  }
				  else{
				  //marker1.setMap(null);
				  }
				  
						});
		   
		   
		   },
		   error: function(){
		   
		   /*navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   $("#blob2").show();*/
		   
		   },
		   dataType:"jsonp"});
	
	$("#close3").show();
	$("#close2").hide();
	$("#close1").hide();
	
	$("#xchiudi3").show();
	$("#xchiudi2").hide();
	$("#xchiudi1").hide();
	
	
	$(document).on("tap", "#xchiudi3", function(e){
				   $("#blob2").hide();
				   magia2C(3,id)

				   });
	
	$(document).on("tap", "#close3", function(e){
				   $("#pass3").hide();
				   $("#blob2").hide();
				   
				   cancella(id)

				   e.stopImmediatePropagation();
				   
				   e.preventDefault();
				   
				   return false;

				   });
	
	$(document).on("tap", "#risp3", function(e){
				   $("#blob2").hide();
				   $.mobile.changePage ($("#home3"));

				   });
	
}


function inviopasseggero(come){
	
	if(come==1){
	  var coming = "gratis"
	}
	
	if(come==3){
		if (self.document.formia.soldini.value == "") {
			navigator.notification.alert(
										 'inserire un importo',  // message
										 alertDismissed,         // callback
										 'Pin',            // title
										 'OK'                  // buttonName
										 );
			return;
		}

		
		var coming = self.document.formia.soldini.value;
	}
	
	if(come==2){
		var coming = "offerta";
	}
	
	//alert(coming + " - " + localStorage.getItem("id_richiesta"))
	
	//alert(localStorage.getItem("id_richiesta"))
	
	$.ajax({
		   type:"GET",
		   url:"http://purplemiles.com/www2/check_inviopasseggero.php?id="+ localStorage.getItem("id_richiesta") +"&note=note&importo="+ coming +"&id_autista="+ localStorage.getItem("id_autista") +"",
		   contentType: "application/json",
		   //data: {ID: "Lazio"}, LIMIT 10
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if(item.Token==1){

				  for(i=0; i<10000; i++)
				  {
				  window.clearInterval(i);
				  }
				  
				  //setTimeout(function() {
				  //localStorage.setItem("geostory", "NO")
				  //clearInterval(refreshIntervalId33);
				  //window.location.href = "map.html?id=1";
				  //onResume();
				  //}, 200);
				  
				  //window.location.href = "#win2";
				  //onDeviceReady();
				  
				  resetta1(1);
				  
				  //window.location.href = "map2.html?id=1";
				  
				  }
				  else{
				  navigator.notification.alert(
											   'Impossibile elaborare la richiesta.',  // message
											   alertDismissed,         // callback
											   'Attenzione',           // title
											   'Done'                  // buttonName
											   );
				  
				  }
				  });
		   
		   
		   },
		   error: function(){
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto.',  // message
										alertDismissed,         // callback
										'Attenzione',           // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}


function chiudix() {
	
	$("#blob2").hide();
}


function chiudi22(id) {
	
		$("#blob").hide();
}



function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }