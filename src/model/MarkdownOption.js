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
 * The MarkdownOption model module.
 * @module model/MarkdownOption
 * @version 1.15.6a+dcs
 */
export class MarkdownOption {
  /**
   * Constructs a new <code>MarkdownOption</code>.
   * MarkdownOption markdown options
   * @alias module:model/MarkdownOption
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MarkdownOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarkdownOption} obj Optional instance to populate.
   * @return {module:model/MarkdownOption} The populated <code>MarkdownOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MarkdownOption();
      if (data.hasOwnProperty('Context'))
        obj.context = ApiClient.convertToType(data['Context'], 'String');
      if (data.hasOwnProperty('Mode'))
        obj.mode = ApiClient.convertToType(data['Mode'], 'String');
      if (data.hasOwnProperty('Text'))
        obj.text = ApiClient.convertToType(data['Text'], 'String');
      if (data.hasOwnProperty('Wiki'))
        obj.wiki = ApiClient.convertToType(data['Wiki'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Context to render in: body
 * @member {String} context
 */
MarkdownOption.prototype.context = undefined;

/**
 * Mode to render in: body
 * @member {String} mode
 */
MarkdownOption.prototype.mode = undefined;

/**
 * Text markdown to render in: body
 * @member {String} text
 */
MarkdownOption.prototype.text = undefined;

/**
 * Is it a wiki page ? in: body
 * @member {Boolean} wiki
 */
MarkdownOption.prototype.wiki = undefined;

