import { getConnection } from "typeorm";
import { databaseOptions } from "../config";
const legacyConnectionName = databaseOptions.connections.legacy.name;

export enum DatabasesEnum {
  LEGACY = "LEGACY",
}

export function getDBConnection(db: DatabasesEnum) {
  if (db === DatabasesEnum.LEGACY) return getConnection(legacyConnectionName);
  return getConnection();
}
