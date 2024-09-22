Restaurante MVC
Este es un proyecto simple para un sistema de menú de restaurante utilizando el patrón de diseño MVC (Modelo, Vista, Controlador). El frontend está desarrollado con React y el backend utiliza Node.js con un servidor HTTP que maneja peticiones REST.

Modelo MVC
Modelo (Model):
El modelo contiene la lógica de los datos. En este caso, los datos de los platos están almacenados en un archivo platos.json y el servidor (backend) lee estos datos cuando se solicita. El archivo platos.json actúa como el modelo de datos para el menú.

Vista (View):
La vista es el frontend desarrollado en React. Es la parte de la aplicación que los usuarios ven e interactúan. En este caso, el componente Menu obtiene los datos del backend a través de una petición HTTP y muestra los platos del menú.

Controlador (Controller):
El controlador está implementado en el backend con Node.js y gestiona las peticiones HTTP. En el archivo server.js, se configura el servidor para manejar las peticiones GET y servir el archivo platos.json cuando la ruta /api/platos es solicitada.

Requisitos
Node.js
Asegúrate de tener instalado Node.js.

Vite
El frontend está configurado para usar Vite como servidor de desarrollo para React.

Instalación
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/Dario3111/restaurante-mvc.git
Navegar a la carpeta del backend y el frontend e instalar las dependencias:

Para el backend:

bash
Copiar código
cd restaurante-mvc/backend
npm install
Para el frontend:

bash
Copiar código
cd ../frontend/restaurante-frontend
npm install
Ejecución del Proyecto
Backend
En la carpeta del backend, ejecuta el servidor:
bash
Copiar código
node server.js
Esto iniciará el servidor en http://localhost:5000.
Frontend
En la carpeta del frontend, ejecuta el servidor de desarrollo:
bash
Copiar código
npm run dev
Esto abrirá la aplicación de React en http://localhost:5173.
Acceso a los datos
El frontend realiza una petición GET a http://localhost:5000/api/platos, donde el backend servirá los datos del archivo platos.json que contienen los platos del menú.
El menú se mostrará en la página del frontend con la información obtenida.
Dependencias
Backend:
Node.js
fs: Para leer el archivo platos.json.
Frontend:
React: Para construir la interfaz de usuario.
Axios: Para hacer peticiones HTTP al backend.
Vite: Para servir el frontend durante el desarrollo.
Scripts
Backend:
node server.js: Levanta el servidor Node.js para gestionar las peticiones al menú.
Frontend:
npm run dev: Inicia el servidor de desarrollo de Vite para React.
