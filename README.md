# Addika every todos

Proyecto elaborado por **Marco Antonio González Cortés**

**Nota**
Este repositorio cuenta con dos directorios fundamentales.
    -- 1. Servidor API REST FULL, localizado en el directorio /back-end
    -- 2. Servidor ejecutado en el cliente, localizado en el directorio /front-end

Es necesario que al clonar el repositorio de manera local, se requiera acceder a cada directorio (Back-End y Front-End) y ejecutar en la terminal `npm install` con el propósito de instalar todas sus dependencias

## Base de datos
La evaluación fue realizada utilizando el motor de base de datos **PostgreSQL** por lo que requerirá que se encuentre instalado en la computadora [Descargar PostgreSQL aquí](https://www.postgresql.org/download/)

Adicionalmente se requiere crear una base de datos en el grupo de servidor predeterminado generado por PostgreSQL, el nombre de la base de datos debe de ser **addika_every_todo**
Las credenciales de acceso a la base de datos se encuentran localizadas en el directorio **/back-end/.env**, si deseas cambían algún valor puedes hacerlo desde este archivo

## ORM Sequelize
Con el uso del ORM Sequelize, se insertarán tablas y valores predefinidos de pruebas, para ello se tendrá que acceder al directorio **/back-end/db** y en ese directorio abriri terminal y ejecutar el siguiente comando
##### `npx sequelize-cli db:migrate`
Este comando iniciará el proceso de migración de las tablas con sus respectivas columnas en la base de datos definida en el archivo **./env**

Una vez finalizado este proceso se ejecutará, en la misma posición del directorio el comando
##### `npx sequelize-cli db:seed:all`
Esto insertará los registros predefinidos

**Nota:**
De no reconocer la terminal el comando **npx sequelize-cli** se deberá de instalar mediante el comando `npm install --save sequelize-cli`. Para más información puedes revisar la documentación 
 [Aquí](https://sequelize.org/v5/manual/migrations.html)
 
 ## API REST FULL
 Para iniciar con la ejecución del servidor bastará en posicionar la terminar en la dirección **/back-end/** y ejecutar el comando `node app` o bien `npm start`.
**Recuerda haber instalado las dependencias mediante el comando** `npm install`

 ## Servidor Cliente
 Para el apartado del cliente se usó la librería **ReactJs**
 Para iniciar su ejecución primero deberás de posicionarte en el directorio **/front-end/** e instalar las dependencias mediante el comando `npm install` para después iniciar el servidor con el comando `npm start`
 
 **Nota:**
 Si se desea subir la evaluación a un hosting deberá de ejecutar el comando `npm run build` esto iniciará el proceso de optimización y disposición para el uso de los navegadores,  ya que el comando  `npm start` esta considerado para un ambiete de desarrollo.
 
  ## Recursos
  A continuación se adjunta una serie de recursos de los cuales se encuentra la documentación del los End-Points generados por el servidor API REST
  ........