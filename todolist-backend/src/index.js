const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding')

const resolvers = {
 Query: {
        info: () => `This is the API of a Hackernews Clone`,
        todoes: (root, args, context, info) => {
            return context.db.query.todoes({}, info)
        } 
 },
 Mutation: {
     addTodo: (root, args, context, info) => {
         return context.db.mutation.createtodo({
             data: {
                description: args.description,
                isCompleted: args.isCompleted
             },
        }, info)
     }
 }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    resolverValidationOptions :{
        requireResolversForResolveType: false
    },
    context: req => ({
            ...req,
            db: new Prisma({
            typeDefs: 'src/generated/prisma.graphql',
            endpoint: 'https://todolist-server-acc0d23815.herokuapp.com/list/dev',
            secret: process.env.TODOKEY,
            debug: true
        }),
    }),
})

server.start({
"cors": {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
},
"port": process.env.PORT || 4000
},() => console.log("server"))