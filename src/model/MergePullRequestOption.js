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
 * The MergePullRequestOption model module.
 * @module model/MergePullRequestOption
 * @version 1.15.6a+dcs
 */
export class MergePullRequestOption {
  /**
   * Constructs a new <code>MergePullRequestOption</code>.
   * MergePullRequestForm form for merging Pull Request
   * @alias module:model/MergePullRequestOption
   * @class
   * @param _do {module:model/MergePullRequestOption.DoEnum} 
   */
  constructor(_do) {
    this._do = _do;
  }

  /**
   * Constructs a <code>MergePullRequestOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MergePullRequestOption} obj Optional instance to populate.
   * @return {module:model/MergePullRequestOption} The populated <code>MergePullRequestOption</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MergePullRequestOption();
      if (data.hasOwnProperty('Do'))
        obj._do = ApiClient.convertToType(data['Do'], 'String');
      if (data.hasOwnProperty('MergeCommitID'))
        obj.mergeCommitID = ApiClient.convertToType(data['MergeCommitID'], 'String');
      if (data.hasOwnProperty('MergeMessageField'))
        obj.mergeMessageField = ApiClient.convertToType(data['MergeMessageField'], 'String');
      if (data.hasOwnProperty('MergeTitleField'))
        obj.mergeTitleField = ApiClient.convertToType(data['MergeTitleField'], 'String');
      if (data.hasOwnProperty('delete_branch_after_merge'))
        obj.deleteBranchAfterMerge = ApiClient.convertToType(data['delete_branch_after_merge'], 'Boolean');
      if (data.hasOwnProperty('force_merge'))
        obj.forceMerge = ApiClient.convertToType(data['force_merge'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>_do</code> property.
 * @enum {String}
 * @readonly
 */
MergePullRequestOption.DoEnum = {
  /**
   * value: "merge"
   * @const
   */
  merge: "merge",

  /**
   * value: "rebase"
   * @const
   */
  rebase: "rebase",

  /**
   * value: "rebase-merge"
   * @const
   */
  rebaseMerge: "rebase-merge",

  /**
   * value: "squash"
   * @const
   */
  squash: "squash",

  /**
   * value: "manually-merged"
   * @const
   */
  manuallyMerged: "manually-merged"
};
/**
 * @member {module:model/MergePullRequestOption.DoEnum} _do
 */
MergePullRequestOption.prototype._do = undefined;

/**
 * @member {String} mergeCommitID
 */
MergePullRequestOption.prototype.mergeCommitID = undefined;

/**
 * @member {String} mergeMessageField
 */
MergePullRequestOption.prototype.mergeMessageField = undefined;

/**
 * @member {String} mergeTitleField
 */
MergePullRequestOption.prototype.mergeTitleField = undefined;

/**
 * @member {Boolean} deleteBranchAfterMerge
 */
MergePullRequestOption.prototype.deleteBranchAfterMerge = undefined;

/**
 * @member {Boolean} forceMerge
 */
MergePullRequestOption.prototype.forceMerge = undefined;
