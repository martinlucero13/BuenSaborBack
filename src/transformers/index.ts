import { ValueTransformer } from 'typeorm'

export const trimTransformer: ValueTransformer = {
    from: dbValue => dbValue?.trim(),
    to: entityValue => entityValue,
};
export const charToBoolean: ValueTransformer = {
    from: dbValue => dbValue === 'Y',
    to: entityValue => entityValue ? 'Y' : 'N',
};