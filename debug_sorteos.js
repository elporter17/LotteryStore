// Script temporal para debuggar los sorteos con la nueva lógica
const SORTEO_SCHEDULES = [
  { name: 'mañana', label: 'Mañana', closeTime: '9:15' },
  { name: 'tarde', label: 'Tarde', closeTime: '14:55' },
  { name: 'noche', label: 'Noche', closeTime: '20:55' }
];

// Simular hora actual de Honduras (2:48 PM = 14:48)
const currentHour = 14;
const currentMinute = 48;
const currentTimeInMinutes = currentHour * 60 + currentMinute;

console.log('=== DEBUG SORTEOS CORREGIDO ===');
console.log(`Hora actual: ${currentHour}:${currentMinute.toString().padStart(2, '0')} (${currentTimeInMinutes} minutos)`);
console.log('Sorteos disponibles:', SORTEO_SCHEDULES);

// Buscar sorteo actual con nueva lógica
let currentSorteo = null;
for (const sorteo of SORTEO_SCHEDULES) {
  const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
  const closeTimeInMinutes = closeHour * 60 + closeMinute;
  
  console.log(`${sorteo.name}: ${closeHour}:${closeMinute.toString().padStart(2, '0')} (${closeTimeInMinutes} minutos)`);
  console.log(`  ¿Está abierto? ${currentTimeInMinutes} < ${closeTimeInMinutes} = ${currentTimeInMinutes < closeTimeInMinutes}`);
  
  if (currentTimeInMinutes < closeTimeInMinutes) {
    currentSorteo = sorteo;
    break;
  }
}

console.log('\nSorteo actual encontrado:', currentSorteo);
