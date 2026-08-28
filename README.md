# iscloud-compose

Proyecto utilizado en la asignatura de Infraestructuras y Servicios Cloud de la Universidad Politécnica de Madrid

## Descripción

Aplicación multi-contenedor con dos servicios. El servicio “backend” despliega un API REST desarrollada con Node.js que recibe peticiones HTTP GET/ y devuelve un JSON con la respuesta de la consulta “SELECT NOW()” realizada a la base de datos desplegada en el servico "db". El servicio “db” despliega una base de datos postgres utilizando la imagen postgres:18-alpine

## Contenido del proyecto

El proyecto contiene los siguientes ficheros:
 * Dockerfile
 * package.json
 * server.js

## Despliegue

Seguir las indicaciones de los ejercicio 1 y 2 del apartado 3.3.5

### Probar que funciona

En el navegador escribir:

```http
http://localhost:3000/
```

o en el terminal:

```bash
curl http://localhost:3000/
{"status":"Conectado a PostgreSQL correctamente","timestamp":"2026-08-27T10:23:39.721Z"}
```
