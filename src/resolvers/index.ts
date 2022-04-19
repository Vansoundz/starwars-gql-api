import { person, people, search, count } from "$res/person";

const resolvers = {
    Query: {
        // People
        people,
        person,
        search,
        count
    },
};

export default resolvers