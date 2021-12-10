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
 * The BranchProtection model module.
 * @module model/BranchProtection
 * @version 1.15.6a+dcs
 */
export class BranchProtection {
  /**
   * Constructs a new <code>BranchProtection</code>.
   * BranchProtection represents a branch protection for a repository
   * @alias module:model/BranchProtection
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BranchProtection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BranchProtection} obj Optional instance to populate.
   * @return {module:model/BranchProtection} The populated <code>BranchProtection</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BranchProtection();
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
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
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
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} approvalsWhitelistTeams
 */
BranchProtection.prototype.approvalsWhitelistTeams = undefined;

/**
 * @member {Array.<String>} approvalsWhitelistUsername
 */
BranchProtection.prototype.approvalsWhitelistUsername = undefined;

/**
 * @member {Boolean} blockOnOfficialReviewRequests
 */
BranchProtection.prototype.blockOnOfficialReviewRequests = undefined;

/**
 * @member {Boolean} blockOnOutdatedBranch
 */
BranchProtection.prototype.blockOnOutdatedBranch = undefined;

/**
 * @member {Boolean} blockOnRejectedReviews
 */
BranchProtection.prototype.blockOnRejectedReviews = undefined;

/**
 * @member {String} branchName
 */
BranchProtection.prototype.branchName = undefined;

/**
 * @member {Date} createdAt
 */
BranchProtection.prototype.createdAt = undefined;

/**
 * @member {Boolean} dismissStaleApprovals
 */
BranchProtection.prototype.dismissStaleApprovals = undefined;

/**
 * @member {Boolean} enableApprovalsWhitelist
 */
BranchProtection.prototype.enableApprovalsWhitelist = undefined;

/**
 * @member {Boolean} enableMergeWhitelist
 */
BranchProtection.prototype.enableMergeWhitelist = undefined;

/**
 * @member {Boolean} enablePush
 */
BranchProtection.prototype.enablePush = undefined;

/**
 * @member {Boolean} enablePushWhitelist
 */
BranchProtection.prototype.enablePushWhitelist = undefined;

/**
 * @member {Boolean} enableStatusCheck
 */
BranchProtection.prototype.enableStatusCheck = undefined;

/**
 * @member {Array.<String>} mergeWhitelistTeams
 */
BranchProtection.prototype.mergeWhitelistTeams = undefined;

/**
 * @member {Array.<String>} mergeWhitelistUsernames
 */
BranchProtection.prototype.mergeWhitelistUsernames = undefined;

/**
 * @member {String} protectedFilePatterns
 */
BranchProtection.prototype.protectedFilePatterns = undefined;

/**
 * @member {Boolean} pushWhitelistDeployKeys
 */
BranchProtection.prototype.pushWhitelistDeployKeys = undefined;

/**
 * @member {Array.<String>} pushWhitelistTeams
 */
BranchProtection.prototype.pushWhitelistTeams = undefined;

/**
 * @member {Array.<String>} pushWhitelistUsernames
 */
BranchProtection.prototype.pushWhitelistUsernames = undefined;

/**
 * @member {Boolean} requireSignedCommits
 */
BranchProtection.prototype.requireSignedCommits = undefined;

/**
 * @member {Number} requiredApprovals
 */
BranchProtection.prototype.requiredApprovals = undefined;

/**
 * @member {Array.<String>} statusCheckContexts
 */
BranchProtection.prototype.statusCheckContexts = undefined;

/**
 * @member {Date} updatedAt
 */
BranchProtection.prototype.updatedAt = undefined;
