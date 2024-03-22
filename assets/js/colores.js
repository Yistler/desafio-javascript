/* Integrantes:
Angelo Gonzalez
Adrian Espinoza
Yistler Duran
Victor Tapia
Iván Guerrero
 */
document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los elementos con la clase 'color'
    const colors = document.querySelectorAll('button');
  
    // Añade un evento de click a cada color
    colors.forEach(color => {
      color.addEventListener('click', function() {
        // Obtén el valor del color del elemento clickeado
        const selectedColor = this.getAttribute('data-color');
        // Cambia el color de fondo del cuadro principal
        document.getElementById('caja').style.backgroundColor = selectedColor;

      });
    });
  });
  