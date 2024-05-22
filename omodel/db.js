const mysql = require('mysql');


const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // database:"integracion"
});
// crear la base de datos y crear una tabla para usuarios, este codigo solo ingresara valores
//no creara base de datos ni tabla


con.connect(function(err) {
  if (err) throw err;
  console.log("base de datos conectada");

  // con.query("DROP DATABASE IF EXISTS personal",(err,res)=>{
  //   if(err) throw err;
  //   console.log("base de datos eliminada");
  // })

  // con.query("CREATE DATABASE personal",(err,res)=>{
  //   if(err) throw err;
  //   console.log("base de datos creada");
  // })
});


module.exports=con;
