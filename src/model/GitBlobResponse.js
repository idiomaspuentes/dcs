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
 * The GitBlobResponse model module.
 * @module model/GitBlobResponse
 * @version 1.15.6a+dcs
 */
export class GitBlobResponse {
  /**
   * Constructs a new <code>GitBlobResponse</code>.
   * GitBlobResponse represents a git blob
   * @alias module:model/GitBlobResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GitBlobResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GitBlobResponse} obj Optional instance to populate.
   * @return {module:model/GitBlobResponse} The populated <code>GitBlobResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GitBlobResponse();
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('encoding'))
        obj.encoding = ApiClient.convertToType(data['encoding'], 'String');
      if (data.hasOwnProperty('sha'))
        obj.sha = ApiClient.convertToType(data['sha'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} content
 */
GitBlobResponse.prototype.content = undefined;

/**
 * @member {String} encoding
 */
GitBlobResponse.prototype.encoding = undefined;

/**
 * @member {String} sha
 */
GitBlobResponse.prototype.sha = undefined;

/**
 * @member {Number} size
 */
GitBlobResponse.prototype.size = undefined;

/**
 * @member {String} url
 */
GitBlobResponse.prototype.url = undefined;

