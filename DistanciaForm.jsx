import React, { useState } from "react";
import "./App.css"; // Importa el archivo CSS global

const DistanciaForm = () => {
  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularDistancia = () => {
    const X1 = parseFloat(x1);
    const Y1 = parseFloat(y1);
    const X2 = parseFloat(x2);
    const Y2 = parseFloat(y2);

    const distancia = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
    setResultado(distancia);
  };

  return (
    <div className="form-container">
      <h1>Calculadora de Distancia entre Puntos</h1>
      <div className="input-container">
        <label>Coordenada X del Punto 1:</label>
        <input
          type="number"
          value={x1}
          onChange={(e) => setX1(e.target.value)}
        />
        <label>Coordenada Y del Punto 1:</label>
        <input
          type="number"
          value={y1}
          onChange={(e) => setY1(e.target.value)}
        />
        <label>Coordenada X del Punto 2:</label>
        <input
          type="number"
          value={x2}
          onChange={(e) => setX2(e.target.value)}
        />
        <label>Coordenada Y del Punto 2:</label>
        <input
          type="number"
          value={y2}
          onChange={(e) => setY2(e.target.value)}
        />
        <button onClick={calcularDistancia}>Calcular Distancia</button>
      </div>

      {resultado && (
        <div className="resultado">
          <h2>Resultado: {resultado} unidades</h2>
        </div>
      )}

      {/* Sección de la fórmula y teoría */}
      <div className="teoria-container">
        <h2>Fórmula de Distancia</h2>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADS0tLu7u6mpqY6Ojr7+/vy8vKKiorg4ODNzc38/Pz29vbq6urk5OSpqam5ubmRkZEuLi6Xl5e6urrHx8dFRUXCwsJ9fX1mZmYnJydaWloeHh50dHSDg4M/Pz9QUFAVFRVJSUlsbGxhYWGWlpYREREiIiJ2dnYsLCye+6G7AAAFCklEQVR4nO3YaXeqOhQGYDajjIKo4IQ4tNb//wdvQggEAY/02HW77n2fL9YSQnayM4imAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzX+L7/bzdhzLsadqRfav+mALXjTP+l3hWhNX9XTb+VZf5lBeYlfUtDWt4lN95YXROhOzUtHM/hy0EcXuLhAoEX2tOqDD1+QxbNN6+VDw6ldd9a1zR8UkhG6NLHtNZoAdXtMEfS4IuePXhIRLn4LF8rbxCtd9czW5fy8b6UEVqLia3RtJgy/uFsncHLHo2M7RMmVZl0Xb1WnEXIP4L4RLvRQnWEq280x18sWJYGpT68dZU0uUbNr1o6e3Vm1xGyQd/T6D11hBsKprcnZT0e3A+xJ76anYe4lEyvUZuRqxWLZfzadt9EqGV0GstTEaFBh/q7noh/JEnvjiypxtlN5IyNaMYyJI7rNaq01NIpa2vF+UiqNA6S9DGdg2Tm8FjsJKkv6WRqy2X8YkK1EdpbGlspRYQeyW0xOFX5umEj8NiPrD4+WsemrL89q9d36863T5kVa3FDTJ3SlZKqx2ckO8eh67OQ+i2Sf17raebMGkW1TNQRmuTJojqxhM0GWsPbuOVFL0oU6kB3I6Rje1vJPy7UP1wsac078qu9ZJ1eCa2mRChrD/cL6SZmjYhwRlFzW0ob+3N4of+iJKRboHxXt+ZOhHY7GCwtXD46n/2pbt94cgVETf7upqxPA2OoZp74U0SYK031z7RrVlZ7zskBDrZ0bkeb31Z3hL5arby15fEP8R+nmdm8/2Z8uMRep0W8RrPu0YQKnqRtWkxa8pQIrT/Mw5yURSAk1v++bCiXy0se8cY2ChnhVvlR4PcidGnhs06um7CsSmXyWXtbO1C7/11owjmojdCVGWK7LUPzg6DJUiUrM1KWXodrutWkdnoxB9kxjmEYQbkO2IchIvTVJYMNvMPnsGiDwWo05AN2lNmkzL1vZumV5wIXKX3NBmOd9Fcazfi852zUhnYkl84bdWt9WGnU4DW1K2LKMxo+27EMXalVWlN+FzYR5mwmiwbbK68R8Sdrx2oJWinr3IZi/yazqMM/ks4qdeV3e1+ql7sRlsqECk63w8ghla01eVsjS+4XD90V1pjQCF3zTid3uIR/mp/Nh4pNKvl8++z9gLFZLrMJOSdLDtzDab0bYapO/YJG97mE1DOlN7CljAtlPhajP7fm94U8tTmy1Wzj8NkME49Vc9WjPS9UypRvjy1C90zjqmsSmx1jh+mQ1HwplG3rzwIzYTu7uRo++ldsInnyrvsuM6vnGWbqeOfuC4DYrEYlMk3bLfmVW2eL15bds9ZOWRUjfmiJ2XbSb4JBd1vTz8u6PVOS9CWpjGy97y0thu1vRzYnN015vj790awra8uVWAShZtz7xarDiJfM6+aMzKfvc6j5BTzrXw2s/v+EOGW3fj2vO28yrhCHMy1c9wol4khqVhFGQ434W4VcqaOB3juMTnseof6Hvdl2xfKpl1QvpOfHLHVLEt0gIgzdH3h7Gz15E/Xkl2g84fXTkkoRYP+FzorObF3zZYQ/Y3wdSqnIx960xB+vv5R26mX0sC3yh3kd8Eu8nrF3PT/KDyM3GklEft6bLIyiaKxXvlMfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/F/8A1uUNax2uBQRAAAAAElFTkSuQmCC" alt="Fórmula de distancia" className="formula-img" />
        <p>
          La fórmula para calcular la distancia entre dos puntos en un plano
          cartesiano es conocida como la fórmula de distancia euclidiana. Se
          utiliza el teorema de Pitágoras para determinar la distancia entre dos
          puntos dados por sus coordenadas (x1, y1) y (x2, y2). La fórmula es:
        </p>
        <pre>
          d = √((x2 - x1)² + (y2 - y1)²)
        </pre>
        <p>
          Donde <strong>d</strong> es la distancia entre los dos puntos, y
          <strong>(x1, y1)</strong> y <strong>(x2, y2)</strong> son las
          coordenadas de los puntos en el plano.
        </p>
      </div>
    </div>
  );
};

export default DistanciaForm;
