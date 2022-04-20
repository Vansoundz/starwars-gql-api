import { person, people, search, count } from "$res/person";
import { planet } from "$res/planet";

const resolvers = {
    Query: {
        // People
        people,
        person,
        search,
        count
    },

    Person: {
        homeworld: planet
    }
};

export default resolvers