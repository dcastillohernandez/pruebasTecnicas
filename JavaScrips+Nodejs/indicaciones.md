Escribe las soluciones en el archivo `solutions/index.js` manteniendo el nombre de las funciones y sus `export`. Usa `ESModule` en tu proyecto de Node.js

1- Arregla esta función para que el código posterior funcione como se espera:

```JavaScript
import net from 'node:net'

export const ping = () => {
    const starTime = process.hrtime()
    const client = net.connect({port: 80, host: ip}, () => {
        client.end()
        return {time: process.hrtime(starTime), ip}
    })

    client.on('error', (error) => {
        throw error
        client.end()
    })

    ping('midu.dev', (err, info) => {
        if (err) console.log(err)
        console.log(info)
    })
};
```

2- Transforma la siguiente función para que funcione con promesas en lugar de callbacks:

```JavaScript
export function obtenerDatosPromise(callback) {
    setTimeout(()=>{
        callback(null, {data: 'datos importantes'});
    }, 2000);
}
```

3- Explica que hace la función. Identifica y corrige los errores en el siguiente código. Si ves algo innecesario, elimínalo. Luego mejorarlo para que siga funcionando con callback y luego has lo que consideres para mejorar su legibilidad.

```JavaScript
export function procesarArchivo (){
    fs.readFile('input.text', 'utf8', (error, contenido)=>{
        if (error){}
        console.log('Error leyendo archivo: ', error.message);
        return false;
    })

    setTimeout(()=>{
        const textoProcesado = contenido.toUpperCase();

        fs.writeFile('output.text', textoProcesado, error => {
            if (error){
                console.log('Error guardando archivo: ', error.message);
                return false
            }

            console.log('Archivo procesado y guardado con éxito');
            return true;
        });
    } 1000);
};
```

4- ¿ Cómo mejorarías el siguiente código y por qué ?. Arregla los test si es necesario:

```JavaScript
import fs from  'node:fs'

export function leerArchivos(){
    const archivo1 = fs.readSync('archivo1.txt', 'utf8 ');
    const archivo2 = fs.readSync('archivo2.txt', 'utf8 ');
    const archivo3 = fs.readSync('archivo3.txt', 'utf8 ');

    return `${archivo1} ${archivo2} ${archivo3}`
};

leerArchivos()
```

5- Escribe una función `delay` que retorne una promesa que se resuelva después de `n` milisegundos. Por ejemplo:

```JavaScript
export async function delay (){
    // ...
}

delay(3000).then(()=>console.log('Hola mundo'));
// ...
await delay(3000)
console.log('Hola mundo')
```

6- Vamos a crear nuestra propia utilidad `dotenv` en el archivo `dotenv.js`

- La utilidad debe devolver un método `config` que lee el archivo `.env` y añade las variables de entorno que haya en el archivo del objeto `process.env`
- Por ejemplo si tu archivo `.env` contiene:

```sh
PORT=8000
TOKEN="123ABC"
```

Entonces podríamos hacer esto:

```JavaScript
const dotenv = require("./dotenv.js");
dotenv.config();

console.log(process.env.PORT); //"8000"
console.log(process.env.TOKEN); //"123ABC"
```

También se le puede pasar el path del archivo `.env` como parámetro:

```JavaScript
const dotenv = require("./dotenv.js")
dotenv.config("./config/.env.local")
```

Cosas a tener en cuenta:

- Solo se permite leer el método `fs` para leer el archivo.
- Si el archivo no existe no debe dar error.
- Si el archivo existe pero no tiene ninguna variable de entorno, no debe hacer nada.
- Sólo debe soportar el archivo `.env` o el que se le pasa como parámetro, no hace falta que soporte `.env.local`, `.env.development` y similares de forma automática.
- Las variables de entorno siempre son strings, por lo que si en el archivo `.env` hay número, por ejemplo `PORT=8000`, al leerlo con `fs`, y añadirlo a `process.env` debe ser un string no un número.
- `process.env` es un objeto y, por lo tanto, es mutable. Esto significa que podemos añadir propiedades nuevas sin problemas.

-7 Diseña una API REST utilizando Express que permita a los usuarios crear, leer, modificar, actualizar y eliminar elementos de una lista.

La lista tendrá obtejos que tienen la siguiente forma:

```JavaScript
{
    id: 1,
    content: 'Item 1',
}
```

Haz la solución en el archivo `solutions/server.js` y exporta el `app` y `server` creado.
Instala Express con `npm install express`. No te preocupes por CORS.
