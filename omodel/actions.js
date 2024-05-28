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
    var sql = `DELETE FROM usuarios WHERE email = '${req.body.introducir_email}' And contraseña='${req.body.introducir_contraseña}'`;
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
  res.redirect("/login")
}



// arreglar la query
const iniSesion=(req,res)=>{
    console.log(req.body);
    con.query(`SELECT * FROM usuarios WHERE email='${req.body.introducir_email}' AND password='${req.body.introducir_contraseña}'`,(err, result)=>{
        if (err) {
            console.log("algo salio mal al iniciar sesion");
            res.redirect("/login")
        };
        req.session.logged="si";
        res.redirect("/home")
    })
    
}

module.exports = {addUsuario,delUsuario,iniSesion}