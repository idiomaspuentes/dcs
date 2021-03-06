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
import {ApiClient} from "../ApiClient";
import {GeneralAPISettings} from '../model/GeneralAPISettings';
import {GeneralAttachmentSettings} from '../model/GeneralAttachmentSettings';
import {GeneralRepoSettings} from '../model/GeneralRepoSettings';
import {GeneralUISettings} from '../model/GeneralUISettings';

/**
* Settings service.
* @module api/SettingsApi
* @version 1.15.6a+dcs
*/
export class SettingsApi {

    /**
    * Constructs a new SettingsApi. 
    * @alias module:api/SettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getGeneralAPISettings operation.
     * @callback moduleapi/SettingsApi~getGeneralAPISettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralAPISettings{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get instance&#x27;s global settings for api
     * @param {module:api/SettingsApi~getGeneralAPISettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGeneralAPISettings(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GeneralAPISettings;

      return this.apiClient.callApi(
        '/settings/api', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGeneralAttachmentSettings operation.
     * @callback moduleapi/SettingsApi~getGeneralAttachmentSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralAttachmentSettings{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get instance&#x27;s global settings for Attachment
     * @param {module:api/SettingsApi~getGeneralAttachmentSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGeneralAttachmentSettings(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GeneralAttachmentSettings;

      return this.apiClient.callApi(
        '/settings/attachment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGeneralRepositorySettings operation.
     * @callback moduleapi/SettingsApi~getGeneralRepositorySettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralRepoSettings{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get instance&#x27;s global settings for repositories
     * @param {module:api/SettingsApi~getGeneralRepositorySettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGeneralRepositorySettings(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GeneralRepoSettings;

      return this.apiClient.callApi(
        '/settings/repository', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGeneralUISettings operation.
     * @callback moduleapi/SettingsApi~getGeneralUISettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GeneralUISettings{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get instance&#x27;s global settings for ui
     * @param {module:api/SettingsApi~getGeneralUISettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGeneralUISettings(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GeneralUISettings;

      return this.apiClient.callApi(
        '/settings/ui', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}