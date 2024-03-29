const descripcion = {
    demand: true,
    alias: "d",
    desc: "descripcion de la tarea por hacer",
};
const completado = {
    default: true,
    alias: "c",
    desc: "marca como completado o pendiente la tarea",
};
const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion,
    })
    .command("actualizar", "actualiza el estado completado de una tarea", {
        descripcion,
        completado,
    })
    .command("borrar", "Borra una tarea", {
        descripcion,
    })
    .command("filtrar", "filtra una tarea una tarea", {
        completado,
    })
    .help().argv;

module.exports = {
    argv,
};