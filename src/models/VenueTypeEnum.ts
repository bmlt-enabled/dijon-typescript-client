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
export const VenueTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type VenueTypeEnum = typeof VenueTypeEnum[keyof typeof VenueTypeEnum];


export function VenueTypeEnumFromJSON(json: any): VenueTypeEnum {
    return VenueTypeEnumFromJSONTyped(json, false);
}

export function VenueTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): VenueTypeEnum {
    return json as VenueTypeEnum;
}

export function VenueTypeEnumToJSON(value?: VenueTypeEnum | null): any {
    return value as any;
}

