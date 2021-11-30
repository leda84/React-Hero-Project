let token = `b2a36b7547307cab5cf3df7c2f4ec122f92b78583c189637`

export const server_calls ={
    get: async() =>{
        const response = await fetch(`https://hero-collection.herokuapp.com/api/characters`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async(data: any={}) =>{
        const response = await fetch(`https://hero-collection.herokuapp.com/api/characters`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create a character on server')
        }
        return await response.json()
    },
    update: async(id: string, data: any={}) =>{
        const response = await fetch(`https://hero-collection.herokuapp.com/api/characters/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update a character on server')
        }
        return await response.json()
    },
    delete: async(id: string) =>{
        const response = await fetch(`https://hero-collection.herokuapp.com/api/characters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to delete a character on server')
        }
        return await response.json()
    },
}