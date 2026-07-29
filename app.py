from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')
        return jsonify({'status': 'success', 'message': 'Message received. I\'ll get back to you within 24 hours.'})
    return render_template('contact.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/ctf')
def ctf():
    return render_template('ctf.html')

if __name__ == '__main__':
    import sys
    port = 5000
    for i, arg in enumerate(sys.argv):
        if arg == '--port' or arg == '-port' or arg == '-p':
            if i + 1 < len(sys.argv):
                port = int(sys.argv[i + 1])
    app.run(host='0.0.0.0', port=port, debug=True)
