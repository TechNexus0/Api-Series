# Buscador de Series

Aplicación desarrollada con React para buscar series utilizando una API gratuita de TVMaze.

## Objetivo

El objetivo del proyecto es practicar el consumo de una API externa utilizando `fetch()` y mostrar la información obtenida dinámicamente en una aplicación React.

La aplicación permite buscar series por nombre y consultar información como nombre, imagen, géneros, idioma, fecha de estreno y calificación.

## Tecnologías utilizadas

* React
* Vite
* JavaScript
* HTML
* CSS
* TVMaze API

## API utilizada

### TVMaze

TVMaze es una API gratuita que proporciona información sobre series de televisión.

La aplicación utiliza una petición GET para realizar las búsquedas.

La dirección utilizada es:

```text
https://api.tvmaze.com/search/shows?q=nombre
```

Por ejemplo:

```text
https://api.tvmaze.com/search/shows?q=batman
```

## Funcionalidades

* Buscar series por nombre.
* Mostrar el nombre de la serie.
* Mostrar la imagen de la serie.
* Mostrar los géneros.
* Mostrar el idioma.
* Mostrar la fecha de estreno.
* Mostrar la calificación.
* Mostrar un mensaje cuando no se escribe una búsqueda.
* Mostrar un mensaje cuando ocurre un error.

## Estructura del proyecto

```text
series-react/
│
├── src/
│   ├── components/
│   │
│   ├── pages/
│   │   └── Series.jsx
│   │
│   ├── services/
│   │   └── seriesApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── public/
├── package.json
├── package-lock.json
└── README.md
```

## Instalación

Clonar el repositorio y entrar a la carpeta:

```bash
cd series-react
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Iniciar el proyecto con:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:5173
```

## Ejemplos de búsqueda

Se pueden realizar búsquedas como:

* Batman
* Breaking Bad
* The Office
* Stranger Things

## Autor

Juan Camilo Vargas
