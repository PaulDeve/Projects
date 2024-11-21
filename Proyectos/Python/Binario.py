import pytube

# Solicita la URL del video
url = input("Introduce la URL del video: ")

# Obtiene el video
video = pytube.YouTube(url).streams.get_highest_resolution()

# Descarga el video
video.download()

# Muestra un mensaje de confirmación
print("El video se ha descargado correctamente.")