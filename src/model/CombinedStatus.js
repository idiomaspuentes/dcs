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
import {CommitStatus} from './CommitStatus';
import {CommitStatusState} from './CommitStatusState';
import {Repository} from './Repository';

/**
 * The CombinedStatus model module.
 * @module model/CombinedStatus
 * @version 1.15.6a+dcs
 */
export class CombinedStatus {
  /**
   * Constructs a new <code>CombinedStatus</code>.
   * CombinedStatus holds the combined state of several statuses for a single commit
   * @alias module:model/CombinedStatus
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CombinedStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinedStatus} obj Optional instance to populate.
   * @return {module:model/CombinedStatus} The populated <code>CombinedStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CombinedStatus();
      if (data.hasOwnProperty('commit_url'))
        obj.commitUrl = ApiClient.convertToType(data['commit_url'], 'String');
      if (data.hasOwnProperty('repository'))
        obj.repository = Repository.constructFromObject(data['repository']);
      if (data.hasOwnProperty('sha'))
        obj.sha = ApiClient.convertToType(data['sha'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = CommitStatusState.constructFromObject(data['state']);
      if (data.hasOwnProperty('statuses'))
        obj.statuses = ApiClient.convertToType(data['statuses'], [CommitStatus]);
      if (data.hasOwnProperty('total_count'))
        obj.totalCount = ApiClient.convertToType(data['total_count'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} commitUrl
 */
CombinedStatus.prototype.commitUrl = undefined;

/**
 * @member {module:model/Repository} repository
 */
CombinedStatus.prototype.repository = undefined;

/**
 * @member {String} sha
 */
CombinedStatus.prototype.sha = undefined;

/**
 * @member {module:model/CommitStatusState} state
 */
CombinedStatus.prototype.state = undefined;

/**
 * @member {Array.<module:model/CommitStatus>} statuses
 */
CombinedStatus.prototype.statuses = undefined;

/**
 * @member {Number} totalCount
 */
CombinedStatus.prototype.totalCount = undefined;

/**
 * @member {String} url
 */
CombinedStatus.prototype.url = undefined;
