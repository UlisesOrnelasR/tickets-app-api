# API de Helpdesk

Esta API proporciona un sistema de tickets de ayuda que permite a los usuarios "default" crear tickets con descripciones e imágenes, asignarlos a técnicos "support", establecer fechas de resolución y cerrar los tickets una vez resueltos.

## Funcionalidades principales

- **Creación de tickets:** Los usuarios "default" pueden crear nuevos tickets proporcionando descripciones e imágenes de los problemas que están experimentando.

- **Asignación de tickets:** Los técnicos "support" pueden asignar tickets a sí mismos para resolverlos.

- **Establecimiento de fechas de resolución:** Los técnicos pueden establecer fechas estimadas de resolución para los tickets asignados.

- **Cierre de tickets:** Una vez que se haya resuelto un problema, los usuarios "default" pueden cerrar los tickets correspondientes.

## Tecnologías utilizadas

- **Express.js:** Utilizado para la creación de la API RESTful.

- **MongoDB:** Base de datos utilizada para almacenar los tickets y otra información relacionada.

- **Mongoose:** Biblioteca de modelado de objetos MongoDB para Node.js.

- **JWT (JSON Web Tokens):** Utilizado para la autenticación y autorización de usuarios.

- **bcrypt:** Utilizado para el hash de contraseñas de usuarios.

- **Cloudinary:** Utilizado para el almacenamiento de imágenes de los tickets.

- **Nodemailer:** Utilizado para el envío de correos electrónicos de notificación.
