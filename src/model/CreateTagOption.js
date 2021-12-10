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
 * The CreateTagOption model module.
 * @module model/CreateTagOption
 * @version 1.15.6a+dcs
 */
export class CreateTagOption {
  /**
   * Constructs a new <code>CreateTagOption</code>.
   * CreateTagOption options when creating a tag
   * @alias module:model/CreateTagOption
   * @class
   * @param tagName {String} 
   */
  constructor(tagName) {
    this.tagName = tagName;
  }

  /**
   * Constructs a <code>CreateTagOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTagOption} obj Optional instance to populate.
   * @return {module:model/CreateTagOption} The populated <code>CreateTagOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTagOption();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('tag_name'))
        obj.tagName = ApiClient.convertToType(data['tag_name'], 'String');
      if (data.hasOwnProperty('target'))
        obj.target = ApiClient.convertToType(data['target'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} message
 */
CreateTagOption.prototype.message = undefined;

/**
 * @member {String} tagName
 */
CreateTagOption.prototype.tagName = undefined;

/**
 * @member {String} target
 */
CreateTagOption.prototype.target = undefined;

