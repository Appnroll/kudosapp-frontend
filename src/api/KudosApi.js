const endpoint = 'https://kudos-anr.herokuapp.com/'

export const getKudoses = async () => {
    // TODO would add Model for Kudos to encapsulate
    return await (fetch(endpoint + 'kudos')).json()
}

export const getKudosesStats = () => {
    return await (fetch(endpoint + 'kudos/ranking')).json()
}