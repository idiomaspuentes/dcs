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
 * The Attachment model module.
 * @module model/Attachment
 * @version 1.15.6a+dcs
 */
export class Attachment {
  /**
   * Constructs a new <code>Attachment</code>.
   * Attachment a generic attachment
   * @alias module:model/Attachment
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Attachment} obj Optional instance to populate.
   * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Attachment();
      if (data.hasOwnProperty('browser_download_url'))
        obj.browserDownloadUrl = ApiClient.convertToType(data['browser_download_url'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('download_count'))
        obj.downloadCount = ApiClient.convertToType(data['download_count'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} browserDownloadUrl
 */
Attachment.prototype.browserDownloadUrl = undefined;

/**
 * @member {Date} createdAt
 */
Attachment.prototype.createdAt = undefined;

/**
 * @member {Number} downloadCount
 */
Attachment.prototype.downloadCount = undefined;

/**
 * @member {Number} id
 */
Attachment.prototype.id = undefined;

/**
 * @member {String} name
 */
Attachment.prototype.name = undefined;

/**
 * @member {Number} size
 */
Attachment.prototype.size = undefined;

/**
 * @member {String} uuid
 */
Attachment.prototype.uuid = undefined;

