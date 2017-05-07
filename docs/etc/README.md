### Indice de archivos

[icecs-playlist.xml](ices-playlist.xml): Configuración de Ices. Cada uno de estos archivos puede referirse a un stream diferente. El servidor Icecast está preparado para transmitir mas de un stream de audio. Un Ice es cada hilo de audio.  
_<hostname>_ puede aputar a localhost si hay un servidor IceCast local y tenemos IP fija (o podemos emularla con servicios como DynDNS o No-IP). Debe apuntar a la IP de un servidor IceCast externo si disponemos de el. 

[play-sound-card-oss.xml](play-sound-card-oss.xml): Configuración de Ices para retransmitir la placa de sonido vía OSS.  
_<hostname>_ puede aputar a localhost si hay un servidor IceCast local y tenemos IP fija (o podemos emularla con servicios como DynDNS o No-IP). Debe apuntar a la IP de un servidor IceCast externo si disponemos de el.  

[play-sound-card-alsa.xml](play-sound-card-alsa.xml): Configuración de Ices para retransmitir la placa de sonido vía ALSA.  
_<hostname>_ puede aputar a localhost si hay un servidor IceCast local y tenemos IP fija (o podemos emularla con servicios como DynDNS o No-IP). Debe apuntar a la IP de un servidor IceCast externo si disponemos de el.
  
#### Ejemplos de straming para ICES2
Redirigir sonido que ingresa por la placa de sonido:  
 - [OSS](https://github.com/xiph/Icecast-IceS/blob/master/conf/ices-oss.xml)
 - [ALSA](https://github.com/xiph/Icecast-IceS/blob/master/conf/ices-alsa.xml)

[icecast.xml](icecast.xml): Configuración de IceCast. Servidor general que transmite a internet todos los _ices_. Nosotros solo necesitamos uno.  
Debe tener el password que se usa en el ices para que reproduza de manera válida el stream


