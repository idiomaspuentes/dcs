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
 * The PullReviewComment model module.
 * @module model/PullReviewComment
 * @version 1.15.6a+dcs
 */
export class PullReviewComment {
  /**
   * Constructs a new <code>PullReviewComment</code>.
   * PullReviewComment represents a comment on a pull request review
   * @alias module:model/PullReviewComment
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PullReviewComment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PullReviewComment} obj Optional instance to populate.
   * @return {module:model/PullReviewComment} The populated <code>PullReviewComment</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PullReviewComment();
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('commit_id'))
        obj.commitId = ApiClient.convertToType(data['commit_id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('diff_hunk'))
        obj.diffHunk = ApiClient.convertToType(data['diff_hunk'], 'String');
      if (data.hasOwnProperty('html_url'))
        obj.htmlUrl = ApiClient.convertToType(data['html_url'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('original_commit_id'))
        obj.originalCommitId = ApiClient.convertToType(data['original_commit_id'], 'String');
      if (data.hasOwnProperty('original_position'))
        obj.originalPosition = ApiClient.convertToType(data['original_position'], 'Number');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'Number');
      if (data.hasOwnProperty('pull_request_review_id'))
        obj.pullRequestReviewId = ApiClient.convertToType(data['pull_request_review_id'], 'Number');
      if (data.hasOwnProperty('pull_request_url'))
        obj.pullRequestUrl = ApiClient.convertToType(data['pull_request_url'], 'String');
      if (data.hasOwnProperty('resolver'))
        obj.resolver = User.constructFromObject(data['resolver']);
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * @member {String} body
 */
PullReviewComment.prototype.body = undefined;

/**
 * @member {String} commitId
 */
PullReviewComment.prototype.commitId = undefined;

/**
 * @member {Date} createdAt
 */
PullReviewComment.prototype.createdAt = undefined;

/**
 * @member {String} diffHunk
 */
PullReviewComment.prototype.diffHunk = undefined;

/**
 * @member {String} htmlUrl
 */
PullReviewComment.prototype.htmlUrl = undefined;

/**
 * @member {Number} id
 */
PullReviewComment.prototype.id = undefined;

/**
 * @member {String} originalCommitId
 */
PullReviewComment.prototype.originalCommitId = undefined;

/**
 * @member {Number} originalPosition
 */
PullReviewComment.prototype.originalPosition = undefined;

/**
 * @member {String} path
 */
PullReviewComment.prototype.path = undefined;

/**
 * @member {Number} position
 */
PullReviewComment.prototype.position = undefined;

/**
 * @member {Number} pullRequestReviewId
 */
PullReviewComment.prototype.pullRequestReviewId = undefined;

/**
 * @member {String} pullRequestUrl
 */
PullReviewComment.prototype.pullRequestUrl = undefined;

/**
 * @member {module:model/User} resolver
 */
PullReviewComment.prototype.resolver = undefined;

/**
 * @member {Date} updatedAt
 */
PullReviewComment.prototype.updatedAt = undefined;

/**
 * @member {module:model/User} user
 */
PullReviewComment.prototype.user = undefined;
