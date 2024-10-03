    function showMarketplace() {
        const dniInput = document.getElementById('dni').value;
        const termsChecked = document.getElementById('terms').checked;

        // Validar el formato del DNI (8 dígitos)
        if (!/^\d{8}$/.test(dniInput)) {
            alert('Por favor, ingresa un DNI válido de 8 dígitos.');
            return;
        }

        if (!termsChecked) {
            alert('Por favor, acepta los términos.');
            return;
        }

        document.getElementById('login-form').style.display = 'none';
        document.getElementById('loading').style.display = 'block';

        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('marketplace-section').style.display = 'block';
            document.getElementById('points-display').style.display = 'flex';
            document.getElementById('social-panel').style.display = 'block';

            // Mensaje de pólizas convenientes
            document.getElementById('info-message').innerText = "En base a tu documento de identidad hemos accedido a diferentes fuentes de datos que nos indican que estos seguros son los más convenientes para ti en este momento.";
        }, 2000);
		showModalMicrolearning();
    }

    // Función para canjear cupones
    function redeemCoupon(couponCode) {
        alert(`Cupón ${couponCode} canjeado exitosamente.`);
        // Lógica para actualizar puntos o aplicar descuento...
    }
	// Función que se ejecuta cuando el usuario hace clic en "Continuar"
    document.getElementById('continueBtn').addEventListener('click', function() {
    // Obtener el valor del DNI ingresado
    var dni = document.getElementById('dni').value;
    
    // Verificar que el DNI no esté vacío
    if (dni !== "") {
	setTimeout(function() {
// Mostrar el marketplace
        document.getElementById('marketplace-section').style.display = 'block';
        
        // Mostrar el chat
        document.getElementById('chat').style.display = 'block';
      
    }, 3000); // Delay de 3 segundos (puedes ajustar este valor)
        
    } else {
        alert('Por favor, ingrese su DNI');
    }
});

  // Verifica si el navegador soporta la API de Web Speech
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES'; // Puedes cambiar el idioma aquí
  recognition.continuous = false; // Cambia a true si deseas que siga escuchando

  // Evento que se dispara cuando se reconoce el discurso
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('additional-info').value += transcript + " ";
  };

  // Botón para iniciar el reconocimiento de voz
  document.getElementById('microphone-btn').addEventListener('click', function() {
    recognition.start();
  });

  // Mensajes de estado opcionales
  recognition.onstart = function() {
    console.log("Reconocimiento de voz iniciado");
  };
  recognition.onend = function() {
    console.log("Reconocimiento de voz finalizado");
  };
} else {
  // Si el navegador no soporta la API
  alert('Tu navegador no soporta reconocimiento de voz.');
}
 const textarea = document.getElementById('additional-info');
    const micButton = document.getElementById('microphone-btn');

    // Verificamos si el navegador soporta la API de reconocimiento de voz
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Configuraciones del reconocimiento de voz
    recognition.lang = 'es-ES'; // Idioma español
    recognition.continuous = false; // No continuo, solo una frase
    recognition.interimResults = false; // Solo mostrar resultados finales

    micButton.addEventListener('click', () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textarea.value += transcript;
    };

    recognition.onerror = (event) => {
        console.error('Error en el reconocimiento de voz: ', event.error);
    };
	//MODAL
	// Obtener referencias a los elementos
	var modal = document.getElementById('loadingModal');
	var span = document.querySelector('.close');

	// Función para mostrar el modal
	function showModalMicrolearning2() {
    modal.style.display = 'flex'; // Muestra el modal
	}

	// Función para cerrar el modal
	function closeModal() {
    modal.style.display = 'none'; // Oculta el modal
	}

	// Cerrar el modal cuando se hace clic en la "x"
	span.onclick = closeModal;

	// Permitir cerrar el modal al hacer clic fuera de él
	window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
	};
	// script.js

// Mostrar el modal de broker
function showOptionsModal() {
    const modal = document.getElementById("optionsModal");
    modal.style.display = "flex";
}

// Lógica para cerrar el modal
document.querySelectorAll('.close').forEach(function(element) {
    element.onclick = function() {
        const modal = element.closest('.modal');
        modal.style.display = "none";
    };
});

// También puedes permitir cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("optionsModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Añadir un evento al botón de conversar
document.getElementById('chatButton').onclick = function() {
    alert("¡Iniciando chat con tu broker favorito!");
    // Aquí puedes agregar tu lógica para iniciar el chat
};

 