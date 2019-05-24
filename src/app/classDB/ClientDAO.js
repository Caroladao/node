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

  add(client) {
    return new Promise((resolve, reject) => {
      this._db.run(`
        INSERT INTO CLIENTS (
        name,
        email,
        age
        ) values (?, ?, ?)
        `,
        [
            client.name,
            client.email,
            client.age
        ],
        (err) => {
          if (err) {
              console.log(err);
              return reject('Não foi possível adicionar o cliente!');
          }
          resolve();
        }
      )
  });
  }
  
  searchName(name) {
    return new Promise((resolve, reject) => {
        this._db.get(
            `
                SELECT *
                FROM clients
                WHERE name = ?
            `,
            [name+"%"],
            (err, client) => {
                if (err) {
                    return reject('Não foi possível encontrar o cliente!')
                }
                return resolve(client)
            }
        )
    })
  }

  findId( id ) {
    return new Promise((resolve, reject) => {
        this._db.get(
            `
                SELECT *
                FROM clients
                WHERE id = ?
            `,
            [id],
            (err, client) => {
                if (err) {
                    return reject('Não foi possível encontrar o ID!')
                }
                return resolve(client)
            }
        )
    })
  }

  update(client) {
    return new Promise((resolve, reject) => {
        this._db.run(`
            UPDATE clients SET
            name = ?,
            email = ?,
            age = ?
            WHERE id = ?
        `,
        [
            client.name,
            client.email,
            client.age,
            client.id
        ],
        err => {
            if (err) {
                return reject('Não foi possível atualizar o cliente!');
            }

            resolve();
        });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
        this._db.get(
            `
                DELETE 
                FROM clients
                WHERE id = ?
            `,
            [id],
            (err) => {
                if (err) {
                    return reject('Não foi possível remover o cliente!');
                }
                return resolve();
            }
        );
    });
  }
}

module.exports = ClientDAO;