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
import {AnnotatedTagObject} from './AnnotatedTagObject';
import {CommitUser} from './CommitUser';
import {PayloadCommitVerification} from './PayloadCommitVerification';

/**
 * The AnnotatedTag model module.
 * @module model/AnnotatedTag
 * @version 1.15.6a+dcs
 */
export class AnnotatedTag {
  /**
   * Constructs a new <code>AnnotatedTag</code>.
   * AnnotatedTag represents an annotated tag
   * @alias module:model/AnnotatedTag
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnnotatedTag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnnotatedTag} obj Optional instance to populate.
   * @return {module:model/AnnotatedTag} The populated <code>AnnotatedTag</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnnotatedTag();
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('object'))
        obj._object = AnnotatedTagObject.constructFromObject(data['object']);
      if (data.hasOwnProperty('sha'))
        obj.sha = ApiClient.convertToType(data['sha'], 'String');
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('tagger'))
        obj.tagger = CommitUser.constructFromObject(data['tagger']);
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('verification'))
        obj.verification = PayloadCommitVerification.constructFromObject(data['verification']);
    }
    return obj;
  }
}

/**
 * @member {String} message
 */
AnnotatedTag.prototype.message = undefined;

/**
 * @member {module:model/AnnotatedTagObject} _object
 */
AnnotatedTag.prototype._object = undefined;

/**
 * @member {String} sha
 */
AnnotatedTag.prototype.sha = undefined;

/**
 * @member {String} tag
 */
AnnotatedTag.prototype.tag = undefined;

/**
 * @member {module:model/CommitUser} tagger
 */
AnnotatedTag.prototype.tagger = undefined;

/**
 * @member {String} url
 */
AnnotatedTag.prototype.url = undefined;

/**
 * @member {module:model/PayloadCommitVerification} verification
 */
AnnotatedTag.prototype.verification = undefined;

