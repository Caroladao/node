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

  app.get( '/clients/register', (req, res) => {
    res.marko(require( "../views/clients/register/register.marko" ))
  })

  app.post( '/clients', (req, res) => {
    console.log(req.body)
    const clientDAO = new ClientDAO( db )
    clientDAO.add(req.body)
    .then(res.redirect('/clients'))
    .catch(err => console.log(err))
  })

  app.delete('/clients/:id', function(req, res) {
    const id = req.params.id;

    const clientDao = new ClientDao(db);
    clientDao.delete(id)
      .then(() => res.status(200).end())
      .catch(err => console.log(err));
});
}