let tableClient = document.querySelector('#clients');
tableClient.addEventListener('click', (event) => {
    let elementClicked = event.target;

    if (elementClicked.dataset.type == "delete") {
        console.log("entrou")
        let clientId = elementClicked.dataset.ref;
        fetch( `http://localhost:3000/clients/${clientId}`, { method: 'DELETE' })
        .then(res => {
            console.log("aq")
            let tr = elementClicked.closest(`#client_${clientId}`);
            tr.delete();
        })
        .catch(err => console.log(err));
    }

});