### Instalar todo

Se instaló en el equipo Ubuntu Server LTS de 32 bits.  

```
sudo apt-get install icecast2 ices2 vorbis-tools
sudo systemctl enable icecast2
mkdir /etc/ices2/
mkdir /var/log/ices2/
cp /usr/share/doc/ices2/examples/ices-playlist.xml /etc/ices2/ 
```

**ices2** permite tomar una fuente de audio (en nuestro caso la placa de sonido) y enviarla a algun servidor.  
En nuestro caso, al no tener una IP fija en la radio, lo enviamos hasta un servidor IceCast externo en un servidor de hosting.  
De todas formas esto podría evitarse simplemente enviando el _ices_ a _localhost_ con un servidor IceCast local.  

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
# prender una placa de sonido intel /sbin/modprobe snd_hda_intel
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
Wants=network-online.target
After=network.target network-online.target

[Service]
# Environment= MY_ENVIRONMENT_VAR =/path/to/file.config
WorkingDirectory=/home/radio
ExecStart=/bin/bash /home/radio/startall.sh
# Restart=always # se reinicia si se cierra siempre

[Install]
WantedBy=default.target
```

Definir al servicio como de sistema que se carga al iniciar
```
systemctl daemon-reload
systemctl enable radiomendiolaza.service
systemctl start radiomendiolaza.service
```

### Si se usa ALSA

Con _alsamixer_ se puede ver en la terminal los canales y sus volumenes para revisar
En alsamixer se puede usar F4 para ver dispositivos de entrada y F6 para cambiar placa de sonido


### Si se usa OSS

Prender OSS para que la placa de sonido se pueda usar
```
modprobe snd-pcm-oss
```
Ver si esta corriendo la placa de sonido
```
lsmod | grep oss 
ls -l /dev/dsp
```

Me da error
```
EROR input-oss/oss_read Error reading from audio device: Input/output error
```
