<head>
    <link rel="stylesheet" href="https://unpkg.com/wavesurfer.js/dist/wavesurfer.min.css" />
    <script src="https://unpkg.com/wavesurfer.js/dist/wavesurfer.min.js"></script>
  </head>
  
  <body>
  <div id="waveform"></div>
</body>

<script>
  const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'gray',
    progressColor: 'orange'
  });
  wavesurfer.load('Html/mp3/bayzabigroomflp2.mp3');
  wavesurfer.on('ready', function () {
    wavesurfer.play();
  });
</script>
