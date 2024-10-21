from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/skin-assessment', methods=['POST'])
def skin_assessment():
    data = request.json
    # Process the skin assessment data and return recommendations
    # This is where you'd implement your skin analysis algorithm
    return jsonify({"message": "Skin assessment received", "data": data})

@app.route('/api/daily-routine', methods=['GET'])
def daily_routine():
    # Fetch and return the user's daily routine
    # This would typically be based on the user's skin assessment and stored in a database
    routine = {
        "morning": [
            {"step": "Cleanse", "product": "Gentle Foaming Cleanser"},
            {"step": "Tone", "product": "Hydrating Toner"},
            {"step": "Serum", "product": "Vitamin C Serum"},
            {"step": "Moisturize", "product": "Lightweight Day Cream"},
            {"step": "Sunscreen", "product": "Broad Spectrum SPF 50"}
        ],
        "evening": [
            {"step": "Cleanse", "product": "Oil-based Cleanser"},
            {"step": "Exfoliate", "product": "Gentle AHA/BHA Exfoliant"},
            {"step": "Tone", "product": "Hydrating Toner"},
            {"step": "Treat", "product": "Retinol Serum"},
            {"step": "Moisturize", "product": "Rich Night Cream"}
        ]
    }
    return jsonify(routine)

@app.route('/api/products', methods=['GET'])
def products():
    # Fetch and return product data
    # This would typically come from a database
    products = [
        {
            "id": 1,
            "name": "Gentle Foaming Cleanser",
            "description": "A pH-balanced cleanser suitable for all skin types.",
            "price": 24.99,
            "rating": 4.5
        },
        {
            "id": 2,
            "name": "Hydrating Toner",
            "description": "Alcohol-free toner with hyaluronic acid for deep hydration.",
            "price": 19.99,
            "rating": 4.7
        }
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)