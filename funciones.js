'use strict';

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el número ingresado por el usuario
    var numero = parseFloat(document.getElementById('numberInput').value);

    // Validar que el número sea válido
    if (isNaN(numero) || numero <= 0) {
        alert('Por favor, ingresa un número válido mayor a 0.');
        return;
    }

    // Realizar las operaciones matemáticas iniciales
    var resultadoMenor = Math.ceil(Math.min(numero / 2, numero * 1.5));
    var resultadoMayor = Math.ceil(Math.max(numero / 2, numero * 1.5));

    // Mostrar los resultados iniciales en el formato especificado
    var resultadosIniciales = `${resultadoMenor} ${numero} ${resultadoMayor}`;
    var resultadosInicialesElement = document.createElement('p');
    resultadosInicialesElement.textContent = resultadosIniciales;
    document.getElementById('results').appendChild(resultadosInicialesElement);

    // Crear formulario para la suma de dos números
    var sumForm = document.createElement('form');
    
    // Primer número
    var label1 = document.createElement('label');
    label1.setAttribute('for', 'num1');
    label1.textContent = 'Ingresa un extrapolation:';
    var input1 = document.createElement('input');
    input1.setAttribute('type', 'number');
    input1.setAttribute('id', 'num1');
    input1.setAttribute('name', 'num1');
    input1.setAttribute('step', 'any');
    input1.setAttribute('required', 'true');
    sumForm.appendChild(label1);
    sumForm.appendChild(input1);
    sumForm.appendChild(document.createElement('br'));

    // Segundo número
    var label2 = document.createElement('label');
    label2.setAttribute('for', 'num2');
    label2.textContent = 'Ingresa un extrapolation:';
    var input2 = document.createElement('input');
    input2.setAttribute('type', 'number');
    input2.setAttribute('id', 'num2');
    input2.setAttribute('name', 'num2');
    input2.setAttribute('step', 'any');
    input2.setAttribute('required', 'true');
    sumForm.appendChild(label2);
    sumForm.appendChild(input2);
    sumForm.appendChild(document.createElement('br'));

    // Botón para calcular la suma
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Calcular Suma';
    submitButton.addEventListener('click', function() {
        // Obtener valores de los números ingresados
        var num1 = parseFloat(input1.value);
        var num2 = parseFloat(input2.value);

        // Validar que ambos valores sean números válidos
        if (isNaN(num1) || isNaN(num2)) {
            alert('Por favor, ingresa números válidos en ambos campos.');
            return;
        }

        // Calcular la suma de los dos números
        var suma = num1 + num2;

        // Dividir la suma por 2 y redondear hacia arriba
        var resultadoDivision = Math.ceil(suma / 2);

        // Realizar las operaciones con resultadoDivision
        var resultadoMenorFinal = Math.ceil(Math.min(resultadoDivision / 2, resultadoDivision * 1.5));
        var resultadoMayorFinal = Math.ceil(Math.max(resultadoDivision / 2, resultadoDivision * 1.5));

        // Mostrar los resultados finales en el formato especificado
        var resultadosFinales = `${resultadoMenorFinal} ${resultadoDivision} ${resultadoMayorFinal}`;

        // Mostrar resultados finales en el elemento con id "results"
        var resultadosFinalesElement = document.createElement('p');
        resultadosFinalesElement.textContent = resultadosFinales;
        document.getElementById('results').appendChild(resultadosFinalesElement);
    });

    sumForm.appendChild(submitButton);

    // Insertar el formulario de suma después de los resultados iniciales
    document.getElementById('results').appendChild(sumForm);
    
});
