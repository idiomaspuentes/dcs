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
import {User} from './User';

/**
 * The PublicKey model module.
 * @module model/PublicKey
 * @version 1.15.6a+dcs
 */
export class PublicKey {
  /**
   * Constructs a new <code>PublicKey</code>.
   * PublicKey publickey is a user key to push code to repository
   * @alias module:model/PublicKey
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PublicKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublicKey} obj Optional instance to populate.
   * @return {module:model/PublicKey} The populated <code>PublicKey</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PublicKey();
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('fingerprint'))
        obj.fingerprint = ApiClient.convertToType(data['fingerprint'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('key_type'))
        obj.keyType = ApiClient.convertToType(data['key_type'], 'String');
      if (data.hasOwnProperty('read_only'))
        obj.readOnly = ApiClient.convertToType(data['read_only'], 'Boolean');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PublicKey.prototype.createdAt = undefined;

/**
 * @member {String} fingerprint
 */
PublicKey.prototype.fingerprint = undefined;

/**
 * @member {Number} id
 */
PublicKey.prototype.id = undefined;

/**
 * @member {String} key
 */
PublicKey.prototype.key = undefined;

/**
 * @member {String} keyType
 */
PublicKey.prototype.keyType = undefined;

/**
 * @member {Boolean} readOnly
 */
PublicKey.prototype.readOnly = undefined;

/**
 * @member {String} title
 */
PublicKey.prototype.title = undefined;

/**
 * @member {String} url
 */
PublicKey.prototype.url = undefined;

/**
 * @member {module:model/User} user
 */
PublicKey.prototype.user = undefined;

