const URL = '61daf0754593510017aff72b.mockapi.io';

async function addData(name, phone){
    const response = await fetch(`https://${URL}/contacts/contacts`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            phone: phone,
        })
    })
    return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not added'));
}

async function deleteData(contactId){
    const response = await fetch(`https://${URL}/contacts/contacts/${contactId}`,
    {
        method: 'DELETE',
        headers: {
       
        },
        body: JSON.stringify({
            id: contactId,
        })
    })

    return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not deleted'));
}


async function fetchData(){
    const response = await fetch(`https://${URL}/contacts/contacts`);
    return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export {fetchData, addData, deleteData};