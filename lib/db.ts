import pgPromise from 'pg-promise'
import { IInitOptions, IDatabase, IMain } from 'pg-promise';

import createSingleton from 'lib/singleton'
import dbConfig from 'lib/db-config'

const initOptions: IInitOptions = {
  schema: process.env.PGSQL_SCHEMA
}

const pgp: IMain = pgPromise(initOptions)

interface IDatabaseScope {
  db: IDatabase<any>
  pgp: IMain
}

function getDB(): IDatabaseScope {
  console.log('Attempting to connect to db....')

  return createSingleton<IDatabaseScope>('bip-db', () => ({
    db: pgp(dbConfig),
    pgp,
  }))
}

export default getDB
