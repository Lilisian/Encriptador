
    function encriptarTexto(){

        // Obtiene el valor del input
        let textoIngresado = (document.getElementById(`texto`).value);

        // Validación:
        if (!textoIngresado.match(/^[a-z\s.,!?¡¿]+$/)) {
               alert("Por favor, ingresa solo letras en minúsculas y sin acentos.");
               return;
                // Sale de la función si la entrada no es válida
               }

        //Divide el texto ingresado para poder analizarlo letra por letra
        let arrayTexto = textoIngresado.split(``);

        let letrasEncriptadas = {
            "e": "enter",
            "i": "imes",
            "a": "ai",
            "o": "ober",
            "u": "ufat"
        };

        //Realiza la validación y el cambio de letras según la variable letrasEncriptadas
        for (var i = 0; i < arrayTexto.length; i++) {
            if (letrasEncriptadas[arrayTexto[i]]!== undefined){
                arrayTexto[i] = letrasEncriptadas[arrayTexto[i]];
            }
        }
        //Aloja en la variable el texto final y lo muestra
        let textoEncriptado = arrayTexto.join(``);
        document.querySelector('.caja__resultado').innerHTML = textoEncriptado;
    
    }
    

  
    function desencriptarTexto(){

         // Obtiene el valor del input
        let textoIngresado = (document.getElementById(`texto`).value);

         // Validación:
         if (!textoIngresado.match(/^[a-z\s]*?(enter|imes|ai|ober|ufat)*?[a-z\s.,!?¡¿]*?$/)) {
              alert("Por favor, ingresa solo letras en minúsculas y sin acentos.");
              return;
               // Sale de la función si la entrada no es válida
               }

        //Convierte a String el texto recibido
        let textoDesencriptado = String(textoIngresado); 

        let letrasDesencriptadas = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };

        //Realiza la validación y el cambio de letras según la variable letrasEncriptadas
        for (let [encriptado, original] of Object.entries(letrasDesencriptadas)) {
            textoDesencriptado = textoDesencriptado.split(encriptado).join(original);
        }
        document.querySelector('.caja__resultado').innerHTML = textoDesencriptado;
    }
    
    function actualizarResultado() {
        let textoIngresado = document.getElementById('texto').value.trim();
        const cajaResultado = document.querySelector('.caja__resultado');
    
        if (textoIngresado === "") {
            // Mostrar contenido por defecto
            cajaResultado.innerHTML = `
                <img src="Imagenes/Muñeco.png" alt="Persona buscando">
                <p><strong>Ningún mensaje fue encontrado</strong><br>Ingresa el texto que deseas encriptar o desencriptar</p>
            `;
        }
    }
    

      function copiarTexto() {
        // Obtiene el texto del elemento resultado
        let texto = document.querySelector('.caja__resultado').textContent;
      
        // Crea un elemento temporal para copiar el texto
        let tempInput = document.createElement("input");
        tempInput.value = texto;
        document.body.appendChild(tempInput);
      
        // Selecciona el elemento temporal y copia su contenido
        tempInput.select();
        document.execCommand("copy");
      
        // Elimina el elemento temporal
        document.body.removeChild(tempInput);
      
        // Muestra un mensaje al usuario
        alert("¡Texto copiado!");
      }

    
























    


