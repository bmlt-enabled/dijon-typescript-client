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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RootServerCreate
 */
export interface RootServerCreate {
    /**
     * 
     * @type {string}
     * @memberof RootServerCreate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RootServerCreate
     */
    url: string;
}

/**
 * Check if a given object implements the RootServerCreate interface.
 */
export function instanceOfRootServerCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function RootServerCreateFromJSON(json: any): RootServerCreate {
    return RootServerCreateFromJSONTyped(json, false);
}

export function RootServerCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootServerCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'url': json['url'],
    };
}

export function RootServerCreateToJSON(value?: RootServerCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
    };
}

