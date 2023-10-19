// place files you want to import through the `$lib` alias in this folder.
import { PrismaClient as PrismaSQL } from '../../prisma/generated/sql'
import { PrismaClient as PrismaMongo } from '../../prisma/generated/mongo'

export const sqlServer = new PrismaSQL({
    log: [
        {
            emit: "event",
            level: "query",
        },
        'info', 'warn', 'error'
    ],
})

sqlServer.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});

export const mongoDB = new PrismaMongo({
    log: [
        {
            emit: "event",
            level: "query",
        },
        'info', 'warn', 'error'
    ],
})

sqlServer.$on("query", async (e) => {
    console.log(`${e.query} ${e.params}`)
});