const con = require("./db");




const addUsuario=(req,res)=>{
    console.log(req.body.introducir_contraseña);
    con.query(`INSERT INTO usuarios (email, password,role) VALUES ('${req.body.introducir_email}', '${req.body.introducir_contraseña}','cliente')`,(err, result)=>{
        if (err) throw `algo salio mal ${err}`;
        console.log("1 usuario agregado");
    })
    res.redirect("/login")
}


const delUsuario=(req,res)=>{
    if (err) throw err;
    var sql = `DELETE FROM usuarios WHERE email = '${req.body.introducir_email}' And password='${req.body.introducir_contraseña}'`;
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
  res.redirect("/login")
}






// arreglar la query
const iniSesion = (req, res) => {
    // console.log(req.body);
    con.query(`SELECT * FROM usuarios WHERE email='${req.body.introducir_email}' AND password='${req.body.introducir_contraseña}'`, (err, result) => {
        if (err) {
            console.log("Algo salió mal al iniciar sesión");
            return res.redirect("/login"); // Usamos return para evitar que se ejecute el siguiente código después de la redirección
        }
        req.session.role = `${result[0].role}`;
        res.redirect("/home");
    });
};


const addPlato=(req,res)=>{
    con.query(`INSERT INTO pedidos (nombre, descripcion,imagen,idUser) VALUES ('${req.body.introducir_email}', '${req.body.introducir_contraseña}','cliente')`,(err, result)=>{
        if (err) throw `algo salio mal ${err}`;
        console.log("1 usuario agregado");
    })

}


const obtPlatos=(req,res)=>{


}
module.exports = {addUsuario,delUsuario,iniSesion,addPlato,obtPlatos}