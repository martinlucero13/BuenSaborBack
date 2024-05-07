import { ConnectionOptions } from "typeorm";
import { models } from "../models/Legacy";
import { databaseOptions } from "../config";
const { connections: { legacy } } = databaseOptions;

export const legacyConnection: ConnectionOptions = {
    name: legacy.name,
    type: "mysql",
    //host: legacy.db_host,
    username: legacy.db_user,
    password: legacy.db_pass,
    database: legacy.db_name,
    port: Number(legacy.db_port),
    //schema: legacy.db_schema,
    /*options: {
        encrypt: false
    },*/
    entities: [...models]
}