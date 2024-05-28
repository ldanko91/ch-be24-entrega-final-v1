# Proyecto final: **API de Backend de un E-Commerce**
## _Leandro Danko_
## Curso **Programación Backend** de **CODERHOUSE**
## _Comisión: 50000_

Bienvenidos a mi proyecto de API Backend para el curso de Programación Backend de CODERHOUSE!

Gracias por tomarte un minuto y leer el readme :)

En este trabajo se presentará un e-commerce orientado al rubro de instalaciones sanitarias.

El objetivo es presentar un E-Commerce donde un usuario pueda registrarse, ver los productos, filtrarlos por categorías, elegir varios para su carrito y completar una compra.

Además podrá optar por realizar una carga de información para poder convertirse en usuario premium.

## Descripción general

Es una API Rest en entorno de ejecución NodeJS 18, utilizando Express para funcionar como servidor.

Posee integración a una DBaaS MongoDB, donde aloja los diferentes recursos como productos, usuarios, carritos y tickets de compra.

Además renderiza diferentes vistas utilizando Express-Handlebars.

## Funcionalidades

La ruta de acceso base Home:
_".../api/home"_
Muestra dos botones, donde será necesario como primer paso acceder, haciendo clic en "Accede a tu cuenta"

Una vez desplegada la pantalla de login:
_".../api/users/login"_
Se verá el formulario de acceso desde donde podrá loggearse en el caso de tener usuario, o registrarse en la parte de abajo del formulario.

Una vez que se registre y acceda podrá visualizar los productos, los cuales se encuentran alojados de manera remota en una base de datos de Mongo DB. Pueden visualizarse desde la vista de productos:
_".../api/products"_
Con los diferentes botones podrán filtrarse los resultados por categorías o por disponibilidad.

Se puede acceder cliqueando sobre cualquiera de los productos a su detalle. 
Tanto desde allí, como desde la vista general se pueden añadir al carrito de a una unidad.

### Mi Carrito
_".../api/carts/current"_

Desde esta vista se puede revisar el contenido actual del carrito en diferentes tarjetas que almacenará cada uno de los productos y su cantidad.

Acciones posibles:

- Eliminarse uno o varios productos
- Vaciar el carrito de una vez. 
- Proceder a finalizar la compra.

Si se elige la opción _Confirmar compra!_ se enviará un mail al usuario avisando que se generó la orden y enviando los diferentes productos incluidos.

Además se descontará de cada producto el stock correspondiente.

## Aclaraciones del alcance

- La renderización automática no funciona en todos los casos, puesto que handlebars no ofrece las mismas prestaciones que un front reactivo como ReactJS

- No se integró para esta versión la pasarela de pagos.

## Recursos aplicados
El proyecto está basado en las siguientes tecnologías.

- [JavaScript] - Entorno de ejecución NodeJS v18.
- [Express] - Servidor web basado en ExpressJs.
- [Mongo DB] - DBaaS.
- [Express Handlebars] - Renderización de vistas.
- [Passport] - Autorización de accesos.
- [JWT] - Creación y validación de tokens de acceso.
- [CSS3]
- [HTML5]

Otras dependencias aplicadas.
- [Swagger] - Para documentación.
- [Winston] - Logging de eventos.

## Instalación

- Clonar el repositorio
- Abrir el repositorio en VSCode
- Abre una nueva terminal y tipea lo siguiente
```sh
npm install
```

## Ejecución en servidor de desarrollo

***IMPORTANTE: De no instalar los componentes anteriores, el sitio no se verá correctamente o fallará su renderización***

- Abre una nueva terminal y tipea lo siguiente
```sh
npm start
```

## Nota
A los fines de facilitar la instalación y el funcionamiento, el archivo .env se encuentra incluido en el repositorio.

En entorno de producción el mismo se ignorará desde el .gitignore y se cargan las variables en el servidor.

   [ReactJS]: <https://https://es.reactjs.org/>
   [Express]: <https://expressjs.com/>
   [HTML5]: <https://es.wikipedia.org/wiki/HTML5>
   [CSS3]: <https://developer.mozilla.org/es/docs/Web/CSS>
   [Mongo DB]: <https://www.mongodb.com/docs/>
   [Express Handlebars]: <https://www.npmjs.com/package/express-handlebars>
   [Swagger]: <https://swagger.io/docs/specification/about/>
   [Passport]: <https://www.passportjs.org/docs/>
   [JWT]: <https://jwt.io/introduction>
   [Winston]: <https://github.com/winstonjs/winston>
   