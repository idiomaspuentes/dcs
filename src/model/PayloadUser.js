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
 * The PayloadUser model module.
 * @module model/PayloadUser
 * @version 1.15.6a+dcs
 */
export class PayloadUser {
  /**
   * Constructs a new <code>PayloadUser</code>.
   * PayloadUser represents the author or committer of a commit
   * @alias module:model/PayloadUser
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PayloadUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PayloadUser} obj Optional instance to populate.
   * @return {module:model/PayloadUser} The populated <code>PayloadUser</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PayloadUser();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
PayloadUser.prototype.email = undefined;

/**
 * Full name of the commit author
 * @member {String} name
 */
PayloadUser.prototype.name = undefined;

/**
 * @member {String} username
 */
PayloadUser.prototype.username = undefined;
