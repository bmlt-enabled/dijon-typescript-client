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
 * @interface ServiceBody
 */
export interface ServiceBody {
    /**
     * 
     * @type {number}
     * @memberof ServiceBody
     */
    bmltId: number;
    /**
     * 
     * @type {number}
     * @memberof ServiceBody
     */
    parentBmltId: number;
    /**
     * 
     * @type {string}
     * @memberof ServiceBody
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBody
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBody
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBody
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBody
     */
    helpline: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBody
     */
    worldId: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceBody
     */
    nawsCodeOverride: string;
}

/**
 * Check if a given object implements the ServiceBody interface.
 */
export function instanceOfServiceBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bmltId" in value;
    isInstance = isInstance && "parentBmltId" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "helpline" in value;
    isInstance = isInstance && "worldId" in value;
    isInstance = isInstance && "nawsCodeOverride" in value;

    return isInstance;
}

export function ServiceBodyFromJSON(json: any): ServiceBody {
    return ServiceBodyFromJSONTyped(json, false);
}

export function ServiceBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bmltId': json['bmlt_id'],
        'parentBmltId': json['parent_bmlt_id'],
        'name': json['name'],
        'type': json['type'],
        'description': json['description'],
        'url': json['url'],
        'helpline': json['helpline'],
        'worldId': json['world_id'],
        'nawsCodeOverride': json['naws_code_override'],
    };
}

export function ServiceBodyToJSON(value?: ServiceBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bmlt_id': value.bmltId,
        'parent_bmlt_id': value.parentBmltId,
        'name': value.name,
        'type': value.type,
        'description': value.description,
        'url': value.url,
        'helpline': value.helpline,
        'world_id': value.worldId,
        'naws_code_override': value.nawsCodeOverride,
    };
}
