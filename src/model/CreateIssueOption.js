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
 * The CreateIssueOption model module.
 * @module model/CreateIssueOption
 * @version 1.15.6a+dcs
 */
export class CreateIssueOption {
  /**
   * Constructs a new <code>CreateIssueOption</code>.
   * CreateIssueOption options to create one issue
   * @alias module:model/CreateIssueOption
   * @class
   * @param title {String} 
   */
  constructor(title) {
    this.title = title;
  }

  /**
   * Constructs a <code>CreateIssueOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateIssueOption} obj Optional instance to populate.
   * @return {module:model/CreateIssueOption} The populated <code>CreateIssueOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateIssueOption();
      if (data.hasOwnProperty('assignee'))
        obj.assignee = ApiClient.convertToType(data['assignee'], 'String');
      if (data.hasOwnProperty('assignees'))
        obj.assignees = ApiClient.convertToType(data['assignees'], ['String']);
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('closed'))
        obj.closed = ApiClient.convertToType(data['closed'], 'Boolean');
      if (data.hasOwnProperty('due_date'))
        obj.dueDate = ApiClient.convertToType(data['due_date'], 'Date');
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], ['Number']);
      if (data.hasOwnProperty('milestone'))
        obj.milestone = ApiClient.convertToType(data['milestone'], 'Number');
      if (data.hasOwnProperty('ref'))
        obj.ref = ApiClient.convertToType(data['ref'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
    }
    return obj;
  }
}

/**
 * deprecated
 * @member {String} assignee
 */
CreateIssueOption.prototype.assignee = undefined;

/**
 * @member {Array.<String>} assignees
 */
CreateIssueOption.prototype.assignees = undefined;

/**
 * @member {String} body
 */
CreateIssueOption.prototype.body = undefined;

/**
 * @member {Boolean} closed
 */
CreateIssueOption.prototype.closed = undefined;

/**
 * @member {Date} dueDate
 */
CreateIssueOption.prototype.dueDate = undefined;

/**
 * list of label ids
 * @member {Array.<Number>} labels
 */
CreateIssueOption.prototype.labels = undefined;

/**
 * milestone id
 * @member {Number} milestone
 */
CreateIssueOption.prototype.milestone = undefined;

/**
 * @member {String} ref
 */
CreateIssueOption.prototype.ref = undefined;

/**
 * @member {String} title
 */
CreateIssueOption.prototype.title = undefined;

