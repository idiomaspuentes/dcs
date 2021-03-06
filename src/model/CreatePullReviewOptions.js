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
import {CreatePullReviewComment} from './CreatePullReviewComment';
import {ReviewStateType} from './ReviewStateType';

/**
 * The CreatePullReviewOptions model module.
 * @module model/CreatePullReviewOptions
 * @version 1.15.6a+dcs
 */
export class CreatePullReviewOptions {
  /**
   * Constructs a new <code>CreatePullReviewOptions</code>.
   * CreatePullReviewOptions are options to create a pull review
   * @alias module:model/CreatePullReviewOptions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreatePullReviewOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePullReviewOptions} obj Optional instance to populate.
   * @return {module:model/CreatePullReviewOptions} The populated <code>CreatePullReviewOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreatePullReviewOptions();
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('comments'))
        obj.comments = ApiClient.convertToType(data['comments'], [CreatePullReviewComment]);
      if (data.hasOwnProperty('commit_id'))
        obj.commitId = ApiClient.convertToType(data['commit_id'], 'String');
      if (data.hasOwnProperty('event'))
        obj.event = ReviewStateType.constructFromObject(data['event']);
    }
    return obj;
  }
}

/**
 * @member {String} body
 */
CreatePullReviewOptions.prototype.body = undefined;

/**
 * @member {Array.<module:model/CreatePullReviewComment>} comments
 */
CreatePullReviewOptions.prototype.comments = undefined;

/**
 * @member {String} commitId
 */
CreatePullReviewOptions.prototype.commitId = undefined;

/**
 * @member {module:model/ReviewStateType} event
 */
CreatePullReviewOptions.prototype.event = undefined;

