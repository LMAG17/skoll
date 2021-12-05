export default async function handleMethod(
    {
        url,
        method,
        headers,
        body
    }) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                url,
                {
                    method: method,
                    headers: {
                        ...headers,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                }
            );
            const jsonRes = await response.json();
            if (jsonRes.code == 0) {
                resolve(jsonRes)
            } else {
                reject(jsonRes)
            }
        } catch (error) {
            reject("Error en el servicio", error)
        }
    })
}
