USE b4w1m9w9pl2dc80w8f7a;

/*--------------------------------------------------------------------------------------------------------------------------------*/

-- Crear la tabla colores
CREATE TABLE colores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(50) NOT NULL
);
SELECT * FROM colores;
INSERT INTO colores (color)VALUES('rojo');
INSERT INTO colores (color)VALUES('azul');

-- Crear la tabla tipos de vehiculos
CREATE TABLE tipos_de_vehiculos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_de_vehiculo VARCHAR(50) NOT NULL
);
SELECT * FROM tipos_de_vehiculos;
INSERT INTO tipos_de_vehiculos (tipo_de_vehiculo)VALUES('Carro');
INSERT INTO tipos_de_vehiculos (tipo_de_vehiculo)VALUES('moto');

-- Crear la tabla marcas de vehiculos
CREATE TABLE marcas_de_vehiculos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    marca_de_vehiculo VARCHAR(50) NOT NULL
);
SELECT * FROM marcas_de_vehiculos;
INSERT INTO marcas_de_vehiculos (marca_de_vehiculo)VALUES('suzuki');
INSERT INTO marcas_de_vehiculos (marca_de_vehiculo)VALUES('bmw');

-- Crear la tabla vehiculos
CREATE TABLE vehiculos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(20) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    id_color INT,
    id_tipo_de_vehiculo INT,
    id_marca_de_vehiculo INT,
    FOREIGN KEY (id_color) REFERENCES colores(id),
    FOREIGN KEY (id_tipo_de_vehiculo) REFERENCES tipos_de_vehiculos(id),
    FOREIGN KEY (id_marca_de_vehiculo) REFERENCES marcas_de_vehiculos(id)
);
SELECT * FROM vehiculos;
INSERT INTO vehiculos
(placa, modelo, id_color, id_tipo_de_vehiculo, id_marca_de_vehiculo)VALUES('gjo-567', '2018', '2', '2', '1');
INSERT INTO vehiculos 
(placa, modelo, id_color, id_tipo_de_vehiculo, id_marca_de_vehiculo)VALUES ('anz-317', '2018', 2, 2, 2);
(placa, modelo, id_color, id_tipo_de_vehiculo, id_marca_de_vehiculo)VALUES('gjo-567', '2018', '2', '2', '1');
INSERT INTO vehiculos 
(placa, modelo, id_color, id_tipo_de_vehiculo, id_marca_de_vehiculo)VALUES ('kgb-175', '2020', 2, 1, 2);


-- INNER JOIN entre las tablas
SELECT vehiculos.id, vehiculos.placa, vehiculos.modelo,
       colores.color, tipos_de_vehiculos.tipo_de_vehiculo, marcas_de_vehiculos.marca_de_vehiculo
FROM vehiculos
INNER JOIN colores ON vehiculos.id_color = colores.id
INNER JOIN tipos_de_vehiculos ON vehiculos.id_tipo_de_vehiculo = tipos_de_vehiculos.id
INNER JOIN marcas_de_vehiculos ON vehiculos.id_marca_de_vehiculo = marcas_de_vehiculos.id;

-- Buscar vehículos por color:
SELECT vehiculos.id, vehiculos.placa, vehiculos.modelo, colores.color
FROM vehiculos
INNER JOIN colores ON vehiculos.id_color = colores.id
WHERE colores.color = 'azul';

-- Buscar vehículos por tipo y marca:

SELECT vehiculos.id, vehiculos.placa, vehiculos.modelo,
       tipos_de_vehiculos.tipo_de_vehiculo, marcas_de_vehiculos.marca_de_vehiculo
FROM vehiculos
INNER JOIN tipos_de_vehiculos ON vehiculos.id_tipo_de_vehiculo = tipos_de_vehiculos.id
INNER JOIN marcas_de_vehiculos ON vehiculos.id_marca_de_vehiculo = marcas_de_vehiculos.id
WHERE tipos_de_vehiculos.tipo_de_vehiculo = 'carro' AND marcas_de_vehiculos.marca_de_vehiculo = 'bmw';

-- Listar todos los vehículos con información completa:

SELECT vehiculos.id, vehiculos.placa, vehiculos.modelo,
       colores.color, tipos_de_vehiculos.tipo_de_vehiculo, marcas_de_vehiculos.marca_de_vehiculo
FROM vehiculos
INNER JOIN colores ON vehiculos.id_color = colores.id
INNER JOIN tipos_de_vehiculos ON vehiculos.id_tipo_de_vehiculo = tipos_de_vehiculos.id
INNER JOIN marcas_de_vehiculos ON vehiculos.id_marca_de_vehiculo = marcas_de_vehiculos.id;

