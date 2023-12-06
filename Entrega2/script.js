function guardarHoras() {
    var horaEncendido = document.getElementById('horaEncendido').value;
    var horaApagado = document.getElementById('horaApagado').value;

    // Puedes agregar aquí la lógica para guardar las horas, por ejemplo, usando AJAX para enviarlas a un servidor.
    console.log('Hora de encendido:', horaEncendido);
    console.log('Hora de apagado:', horaApagado);

    alert('Horas guardadas correctamente.');
}
