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
 * The EditIssueOption model module.
 * @module model/EditIssueOption
 * @version 1.15.6a+dcs
 */
export class EditIssueOption {
  /**
   * Constructs a new <code>EditIssueOption</code>.
   * EditIssueOption options for editing an issue
   * @alias module:model/EditIssueOption
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EditIssueOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditIssueOption} obj Optional instance to populate.
   * @return {module:model/EditIssueOption} The populated <code>EditIssueOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EditIssueOption();
      if (data.hasOwnProperty('assignee'))
        obj.assignee = ApiClient.convertToType(data['assignee'], 'String');
      if (data.hasOwnProperty('assignees'))
        obj.assignees = ApiClient.convertToType(data['assignees'], ['String']);
      if (data.hasOwnProperty('body'))
        obj.body = ApiClient.convertToType(data['body'], 'String');
      if (data.hasOwnProperty('due_date'))
        obj.dueDate = ApiClient.convertToType(data['due_date'], 'Date');
      if (data.hasOwnProperty('milestone'))
        obj.milestone = ApiClient.convertToType(data['milestone'], 'Number');
      if (data.hasOwnProperty('ref'))
        obj.ref = ApiClient.convertToType(data['ref'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('unset_due_date'))
        obj.unsetDueDate = ApiClient.convertToType(data['unset_due_date'], 'Boolean');
    }
    return obj;
  }
}

/**
 * deprecated
 * @member {String} assignee
 */
EditIssueOption.prototype.assignee = undefined;

/**
 * @member {Array.<String>} assignees
 */
EditIssueOption.prototype.assignees = undefined;

/**
 * @member {String} body
 */
EditIssueOption.prototype.body = undefined;

/**
 * @member {Date} dueDate
 */
EditIssueOption.prototype.dueDate = undefined;

/**
 * @member {Number} milestone
 */
EditIssueOption.prototype.milestone = undefined;

/**
 * @member {String} ref
 */
EditIssueOption.prototype.ref = undefined;

/**
 * @member {String} state
 */
EditIssueOption.prototype.state = undefined;

/**
 * @member {String} title
 */
EditIssueOption.prototype.title = undefined;

/**
 * @member {Boolean} unsetDueDate
 */
EditIssueOption.prototype.unsetDueDate = undefined;

