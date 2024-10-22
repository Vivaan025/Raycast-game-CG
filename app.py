from flask import Flask, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start-game')
def start_game():
    # Start the game in a separate process
    subprocess.Popen(["python", "main.py"])  # Adjust based on your game filename
    return "Game started!"

if __name__ == '__main__':
    app.run(debug=True)
