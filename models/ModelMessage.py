from connectionPool.pool import MySQLPool

class MessageModel:
    def __init__(self):
        self.mysql_pool = MySQLPool()
    
    def get_message(self, nombre):
        params = {'userfk': nombre}
        rv = self.mysql_pool.execute(
            'SELECT mensaje_escrito FROM mensaje where userfk=%s', (nombre,))
        content = {}
        array = []
        for result in rv:
            content = {
                'mensaje_escrito': result[0]}
            array.append(content)
        return array