-- Desactivar las restricciones de clave externa
SET FOREIGN_KEY_CHECKS = 0;

-- Truncar la tabla
TRUNCATE TABLE 'nombre_tabla';

-- Activar las restricciones de clave externa
SET FOREIGN_KEY_CHECKS = 1;