db.createCollection('personas');

db.personas.find();

db.personas.insertOne({
    nombres: 'juan esteban',
    apellidos: 'jaramillo david',
    correo: 'juan@hotmail.com',
    edad: 30
});

db.personas.insertOne(
    { nombres: 'cristian andres',
    apellidos: 'franco perez',
    correo: 'cristian@gmail.com',
    edad: 5}
);

db.personas.insertOne(
    { nombres: 'manuela maria',
    apellidos: 'torres soto',
    correo: 'manuela@outlook.com',
    edad: 10}
);

db.personas.insertOne(
    { nombres: 'ernesto arnulfo',
    apellidos: 'cardona diaz',
    correo: 'ernesto@gmail.com',
    edad: 15}
);

db.personas.insertOne(
    { nombres: 'alejandro andres',
    apellidos: 'duque perez',
    correo: 'alejandro@gmail.com',
    edad: 20}
);

db.personas.insertOne(
    { nombres: 'daniel jose',
    apellidos: 'parra palacios',
    correo: 'daniel@outlook.com',
    edad: 25}
);

db.personas.insertOne(
    { nombres: 'jhamile andrea',
    apellidos: 'dominguez garcia',
    correo: 'jhamile@hotmail.com',
    edad: 30}
);

db.personas.insertOne(
    { nombres: 'camilo jose',
    apellidos: 'tejada garcia',
    correo: 'camilo@outlook.com',
    edad: 5}
);

db.personas.insertOne(
    { nombres: 'michelle dayana',
    apellidos: 'sierra vivas',
    correo: 'michelle@hotmail.com',
    edad: 10}
);

