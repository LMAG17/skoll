export const generic = async (url, method, body) => {
    console.log("body-generic",body);
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(
                url,
                {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            );
            const jsonRes = await response.json();

            if (jsonRes.code == 0) {
                resolve(jsonRes)
            } else {
                console.log(jsonRes.code);
                reject(jsonRes)
            }
        } catch (error) {
            reject("Error inesperado")
        }
    })
}
