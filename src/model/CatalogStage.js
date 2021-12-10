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
 * The CatalogStage model module.
 * @module model/CatalogStage
 * @version 1.15.6a+dcs
 */
export class CatalogStage {
  /**
   * Constructs a new <code>CatalogStage</code>.
   * CatalogStage a repo&#x27;s catalog stage metadata
   * @alias module:model/CatalogStage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CatalogStage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogStage} obj Optional instance to populate.
   * @return {module:model/CatalogStage} The populated <code>CatalogStage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogStage();
      if (data.hasOwnProperty('branch_or_tag_name'))
        obj.branchOrTagName = ApiClient.convertToType(data['branch_or_tag_name'], 'String');
      if (data.hasOwnProperty('contents_url'))
        obj.contentsUrl = ApiClient.convertToType(data['contents_url'], 'String');
      if (data.hasOwnProperty('git_trees_url'))
        obj.gitTreesUrl = ApiClient.convertToType(data['git_trees_url'], 'String');
      if (data.hasOwnProperty('release_url'))
        obj.releaseUrl = ApiClient.convertToType(data['release_url'], 'String');
      if (data.hasOwnProperty('released'))
        obj.released = ApiClient.convertToType(data['released'], 'String');
      if (data.hasOwnProperty('tarball_url'))
        obj.tarballUrl = ApiClient.convertToType(data['tarball_url'], 'String');
      if (data.hasOwnProperty('zipball_url'))
        obj.zipballUrl = ApiClient.convertToType(data['zipball_url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} branchOrTagName
 */
CatalogStage.prototype.branchOrTagName = undefined;

/**
 * @member {String} contentsUrl
 */
CatalogStage.prototype.contentsUrl = undefined;

/**
 * @member {String} gitTreesUrl
 */
CatalogStage.prototype.gitTreesUrl = undefined;

/**
 * @member {String} releaseUrl
 */
CatalogStage.prototype.releaseUrl = undefined;

/**
 * @member {String} released
 */
CatalogStage.prototype.released = undefined;

/**
 * @member {String} tarballUrl
 */
CatalogStage.prototype.tarballUrl = undefined;

/**
 * @member {String} zipballUrl
 */
CatalogStage.prototype.zipballUrl = undefined;
