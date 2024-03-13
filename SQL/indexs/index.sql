SHOW DATABASES;

-- Indicar que base de datos vamos a usar
USE b4w1m9w9pl2dc80w8f7a;

-- Crear una tabla:
CREATE TABLE estudiantes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    correo VARCHAR(150),
    fecha_nacimiento DATE
);

-- Eliminar una tabla:
DROP TABLE estudiantes;

-- Seleccionar un dato:
SELECT * FROM estudiantes;

-- Insertar datos a la tabla:
INSERT INTO estudiantes (nombre, apellido, correo, fecha_nacimiento) VALUES ("Pedro", 'Lopez','pedro@gmail.com', '2002-02-19');

-- Eliminar una tabla:
DROP TABLE estudiantes;


