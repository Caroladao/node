alert("oi");
let tabelaClient = document.querySelector('#clients');
tabelaClient.addEventListener('click', (event) => {
    let elementClicked = event.target;

    if (elementClicked.dataset.type == 'delete') {
        let clientId = elementClicked.dataset.ref;
        fetch( `http://localhost:3000/clients/${clientId}`, { method: 'DELETE' })
        .then(res => {
            let tr = elementClicked.closest(`#client_${clientId}`);
            tr.delete();
        })
        .catch(err => console.log(err));
    }

});