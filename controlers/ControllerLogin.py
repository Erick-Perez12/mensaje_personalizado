from models.ModelUser import UserModel

class LoginController:
    def __init__(self):
        self.usermodel = UserModel()
    
    def iniciate_session(self,password):
        user = self.usermodel.get_user_username(password)
        if(user == None):
            return 0
        else:
            return 1

if __name__ == "__main__":
    tm = LoginController()