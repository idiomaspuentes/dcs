/*
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.15.6a+dcs
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The FileLinksResponse model module.
 * @module model/FileLinksResponse
 * @version 1.15.6a+dcs
 */
export class FileLinksResponse {
  /**
   * Constructs a new <code>FileLinksResponse</code>.
   * FileLinksResponse contains the links for a repo&#x27;s file
   * @alias module:model/FileLinksResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FileLinksResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileLinksResponse} obj Optional instance to populate.
   * @return {module:model/FileLinksResponse} The populated <code>FileLinksResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FileLinksResponse();
      if (data.hasOwnProperty('git'))
        obj.git = ApiClient.convertToType(data['git'], 'String');
      if (data.hasOwnProperty('html'))
        obj.html = ApiClient.convertToType(data['html'], 'String');
      if (data.hasOwnProperty('self'))
        obj.self = ApiClient.convertToType(data['self'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} git
 */
FileLinksResponse.prototype.git = undefined;

/**
 * @member {String} html
 */
FileLinksResponse.prototype.html = undefined;

/**
 * @member {String} self
 */
FileLinksResponse.prototype.self = undefined;
