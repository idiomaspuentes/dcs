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
 * The EditAttachmentOptions model module.
 * @module model/EditAttachmentOptions
 * @version 1.15.6a+dcs
 */
export class EditAttachmentOptions {
  /**
   * Constructs a new <code>EditAttachmentOptions</code>.
   * EditAttachmentOptions options for editing attachments
   * @alias module:model/EditAttachmentOptions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EditAttachmentOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditAttachmentOptions} obj Optional instance to populate.
   * @return {module:model/EditAttachmentOptions} The populated <code>EditAttachmentOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EditAttachmentOptions();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
EditAttachmentOptions.prototype.name = undefined;

