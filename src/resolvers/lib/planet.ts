
import handleError from "$lib/error";

const planet = async (parent: any, args: any, { dataSources: { swapi } }: any) => {
    try {
        let id = args
        if (parent) {
            let match = parent.homeworld.match(/\d/g)

            if (match.length)
                id = parseInt(match[0])
        }

        let planet = await swapi.getPlanet(id)
        return planet
    } catch (error) {
        handleError(error)
    }
}

export { planet }
