
import handleError from "$lib/error";

const people = async (_: null, args: any, { dataSources: { swapi } }: any) => {
    try {
        let people = await swapi.getPeople(args)
        return people.results
    } catch (error) {
        handleError(error)
    }
}

const person = async (parent: any, args: any, { dataSources: { swapi } }: any) => {
    try {

        let person = await swapi.getPerson(args.id)
        return person
    } catch (error) {
        handleError(error)
    }
}

const search = async (parent: any, args: any, { dataSources: { swapi } }: any) => {
    try {
        let people = await swapi.searchPeople(args)
        return people.results
    } catch (error) {
        handleError(error)
    }
}


const count = async (parent: any, args: any, { dataSources: { swapi } }: any) => {
    try {
        let people = await swapi.searchPeople(args)
        return people.count
    } catch (error) {
        handleError(error)
    }
}



export { person, people, search, count }