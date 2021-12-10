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
import {User} from './User';

/**
 * The Reaction model module.
 * @module model/Reaction
 * @version 1.15.6a+dcs
 */
export class Reaction {
  /**
   * Constructs a new <code>Reaction</code>.
   * Reaction contain one reaction
   * @alias module:model/Reaction
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Reaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Reaction} obj Optional instance to populate.
   * @return {module:model/Reaction} The populated <code>Reaction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Reaction();
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('user'))
        obj.user = User.constructFromObject(data['user']);
    }
    return obj;
  }
}

/**
 * @member {String} content
 */
Reaction.prototype.content = undefined;

/**
 * @member {Date} createdAt
 */
Reaction.prototype.createdAt = undefined;

/**
 * @member {module:model/User} user
 */
Reaction.prototype.user = undefined;
