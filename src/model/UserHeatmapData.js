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
import {TimeStamp} from './TimeStamp';

/**
 * The UserHeatmapData model module.
 * @module model/UserHeatmapData
 * @version 1.15.6a+dcs
 */
export class UserHeatmapData {
  /**
   * Constructs a new <code>UserHeatmapData</code>.
   * UserHeatmapData represents the data needed to create a heatmap
   * @alias module:model/UserHeatmapData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UserHeatmapData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserHeatmapData} obj Optional instance to populate.
   * @return {module:model/UserHeatmapData} The populated <code>UserHeatmapData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserHeatmapData();
      if (data.hasOwnProperty('contributions'))
        obj.contributions = ApiClient.convertToType(data['contributions'], 'Number');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = TimeStamp.constructFromObject(data['timestamp']);
    }
    return obj;
  }
}

/**
 * @member {Number} contributions
 */
UserHeatmapData.prototype.contributions = undefined;

/**
 * @member {module:model/TimeStamp} timestamp
 */
UserHeatmapData.prototype.timestamp = undefined;

