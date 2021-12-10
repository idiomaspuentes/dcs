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
 * The CreateOrgOption model module.
 * @module model/CreateOrgOption
 * @version 1.15.6a+dcs
 */
export class CreateOrgOption {
  /**
   * Constructs a new <code>CreateOrgOption</code>.
   * CreateOrgOption options for creating an organization
   * @alias module:model/CreateOrgOption
   * @class
   * @param username {String} 
   */
  constructor(username) {
    this.username = username;
  }

  /**
   * Constructs a <code>CreateOrgOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrgOption} obj Optional instance to populate.
   * @return {module:model/CreateOrgOption} The populated <code>CreateOrgOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateOrgOption();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('full_name'))
        obj.fullName = ApiClient.convertToType(data['full_name'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = ApiClient.convertToType(data['location'], 'String');
      if (data.hasOwnProperty('repo_admin_change_team_access'))
        obj.repoAdminChangeTeamAccess = ApiClient.convertToType(data['repo_admin_change_team_access'], 'Boolean');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('visibility'))
        obj.visibility = ApiClient.convertToType(data['visibility'], 'String');
      if (data.hasOwnProperty('website'))
        obj.website = ApiClient.convertToType(data['website'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
CreateOrgOption.prototype.description = undefined;

/**
 * @member {String} fullName
 */
CreateOrgOption.prototype.fullName = undefined;

/**
 * @member {String} location
 */
CreateOrgOption.prototype.location = undefined;

/**
 * @member {Boolean} repoAdminChangeTeamAccess
 */
CreateOrgOption.prototype.repoAdminChangeTeamAccess = undefined;

/**
 * @member {String} username
 */
CreateOrgOption.prototype.username = undefined;

/**
 * Allowed values for the <code>visibility</code> property.
 * @enum {String}
 * @readonly
 */
CreateOrgOption.VisibilityEnum = {
  /**
   * value: "public"
   * @const
   */
  _public: "public",

  /**
   * value: "limited"
   * @const
   */
  limited: "limited",

  /**
   * value: "private"
   * @const
   */
  _private: "private"
};
/**
 * possible values are `public` (default), `limited` or `private`
 * @member {module:model/CreateOrgOption.VisibilityEnum} visibility
 */
CreateOrgOption.prototype.visibility = undefined;

/**
 * @member {String} website
 */
CreateOrgOption.prototype.website = undefined;

