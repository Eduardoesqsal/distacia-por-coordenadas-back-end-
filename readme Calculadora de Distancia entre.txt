# 🧮 Calculadora de Distancia entre Dos Puntos (Full Stack React + Flask)

Esta es una aplicación web full stack que calcula la distancia entre dos puntos en el plano cartesiano, utilizando React para el frontend y Flask (Python) para el backend.

---

## 🚀 Tecnologías Utilizadas

- Frontend: React, CSS
- Backend: Flask (Python 3)
- Comunicación: Fetch API (JSON)

---

## 📦 Estructura del Proyecto

calculadora-distancia/
│
├── backend/
│ └── app.py
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── DistanciaForm.jsx
│ │ └── App.css
│ └── package.json

yaml
Copiar
Editar

---

## ⚙️ Cómo ejecutar el proyecto localmente

### 1. Clona este repositorio

```bash
git clone https://github.com/tu-usuario/calculadora-distancia.git
cd calculadora-distancia
2. Instala y ejecuta el backend
bash
Copiar
Editar
cd backend
python3 -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install flask flask-cors
python app.py
El backend se ejecutará en: http://localhost:5000

3. Instala y ejecuta el frontend
En una nueva terminal:

bash
Copiar
Editar
cd frontend
npm install
npm start
El frontend se abrirá en: http://localhost:3000

🧪 Uso de la aplicación
Ingresa las coordenadas X1, Y1, X2, Y2.

Haz clic en Calcular Distancia.

Verás el resultado debajo del formulario.

📝 Notas adicionales
Asegúrate de tener Python 3 y Node.js + npm instalados.

La app utiliza fetch en React para comunicarse con Flask.

Puedes personalizar los estilos en App.css.

Imagen de la fórmula puede ser modificada por URL en DistanciaForm.jsx.

📸 Captura de Pantalla

📄 Licencia
MIT © TuNombre

yaml
Copiar
Editar

---

### ✅ Recomendaciones finales:
- Guarda este archivo como `README.md` en la raíz del proyecto.
- Si tu proyecto está en GitHub, este archivo se mostrará automáticamente en la portada del repositorio.



markdown
Copiar
Editar
# 🧮 Calculadora de Distancia entre Dos Puntos

Aplicación full stack que calcula la distancia entre dos puntos usando React (frontend) y Flask (backend).

---

## ✅ Requisitos

- Python 3 instalado
- Node.js y npm instalados
- Git (opcional)

---

## 📁 Estructura del proyecto

calculadora-distancia/
├── backend/
│ └── app.py
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ ├── DistanciaForm.jsx
│ │ └── App.css

yaml
Copiar
Editar

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/calculadora-distancia.git
cd calculadora-distancia
2. Ejecutar el backend (Flask)
bash
Copiar
Editar
cd backend
python3 -m venv venv
source venv/bin/activate     # En Windows: venv\Scripts\activate
pip install flask flask-cors
python app.py
El backend estará en: http://localhost:5000

3. Ejecutar el frontend (React)
En otra terminal:

bash
Copiar
Editar
cd frontend
npm install
npm start
El frontend estará en: http://localhost:3000

💡 ¿Cómo funciona?
El usuario ingresa dos puntos (X1, Y1, X2, Y2) desde el navegador.

React envía esos datos al backend usando fetch().

Flask calcula la distancia usando la fórmula de distancia euclidiana.

El backend responde con el resultado y se muestra en pantalla.

📸 Características
Diseño simple y responsivo con CSS

Visualización de la fórmula con una imagen desde URL

Arquitectura clara: frontend y backend separados

📝 Notas
Puedes modificar el diseño en App.css.

La fórmula usada es:


📄 Licencia
MIT © TuNombre

yaml
Copiar
Editar

---

Solo reemplaza `https://github.com/tu-usuario/calculadora-distancia.git` por la URL de tu repositorio real (si lo subes a GitHub), y `TuNombre` al final por tu nombre si quieres.

