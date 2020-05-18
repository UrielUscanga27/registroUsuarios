const conexion = require("../conexion")
module.exports = {
    async insertar(nombre, password, admin) {
        let resultados = await conexion.query(`insert into public.users
        (nombre, password, admin)
        values
        ($1, $2, $3)`, [ nombre, password, admin]);
        return resultados;
    },
    async obtener() {
        const resultados = await conexion.query("select id, nombre, password, admin from public.users");
        return resultados.rows;
    },
    async obtenerPorId(id) {
        const resultados = await conexion.query(`select id, nombre, password, admin from public.users where id = $1`, [id]);
        return resultados.rows[0];
    },
    async actualizar(id, nombre, password, admin) {
        const resultados = conexion.query(`update public.users
        set nombre = $1,
        password = $2,
        admin = $3
        where id = $4`, [nombre, password, admin, id]);
        return resultados;
    },
    async eliminar(id) {
        const resultados = conexion.query(`delete from public.users
        where id = $1`, [id]);
        return resultados;
    },
}