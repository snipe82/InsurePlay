
function login() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        // Simulamos un inicio de sesión exitoso
        document.querySelector('.login-form').style.display = 'none';
        document.getElementById('menu').style.display = 'block'; // Mostrar menú después del login
        document.getElementById('dashboard').style.display = 'block'; // Mostrar contenido
        document.getElementById('loading').style.display = 'none'; 
		// Actualizar el elemento con el ID 'logged-in-user' con el nombre del usuario
		document.getElementById('logged-in-user').textContent = 'Usuario Broker: Nestor';
    }, 2000); // Simulando un tiempo de carga
}

// Función para cargar la opción 1
function loadPage(pageId) {
    // Lista de todas las páginas que deseas manejar
    const pages = ['dashboard', 'searchPanel', 'goalsPanel', 'bigData']; // Agrega más IDs según tus necesidades
    // Oculta todas las páginas
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });

    // Muestra la página especificada
    document.getElementById(pageId).style.display = 'block';
}
// Función para simular una búsqueda de persona
function searchPerson() {
    // Obtenemos el valor del input de búsqueda
    const searchInput = document.getElementById('searchInput').value;

    // Simulación de datos de una persona
    const person = {
        name: "Juan",
        lastName: "Pérez",
        age: 35,
        occupation: "Ingeniero",
        country: "Perú",
        policies: [
            {
                insurer: "Aseguradora A",
                broker: "Broker X",
                coverage: "Cobertura Completa",
                acquisitionDate: "2022-01-15",
                paymentStatus: "Al día"
            },
            {
                insurer: "Aseguradora B",
                broker: "Broker Y",
                coverage: "Cobertura Parcial",
                acquisitionDate: "2023-05-20",
                paymentStatus: "Al día"
            }
        ]
    };

    // Simulamos una búsqueda exitosa y mostramos los resultados
    document.getElementById('clientName').innerText = person.name;
    document.getElementById('clientLastName').innerText = person.lastName;
    document.getElementById('clientAge').innerText = person.age;
    document.getElementById('clientOccupation').innerText = person.occupation;
    document.getElementById('clientCountry').innerText = person.country;

    // Mostrar las pólizas
    const policiesList = document.getElementById('policiesList');
    policiesList.innerHTML = ''; // Limpiamos el contenido anterior
    person.policies.forEach(policy => {
        const policyItem = document.createElement('li');
        policyItem.innerHTML = `
            <strong>Aseguradora:</strong> ${policy.insurer} <br>
            <strong>Broker:</strong> ${policy.broker} <br>
            <strong>Cobertura:</strong> ${policy.coverage} <br>
            <strong>Fecha de Adquisición:</strong> ${policy.acquisitionDate}
        `;
        policiesList.appendChild(policyItem);
    });

    // Estado de pago
    document.getElementById('paymentStatus').innerText = person.policies[0].paymentStatus;

    // Mostramos el panel de resultados
    document.getElementById('resultsPanel').style.display = 'block';
}
	function generateExcel() {
            // Datos que deseas agregar al archivo de Excel
            var data = [
                ["Datalake Insure Play", "", "", ""],
                ["Nombre Poliza", "Cliente",  "Documento","Coincidencia"],
                ["Seguro Total", "Juan Perez","25558423", "100%"],
                ["Seguro Fiestas", "Maria Escobar", "10125485","95%"],
                ["Seguro Viajes California", "Milagros Mendozaa","74158925", "56%"]
            ];

            // Crear una hoja de trabajo (worksheet) a partir de los datos
            var worksheet = XLSX.utils.aoa_to_sheet(data);

            // Crear un nuevo libro de trabajo (workbook)
            var workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja1");

            // Generar el archivo Excel y descargarlo
            XLSX.writeFile(workbook, "BigDataBrokerPlay.xlsx");
}
    // Función para formatear la fecha actual
    function formatDate() {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        const now = new Date();
        const day = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        return `${day} ${month} ${year}`;
    }

    // Mostrar la fecha actual en el elemento con ID 'current-date'
    document.getElementById('current-date').textContent = formatDate();