const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Berlín", "París", "Londres", "Madrid"],
        respuesta: "París"
    },
    {
        pregunta: "¿En qué año fue la independencia de Estados Unidos?",
        opciones: ["1776", "1789", "1801", "1825"],
        respuesta: "1776"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        respuesta: "Amazonas"
      },
      {
        pregunta: "¿En qué año se celebró la primera Copa Mundial de la FIFA?",
        opciones: ["1928", "1934", "1930", "1938"],
        respuesta: "1930"
      },
      {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa", "Julio Cortázar"],
        respuesta: "Gabriel García Márquez"
      },
      {
        pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?",
        opciones: ["Hierro", "Aluminio", "Cobre", "Oro"],
        respuesta: "Aluminio"
      },
      {
        pregunta: "¿En qué país se encuentra la Gran Barrera de Coral?",
        opciones: ["Australia", "Brasil", "México", "Indonesia"],
        respuesta: "Australia"
      },
      {
        pregunta: "¿Cuál es la capital de Japón?",
        opciones: ["Pekín", "Seúl", "Tokio", "Bangkok"],
        respuesta: "Tokio"
      },
      {
        pregunta: "¿En qué año se inauguró la Torre Eiffel en París?",
        opciones: ["1878", "1889", "1900", "1911"],
        respuesta: "1889"
      },
      {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        respuesta: "Leonardo da Vinci"
      },
      {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        opciones: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Aconcagua"],
        respuesta: "Monte Everest"
      },
      {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        opciones: ["Tierra", "Júpiter", "Saturno", "Marte"],
        respuesta: "Júpiter"
      },
      {
        pregunta: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        opciones: ["1776", "1789", "1804", "1820"],
        respuesta: "1776"
      },
      {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        respuesta: "Océano Pacífico"
      },
      {
        pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
        opciones: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
        respuesta: "George Washington"
      },
      {
        pregunta: "¿En qué año se llevó a cabo la Revolución Rusa?",
        opciones: ["1917", "1923", "1905", "1932"],
        respuesta: "1917"
      },
      {
        pregunta: "¿Cuál es el país más grande del mundo en términos de territorio?",
        opciones: ["Rusia", "China", "Estados Unidos", "Canadá"],
        respuesta: "Rusia"
      },
      {
        pregunta: "¿En qué continente se encuentra el desierto del Sahara?",
        opciones: ["África", "Asia", "América del Norte", "Europa"],
        respuesta: "África"
      },
      {
        pregunta: "¿Cuál es el río más largo de Europa?",
        opciones: ["Danubio", "Támesis", "Loira", "Volga"],
        respuesta: "Volga"
      },
      {
        pregunta: "¿Quién escribió 'Romeo y Julieta'?",
        opciones: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Fiodor Dostoievski"],
        respuesta: "William Shakespeare"
      },
      {
        pregunta: "¿Cuál es la capital de Australia?",
        opciones: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
        respuesta: "Canberra"
      },
      {
        pregunta: "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
        opciones: ["1945", "1955", "1965", "1975"],
        respuesta: "1945"
      },
      {
        pregunta: "¿Cuál es el país más poblado del mundo?",
        opciones: ["China", "India", "Estados Unidos", "Rusia"],
        respuesta: "China"
      },
      {
        pregunta: "¿En qué año se llevó a cabo la Revolución Francesa?",
        opciones: ["1776", "1789", "1804", "1830"],
        respuesta: "1789"
      },
      {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        opciones: ["O", "Au", "G", "Or"],
        respuesta: "Au"
      },
      {
        pregunta: "¿Quién pintó 'La noche estrellada'?",
        opciones: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        respuesta: "Vincent van Gogh"
      },
      {
        pregunta: "¿Cuál es la moneda oficial de Japón?",
        opciones: ["Yuan", "Won", "Yen", "Ringgit"],
        respuesta: "Yen"
      },
      {
        pregunta: "¿En qué año se llevó a cabo la Revolución Industrial?",
        opciones: ["1750", "1800", "1850", "1900"],
        respuesta: "1750"
      },
      {
        pregunta: "¿Cuál es el elemento más abundante en la atmósfera de la Tierra?",
        opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"],
        respuesta: "Nitrógeno"
      },
      {
        pregunta: "¿Quién fue el primer ser humano en viajar al espacio?",
        opciones: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Laika"],
        respuesta: "Yuri Gagarin"
      },
      {
        pregunta: "¿En qué continente se encuentra la Gran Muralla China?",
        opciones: ["Asia", "Europa", "África", "América del Norte"],
        respuesta: "Asia"
      },
      {
        pregunta: "¿Cuál es el segundo planeta más cercano al Sol?",
        opciones: ["Marte", "Venus", "Júpiter", "Mercurio"],
        respuesta: "Venus"
      },
      {
        pregunta: "¿Cuál es la moneda oficial de Canadá?",
        opciones: ["Dólar canadiense", "Libra esterlina", "Euro", "Yen"],
        respuesta: "Dólar canadiense"
      },
      {
        pregunta: "¿En qué año se firmó la Declaración de Derechos Humanos?",
        opciones: ["1945", "1950", "1960", "1970"],
        respuesta: "1945"
      },
      {
        pregunta: "¿Cuál es el océano más pequeño del mundo?",
        opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        respuesta: "Océano Ártico"
      },
      {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "William Shakespeare"],
        respuesta: "Miguel de Cervantes"
      },
      {
        pregunta: "¿Cuál es la montaña más alta de América?",
        opciones: ["Monte Everest", "Monte McKinley", "Monte Aconcagua", "Monte Kilimanjaro"],
        respuesta: "Monte Aconcagua"
      },
      {
        pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
        opciones: ["1910", "1914", "1918", "1922"],
        respuesta: "1914"
      },
      {
        pregunta: "¿Cuál es la capital de Sudáfrica?",
        opciones: ["Ciudad del Cabo", "Johannesburgo", "Pretoria", "Durban"],
        respuesta: "Pretoria"
      },
      {
        pregunta: "¿Quién fue el primer presidente de México?",
        opciones: ["Benito Juárez", "Miguel Hidalgo", "Emiliano Zapata", "Porfirio Díaz"],
        respuesta: "Benito Juárez"
      },
      {
        pregunta: "¿Cuál es el instrumento musical más antiguo?",
        opciones: ["Flauta", "Lira", "Tambor", "Arpa"],
        respuesta: "Flauta"
      },
      {
        pregunta: "¿En qué año se celebró la Revolución Mexicana?",
        opciones: ["1910", "1915", "1920", "1925"],
        respuesta: "1910"
      },
      {
        pregunta: "¿Cuál es el lago más grande de África?",
        opciones: ["Lago Victoria", "Lago Tanganica", "Lago Malawi", "Lago Turkana"],
        respuesta: "Lago Victoria"
      },
      {
        pregunta: "¿Quién fue el autor de 'El Principito'?",
        opciones: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Ernest Hemingway", "J.R.R. Tolkien"],
        respuesta: "Antoine de Saint-Exupéry"
      },
      {
        pregunta: "¿En qué continente se encuentra la Gran Barrera de Coral?",
        opciones: ["Asia", "Oceanía", "África", "América del Sur"],
        respuesta: "Oceanía"
      },
      {
        pregunta: "¿Cuál es el desierto más grande del mundo?",
        opciones: ["Desierto del Sahara", "Desierto de Atacama", "Desierto de Gobi", "Desierto de Kalahari"],
        respuesta: "Desierto del Sahara"
      },
      {
        pregunta: "¿Quién escribió '1984'?",
        opciones: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
        respuesta: "George Orwell"
      },
    // Agrega más preguntas según sea necesario
  ];
  
  let preguntaActual = 0;
  let puntaje = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const scoreElement = document.getElementById("score");
  
  function cargarPregunta() {
    const pregunta = preguntas[preguntaActual];
    questionElement.textContent = pregunta.pregunta;
  
    optionsContainer.innerHTML = "";
    pregunta.opciones.forEach((opcion, index) => {
      const button = document.createElement("button");
      button.textContent = opcion;
      button.addEventListener("click", () => verificarRespuesta(opcion));
      optionsContainer.appendChild(button);
    });
  }
  
  function verificarRespuesta(respuestaUsuario) {
    const pregunta = preguntas[preguntaActual];
  
    if (respuestaUsuario === pregunta.respuesta) {
      puntaje++;
      scoreElement.textContent = puntaje;
      mostrarResultado(true);
    } else {
      mostrarResultado(false);
    }
  
    preguntaActual++;
  
    if (preguntaActual < preguntas.length) {
      setTimeout(cargarPregunta, 1000);
    } else {
      alert("Fin del juego. Puntuación final: " + puntaje);
      reiniciarJuego();
    }
  }
  
  function mostrarResultado(esCorrecto) {
    const resultadoElement = document.createElement("p");
    resultadoElement.textContent = esCorrecto ? "✔️ Correcto" : "❌ Incorrecto";
    resultadoElement.classList.add(esCorrecto ? "correct" : "incorrect");
    optionsContainer.appendChild(resultadoElement);
  }
  
  function reiniciarJuego() {
    preguntaActual = 0;
    puntaje = 0;
    scoreElement.textContent = puntaje;
    optionsContainer.innerHTML = "";
    cargarPregunta();
  }
  
  document.addEventListener("DOMContentLoaded", cargarPregunta);
  