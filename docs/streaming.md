### Instalar todo

Se instaló en el equipo Ubuntu Server LTS de 32 bits.  

```
sudo apt-get install icecast2 ices2 vorbis-tools  
sudo systemctl enable icecast2
mkdir /etc/ices2/
cp /usr/share/doc/ices2/examples/ices-playlist.xml /etc/ices2/ 
mkdir /var/log/ices2
```

### Archivos de configuración
Pueden verse en [etc](etc/).  

### Comandos
iniciar el ices de la radio  
```
ices2 /etc/ices2/ices-playlist.xml &
```

Ver logs de icecast2 (access y error)
```
tail -n 90 -f /var/log/icecast2/*.log
```

Ver logs de ices2
```
tail -n 90 -f /var/log/ices2/ices2.log
```

Detener o iniciar servicio Icecast
```
sudo /etc/init.d/icecast2 stop|start
```

Reiniciar todo y ver logs al toque
```
modprobe snd-pcm-oss
/etc/init.d/icecast2 stop
/etc/init.d/icecast2 start
ices2 /etc/ices2/ices-playlist.xml &
tail -n 90 -f /var/log/ices2/ices2.log /var/log/icecast2/*.log
```

Prender OSS para que la placa de sonido se pueda usar
```
modprobe snd-pcm-oss
```
Ver si esta corriendo la placa de sonido
```
lsmod | grep oss 
ls -l /dev/dsp
```