from flask import Flask, request, jsonify
from flask_cors import CORS
import math

app = Flask(__name__)
CORS(app)

@app.route('/api/distancia', methods=['POST'])
def calcular_distancia():
    data = request.get_json()
    
    try:
        x1 = float(data['x1'])
        y1 = float(data['y1'])
        x2 = float(data['x2'])
        y2 = float(data['y2'])

        distancia = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
        return jsonify({'distancia': distancia})
    
    except (TypeError, ValueError, KeyError) as e:
        return jsonify({'error': 'Datos inválidos o incompletos', 'detalle': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
