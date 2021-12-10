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
 * The Email model module.
 * @module model/Email
 * @version 1.15.6a+dcs
 */
export class Email {
  /**
   * Constructs a new <code>Email</code>.
   * Email an email address belonging to a user
   * @alias module:model/Email
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Email</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Email} obj Optional instance to populate.
   * @return {module:model/Email} The populated <code>Email</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Email();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('primary'))
        obj.primary = ApiClient.convertToType(data['primary'], 'Boolean');
      if (data.hasOwnProperty('verified'))
        obj.verified = ApiClient.convertToType(data['verified'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
Email.prototype.email = undefined;

/**
 * @member {Boolean} primary
 */
Email.prototype.primary = undefined;

/**
 * @member {Boolean} verified
 */
Email.prototype.verified = undefined;

