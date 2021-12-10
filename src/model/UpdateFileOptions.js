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
import {CommitDateOptions} from './CommitDateOptions';
import {Identity} from './Identity';

/**
 * The UpdateFileOptions model module.
 * @module model/UpdateFileOptions
 * @version 1.15.6a+dcs
 */
export class UpdateFileOptions {
  /**
   * Constructs a new <code>UpdateFileOptions</code>.
   * UpdateFileOptions options for updating files Note: &#x60;author&#x60; and &#x60;committer&#x60; are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
   * @alias module:model/UpdateFileOptions
   * @class
   * @param content {String} content must be base64 encoded
   * @param sha {String} sha is the SHA for the file that already exists
   */
  constructor(content, sha) {
    this.content = content;
    this.sha = sha;
  }

  /**
   * Constructs a <code>UpdateFileOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateFileOptions} obj Optional instance to populate.
   * @return {module:model/UpdateFileOptions} The populated <code>UpdateFileOptions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateFileOptions();
      if (data.hasOwnProperty('author'))
        obj.author = Identity.constructFromObject(data['author']);
      if (data.hasOwnProperty('branch'))
        obj.branch = ApiClient.convertToType(data['branch'], 'String');
      if (data.hasOwnProperty('committer'))
        obj.committer = Identity.constructFromObject(data['committer']);
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('dates'))
        obj.dates = CommitDateOptions.constructFromObject(data['dates']);
      if (data.hasOwnProperty('from_path'))
        obj.fromPath = ApiClient.convertToType(data['from_path'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('new_branch'))
        obj.newBranch = ApiClient.convertToType(data['new_branch'], 'String');
      if (data.hasOwnProperty('sha'))
        obj.sha = ApiClient.convertToType(data['sha'], 'String');
      if (data.hasOwnProperty('signoff'))
        obj.signoff = ApiClient.convertToType(data['signoff'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {module:model/Identity} author
 */
UpdateFileOptions.prototype.author = undefined;

/**
 * branch (optional) to base this file from. if not given, the default branch is used
 * @member {String} branch
 */
UpdateFileOptions.prototype.branch = undefined;

/**
 * @member {module:model/Identity} committer
 */
UpdateFileOptions.prototype.committer = undefined;

/**
 * content must be base64 encoded
 * @member {String} content
 */
UpdateFileOptions.prototype.content = undefined;

/**
 * @member {module:model/CommitDateOptions} dates
 */
UpdateFileOptions.prototype.dates = undefined;

/**
 * from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL
 * @member {String} fromPath
 */
UpdateFileOptions.prototype.fromPath = undefined;

/**
 * message (optional) for the commit of this file. if not supplied, a default message will be used
 * @member {String} message
 */
UpdateFileOptions.prototype.message = undefined;

/**
 * new_branch (optional) will make a new branch from `branch` before creating the file
 * @member {String} newBranch
 */
UpdateFileOptions.prototype.newBranch = undefined;

/**
 * sha is the SHA for the file that already exists
 * @member {String} sha
 */
UpdateFileOptions.prototype.sha = undefined;

/**
 * Add a Signed-off-by trailer by the committer at the end of the commit log message.
 * @member {Boolean} signoff
 */
UpdateFileOptions.prototype.signoff = undefined;

