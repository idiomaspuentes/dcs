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
 * The IssueLabelsOption model module.
 * @module model/IssueLabelsOption
 * @version 1.15.6a+dcs
 */
export class IssueLabelsOption {
  /**
   * Constructs a new <code>IssueLabelsOption</code>.
   * IssueLabelsOption a collection of labels
   * @alias module:model/IssueLabelsOption
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IssueLabelsOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueLabelsOption} obj Optional instance to populate.
   * @return {module:model/IssueLabelsOption} The populated <code>IssueLabelsOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IssueLabelsOption();
      if (data.hasOwnProperty('labels'))
        obj.labels = ApiClient.convertToType(data['labels'], ['Number']);
    }
    return obj;
  }
}

/**
 * list of label IDs
 * @member {Array.<Number>} labels
 */
IssueLabelsOption.prototype.labels = undefined;

