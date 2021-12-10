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
 * The CommitAffectedFiles model module.
 * @module model/CommitAffectedFiles
 * @version 1.15.6a+dcs
 */
export class CommitAffectedFiles {
  /**
   * Constructs a new <code>CommitAffectedFiles</code>.
   * CommitAffectedFiles store information about files affected by the commit
   * @alias module:model/CommitAffectedFiles
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CommitAffectedFiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommitAffectedFiles} obj Optional instance to populate.
   * @return {module:model/CommitAffectedFiles} The populated <code>CommitAffectedFiles</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CommitAffectedFiles();
      if (data.hasOwnProperty('filename'))
        obj.filename = ApiClient.convertToType(data['filename'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} filename
 */
CommitAffectedFiles.prototype.filename = undefined;
