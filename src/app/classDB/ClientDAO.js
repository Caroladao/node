class ClientDAO{
  
  constructor(db){
    this._db = db;
  }

  list(){
    return new Promise( (resolve, reject) => {
      this._db.all(
        "SELECT * FROM clients",
        (err,results) => {
          if(err) return reject( "Não foi possivel listar os clients" )
          return resolve(results)
        }
      )
    })
  }
}

module.exports = ClientDAO;