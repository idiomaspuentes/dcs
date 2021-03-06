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
import {Repository} from './Repository';

/**
 * The DeployKey model module.
 * @module model/DeployKey
 * @version 1.15.6a+dcs
 */
export class DeployKey {
  /**
   * Constructs a new <code>DeployKey</code>.
   * DeployKey a deploy key
   * @alias module:model/DeployKey
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DeployKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeployKey} obj Optional instance to populate.
   * @return {module:model/DeployKey} The populated <code>DeployKey</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeployKey();
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('fingerprint'))
        obj.fingerprint = ApiClient.convertToType(data['fingerprint'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('key_id'))
        obj.keyId = ApiClient.convertToType(data['key_id'], 'Number');
      if (data.hasOwnProperty('read_only'))
        obj.readOnly = ApiClient.convertToType(data['read_only'], 'Boolean');
      if (data.hasOwnProperty('repository'))
        obj.repository = Repository.constructFromObject(data['repository']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
DeployKey.prototype.createdAt = undefined;

/**
 * @member {String} fingerprint
 */
DeployKey.prototype.fingerprint = undefined;

/**
 * @member {Number} id
 */
DeployKey.prototype.id = undefined;

/**
 * @member {String} key
 */
DeployKey.prototype.key = undefined;

/**
 * @member {Number} keyId
 */
DeployKey.prototype.keyId = undefined;

/**
 * @member {Boolean} readOnly
 */
DeployKey.prototype.readOnly = undefined;

/**
 * @member {module:model/Repository} repository
 */
DeployKey.prototype.repository = undefined;

/**
 * @member {String} title
 */
DeployKey.prototype.title = undefined;

/**
 * @member {String} url
 */
DeployKey.prototype.url = undefined;

