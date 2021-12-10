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
 * The WatchInfo model module.
 * @module model/WatchInfo
 * @version 1.15.6a+dcs
 */
export class WatchInfo {
  /**
   * Constructs a new <code>WatchInfo</code>.
   * WatchInfo represents an API watch status of one repository
   * @alias module:model/WatchInfo
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>WatchInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WatchInfo} obj Optional instance to populate.
   * @return {module:model/WatchInfo} The populated <code>WatchInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WatchInfo();
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('ignored'))
        obj.ignored = ApiClient.convertToType(data['ignored'], 'Boolean');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], Object);
      if (data.hasOwnProperty('repository_url'))
        obj.repositoryUrl = ApiClient.convertToType(data['repository_url'], 'String');
      if (data.hasOwnProperty('subscribed'))
        obj.subscribed = ApiClient.convertToType(data['subscribed'], 'Boolean');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
WatchInfo.prototype.createdAt = undefined;

/**
 * @member {Boolean} ignored
 */
WatchInfo.prototype.ignored = undefined;

/**
 * @member {Object} reason
 */
WatchInfo.prototype.reason = undefined;

/**
 * @member {String} repositoryUrl
 */
WatchInfo.prototype.repositoryUrl = undefined;

/**
 * @member {Boolean} subscribed
 */
WatchInfo.prototype.subscribed = undefined;

/**
 * @member {String} url
 */
WatchInfo.prototype.url = undefined;

