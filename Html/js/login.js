function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "admin" || password == "admin") {
      document.getElementById("error").innerHTML = "Por favor, complete ambos campos.";
    } else if (username != "usuario" || password != "contraseña") {
      document.getElementById("error").innerHTML = "Nombre de usuario o contraseña incorrecta.";
    } else {
      alert("Inicio de sesión exitoso.");
    }
  }