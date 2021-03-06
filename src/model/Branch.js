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
import {PayloadCommit} from './PayloadCommit';

/**
 * The Branch model module.
 * @module model/Branch
 * @version 1.15.6a+dcs
 */
export class Branch {
  /**
   * Constructs a new <code>Branch</code>.
   * Branch represents a repository branch
   * @alias module:model/Branch
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Branch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Branch} obj Optional instance to populate.
   * @return {module:model/Branch} The populated <code>Branch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Branch();
      if (data.hasOwnProperty('commit'))
        obj.commit = PayloadCommit.constructFromObject(data['commit']);
      if (data.hasOwnProperty('effective_branch_protection_name'))
        obj.effectiveBranchProtectionName = ApiClient.convertToType(data['effective_branch_protection_name'], 'String');
      if (data.hasOwnProperty('enable_status_check'))
        obj.enableStatusCheck = ApiClient.convertToType(data['enable_status_check'], 'Boolean');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('protected'))
        obj._protected = ApiClient.convertToType(data['protected'], 'Boolean');
      if (data.hasOwnProperty('required_approvals'))
        obj.requiredApprovals = ApiClient.convertToType(data['required_approvals'], 'Number');
      if (data.hasOwnProperty('status_check_contexts'))
        obj.statusCheckContexts = ApiClient.convertToType(data['status_check_contexts'], ['String']);
      if (data.hasOwnProperty('user_can_merge'))
        obj.userCanMerge = ApiClient.convertToType(data['user_can_merge'], 'Boolean');
      if (data.hasOwnProperty('user_can_push'))
        obj.userCanPush = ApiClient.convertToType(data['user_can_push'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {module:model/PayloadCommit} commit
 */
Branch.prototype.commit = undefined;

/**
 * @member {String} effectiveBranchProtectionName
 */
Branch.prototype.effectiveBranchProtectionName = undefined;

/**
 * @member {Boolean} enableStatusCheck
 */
Branch.prototype.enableStatusCheck = undefined;

/**
 * @member {String} name
 */
Branch.prototype.name = undefined;

/**
 * @member {Boolean} _protected
 */
Branch.prototype._protected = undefined;

/**
 * @member {Number} requiredApprovals
 */
Branch.prototype.requiredApprovals = undefined;

/**
 * @member {Array.<String>} statusCheckContexts
 */
Branch.prototype.statusCheckContexts = undefined;

/**
 * @member {Boolean} userCanMerge
 */
Branch.prototype.userCanMerge = undefined;

/**
 * @member {Boolean} userCanPush
 */
Branch.prototype.userCanPush = undefined;

