### Instalar todo

Se instaló en el equipo Ubuntu Server LTS de 32 bits.  

```
sudo apt-get install icecast2 ices2 vorbis-tools upstart
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
#!/bin/bash
echo "*****************" >> /home/radio/radio.log
echo "*****************" >> /home/radio/radio.log
echo "ESPERANDO $(date)" >> /home/radio/radio.log
sleep 20
echo "INICIANDO SONIDO RADIO $(date)" >> /home/radio/radio.log
/sbin/modprobe snd-pcm-oss
echo "INICIANDO ICECAST $(date)" >> /home/radio/radio.log
/etc/init.d/icecast2 stop
/etc/init.d/icecast2 start
echo "INICIANDO ICES $(date)" >> /home/radio/radio.log
/usr/bin/ices2 /etc/ices2/ices-playlist.xml 
echo "FINALIZADO INICIO RADIO $(date)" >> /home/radio/radio.log
# tail -n 90 -f /var/log/ices2/ices2.log /var/log/icecast2/*.log
```

Estos comandos pueden incluirse en un script que luego conviene ejecutarse como tarea al inicio del sistema.  
En nuestro caso, el stript _/home/radio/startall.sh_.  

En /etc/systemd/system/radiomendiolaza.service:

```
[Unit]
Description=Radio Mendiolaza

[Service]
# Environment= MY_ENVIRONMENT_VAR =/path/to/file.config
WorkingDirectory=/home/radio
ExecStart=/bin/bash /home/radio/startall.sh
Restart=always

[Install]
Requires=network-online.target
```

Definir al servicio como de sistema que se carga al iniciar
```
systemctl daemon-reload
systemctl enable radiomendiolaza.service
systemctl start radiomendiolaza.service
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