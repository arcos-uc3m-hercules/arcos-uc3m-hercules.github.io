<script>
  function copyToClipboard(elementId) {
    // Obtener el texto del elemento
    var copyText = document.getElementById(elementId).innerText;
    
    // Usar la API del portapapeles moderna
    navigator.clipboard.writeText(copyText).then(function() {
      // Feedback visual opcional (cambiar texto del botón temporalmente)
      var btn = document.querySelector(`button[onclick="copyToClipboard('${elementId}')"]`);
      var originalContent = btn.innerHTML;
      
      btn.innerHTML = '<i class="fa fa-check"></i> Copiado!';
      btn.style.background = '#4b8ef1'; // Color azul de la marca
      
      setTimeout(function() {
        btn.innerHTML = originalContent;
        btn.style.background = 'rgba(255,255,255,0.2)';
      }, 2000);
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
</script>