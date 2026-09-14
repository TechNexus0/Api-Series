const API_URL = "https://api.tvmaze.com";

export const buscarSeries = async (nombre) => {
    const respuesta = await fetch(
        `${API_URL}/search/shows?q=${nombre}`
    );

    if (!respuesta.ok) {
        throw new Error("No se pudieron cargar las series");
    }

    return await respuesta.json();
};