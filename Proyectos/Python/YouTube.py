from pytube import YouTube
 
def Download(link):
  yt = YouTube(link)
  yt = yt.streams.get_highest_resolution()
  try:
    yt.download()
  except:
    print("Hubo un error al descargar el video del URL proporcionado...")
  print("¡Descarga completada con éxito!")
   
# Pedimos al usuario en la línea de comandos ingresar el URL del video para descargar
link = input("Pega tu link de youtube aquí, URL: ")
 
# Descargamos el video
Download(link)