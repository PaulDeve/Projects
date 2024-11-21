const audio = document.querySelector("audio");
const spectrogram = document.querySelector(".spectrogram");

const drawSpectrogram = function() {
  const canvas = document.createElement("canvas");
  canvas.width = spectrogram.offsetWidth;
  canvas.height = spectrogram.offsetHeight;
  spectrogram.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  const frequencies = audio.getAudioContext().createAnalyser();
  frequencies.fftSize = 256;

  frequencies.onaudioprocess = function(event) {
    const magnitudes = event.outputBuffer.getChannelData(0);

    for (let i = 0; i < magnitudes.length; i++) {
      const magnitude = magnitudes[i];

      const x = i / magnitudes.length * canvas.width;
      const y = magnitudes.length - i;

      ctx.fillStyle = "rgba(255, 0, 0, magnitude / 100)";
      ctx.fillRect(x, y, 1, 1);
    }
  };
};

audio.addEventListener("play", drawSpectrogram);
