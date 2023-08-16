function calcular() {
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const dias = parseInt(document.getElementById('dias').value);
  const promedio = cantidad / dias;
  
  const vtPorPromedio = {
    5: 1150,
    6: 1250,
    7: 1400,
    8: 1600
  };
  
  let precioVT = vtPorPromedio[5]; // Precio predeterminado
  
  for (let p in vtPorPromedio) {
    if (promedio >= parseFloat(p)) {
      precioVT = vtPorPromedio[p];
    }
  }
  
  const totalGanancias = cantidad * precioVT;
  
  document.getElementById('visitas').textContent = cantidad;
  document.getElementById('promedio').textContent = promedio.toFixed(2);
  document.getElementById('ganancias').textContent = '$' + totalGanancias.toLocaleString();
  
  if (promedio >= 9) {
    alert('¡MODO TUCU GOD ALCANZADO!');
  } else if (promedio >= 8) {
    alert('¡Cómo metiste chucu ura!');
  } else if (promedio >= 7) {
    alert('¡Casi lo alcanzas al tucu!');
  } else if (promedio >= 6) {
    alert('¡Modo gallo!');
  } else if (promedio >= 5) {
    alert('¡Modo carro!');
  } else if (promedio < 5) {
    alert('AGARRA Y MATATE SOS EL REY DE LA CROTERA HERMANO');
  }
}
