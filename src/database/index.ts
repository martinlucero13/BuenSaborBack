import "reflect-metadata";
import { createConnections } from "typeorm";
import { legacyConnection } from "./legacy";


export async function initDatabaseConnections() {
  return createConnections([
    legacyConnection,
  ]);
}
