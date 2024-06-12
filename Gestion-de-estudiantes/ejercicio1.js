let escuela = {
    estudiantes: []
};

function agregarEstudiante(nombre, calificaciones) {
    let estudiante = {
        nombre: nombre,
        calificaciones: calificaciones
    };
    escuela.estudiantes.push(estudiante);
}

function listarEstudiantes() {
    for (let i = 0; i < escuela.estudiantes.length; i++) {
        console.log("Estudiante: " + escuela.estudiantes[i].nombre);
        console.log("Calificaciones: " + escuela.estudiantes[i].calificaciones.join(", "));
    }
}

function promedioEstudiante(nombre) {
    for (let i = 0; i < escuela.estudiantes.length; i++) {
        if (escuela.estudiantes[i].nombre === nombre) {
            let sum = 0;
            for (let j = 0; j < escuela.estudiantes[i].calificaciones.length; j++) {
                sum += escuela.estudiantes[i].calificaciones[j];
            }
            return sum / escuela.estudiantes[i].calificaciones.length;
        }
    }
    return "El estudiante no fue encontrado";
}

agregarEstudiante("Alison Herrera", [10, 50, 40]);
agregarEstudiante("Juanjo", [80, 90, 100]);

listarEstudiantes();
console.log("Promedio de Alison Herrera: " + promedioEstudiante("Alison Herrera"));
console.log("Promedio de Juanjo: " + promedioEstudiante("Juanjo"));
