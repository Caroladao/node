const ClientDAO = require( "../classDB/ClientDAO" )
const db = require( "../../config/database" )

module.exports = (app) => {
  app.get( '/', (req, res) => {
    res.send(
      `<h1>Home </h1>`
    )
  })

   app.get( '/clients', (req, res) => {
    const clientDAO = new ClientDAO( db )
    clientDAO.list()
    .then(clients => res.marko(
      require( "../views/clients/list/list.marko" ),
      {
        clients: clients
      }
    ))
    .catch(err => console.log(err))
  })

  app.post( '/clients', (req, res) => {
    const clientDAO = new ClientDAO( db )
    clientDAO.add(req.body)
    .then(res.redirect('/clients'))
    .catch(err => console.log(err))
  })

  app.put( '/clients', (req, res) => {
    const clientDAO = new ClientDAO( db )
    clientDAO.update(req.body)
    .then(res.redirect('/clients'))
    .catch(err => console.log(err))
  })

  app.delete('/clients/:id', function(req, res) {
    const id = req.params.id
    const clientDAO = new ClientDAO( db ) 
    clientDAO.delete( id )
      .then(() => res.status(200).end())
      .catch(err => console.log(err))
  })

  app.get('/clients/register', function(req, res) {
    res.marko(require('../views/clients/register/register.marko'), { client: {} });
  })

  app.get('/clients/register/:id', function(req, res) {
    const id = req.params.id
    const clientDAO = new ClientDAO( db )
    
    clientDAO.findId( id )
      .then(client => 
        res.marko(
          require('../views/clients/register/register.marko'),
          { client: client }
        )
      )
      .catch(err => console.log(err))
  })
}