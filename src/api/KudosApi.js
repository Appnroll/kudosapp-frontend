const endpoint = 'https://kudosapp-staging.herokuapp.com/'

export const getKudoses = () => {
    return fetch(endpoint + 'kudos')
        .then(response => {
            return response.json()
        })
}
export const getKudosesStats = () => {
    return fetch(endpoint + 'kudos/given')
        .then(response => {
            return response.json()
        })
}
export const getKudosesGiversStats = () => {
    return fetch(endpoint + 'kudos/from')
        .then(response => {
            return response.json()
        })
}
