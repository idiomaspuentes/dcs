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
 * The IdAssetsBody model module.
 * @module model/IdAssetsBody
 * @version 1.15.6a+dcs
 */
export class IdAssetsBody {
  /**
   * Constructs a new <code>IdAssetsBody</code>.
   * @alias module:model/IdAssetsBody
   * @class
   * @param attachment {Blob} attachment to upload
   */
  constructor(attachment) {
    this.attachment = attachment;
  }

  /**
   * Constructs a <code>IdAssetsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdAssetsBody} obj Optional instance to populate.
   * @return {module:model/IdAssetsBody} The populated <code>IdAssetsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdAssetsBody();
      if (data.hasOwnProperty('attachment'))
        obj.attachment = ApiClient.convertToType(data['attachment'], 'Blob');
    }
    return obj;
  }
}

/**
 * attachment to upload
 * @member {Blob} attachment
 */
IdAssetsBody.prototype.attachment = undefined;
