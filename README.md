# ladonware-fullstack
Prueba técnica ladonware

## Enlaces de interés
1. Front-end: hosteado en Firebase y puede ser accedido con el siguiente enlace: https://ladonware-6f358.web.app/home.
2. Back-end: hosteado en Heroku y puede ser accedido con el siguiente enlace: https://ladonware.herokuapp.com/.
3. Documentación del API: https://ladonware.herokuapp.com/swagger-ui.html.


## Arquitectura del proyecto
![Arquitectura](https://github.com/danielmc1905/ladonware-fullstack/blob/main/Ladonware.png)


## Pasos iniciales
1. Descargar e instalar nodejs mediante el siguiente enlace https://nodejs.org/es/.
2. Descargar e instalar git haciendo uso del siguiente enlace https://git-scm.com/.
3. Descargar e instalar el jdk de java con el sigueinte enlace https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html.
4. Instalar angular cli con el comando "npm install -g @angular/cli".
5. Abrir la terminal sobre el directorio deseado y clonar el repositorio de github con el siguiente 
comando "git clone https://github.com/danielmc1905/ladonware-fullstack.git".


## Instalación back-end
1. Descargar la herramienta Spring suite tools https://spring.io/tools/ o agregar la dependencia de este a eclipse.
2. Presionar sobre la opción de Archivo > Abrir proyecto desde archivos del sistema y se abrirá una ventana.
3. Presionar sobre el botón de "Directorio" y seleccionar la carpeta "ladonware-backend" ubicada dentro del directorio clonado
y presionar sobre el botón de finalizar.
4. Una vez presionado sobre el botón de finalizar, el proyecto comenzará de manera automática a instalar las dependencias necesarias.
5. Una vez instaladas todas las dependencias necesarias el proyecto está listo para ser utilizado.
6. Para iniciar el proyecto se debe abrir el archivo ubicado en com.test.ladonware, presionar click derecho sobre este y seleccionar
la opción Run As > Spring Boot App.
7. El proyecto hace uso de la dependencia Swagger 2, por lo que la documentación de los endpoint puede ser consultada en la
siguiente ruta http://localhost:8080/swagger-ui.html una vez el proyecto ha sido iniciado.


## Instalación front-end
1. Abrir la terminal del sistema operativo utilizado y posicionarse sobre el directorio "ladonware-frontend".
2. Escribir el comando "npm i" sobre la terminal para instalar las dependencias necesarias del proyecto
3. Iniciar el proyecto con el siguiente comando "ng serve -o".
4. Se abre una pestaña en el navegador con la aplicación.
