const btnAdd = Object(document.getElementById('premiumBtn'))

const askPremium = async (userId) => {

    await fetch(`/api/users/premium/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: '',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error al actualizar rol:', error);
        });
}

const delUser = async (userId) => {
    await fetch(`/api/users/deactivate/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: '',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error al intentar desactivar:', error);
        });
}