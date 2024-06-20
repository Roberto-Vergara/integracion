const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});


con.connect(function(err) {
  if (err) throw err;
  console.log("base de datos conectada");


  con.query("DROP DATABASE IF EXISTS integracion",(err,res)=>{
    if(err) throw err;
    console.log("base de datos eliminada");
  })


  con.query("CREATE DATABASE integracion",(err,res)=>{
    if(err) throw err;
    console.log("base de datos creada");
  })

  con.query("USE integracion",(err,res)=>{
    if(err) throw err;
    console.log("base de datos creada");
  })

  con.query(`CREATE TABLE usuarios (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(30) UNIQUE, password VARCHAR(15),role VARCHAR(20))`,(err,result)=>{
    if(err) throw err;
    console.log("tabla creada");
  })

  con.query(`CREATE TABLE pedidos (id INT PRIMARY KEY, nombre VARCHAR(30), descripcion VARCHAR(15),imagen VARCHAR(200),idUser INT)`,(err,result)=>{
    if(err) throw err;
    console.log("tabla creada");
  })

  con.query(`CREATE TABLE platosComprados (idCom INT)`,(err,result)=>{
    if(err) throw err;
    console.log("tabla platosComprados creada");
  })


  con.query(`DELETE FROM usuarios WHERE email = 'admin@admin.cl'`,(err, result)=>{
    if (err) throw `algo salio mal ${err}`;
    console.log("admin eliminado");
  })


  con.query(`DELETE FROM usuarios WHERE email = 'repa@repa.cl'`,(err, result)=>{
    if (err) throw `algo salio mal ${err}`;
    console.log("repartidor eliminado");
  })
 
  con.query(`INSERT INTO usuarios (email, password,role) VALUES ('admin@admin.cl', 'admin123','admin')`,(err, result)=>{
    if (err) throw `algo salio mal ${err}`;
    console.log("admin agregado");
  })
 
  con.query(`INSERT INTO usuarios (email, password,role) VALUES ('repa@repa.cl', 'repa123','repartidor')`,(err, result)=>{
    if (err) throw `algo salio mal ${err}`;
    console.log("repartidor agregado");
  })
 


});


module.exports=con;
