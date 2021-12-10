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
import {Issue} from './Issue';

/**
 * The TrackedTime model module.
 * @module model/TrackedTime
 * @version 1.15.6a+dcs
 */
export class TrackedTime {
  /**
   * Constructs a new <code>TrackedTime</code>.
   * TrackedTime worked time for an issue / pr
   * @alias module:model/TrackedTime
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackedTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackedTime} obj Optional instance to populate.
   * @return {module:model/TrackedTime} The populated <code>TrackedTime</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackedTime();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('issue'))
        obj.issue = Issue.constructFromObject(data['issue']);
      if (data.hasOwnProperty('issue_id'))
        obj.issueId = ApiClient.convertToType(data['issue_id'], 'Number');
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
      if (data.hasOwnProperty('user_id'))
        obj.userId = ApiClient.convertToType(data['user_id'], 'Number');
      if (data.hasOwnProperty('user_name'))
        obj.userName = ApiClient.convertToType(data['user_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Date} created
 */
TrackedTime.prototype.created = undefined;

/**
 * @member {Number} id
 */
TrackedTime.prototype.id = undefined;

/**
 * @member {module:model/Issue} issue
 */
TrackedTime.prototype.issue = undefined;

/**
 * deprecated (only for backwards compatibility)
 * @member {Number} issueId
 */
TrackedTime.prototype.issueId = undefined;

/**
 * Time in seconds
 * @member {Number} time
 */
TrackedTime.prototype.time = undefined;

/**
 * deprecated (only for backwards compatibility)
 * @member {Number} userId
 */
TrackedTime.prototype.userId = undefined;

/**
 * @member {String} userName
 */
TrackedTime.prototype.userName = undefined;
