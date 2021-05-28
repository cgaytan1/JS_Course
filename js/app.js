"use strict"

// JSON -> JavaScript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

// Array de datos
var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

// Convirtiendo datos en cadena de texto para el envio a un servidor.
var personaJSON = JSON.stringify(persona);

// Reconvirtiendo datos en formato de objeto para una mejor lectura y manipulación.
var nuevaPersona = JSON.parse(personaJSON);