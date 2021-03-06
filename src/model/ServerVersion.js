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
 * The ServerVersion model module.
 * @module model/ServerVersion
 * @version 1.15.6a+dcs
 */
export class ServerVersion {
  /**
   * Constructs a new <code>ServerVersion</code>.
   * ServerVersion wraps the version of the server
   * @alias module:model/ServerVersion
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ServerVersion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServerVersion} obj Optional instance to populate.
   * @return {module:model/ServerVersion} The populated <code>ServerVersion</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ServerVersion();
      if (data.hasOwnProperty('version'))
        obj.version = ApiClient.convertToType(data['version'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} version
 */
ServerVersion.prototype.version = undefined;

