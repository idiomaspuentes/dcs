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
import {ReviewStateType} from './ReviewStateType';
import {Team} from './Team';
import {User} from './User';

/**
 * The PullReview model module.
 * @module model/PullReview
 * @version 1.15.6a+dcs
 */
export class PullReview {
  /**
   * Constructs a new <code>PullReview</code>.
   * PullReview represents a pull request review
   * @alias module:model/PullReview
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PullReview</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PullReview} obj Optional instance to populate.
   * @return {module:model/PullReview} The populated <code>PullReview</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PullReview();
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('comments_count'))
        obj.commentsCount = ApiClient.convertToType(data['comments_count'], 'Number');
      if (data.hasOwnProperty('commit_id'))
        obj.commitId = ApiClient.convertToType(data['commit_id'], 'String');
      if (data.hasOwnProperty('dismissed'))
        obj.dismissed = ApiClient.convertToType(data['dismissed'], 'Boolean');
      if (data.hasOwnProperty('html_url'))
        obj.htmlUrl = ApiClient.convertToType(data['html_url'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('official'))
        obj.official = ApiClient.convertToType(data['official'], 'Boolean');
      if (data.hasOwnProperty('pull_request_url'))
        obj.pullRequestUrl = ApiClient.convertToType(data['pull_request_url'], 'String');
      if (data.hasOwnProperty('stale'))
        obj.stale = ApiClient.convertToType(data['stale'], 'Boolean');
      if (data.hasOwnProperty('state'))
        obj.state = ReviewStateType.constructFromObject(data['state']);
      if (data.hasOwnProperty('submitted_at'))
        obj.submittedAt = ApiClient.convertToType(data['submitted_at'], 'Date');
      if (data.hasOwnProperty('team'))
        obj.team = Team.constructFromObject(data['team']);
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * @member {String} body
 */
PullReview.prototype.body = undefined;

/**
 * @member {Number} commentsCount
 */
PullReview.prototype.commentsCount = undefined;

/**
 * @member {String} commitId
 */
PullReview.prototype.commitId = undefined;

/**
 * @member {Boolean} dismissed
 */
PullReview.prototype.dismissed = undefined;

/**
 * @member {String} htmlUrl
 */
PullReview.prototype.htmlUrl = undefined;

/**
 * @member {Number} id
 */
PullReview.prototype.id = undefined;

/**
 * @member {Boolean} official
 */
PullReview.prototype.official = undefined;

/**
 * @member {String} pullRequestUrl
 */
PullReview.prototype.pullRequestUrl = undefined;

/**
 * @member {Boolean} stale
 */
PullReview.prototype.stale = undefined;

/**
 * @member {module:model/ReviewStateType} state
 */
PullReview.prototype.state = undefined;

/**
 * @member {Date} submittedAt
 */
PullReview.prototype.submittedAt = undefined;

/**
 * @member {module:model/Team} team
 */
PullReview.prototype.team = undefined;

/**
 * @member {module:model/User} user
 */
PullReview.prototype.user = undefined;

