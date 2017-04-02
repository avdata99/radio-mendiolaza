### Indice de archivos

[icecs-playlist.xml](ices-playlist.xml): Configuración de Ices. Cada uno de estos archivos puede referirse a un stream diferente. El servidor Icecast está preparado para transmitir mas de un stream de audio. Un Ice es cada hilo de audio.  
_<hostname>_ puede aputar a localhost si hay un servidor IceCast local y tenemos IP fija (o podemos emularla con servicios como DynDNS o No-IP). Debe apuntar a la IP de un servidor IceCast externo si disponemos de el.

[icecast.xml](icecast.xml): Configuración de IceCast. Servidor general que transmite a internet todos los _ices_. Nosotros solo necesitamos uno.  
Debe tener el password que se usa en el ices para que reproduza de manera válida el stream


