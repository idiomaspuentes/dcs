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
import {CreateKeyOption} from '../model/CreateKeyOption';
import {CreateOrgOption} from '../model/CreateOrgOption';
import {CreateRepoOption} from '../model/CreateRepoOption';
import {CreateUserOption} from '../model/CreateUserOption';
import {Cron} from '../model/Cron';
import {EditUserOption} from '../model/EditUserOption';
import {Organization} from '../model/Organization';
import {PublicKey} from '../model/PublicKey';
import {Repository} from '../model/Repository';
import {User} from '../model/User';

/**
* Admin service.
* @module api/AdminApi
* @version 1.15.6a+dcs
*/
export class AdminApi {

    /**
    * Constructs a new AdminApi. 
    * @alias module:api/AdminApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the adminAdoptRepository operation.
     * @callback moduleapi/AdminApi~adminAdoptRepositoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adopt unadopted files as a repository
     * @param {String} owner owner of the repo
     * @param {String} repo name of the repo
     * @param {module:api/AdminApi~adminAdoptRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    adminAdoptRepository(owner, repo, callback) {
      
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling adminAdoptRepository");
      }
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling adminAdoptRepository");
      }

      let pathParams = {
        'owner': owner,'repo': repo
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/admin/unadopted/{owner}/{repo}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminCreateOrg operation.
     * @callback moduleapi/AdminApi~adminCreateOrgCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Organization{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organization
     * @param {module:model/CreateOrgOption} body 
     * @param {String} username username of the user that will own the created organization
     * @param {module:api/AdminApi~adminCreateOrgCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminCreateOrg(body, username, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminCreateOrg");
      }
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling adminCreateOrg");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Organization;

      return this.apiClient.callApi(
        '/admin/users/{username}/orgs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminCreatePublicKey operation.
     * @callback moduleapi/AdminApi~adminCreatePublicKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PublicKey{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a public key on behalf of a user
     * @param {String} username username of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateKeyOption} opts.body 
     * @param {module:api/AdminApi~adminCreatePublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminCreatePublicKey(username, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling adminCreatePublicKey");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PublicKey;

      return this.apiClient.callApi(
        '/admin/users/{username}/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminCreateRepo operation.
     * @callback moduleapi/AdminApi~adminCreateRepoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository on behalf of a user
     * @param {module:model/CreateRepoOption} body 
     * @param {String} username username of the user. This user will own the created repository
     * @param {module:api/AdminApi~adminCreateRepoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminCreateRepo(body, username, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminCreateRepo");
      }
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling adminCreateRepo");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Repository;

      return this.apiClient.callApi(
        '/admin/users/{username}/repos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminCreateUser operation.
     * @callback moduleapi/AdminApi~adminCreateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateUserOption} opts.body 
     * @param {module:api/AdminApi~adminCreateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminCreateUser(opts, callback) {
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
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/admin/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminCronList operation.
     * @callback moduleapi/AdminApi~adminCronListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Cron>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List cron tasks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page page number of results to return (1-based)
     * @param {Number} opts.limit page size of results
     * @param {module:api/AdminApi~adminCronListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminCronList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'page': opts['page'],'limit': opts['limit']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Cron];

      return this.apiClient.callApi(
        '/admin/cron', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminCronRun operation.
     * @callback moduleapi/AdminApi~adminCronRunCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Run cron task
     * @param {String} task task to run
     * @param {module:api/AdminApi~adminCronRunCallback} callback The callback function, accepting three arguments: error, data, response
     */
    adminCronRun(task, callback) {
      
      let postBody = null;
      // verify the required parameter 'task' is set
      if (task === undefined || task === null) {
        throw new Error("Missing the required parameter 'task' when calling adminCronRun");
      }

      let pathParams = {
        'task': task
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/admin/cron/{task}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminDeleteUnadoptedRepository operation.
     * @callback moduleapi/AdminApi~adminDeleteUnadoptedRepositoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete unadopted files
     * @param {String} owner owner of the repo
     * @param {String} repo name of the repo
     * @param {module:api/AdminApi~adminDeleteUnadoptedRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    adminDeleteUnadoptedRepository(owner, repo, callback) {
      
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling adminDeleteUnadoptedRepository");
      }
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling adminDeleteUnadoptedRepository");
      }

      let pathParams = {
        'owner': owner,'repo': repo
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/admin/unadopted/{owner}/{repo}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminDeleteUser operation.
     * @callback moduleapi/AdminApi~adminDeleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user
     * @param {String} username username of user to delete
     * @param {module:api/AdminApi~adminDeleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    adminDeleteUser(username, callback) {
      
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling adminDeleteUser");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/admin/users/{username}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminDeleteUserPublicKey operation.
     * @callback moduleapi/AdminApi~adminDeleteUserPublicKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user&#x27;s public key
     * @param {String} username username of user
     * @param {Number} id id of the key to delete
     * @param {module:api/AdminApi~adminDeleteUserPublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    adminDeleteUserPublicKey(username, id, callback) {
      
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling adminDeleteUserPublicKey");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminDeleteUserPublicKey");
      }

      let pathParams = {
        'username': username,'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/admin/users/{username}/keys/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminEditUser operation.
     * @callback moduleapi/AdminApi~adminEditUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit an existing user
     * @param {String} username username of user to edit
     * @param {Object} opts Optional parameters
     * @param {module:model/EditUserOption} opts.body 
     * @param {module:api/AdminApi~adminEditUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminEditUser(username, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling adminEditUser");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;

      return this.apiClient.callApi(
        '/admin/users/{username}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminGetAllOrgs operation.
     * @callback moduleapi/AdminApi~adminGetAllOrgsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Organization>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all organizations
     * @param {Object} opts Optional parameters
     * @param {String} opts.lang If the org has one or more repos with the given language(s), the org will be in the results. Multiple lang&#x27;s are ORed.
     * @param {Number} opts.page page number of results to return (1-based)
     * @param {Number} opts.limit page size of results
     * @param {module:api/AdminApi~adminGetAllOrgsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminGetAllOrgs(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'lang': opts['lang'],'page': opts['page'],'limit': opts['limit']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Organization];

      return this.apiClient.callApi(
        '/admin/orgs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminGetAllUsers operation.
     * @callback moduleapi/AdminApi~adminGetAllUsersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all users
     * @param {Object} opts Optional parameters
     * @param {String} opts.lang If the user has one or more repos with the given language(s), the org will be in the results. Multiple lang&#x27;s are ORed.
     * @param {Number} opts.page page number of results to return (1-based)
     * @param {Number} opts.limit page size of results
     * @param {module:api/AdminApi~adminGetAllUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminGetAllUsers(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'lang': opts['lang'],'page': opts['page'],'limit': opts['limit']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [User];

      return this.apiClient.callApi(
        '/admin/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the adminUnadoptedList operation.
     * @callback moduleapi/AdminApi~adminUnadoptedListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List unadopted repositories
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page page number of results to return (1-based)
     * @param {Number} opts.limit page size of results
     * @param {String} opts.pattern pattern of repositories to search for
     * @param {module:api/AdminApi~adminUnadoptedListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adminUnadoptedList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'page': opts['page'],'limit': opts['limit'],'pattern': opts['pattern']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['AccessToken', 'AuthorizationHeaderToken', 'BasicAuth', 'SudoHeader', 'SudoParam', 'TOTPHeader', 'Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];

      return this.apiClient.callApi(
        '/admin/unadopted', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}