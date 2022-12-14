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
 * @interface RootServer
 */
export interface RootServer {
    /**
     * 
     * @type {string}
     * @memberof RootServer
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RootServer
     */
    url: string;
    /**
     * 
     * @type {boolean}
     * @memberof RootServer
     */
    isEnabled: boolean;
    /**
     * 
     * @type {number}
     * @memberof RootServer
     */
    id: number;
}

/**
 * Check if a given object implements the RootServer interface.
 */
export function instanceOfRootServer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "isEnabled" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function RootServerFromJSON(json: any): RootServer {
    return RootServerFromJSONTyped(json, false);
}

export function RootServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootServer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'url': json['url'],
        'isEnabled': json['is_enabled'],
        'id': json['id'],
    };
}

export function RootServerToJSON(value?: RootServer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
        'is_enabled': value.isEnabled,
        'id': value.id,
    };
}

