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
 * The GeneralUISettings model module.
 * @module model/GeneralUISettings
 * @version 1.15.6a+dcs
 */
export class GeneralUISettings {
  /**
   * Constructs a new <code>GeneralUISettings</code>.
   * GeneralUISettings contains global ui settings exposed by API
   * @alias module:model/GeneralUISettings
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GeneralUISettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeneralUISettings} obj Optional instance to populate.
   * @return {module:model/GeneralUISettings} The populated <code>GeneralUISettings</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GeneralUISettings();
      if (data.hasOwnProperty('allowed_reactions'))
        obj.allowedReactions = ApiClient.convertToType(data['allowed_reactions'], ['String']);
      if (data.hasOwnProperty('custom_emojis'))
        obj.customEmojis = ApiClient.convertToType(data['custom_emojis'], ['String']);
      if (data.hasOwnProperty('default_theme'))
        obj.defaultTheme = ApiClient.convertToType(data['default_theme'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} allowedReactions
 */
GeneralUISettings.prototype.allowedReactions = undefined;

/**
 * @member {Array.<String>} customEmojis
 */
GeneralUISettings.prototype.customEmojis = undefined;

/**
 * @member {String} defaultTheme
 */
GeneralUISettings.prototype.defaultTheme = undefined;
