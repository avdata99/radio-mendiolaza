
var app = {
    // Application Constructor

    streamingSrc: "http://108.163.175.18:8019/radio.ogg", // "http://radio.data99.com.ar:8000/radio.ogg",
    logoSrc: "http://mendiolaza.com.ar/wp-content/uploads/2017/03/logo-radio-mendiolaza.jpg",


    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // listo el dispositivo
        console.log('Dispositivo listo: ');
        app.initapp();    
    },

    initapp: function(){
        // cargar la imagen y el audio
        this.tolog("Iniciando APP versión: " + cordova_app_version );
        $("#logocentral").attr("src", this.logoSrc);
        $("#appversion").html("Versión: " + cordova_app_version);
        $("#audiodiv").append('<audio controls id="audioctrl"></audio>');
        $("#audioctrl").append('<source id="streamaudio" src="' + this.streamingSrc +'" type="audio/ogg">Tu navegador no soporta el audio');
        $("#audioctrl")[0].play();
        netState = this.getNetworkState($("#audioctrl")[0].networkState);
        this.tolog(netState);
    },

    getNetworkState: function(ns) {
        if (ns == 0) return "0 = NETWORK_EMPTY - audio/video has not yet been initialized";
        if (ns == 1) return "1 = NETWORK_IDLE - audio/video is active and has selected a resource, but is not using the network"
        if (ns == 2) return "2 = NETWORK_LOADING - browser is downloading data"
        if (ns == 3) return "3 = NETWORK_NO_SOURCE - no audio/video source found"
    },
    tolog: function(txt){
        $("#mylogs").append("<p>" + txt + "</p>");
    },

};

$( document ).ready(function() {
    var inCordova = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
    if (inCordova) {
        app.initialize();    
    }
    else {
        // empezar directo sin esperar el evento de Cordova
        app.initapp();
    }  
});

