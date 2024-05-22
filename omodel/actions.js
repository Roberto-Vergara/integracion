const con = require("./db");


const addUsuario=(req,res)=>{
    console.log(req.body.introducir_contraseña);
    con.query(`INSERT INTO usuarios (email, contraseña) VALUES ('${req.body.introducir_email}', '${req.body.introducir_contraseña}')`,(err, result)=>{
        if (err) throw `algo salio mal ${err}`;
        console.log("1 usuario agregado");
    })
    res.redirect("/login")
}

const delUsuario=(req,res)=>{
    if (err) throw err;
    var sql = `DELETE FROM usuarios WHERE email = '${req.body.introducir_email}'`;
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
  res.send("funciono")
}

module.exports = {addUsuario,delUsuario}