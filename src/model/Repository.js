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
import {CatalogStages} from './CatalogStages';
import {ExternalTracker} from './ExternalTracker';
import {ExternalWiki} from './ExternalWiki';
import {InternalTracker} from './InternalTracker';
import {Permission} from './Permission';
import {User} from './User';

/**
 * The Repository model module.
 * @module model/Repository
 * @version 1.15.6a+dcs
 */
export class Repository {
  /**
   * Constructs a new <code>Repository</code>.
   * Repository represents a repository
   * @alias module:model/Repository
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Repository</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Repository} obj Optional instance to populate.
   * @return {module:model/Repository} The populated <code>Repository</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Repository();
      if (data.hasOwnProperty('allow_merge_commits'))
        obj.allowMergeCommits = ApiClient.convertToType(data['allow_merge_commits'], 'Boolean');
      if (data.hasOwnProperty('allow_rebase'))
        obj.allowRebase = ApiClient.convertToType(data['allow_rebase'], 'Boolean');
      if (data.hasOwnProperty('allow_rebase_explicit'))
        obj.allowRebaseExplicit = ApiClient.convertToType(data['allow_rebase_explicit'], 'Boolean');
      if (data.hasOwnProperty('allow_squash_merge'))
        obj.allowSquashMerge = ApiClient.convertToType(data['allow_squash_merge'], 'Boolean');
      if (data.hasOwnProperty('archived'))
        obj.archived = ApiClient.convertToType(data['archived'], 'Boolean');
      if (data.hasOwnProperty('avatar_url'))
        obj.avatarUrl = ApiClient.convertToType(data['avatar_url'], 'String');
      if (data.hasOwnProperty('books'))
        obj.books = ApiClient.convertToType(data['books'], ['String']);
      if (data.hasOwnProperty('catalog'))
        obj.catalog = CatalogStages.constructFromObject(data['catalog']);
      if (data.hasOwnProperty('checking_level'))
        obj.checkingLevel = ApiClient.convertToType(data['checking_level'], 'String');
      if (data.hasOwnProperty('clone_url'))
        obj.cloneUrl = ApiClient.convertToType(data['clone_url'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('default_branch'))
        obj.defaultBranch = ApiClient.convertToType(data['default_branch'], 'String');
      if (data.hasOwnProperty('default_merge_style'))
        obj.defaultMergeStyle = ApiClient.convertToType(data['default_merge_style'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('empty'))
        obj.empty = ApiClient.convertToType(data['empty'], 'Boolean');
      if (data.hasOwnProperty('external_tracker'))
        obj.externalTracker = ExternalTracker.constructFromObject(data['external_tracker']);
      if (data.hasOwnProperty('external_wiki'))
        obj.externalWiki = ExternalWiki.constructFromObject(data['external_wiki']);
      if (data.hasOwnProperty('fork'))
        obj.fork = ApiClient.convertToType(data['fork'], 'Boolean');
      if (data.hasOwnProperty('forks_count'))
        obj.forksCount = ApiClient.convertToType(data['forks_count'], 'Number');
      if (data.hasOwnProperty('full_name'))
        obj.fullName = ApiClient.convertToType(data['full_name'], 'String');
      if (data.hasOwnProperty('has_issues'))
        obj.hasIssues = ApiClient.convertToType(data['has_issues'], 'Boolean');
      if (data.hasOwnProperty('has_projects'))
        obj.hasProjects = ApiClient.convertToType(data['has_projects'], 'Boolean');
      if (data.hasOwnProperty('has_pull_requests'))
        obj.hasPullRequests = ApiClient.convertToType(data['has_pull_requests'], 'Boolean');
      if (data.hasOwnProperty('has_wiki'))
        obj.hasWiki = ApiClient.convertToType(data['has_wiki'], 'Boolean');
      if (data.hasOwnProperty('html_url'))
        obj.htmlUrl = ApiClient.convertToType(data['html_url'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('ignore_whitespace_conflicts'))
        obj.ignoreWhitespaceConflicts = ApiClient.convertToType(data['ignore_whitespace_conflicts'], 'Boolean');
      if (data.hasOwnProperty('internal'))
        obj.internal = ApiClient.convertToType(data['internal'], 'Boolean');
      if (data.hasOwnProperty('internal_tracker'))
        obj.internalTracker = InternalTracker.constructFromObject(data['internal_tracker']);
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'String');
      if (data.hasOwnProperty('mirror'))
        obj.mirror = ApiClient.convertToType(data['mirror'], 'Boolean');
      if (data.hasOwnProperty('mirror_interval'))
        obj.mirrorInterval = ApiClient.convertToType(data['mirror_interval'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('open_issues_count'))
        obj.openIssuesCount = ApiClient.convertToType(data['open_issues_count'], 'Number');
      if (data.hasOwnProperty('open_pr_counter'))
        obj.openPrCounter = ApiClient.convertToType(data['open_pr_counter'], 'Number');
      if (data.hasOwnProperty('original_url'))
        obj.originalUrl = ApiClient.convertToType(data['original_url'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = User.constructFromObject(data['owner']);
      if (data.hasOwnProperty('parent'))
        obj.parent = Repository.constructFromObject(data['parent']);
      if (data.hasOwnProperty('permissions'))
        obj.permissions = Permission.constructFromObject(data['permissions']);
      if (data.hasOwnProperty('private'))
        obj._private = ApiClient.convertToType(data['private'], 'Boolean');
      if (data.hasOwnProperty('release_counter'))
        obj.releaseCounter = ApiClient.convertToType(data['release_counter'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('ssh_url'))
        obj.sshUrl = ApiClient.convertToType(data['ssh_url'], 'String');
      if (data.hasOwnProperty('stars_count'))
        obj.starsCount = ApiClient.convertToType(data['stars_count'], 'Number');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('template'))
        obj.template = ApiClient.convertToType(data['template'], 'Boolean');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('watchers_count'))
        obj.watchersCount = ApiClient.convertToType(data['watchers_count'], 'Number');
      if (data.hasOwnProperty('website'))
        obj.website = ApiClient.convertToType(data['website'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} allowMergeCommits
 */
Repository.prototype.allowMergeCommits = undefined;

/**
 * @member {Boolean} allowRebase
 */
Repository.prototype.allowRebase = undefined;

/**
 * @member {Boolean} allowRebaseExplicit
 */
Repository.prototype.allowRebaseExplicit = undefined;

/**
 * @member {Boolean} allowSquashMerge
 */
Repository.prototype.allowSquashMerge = undefined;

/**
 * @member {Boolean} archived
 */
Repository.prototype.archived = undefined;

/**
 * @member {String} avatarUrl
 */
Repository.prototype.avatarUrl = undefined;

/**
 * @member {Array.<String>} books
 */
Repository.prototype.books = undefined;

/**
 * @member {module:model/CatalogStages} catalog
 */
Repository.prototype.catalog = undefined;

/**
 * @member {String} checkingLevel
 */
Repository.prototype.checkingLevel = undefined;

/**
 * @member {String} cloneUrl
 */
Repository.prototype.cloneUrl = undefined;

/**
 * @member {Date} createdAt
 */
Repository.prototype.createdAt = undefined;

/**
 * @member {String} defaultBranch
 */
Repository.prototype.defaultBranch = undefined;

/**
 * @member {String} defaultMergeStyle
 */
Repository.prototype.defaultMergeStyle = undefined;

/**
 * @member {String} description
 */
Repository.prototype.description = undefined;

/**
 * @member {Boolean} empty
 */
Repository.prototype.empty = undefined;

/**
 * @member {module:model/ExternalTracker} externalTracker
 */
Repository.prototype.externalTracker = undefined;

/**
 * @member {module:model/ExternalWiki} externalWiki
 */
Repository.prototype.externalWiki = undefined;

/**
 * @member {Boolean} fork
 */
Repository.prototype.fork = undefined;

/**
 * @member {Number} forksCount
 */
Repository.prototype.forksCount = undefined;

/**
 * @member {String} fullName
 */
Repository.prototype.fullName = undefined;

/**
 * @member {Boolean} hasIssues
 */
Repository.prototype.hasIssues = undefined;

/**
 * @member {Boolean} hasProjects
 */
Repository.prototype.hasProjects = undefined;

/**
 * @member {Boolean} hasPullRequests
 */
Repository.prototype.hasPullRequests = undefined;

/**
 * @member {Boolean} hasWiki
 */
Repository.prototype.hasWiki = undefined;

/**
 * @member {String} htmlUrl
 */
Repository.prototype.htmlUrl = undefined;

/**
 * @member {Number} id
 */
Repository.prototype.id = undefined;

/**
 * @member {Boolean} ignoreWhitespaceConflicts
 */
Repository.prototype.ignoreWhitespaceConflicts = undefined;

/**
 * @member {Boolean} internal
 */
Repository.prototype.internal = undefined;

/**
 * @member {module:model/InternalTracker} internalTracker
 */
Repository.prototype.internalTracker = undefined;

/**
 * @member {String} language
 */
Repository.prototype.language = undefined;

/**
 * @member {Boolean} mirror
 */
Repository.prototype.mirror = undefined;

/**
 * @member {String} mirrorInterval
 */
Repository.prototype.mirrorInterval = undefined;

/**
 * @member {String} name
 */
Repository.prototype.name = undefined;

/**
 * @member {Number} openIssuesCount
 */
Repository.prototype.openIssuesCount = undefined;

/**
 * @member {Number} openPrCounter
 */
Repository.prototype.openPrCounter = undefined;

/**
 * @member {String} originalUrl
 */
Repository.prototype.originalUrl = undefined;

/**
 * @member {module:model/User} owner
 */
Repository.prototype.owner = undefined;

/**
 * @member {module:model/Repository} parent
 */
Repository.prototype.parent = undefined;

/**
 * @member {module:model/Permission} permissions
 */
Repository.prototype.permissions = undefined;

/**
 * @member {Boolean} _private
 */
Repository.prototype._private = undefined;

/**
 * @member {Number} releaseCounter
 */
Repository.prototype.releaseCounter = undefined;

/**
 * @member {Number} size
 */
Repository.prototype.size = undefined;

/**
 * @member {String} sshUrl
 */
Repository.prototype.sshUrl = undefined;

/**
 * @member {Number} starsCount
 */
Repository.prototype.starsCount = undefined;

/**
 * @member {String} subject
 */
Repository.prototype.subject = undefined;

/**
 * @member {Boolean} template
 */
Repository.prototype.template = undefined;

/**
 * @member {String} title
 */
Repository.prototype.title = undefined;

/**
 * @member {Date} updatedAt
 */
Repository.prototype.updatedAt = undefined;

/**
 * @member {Number} watchersCount
 */
Repository.prototype.watchersCount = undefined;

/**
 * @member {String} website
 */
Repository.prototype.website = undefined;

