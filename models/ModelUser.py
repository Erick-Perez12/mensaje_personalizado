from connectionPool.pool import MySQLPool

class UserModel:
    def __init__(self):
        self.mysql_pool = MySQLPool()
        
    def get_user_username(self,password):
        params ={'password':password}
        rv = self.mysql_pool.execute(
            "SELECT * FROM user where password=%(password)s", params)
        content = {}
        for result in rv:
            content = {
                'nombre':result[0], 'password':result[1], 'dedicatoria':result[2]}
            return content
        return None
        
