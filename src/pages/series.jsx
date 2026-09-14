import { useState } from "react";
import { buscarSeries } from "../services/seriesApi";

function Series() {
    const [busqueda, setBusqueda] = useState("");
    const [series, setSeries] = useState([]);
    const [error, setError] = useState("");

    const buscar = async () => {
        if (!busqueda.trim()) {
            setError("Escribe el nombre de una serie");
            setSeries([]);
            return;
        }

        try {
            setError("");

            const datos = await buscarSeries(busqueda);

            setSeries(datos);
        } catch (error) {
            setError(error.message);
            setSeries([]);
        }
    };

    return (
        <main>
            <h1>Buscador de Series</h1>

            <div>
                <input
                    type="text"
                    placeholder="Ejemplo: Batman"
                    value={busqueda}
                    onChange={(evento) =>
                        setBusqueda(evento.target.value)
                    }
                />

                <button onClick={buscar}>
                    Buscar
                </button>
            </div>

            {error && <p>{error}</p>}

            <section>
                {series.map((resultado) => {
                    const serie = resultado.show;

                    return (
                        <article key={serie.id}>
                            <h2>{serie.name}</h2>

                            {serie.image && (
                                <img
                                    src={serie.image.medium}
                                    alt={serie.name}
                                />
                            )}

                            <p>
                                Géneros:{" "}
                                {serie.genres.length > 0
                                    ? serie.genres.join(", ")
                                    : "Sin información"}
                            </p>

                            <p>
                                Idioma:{" "}
                                {serie.language || "Sin información"}
                            </p>

                            <p>
                                Estreno:{" "}
                                {serie.premiered || "Sin información"}
                            </p>

                            <p>
                                Calificación:{" "}
                                {serie.rating.average || "Sin calificación"}
                            </p>

                            
                        </article>
                    );
                })}
            </section>
        </main>
    );
}

export default Series;