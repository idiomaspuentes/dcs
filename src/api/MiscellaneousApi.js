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
import {MarkdownOption} from '../model/MarkdownOption';
import {ServerVersion} from '../model/ServerVersion';

/**
* Miscellaneous service.
* @module api/MiscellaneousApi
* @version 1.15.6a+dcs
*/
export class MiscellaneousApi {

    /**
    * Constructs a new MiscellaneousApi. 
    * @alias module:api/MiscellaneousApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getSigningKey operation.
     * @callback moduleapi/MiscellaneousApi~getSigningKeyCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get default signing-key.gpg
     * @param {module:api/MiscellaneousApi~getSigningKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSigningKey(callback) {
      
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
      let accepts = ['text/plain'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/signing-key.gpg', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getVersion operation.
     * @callback moduleapi/MiscellaneousApi~getVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerVersion{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the version of the Gitea application
     * @param {module:api/MiscellaneousApi~getVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getVersion(callback) {
      
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
      let returnType = ServerVersion;

      return this.apiClient.callApi(
        '/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the renderMarkdown operation.
     * @callback moduleapi/MiscellaneousApi~renderMarkdownCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Render a markdown document as HTML
     * @param {Object} opts Optional parameters
     * @param {module:model/MarkdownOption} opts.body 
     * @param {module:api/MiscellaneousApi~renderMarkdownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    renderMarkdown(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = ['application/json'];
      let accepts = ['text/html'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/markdown', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the renderMarkdownRaw operation.
     * @callback moduleapi/MiscellaneousApi~renderMarkdownRawCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Render raw markdown as HTML
     * @param {String} body Request body to render
     * @param {module:api/MiscellaneousApi~renderMarkdownRawCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    renderMarkdownRaw(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling renderMarkdownRaw");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = ['text/plain'];
      let accepts = ['text/html'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/markdown/raw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}