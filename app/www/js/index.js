/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor

    streamingSrc = "http://192.168.0.105:8000/radio.ogg", // "http://radio.data99.com.ar:8000/radio.ogg",
    logoSrc = "http://mendiolaza.com.ar/wp-content/uploads/2017/03/logo-radio-mendiolaza.jpg",


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
        // cargar la imagen y el audio
        $("#streamaudio").attr("src", self.streamingSrc);
        $("#logocentral").attr("src", self.logoSrc);
        $("#appversion").html("Versión: " + cordova_app_version);

    },

};

app.initialize();