-- Crear la base de datos
DROP DATABASE messagep;
CREATE DATABASE IF NOT EXISTS messagep;
USE messagep;

-- Crear la tabla usuario
CREATE TABLE IF NOT EXISTS User (
    nombre VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    dedicatoria VARCHAR(255)
);

-- Crear tabla de mensaje
CREATE TABLE IF NOT EXISTS Mensaje (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mensaje_escrito TEXT,
    userfk VARCHAR(255),
    FOREIGN KEY (userfk) REFERENCES User(nombre)
);

-- Insertar valores en la tabla User
INSERT INTO User (nombre, password, dedicatoria)
VALUES
    ('Diego', 'hola5', 'Erick');
