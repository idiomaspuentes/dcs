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
 * The EditLabelOption model module.
 * @module model/EditLabelOption
 * @version 1.15.6a+dcs
 */
export class EditLabelOption {
  /**
   * Constructs a new <code>EditLabelOption</code>.
   * EditLabelOption options for editing a label
   * @alias module:model/EditLabelOption
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EditLabelOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditLabelOption} obj Optional instance to populate.
   * @return {module:model/EditLabelOption} The populated <code>EditLabelOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EditLabelOption();
      if (data.hasOwnProperty('color'))
        obj.color = ApiClient.convertToType(data['color'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} color
 */
EditLabelOption.prototype.color = undefined;

/**
 * @member {String} description
 */
EditLabelOption.prototype.description = undefined;

/**
 * @member {String} name
 */
EditLabelOption.prototype.name = undefined;

