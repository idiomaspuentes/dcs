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
 * The CreateBranchProtectionOption model module.
 * @module model/CreateBranchProtectionOption
 * @version 1.15.6a+dcs
 */
export class CreateBranchProtectionOption {
  /**
   * Constructs a new <code>CreateBranchProtectionOption</code>.
   * CreateBranchProtectionOption options for creating a branch protection
   * @alias module:model/CreateBranchProtectionOption
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateBranchProtectionOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateBranchProtectionOption} obj Optional instance to populate.
   * @return {module:model/CreateBranchProtectionOption} The populated <code>CreateBranchProtectionOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateBranchProtectionOption();
      if (data.hasOwnProperty('approvals_whitelist_teams'))
        obj.approvalsWhitelistTeams = ApiClient.convertToType(data['approvals_whitelist_teams'], ['String']);
      if (data.hasOwnProperty('approvals_whitelist_username'))
        obj.approvalsWhitelistUsername = ApiClient.convertToType(data['approvals_whitelist_username'], ['String']);
      if (data.hasOwnProperty('block_on_official_review_requests'))
        obj.blockOnOfficialReviewRequests = ApiClient.convertToType(data['block_on_official_review_requests'], 'Boolean');
      if (data.hasOwnProperty('block_on_outdated_branch'))
        obj.blockOnOutdatedBranch = ApiClient.convertToType(data['block_on_outdated_branch'], 'Boolean');
      if (data.hasOwnProperty('block_on_rejected_reviews'))
        obj.blockOnRejectedReviews = ApiClient.convertToType(data['block_on_rejected_reviews'], 'Boolean');
      if (data.hasOwnProperty('branch_name'))
        obj.branchName = ApiClient.convertToType(data['branch_name'], 'String');
      if (data.hasOwnProperty('dismiss_stale_approvals'))
        obj.dismissStaleApprovals = ApiClient.convertToType(data['dismiss_stale_approvals'], 'Boolean');
      if (data.hasOwnProperty('enable_approvals_whitelist'))
        obj.enableApprovalsWhitelist = ApiClient.convertToType(data['enable_approvals_whitelist'], 'Boolean');
      if (data.hasOwnProperty('enable_merge_whitelist'))
        obj.enableMergeWhitelist = ApiClient.convertToType(data['enable_merge_whitelist'], 'Boolean');
      if (data.hasOwnProperty('enable_push'))
        obj.enablePush = ApiClient.convertToType(data['enable_push'], 'Boolean');
      if (data.hasOwnProperty('enable_push_whitelist'))
        obj.enablePushWhitelist = ApiClient.convertToType(data['enable_push_whitelist'], 'Boolean');
      if (data.hasOwnProperty('enable_status_check'))
        obj.enableStatusCheck = ApiClient.convertToType(data['enable_status_check'], 'Boolean');
      if (data.hasOwnProperty('merge_whitelist_teams'))
        obj.mergeWhitelistTeams = ApiClient.convertToType(data['merge_whitelist_teams'], ['String']);
      if (data.hasOwnProperty('merge_whitelist_usernames'))
        obj.mergeWhitelistUsernames = ApiClient.convertToType(data['merge_whitelist_usernames'], ['String']);
      if (data.hasOwnProperty('protected_file_patterns'))
        obj.protectedFilePatterns = ApiClient.convertToType(data['protected_file_patterns'], 'String');
      if (data.hasOwnProperty('push_whitelist_deploy_keys'))
        obj.pushWhitelistDeployKeys = ApiClient.convertToType(data['push_whitelist_deploy_keys'], 'Boolean');
      if (data.hasOwnProperty('push_whitelist_teams'))
        obj.pushWhitelistTeams = ApiClient.convertToType(data['push_whitelist_teams'], ['String']);
      if (data.hasOwnProperty('push_whitelist_usernames'))
        obj.pushWhitelistUsernames = ApiClient.convertToType(data['push_whitelist_usernames'], ['String']);
      if (data.hasOwnProperty('require_signed_commits'))
        obj.requireSignedCommits = ApiClient.convertToType(data['require_signed_commits'], 'Boolean');
      if (data.hasOwnProperty('required_approvals'))
        obj.requiredApprovals = ApiClient.convertToType(data['required_approvals'], 'Number');
      if (data.hasOwnProperty('status_check_contexts'))
        obj.statusCheckContexts = ApiClient.convertToType(data['status_check_contexts'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} approvalsWhitelistTeams
 */
CreateBranchProtectionOption.prototype.approvalsWhitelistTeams = undefined;

/**
 * @member {Array.<String>} approvalsWhitelistUsername
 */
CreateBranchProtectionOption.prototype.approvalsWhitelistUsername = undefined;

/**
 * @member {Boolean} blockOnOfficialReviewRequests
 */
CreateBranchProtectionOption.prototype.blockOnOfficialReviewRequests = undefined;

/**
 * @member {Boolean} blockOnOutdatedBranch
 */
CreateBranchProtectionOption.prototype.blockOnOutdatedBranch = undefined;

/**
 * @member {Boolean} blockOnRejectedReviews
 */
CreateBranchProtectionOption.prototype.blockOnRejectedReviews = undefined;

/**
 * @member {String} branchName
 */
CreateBranchProtectionOption.prototype.branchName = undefined;

/**
 * @member {Boolean} dismissStaleApprovals
 */
CreateBranchProtectionOption.prototype.dismissStaleApprovals = undefined;

/**
 * @member {Boolean} enableApprovalsWhitelist
 */
CreateBranchProtectionOption.prototype.enableApprovalsWhitelist = undefined;

/**
 * @member {Boolean} enableMergeWhitelist
 */
CreateBranchProtectionOption.prototype.enableMergeWhitelist = undefined;

/**
 * @member {Boolean} enablePush
 */
CreateBranchProtectionOption.prototype.enablePush = undefined;

/**
 * @member {Boolean} enablePushWhitelist
 */
CreateBranchProtectionOption.prototype.enablePushWhitelist = undefined;

/**
 * @member {Boolean} enableStatusCheck
 */
CreateBranchProtectionOption.prototype.enableStatusCheck = undefined;

/**
 * @member {Array.<String>} mergeWhitelistTeams
 */
CreateBranchProtectionOption.prototype.mergeWhitelistTeams = undefined;

/**
 * @member {Array.<String>} mergeWhitelistUsernames
 */
CreateBranchProtectionOption.prototype.mergeWhitelistUsernames = undefined;

/**
 * @member {String} protectedFilePatterns
 */
CreateBranchProtectionOption.prototype.protectedFilePatterns = undefined;

/**
 * @member {Boolean} pushWhitelistDeployKeys
 */
CreateBranchProtectionOption.prototype.pushWhitelistDeployKeys = undefined;

/**
 * @member {Array.<String>} pushWhitelistTeams
 */
CreateBranchProtectionOption.prototype.pushWhitelistTeams = undefined;

/**
 * @member {Array.<String>} pushWhitelistUsernames
 */
CreateBranchProtectionOption.prototype.pushWhitelistUsernames = undefined;

/**
 * @member {Boolean} requireSignedCommits
 */
CreateBranchProtectionOption.prototype.requireSignedCommits = undefined;

/**
 * @member {Number} requiredApprovals
 */
CreateBranchProtectionOption.prototype.requiredApprovals = undefined;

/**
 * @member {Array.<String>} statusCheckContexts
 */
CreateBranchProtectionOption.prototype.statusCheckContexts = undefined;

