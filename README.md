# Banco Solar 

## Descripción
Este proyecto esta enfocado en la realización de transacciones entre usuario, permitiendo agregar, editar y eliminar a los usuarios. Además, en cuanto a las transacciones, el sistema facilita la realización de transferencias entre los usuarios existentes.

## Visuales

![Banco solar](https://raw.githubusercontent.com/andgerald/BancoSolar_Front/main/img/bancoSolar.PNG)

### Prerrequisitos 📋
Para instalar y ejecutar este proyecto, necesitarás asegurarte de contar con las siguientes herramientas y software, junto con las versiones específicas indicadas:
- Express
- PostgreSQL
- nodemon
- dotenv

### Instalación 🔧
A continuación, se presenta una guía paso a paso para configurar el entorno de desarrollo y realizar la instalación de todas las dependencias necesarias:
1. Clona el repositorio  tanto el backend como el frontend
  - https://github.com/andgerald/bancoSolar_back.git
  - https://github.com/andgerald/BancoSolar_Front.git
2. Realiza la instalación de dependencias con **npm install** o **npm i**

## Despliegue 📦
En el siguiente enlace podras ver el proyecto: 
https://andgerald.github.io/BancoSolar_Front/

## Ejecutando las Pruebas ⚙️
  **Rutas usuarios**
- GET: Devuelve todos los usuarios.
  - http://localhost:3000/usuarios
- POST: Recibe los datos de un nuevo usuario y los almacena en PostgreSQL.
  - http://localhost:3000/usuario
- DELETE: Recibe el id de un usuario registrado y lo elimina.
  - http://localhost:3000/usuario?id=3
- PUT: Recibe los datos modificados de un usuario registrado y los actualiza.
  - http://localhost:3000/usuario?id=3

**Rutas Transferencias**
-  GET: Devuelve todas las transferencias almacenadas en la base de datos en formato de arreglo.
    - http://localhost:3000/transferencias
-  POST: Crea una nueva transferencia y la almacena en PostgreSQL.
    - http://localhost:3000/transferencia
## Construido Con 🛠️
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript) - El lenguaje utilizado
- [Postgresql](https://www.postgresql.org) - Sistema de base de datos
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Framework de CSS

## Versionado 📌

Usamos [Git](https://git-scm.com) para el versionado.



⌨️ con ❤️ por [Geraldine Becerra](https://github.com/andgerald) 😊
