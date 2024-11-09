// script.js

const students = [
    { name: "Juan Pérez", grade: 9.0, comment: "Excelente trabajo" },
    { name: "Ana Gómez", grade: 7.5, comment: "Buena participación" },
    { name: "Luis Torres", grade: 6.8, comment: "Puede mejorar" },
    { name: "Carla Sánchez", grade: 8.2, comment: "Buen progreso" },
    { name: "Jorge Díaz", grade: 7.0, comment: "Cumple con los requisitos" },
    // Añade más estudiantes aquí
];

const container = document.querySelector('.student-container');

students.forEach(student => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card');
    
    studentCard.innerHTML = `
        <h2>${student.name}</h2>
        <p><strong>Nota:</strong> ${student.grade}</p>
        <p><strong>Comentario:</strong> ${student.comment}</p>
    `;
    
    container.appendChild(studentCard);
});
