//Fechar a página , voltar, mostrar sua localizacao

// Fechar a página
window.close();

// Voltar para a página anterior
window.history.back();

// Mostrar a localização do usuário
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
} else {
  console.log("Geolocalização não suportada neste navegador.");
}