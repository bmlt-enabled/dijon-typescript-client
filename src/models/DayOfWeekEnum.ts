/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * An enumeration.
 * @export
 */
export const DayOfWeekEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7
} as const;
export type DayOfWeekEnum = typeof DayOfWeekEnum[keyof typeof DayOfWeekEnum];


export function DayOfWeekEnumFromJSON(json: any): DayOfWeekEnum {
    return DayOfWeekEnumFromJSONTyped(json, false);
}

export function DayOfWeekEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): DayOfWeekEnum {
    return json as DayOfWeekEnum;
}

export function DayOfWeekEnumToJSON(value?: DayOfWeekEnum | null): any {
    return value as any;
}

