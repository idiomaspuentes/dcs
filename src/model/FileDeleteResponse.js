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
import {FileCommitResponse} from './FileCommitResponse';
import {PayloadCommitVerification} from './PayloadCommitVerification';

/**
 * The FileDeleteResponse model module.
 * @module model/FileDeleteResponse
 * @version 1.15.6a+dcs
 */
export class FileDeleteResponse {
  /**
   * Constructs a new <code>FileDeleteResponse</code>.
   * FileDeleteResponse contains information about a repo&#x27;s file that was deleted
   * @alias module:model/FileDeleteResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FileDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FileDeleteResponse} obj Optional instance to populate.
   * @return {module:model/FileDeleteResponse} The populated <code>FileDeleteResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FileDeleteResponse();
      if (data.hasOwnProperty('commit'))
        obj.commit = FileCommitResponse.constructFromObject(data['commit']);
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], Object);
      if (data.hasOwnProperty('verification'))
        obj.verification = PayloadCommitVerification.constructFromObject(data['verification']);
    }
    return obj;
  }
}

/**
 * @member {module:model/FileCommitResponse} commit
 */
FileDeleteResponse.prototype.commit = undefined;

/**
 * @member {Object} content
 */
FileDeleteResponse.prototype.content = undefined;

/**
 * @member {module:model/PayloadCommitVerification} verification
 */
FileDeleteResponse.prototype.verification = undefined;

