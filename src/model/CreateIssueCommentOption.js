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
 * The CreateIssueCommentOption model module.
 * @module model/CreateIssueCommentOption
 * @version 1.15.6a+dcs
 */
export class CreateIssueCommentOption {
  /**
   * Constructs a new <code>CreateIssueCommentOption</code>.
   * CreateIssueCommentOption options for creating a comment on an issue
   * @alias module:model/CreateIssueCommentOption
   * @class
   * @param body {String} 
   */
  constructor(body) {
    this.body = body;
  }

  /**
   * Constructs a <code>CreateIssueCommentOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateIssueCommentOption} obj Optional instance to populate.
   * @return {module:model/CreateIssueCommentOption} The populated <code>CreateIssueCommentOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateIssueCommentOption();
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} body
 */
CreateIssueCommentOption.prototype.body = undefined;

