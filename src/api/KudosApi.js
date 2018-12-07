const endpoint = 'https://kudos-anr.herokuapp.com/'

export const getKudoses = () => {
    return fetch(endpoint + 'kudos')
        .then(response => {
            return response.json()
        })
}
export const getKudosesStats = () => {
    return fetch(endpoint + 'kudos/ranking')
        .then(response => {
            return response.json()
        })
}