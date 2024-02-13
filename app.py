from flask import Flask, request, render_template, flash, session, redirect
from models.ModelUser import UserModel
from models.ModelMessage import MessageModel
from controlers import ControllerLogin
LoginController = ControllerLogin.LoginController()
ModelUser = UserModel()
ModelMessage = MessageModel()

app = Flask(__name__, template_folder='template', static_folder='static')

# Establecer la clave secreta
app.secret_key = 'h2g3h32gh2'

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        password = request.form['password']
        result = LoginController.iniciate_session(password)
        if result == 1:
            session['password'] = password
            return redirect('/juego')
        else:
            flash('Contraseña incorrecta', 'error')

    return render_template('login.html')

@app.route('/juego')
def index():
    return render_template('juego.html')

@app.route('/principal', methods=['GET', 'POST'])
def principal():
    username_ = session['password']
    userData = ModelUser.get_user_username(username_)
    name = userData['nombre']
    messageResult = ModelMessage.get_message(name)
    return render_template('principal.html',userData= userData, messageResult = messageResult)

@app.route('/dibujo', methods=['GET', 'POST'])
def dibujo():
    username_ = session['password']
    userData = ModelUser.get_user_username(username_)
    name = userData['nombre']
    messageResult = ModelMessage.get_message(name)
    return render_template('dibujo.html', messageResult = messageResult)

if __name__ == "__main__":
    app.run(debug=True)
