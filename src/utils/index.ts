import moment, { Moment } from 'moment';
import { getMetadataArgsStorage, EntityTarget } from "typeorm";
import { ColumnMetadataArgs } from 'typeorm/metadata-args/ColumnMetadataArgs';

export function dateToJde(date: Date | Moment): string {
    let momentDate = null;
    if (date instanceof Date) {
        momentDate = moment(date);
    } else {
        momentDate = date;
    }
    const dayOfYear = momentDate.dayOfYear().toString().padStart(3, '0');
    const year = momentDate.format('YY');
    return `1${year}${dayOfYear}`;
}

export function chunkArray<Type>(arr: Type[], size: number): Type[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
}

function getParameters(columnsMetaData: ColumnMetadataArgs[], data: any, suffix: string) {
    return columnsMetaData.map(c => {

        const paramName = `${c.options.name}${suffix}`;
        let value = data[c.propertyName];
        if (c.options.type === Date) {
            value = new Date(value);
        }
        return {
            paramName,
            paramValue: value
        }
    })
}

export function getSQLInsert<T>(entityTarget: EntityTarget<T>, data: T, opts = { suffixParamName: '' }) {
    const { suffixParamName } = opts;
    const metadata = getMetadataArgsStorage();
    const columnsMetaData = metadata.columns.filter(c => c.target === entityTarget);
    const tableMetaData = metadata.tables.find(t => t.target === entityTarget);
    const tableName = `"${tableMetaData?.schema}"."${tableMetaData?.name}"`
    const columns = columnsMetaData.map(c => {
        return {
            name: c.options.name,
            propertyName: c.propertyName
        }
    });
    const colStr = columns.map(c => `"${c.name}"`).join(',');
    const values = columns.map(c => `:${c.name}${suffixParamName}`).join(',');
    let query = `INSERT INTO ${tableName} (${colStr}) VALUES (${values})`;
    const parameters = getParameters(columnsMetaData, data, suffixParamName);
    return {
        query,
        parameters
    }
}


export function groupBy(objectArray: Array<any>, property: string) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        // Add object to list for given key's value
        acc[key].push(obj);
        return acc;
    }, {});
}