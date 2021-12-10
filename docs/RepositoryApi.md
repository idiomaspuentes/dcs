# dcs.RepositoryApi

All URIs are relative to *https://git.door43.org/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCurrentUserRepo**](RepositoryApi.md#createCurrentUserRepo) | **POST** /user/repos | Create a repository
[**createFork**](RepositoryApi.md#createFork) | **POST** /repos/{owner}/{repo}/forks | Fork a repository
[**generateRepo**](RepositoryApi.md#generateRepo) | **POST** /repos/{template_owner}/{template_repo}/generate | Create a repository using a template
[**getAnnotatedTag**](RepositoryApi.md#getAnnotatedTag) | **GET** /repos/{owner}/{repo}/git/tags/{sha} | Gets the tag object of an annotated tag (not lightweight tags)
[**getBlob**](RepositoryApi.md#getBlob) | **GET** /repos/{owner}/{repo}/git/blobs/{sha} | Gets the blob of a repository.
[**getTree**](RepositoryApi.md#getTree) | **GET** /repos/{owner}/{repo}/git/trees/{sha} | Gets the tree of a repository.
[**listForks**](RepositoryApi.md#listForks) | **GET** /repos/{owner}/{repo}/forks | List a repository&#x27;s forks
[**repoAddCollaborator**](RepositoryApi.md#repoAddCollaborator) | **PUT** /repos/{owner}/{repo}/collaborators/{collaborator} | Add a collaborator to a repository
[**repoAddTeam**](RepositoryApi.md#repoAddTeam) | **PUT** /repos/{owner}/{repo}/teams/{team} | Add a team to a repository
[**repoAddTopc**](RepositoryApi.md#repoAddTopc) | **PUT** /repos/{owner}/{repo}/topics/{topic} | Add a topic to a repository
[**repoCheckCollaborator**](RepositoryApi.md#repoCheckCollaborator) | **GET** /repos/{owner}/{repo}/collaborators/{collaborator} | Check if a user is a collaborator of a repository
[**repoCheckTeam**](RepositoryApi.md#repoCheckTeam) | **GET** /repos/{owner}/{repo}/teams/{team} | Check if a team is assigned to a repository
[**repoCreateBranch**](RepositoryApi.md#repoCreateBranch) | **POST** /repos/{owner}/{repo}/branches | Create a branch
[**repoCreateBranchProtection**](RepositoryApi.md#repoCreateBranchProtection) | **POST** /repos/{owner}/{repo}/branch_protections | Create a branch protections for a repository
[**repoCreateFile**](RepositoryApi.md#repoCreateFile) | **POST** /repos/{owner}/{repo}/contents/{filepath} | Create a file in a repository
[**repoCreateHook**](RepositoryApi.md#repoCreateHook) | **POST** /repos/{owner}/{repo}/hooks | Create a hook
[**repoCreateKey**](RepositoryApi.md#repoCreateKey) | **POST** /repos/{owner}/{repo}/keys | Add a key to a repository
[**repoCreatePullRequest**](RepositoryApi.md#repoCreatePullRequest) | **POST** /repos/{owner}/{repo}/pulls | Create a pull request
[**repoCreatePullReview**](RepositoryApi.md#repoCreatePullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews | Create a review to an pull request
[**repoCreatePullReviewRequests**](RepositoryApi.md#repoCreatePullReviewRequests) | **POST** /repos/{owner}/{repo}/pulls/{index}/requested_reviewers | create review requests for a pull request
[**repoCreateRelease**](RepositoryApi.md#repoCreateRelease) | **POST** /repos/{owner}/{repo}/releases | Create a release
[**repoCreateReleaseAttachment**](RepositoryApi.md#repoCreateReleaseAttachment) | **POST** /repos/{owner}/{repo}/releases/{id}/assets | Create a release attachment
[**repoCreateStatus**](RepositoryApi.md#repoCreateStatus) | **POST** /repos/{owner}/{repo}/statuses/{sha} | Create a commit status
[**repoCreateTag**](RepositoryApi.md#repoCreateTag) | **POST** /repos/{owner}/{repo}/tags | Create a new git tag in a repository
[**repoDelete**](RepositoryApi.md#repoDelete) | **DELETE** /repos/{owner}/{repo} | Delete a repository
[**repoDeleteBranch**](RepositoryApi.md#repoDeleteBranch) | **DELETE** /repos/{owner}/{repo}/branches/{branch} | Delete a specific branch from a repository
[**repoDeleteBranchProtection**](RepositoryApi.md#repoDeleteBranchProtection) | **DELETE** /repos/{owner}/{repo}/branch_protections/{name} | Delete a specific branch protection for the repository
[**repoDeleteCollaborator**](RepositoryApi.md#repoDeleteCollaborator) | **DELETE** /repos/{owner}/{repo}/collaborators/{collaborator} | Delete a collaborator from a repository
[**repoDeleteGitHook**](RepositoryApi.md#repoDeleteGitHook) | **DELETE** /repos/{owner}/{repo}/hooks/git/{id} | Delete a Git hook in a repository
[**repoDeleteHook**](RepositoryApi.md#repoDeleteHook) | **DELETE** /repos/{owner}/{repo}/hooks/{id} | Delete a hook in a repository
[**repoDeleteKey**](RepositoryApi.md#repoDeleteKey) | **DELETE** /repos/{owner}/{repo}/keys/{id} | Delete a key from a repository
[**repoDeletePullReview**](RepositoryApi.md#repoDeletePullReview) | **DELETE** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Delete a specific review from a pull request
[**repoDeleteRelease**](RepositoryApi.md#repoDeleteRelease) | **DELETE** /repos/{owner}/{repo}/releases/{id} | Delete a release
[**repoDeleteReleaseAttachment**](RepositoryApi.md#repoDeleteReleaseAttachment) | **DELETE** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Delete a release attachment
[**repoDeleteReleaseByTag**](RepositoryApi.md#repoDeleteReleaseByTag) | **DELETE** /repos/{owner}/{repo}/releases/tags/{tag} | Delete a release by tag name
[**repoDeleteTag**](RepositoryApi.md#repoDeleteTag) | **DELETE** /repos/{owner}/{repo}/tags/{tag} | Delete a repository&#x27;s tag by name
[**repoDeleteTeam**](RepositoryApi.md#repoDeleteTeam) | **DELETE** /repos/{owner}/{repo}/teams/{team} | Delete a team from a repository
[**repoDeleteTopic**](RepositoryApi.md#repoDeleteTopic) | **DELETE** /repos/{owner}/{repo}/topics/{topic} | Delete a topic from a repository
[**repoDismissPullReview**](RepositoryApi.md#repoDismissPullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals | Dismiss a review for a pull request
[**repoDownloadPullDiff**](RepositoryApi.md#repoDownloadPullDiff) | **GET** /repos/{owner}/{repo}/pulls/{index}.diff | Get a pull request diff
[**repoDownloadPullPatch**](RepositoryApi.md#repoDownloadPullPatch) | **GET** /repos/{owner}/{repo}/pulls/{index}.patch | Get a pull request patch file
[**repoEdit**](RepositoryApi.md#repoEdit) | **PATCH** /repos/{owner}/{repo} | Edit a repository&#x27;s properties. Only fields that are set will be changed.
[**repoEditBranchProtection**](RepositoryApi.md#repoEditBranchProtection) | **PATCH** /repos/{owner}/{repo}/branch_protections/{name} | Edit a branch protections for a repository. Only fields that are set will be changed
[**repoEditGitHook**](RepositoryApi.md#repoEditGitHook) | **PATCH** /repos/{owner}/{repo}/hooks/git/{id} | Edit a Git hook in a repository
[**repoEditHook**](RepositoryApi.md#repoEditHook) | **PATCH** /repos/{owner}/{repo}/hooks/{id} | Edit a hook in a repository
[**repoEditPullRequest**](RepositoryApi.md#repoEditPullRequest) | **PATCH** /repos/{owner}/{repo}/pulls/{index} | Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
[**repoEditRelease**](RepositoryApi.md#repoEditRelease) | **PATCH** /repos/{owner}/{repo}/releases/{id} | Update a release
[**repoEditReleaseAttachment**](RepositoryApi.md#repoEditReleaseAttachment) | **PATCH** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Edit a release attachment
[**repoGet**](RepositoryApi.md#repoGet) | **GET** /repos/{owner}/{repo} | Get a repository
[**repoGetAllCommits**](RepositoryApi.md#repoGetAllCommits) | **GET** /repos/{owner}/{repo}/commits | Get a list of all commits from a repository
[**repoGetArchive**](RepositoryApi.md#repoGetArchive) | **GET** /repos/{owner}/{repo}/archive/{archive} | Get an archive of a repository
[**repoGetAssignees**](RepositoryApi.md#repoGetAssignees) | **GET** /repos/{owner}/{repo}/assignees | Return all users that have write access and can be assigned to issues
[**repoGetBranch**](RepositoryApi.md#repoGetBranch) | **GET** /repos/{owner}/{repo}/branches/{branch} | Retrieve a specific branch from a repository, including its effective branch protection
[**repoGetBranchProtection**](RepositoryApi.md#repoGetBranchProtection) | **GET** /repos/{owner}/{repo}/branch_protections/{name} | Get a specific branch protection for the repository
[**repoGetByID**](RepositoryApi.md#repoGetByID) | **GET** /repositories/{id} | Get a repository by id
[**repoGetCombinedStatusByRef**](RepositoryApi.md#repoGetCombinedStatusByRef) | **GET** /repos/{owner}/{repo}/commits/{ref}/status | Get a commit&#x27;s combined status, by branch/tag/commit reference
[**repoGetContents**](RepositoryApi.md#repoGetContents) | **GET** /repos/{owner}/{repo}/contents/{filepath} | Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
[**repoGetContentsList**](RepositoryApi.md#repoGetContentsList) | **GET** /repos/{owner}/{repo}/contents | Gets the metadata of all the entries of the root dir
[**repoGetEditorConfig**](RepositoryApi.md#repoGetEditorConfig) | **GET** /repos/{owner}/{repo}/editorconfig/{filepath} | Get the EditorConfig definitions of a file in a repository
[**repoGetGitHook**](RepositoryApi.md#repoGetGitHook) | **GET** /repos/{owner}/{repo}/hooks/git/{id} | Get a Git hook
[**repoGetHook**](RepositoryApi.md#repoGetHook) | **GET** /repos/{owner}/{repo}/hooks/{id} | Get a hook
[**repoGetIssueTemplates**](RepositoryApi.md#repoGetIssueTemplates) | **GET** /repos/{owner}/{repo}/issue_templates | Get available issue templates for a repository
[**repoGetKey**](RepositoryApi.md#repoGetKey) | **GET** /repos/{owner}/{repo}/keys/{id} | Get a repository&#x27;s key by id
[**repoGetLanguages**](RepositoryApi.md#repoGetLanguages) | **GET** /repos/{owner}/{repo}/languages | Get languages and number of bytes of code written
[**repoGetPullRequest**](RepositoryApi.md#repoGetPullRequest) | **GET** /repos/{owner}/{repo}/pulls/{index} | Get a pull request
[**repoGetPullRequestCommits**](RepositoryApi.md#repoGetPullRequestCommits) | **GET** /repos/{owner}/{repo}/pulls/{index}/commits | Get commits for a pull request
[**repoGetPullReview**](RepositoryApi.md#repoGetPullReview) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Get a specific review for a pull request
[**repoGetPullReviewComments**](RepositoryApi.md#repoGetPullReviewComments) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments | Get a specific review for a pull request
[**repoGetRawFile**](RepositoryApi.md#repoGetRawFile) | **GET** /repos/{owner}/{repo}/raw/{filepath} | Get a file from a repository
[**repoGetRelease**](RepositoryApi.md#repoGetRelease) | **GET** /repos/{owner}/{repo}/releases/{id} | Get a release
[**repoGetReleaseAttachment**](RepositoryApi.md#repoGetReleaseAttachment) | **GET** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Get a release attachment
[**repoGetReleaseByTag**](RepositoryApi.md#repoGetReleaseByTag) | **GET** /repos/{owner}/{repo}/releases/tags/{tag} | Get a release by tag name
[**repoGetReviewers**](RepositoryApi.md#repoGetReviewers) | **GET** /repos/{owner}/{repo}/reviewers | Return all users that can be requested to review in this repo
[**repoGetSingleCommit**](RepositoryApi.md#repoGetSingleCommit) | **GET** /repos/{owner}/{repo}/git/commits/{sha} | Get a single commit from a repository
[**repoGetTag**](RepositoryApi.md#repoGetTag) | **GET** /repos/{owner}/{repo}/tags/{tag} | Get the tag of a repository by tag name
[**repoListAllGitRefs**](RepositoryApi.md#repoListAllGitRefs) | **GET** /repos/{owner}/{repo}/git/refs | Get specified ref or filtered repository&#x27;s refs
[**repoListBranchProtection**](RepositoryApi.md#repoListBranchProtection) | **GET** /repos/{owner}/{repo}/branch_protections | List branch protections for a repository
[**repoListBranches**](RepositoryApi.md#repoListBranches) | **GET** /repos/{owner}/{repo}/branches | List a repository&#x27;s branches
[**repoListCollaborators**](RepositoryApi.md#repoListCollaborators) | **GET** /repos/{owner}/{repo}/collaborators | List a repository&#x27;s collaborators
[**repoListGitHooks**](RepositoryApi.md#repoListGitHooks) | **GET** /repos/{owner}/{repo}/hooks/git | List the Git hooks in a repository
[**repoListGitRefs**](RepositoryApi.md#repoListGitRefs) | **GET** /repos/{owner}/{repo}/git/refs/{ref} | Get specified ref or filtered repository&#x27;s refs
[**repoListHooks**](RepositoryApi.md#repoListHooks) | **GET** /repos/{owner}/{repo}/hooks | List the hooks in a repository
[**repoListKeys**](RepositoryApi.md#repoListKeys) | **GET** /repos/{owner}/{repo}/keys | List a repository&#x27;s keys
[**repoListPullRequests**](RepositoryApi.md#repoListPullRequests) | **GET** /repos/{owner}/{repo}/pulls | List a repo&#x27;s pull requests
[**repoListPullReviews**](RepositoryApi.md#repoListPullReviews) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews | List all reviews for a pull request
[**repoListReleaseAttachments**](RepositoryApi.md#repoListReleaseAttachments) | **GET** /repos/{owner}/{repo}/releases/{id}/assets | List release&#x27;s attachments
[**repoListReleases**](RepositoryApi.md#repoListReleases) | **GET** /repos/{owner}/{repo}/releases | List a repo&#x27;s releases
[**repoListStargazers**](RepositoryApi.md#repoListStargazers) | **GET** /repos/{owner}/{repo}/stargazers | List a repo&#x27;s stargazers
[**repoListStatuses**](RepositoryApi.md#repoListStatuses) | **GET** /repos/{owner}/{repo}/statuses/{sha} | Get a commit&#x27;s statuses
[**repoListStatusesByRef**](RepositoryApi.md#repoListStatusesByRef) | **GET** /repos/{owner}/{repo}/commits/{ref}/statuses | Get a commit&#x27;s statuses, by branch/tag/commit reference
[**repoListSubscribers**](RepositoryApi.md#repoListSubscribers) | **GET** /repos/{owner}/{repo}/subscribers | List a repo&#x27;s watchers
[**repoListTags**](RepositoryApi.md#repoListTags) | **GET** /repos/{owner}/{repo}/tags | List a repository&#x27;s tags
[**repoListTeams**](RepositoryApi.md#repoListTeams) | **GET** /repos/{owner}/{repo}/teams | List a repository&#x27;s teams
[**repoListTopics**](RepositoryApi.md#repoListTopics) | **GET** /repos/{owner}/{repo}/topics | Get list of topics that a repository has
[**repoMergePullRequest**](RepositoryApi.md#repoMergePullRequest) | **POST** /repos/{owner}/{repo}/pulls/{index}/merge | Merge a pull request
[**repoMigrate**](RepositoryApi.md#repoMigrate) | **POST** /repos/migrate | Migrate a remote git repository
[**repoMirrorSync**](RepositoryApi.md#repoMirrorSync) | **POST** /repos/{owner}/{repo}/mirror-sync | Sync a mirrored repository
[**repoPullRequestIsMerged**](RepositoryApi.md#repoPullRequestIsMerged) | **GET** /repos/{owner}/{repo}/pulls/{index}/merge | Check if a pull request has been merged
[**repoSearch**](RepositoryApi.md#repoSearch) | **GET** /repos/search | Search for repositories
[**repoSigningKey**](RepositoryApi.md#repoSigningKey) | **GET** /repos/{owner}/{repo}/signing-key.gpg | Get signing-key.gpg for given repository
[**repoSubmitPullReview**](RepositoryApi.md#repoSubmitPullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Submit a pending review to an pull request
[**repoTestHook**](RepositoryApi.md#repoTestHook) | **POST** /repos/{owner}/{repo}/hooks/{id}/tests | Test a push webhook
[**repoTrackedTimes**](RepositoryApi.md#repoTrackedTimes) | **GET** /repos/{owner}/{repo}/times | List a repo&#x27;s tracked times
[**repoTransfer**](RepositoryApi.md#repoTransfer) | **POST** /repos/{owner}/{repo}/transfer | Transfer a repo ownership
[**repoUnDismissPullReview**](RepositoryApi.md#repoUnDismissPullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals | Cancel to dismiss a review for a pull request
[**repoUpdateFile**](RepositoryApi.md#repoUpdateFile) | **PUT** /repos/{owner}/{repo}/contents/{filepath} | Update a file in a repository
[**repoUpdatePullRequest**](RepositoryApi.md#repoUpdatePullRequest) | **POST** /repos/{owner}/{repo}/pulls/{index}/update | Merge PR&#x27;s baseBranch into headBranch
[**repoUpdateTopics**](RepositoryApi.md#repoUpdateTopics) | **PUT** /repos/{owner}/{repo}/topics | Replace list of topics for a repository
[**topicSearch**](RepositoryApi.md#topicSearch) | **GET** /topics/search | search topics via keyword
[**userCurrentCheckSubscription**](RepositoryApi.md#userCurrentCheckSubscription) | **GET** /repos/{owner}/{repo}/subscription | Check if the current user is watching a repo
[**userCurrentDeleteSubscription**](RepositoryApi.md#userCurrentDeleteSubscription) | **DELETE** /repos/{owner}/{repo}/subscription | Unwatch a repo
[**userCurrentPutSubscription**](RepositoryApi.md#userCurrentPutSubscription) | **PUT** /repos/{owner}/{repo}/subscription | Watch a repo
[**userTrackedTimes**](RepositoryApi.md#userTrackedTimes) | **GET** /repos/{owner}/{repo}/times/{user} | List a user&#x27;s tracked times in a repo

<a name="createCurrentUserRepo"></a>
# **createCurrentUserRepo**
> Repository createCurrentUserRepo(opts)

Create a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let opts = { 
  'body': new dcs.CreateRepoOption() // CreateRepoOption | 
};
apiInstance.createCurrentUserRepo(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateRepoOption**](CreateRepoOption.md)|  | [optional] 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFork"></a>
# **createFork**
> Repository createFork(owner, repo, opts)

Fork a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo to fork
let repo = "repo_example"; // String | name of the repo to fork
let opts = { 
  'body': new dcs.CreateForkOption() // CreateForkOption | 
};
apiInstance.createFork(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo to fork | 
 **repo** | **String**| name of the repo to fork | 
 **body** | [**CreateForkOption**](CreateForkOption.md)|  | [optional] 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="generateRepo"></a>
# **generateRepo**
> Repository generateRepo(templateOwner, templateRepo, opts)

Create a repository using a template

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let templateOwner = "templateOwner_example"; // String | name of the template repository owner
let templateRepo = "templateRepo_example"; // String | name of the template repository
let opts = { 
  'body': new dcs.GenerateRepoOption() // GenerateRepoOption | 
};
apiInstance.generateRepo(templateOwner, templateRepo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateOwner** | **String**| name of the template repository owner | 
 **templateRepo** | **String**| name of the template repository | 
 **body** | [**GenerateRepoOption**](GenerateRepoOption.md)|  | [optional] 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAnnotatedTag"></a>
# **getAnnotatedTag**
> AnnotatedTag getAnnotatedTag(owner, repo, sha)

Gets the tag object of an annotated tag (not lightweight tags)

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let sha = "sha_example"; // String | sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.

apiInstance.getAnnotatedTag(owner, repo, sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **sha** | **String**| sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags. | 

### Return type

[**AnnotatedTag**](AnnotatedTag.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlob"></a>
# **getBlob**
> GitBlobResponse getBlob(owner, repo, sha)

Gets the blob of a repository.

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let sha = "sha_example"; // String | sha of the commit

apiInstance.getBlob(owner, repo, sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **sha** | **String**| sha of the commit | 

### Return type

[**GitBlobResponse**](GitBlobResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTree"></a>
# **getTree**
> GitTreeResponse getTree(owner, repo, sha, opts)

Gets the tree of a repository.

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let sha = "sha_example"; // String | sha of the commit
let opts = { 
  'recursive': true, // Boolean | show all directories and files
  'page': 56, // Number | page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page
  'perPage': 56 // Number | number of items per page
};
apiInstance.getTree(owner, repo, sha, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **sha** | **String**| sha of the commit | 
 **recursive** | **Boolean**| show all directories and files | [optional] 
 **page** | **Number**| page number; the &#x27;truncated&#x27; field in the response will be true if there are still more items after this page, false if the last page | [optional] 
 **perPage** | **Number**| number of items per page | [optional] 

### Return type

[**GitTreeResponse**](GitTreeResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listForks"></a>
# **listForks**
> [Repository] listForks(owner, repo, opts)

List a repository&#x27;s forks

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.listForks(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Repository]**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoAddCollaborator"></a>
# **repoAddCollaborator**
> repoAddCollaborator(owner, repo, collaborator, opts)

Add a collaborator to a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let collaborator = "collaborator_example"; // String | username of the collaborator to add
let opts = { 
  'body': new dcs.AddCollaboratorOption() // AddCollaboratorOption | 
};
apiInstance.repoAddCollaborator(owner, repo, collaborator, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **collaborator** | **String**| username of the collaborator to add | 
 **body** | [**AddCollaboratorOption**](AddCollaboratorOption.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: Not defined

<a name="repoAddTeam"></a>
# **repoAddTeam**
> repoAddTeam(owner, repo, team)

Add a team to a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let team = "team_example"; // String | team name

apiInstance.repoAddTeam(owner, repo, team, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **team** | **String**| team name | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoAddTopc"></a>
# **repoAddTopc**
> repoAddTopc(owner, repo, topic)

Add a topic to a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let topic = "topic_example"; // String | name of the topic to add

apiInstance.repoAddTopc(owner, repo, topic, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **topic** | **String**| name of the topic to add | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoCheckCollaborator"></a>
# **repoCheckCollaborator**
> repoCheckCollaborator(owner, repo, collaborator)

Check if a user is a collaborator of a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let collaborator = "collaborator_example"; // String | username of the collaborator

apiInstance.repoCheckCollaborator(owner, repo, collaborator, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **collaborator** | **String**| username of the collaborator | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoCheckTeam"></a>
# **repoCheckTeam**
> Team repoCheckTeam(owner, repo, team)

Check if a team is assigned to a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let team = "team_example"; // String | team name

apiInstance.repoCheckTeam(owner, repo, team, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **team** | **String**| team name | 

### Return type

[**Team**](Team.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoCreateBranch"></a>
# **repoCreateBranch**
> Branch repoCreateBranch(owner, repo, opts)

Create a branch

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateBranchRepoOption() // CreateBranchRepoOption | 
};
apiInstance.repoCreateBranch(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**CreateBranchRepoOption**](CreateBranchRepoOption.md)|  | [optional] 

### Return type

[**Branch**](Branch.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoCreateBranchProtection"></a>
# **repoCreateBranchProtection**
> BranchProtection repoCreateBranchProtection(owner, repo, opts)

Create a branch protections for a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateBranchProtectionOption() // CreateBranchProtectionOption | 
};
apiInstance.repoCreateBranchProtection(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**CreateBranchProtectionOption**](CreateBranchProtectionOption.md)|  | [optional] 

### Return type

[**BranchProtection**](BranchProtection.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoCreateFile"></a>
# **repoCreateFile**
> FileResponse repoCreateFile(body, owner, repo, filepath)

Create a file in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let body = new dcs.CreateFileOptions(); // CreateFileOptions | 
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let filepath = "filepath_example"; // String | path of the file to create

apiInstance.repoCreateFile(body, owner, repo, filepath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateFileOptions**](CreateFileOptions.md)|  | 
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **filepath** | **String**| path of the file to create | 

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoCreateHook"></a>
# **repoCreateHook**
> Hook repoCreateHook(owner, repo, opts)

Create a hook

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateHookOption() // CreateHookOption | 
};
apiInstance.repoCreateHook(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**CreateHookOption**](CreateHookOption.md)|  | [optional] 

### Return type

[**Hook**](Hook.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoCreateKey"></a>
# **repoCreateKey**
> DeployKey repoCreateKey(owner, repo, opts)

Add a key to a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateKeyOption() // CreateKeyOption | 
};
apiInstance.repoCreateKey(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**CreateKeyOption**](CreateKeyOption.md)|  | [optional] 

### Return type

[**DeployKey**](DeployKey.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoCreatePullRequest"></a>
# **repoCreatePullRequest**
> PullRequest repoCreatePullRequest(owner, repo, opts)

Create a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreatePullRequestOption() // CreatePullRequestOption | 
};
apiInstance.repoCreatePullRequest(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**CreatePullRequestOption**](CreatePullRequestOption.md)|  | [optional] 

### Return type

[**PullRequest**](PullRequest.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoCreatePullReview"></a>
# **repoCreatePullReview**
> PullReview repoCreatePullReview(body, owner, repo, index)

Create a review to an pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let body = new dcs.CreatePullReviewOptions(); // CreatePullReviewOptions | 
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request

apiInstance.repoCreatePullReview(body, owner, repo, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreatePullReviewOptions**](CreatePullReviewOptions.md)|  | 
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 

### Return type

[**PullReview**](PullReview.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoCreatePullReviewRequests"></a>
# **repoCreatePullReviewRequests**
> [PullReview] repoCreatePullReviewRequests(body, owner, repo, index)

create review requests for a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let body = new dcs.PullReviewRequestOptions(); // PullReviewRequestOptions | 
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request

apiInstance.repoCreatePullReviewRequests(body, owner, repo, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PullReviewRequestOptions**](PullReviewRequestOptions.md)|  | 
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 

### Return type

[**[PullReview]**](PullReview.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoCreateRelease"></a>
# **repoCreateRelease**
> Release repoCreateRelease(owner, repo, opts)

Create a release

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateReleaseOption() // CreateReleaseOption | 
};
apiInstance.repoCreateRelease(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**CreateReleaseOption**](CreateReleaseOption.md)|  | [optional] 

### Return type

[**Release**](Release.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoCreateReleaseAttachment"></a>
# **repoCreateReleaseAttachment**
> Attachment repoCreateReleaseAttachment(attachment, owner, repo, id, opts)

Create a release attachment

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let attachment = "attachment_example"; // Blob | 
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release
let opts = { 
  'name': "name_example" // String | name of the attachment
};
apiInstance.repoCreateReleaseAttachment(attachment, owner, repo, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachment** | **Blob**|  | 
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release | 
 **name** | **String**| name of the attachment | [optional] 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="repoCreateStatus"></a>
# **repoCreateStatus**
> CommitStatus repoCreateStatus(owner, repo, sha, opts)

Create a commit status

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let sha = "sha_example"; // String | sha of the commit
let opts = { 
  'body': new dcs.CreateStatusOption() // CreateStatusOption | 
};
apiInstance.repoCreateStatus(owner, repo, sha, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **sha** | **String**| sha of the commit | 
 **body** | [**CreateStatusOption**](CreateStatusOption.md)|  | [optional] 

### Return type

[**CommitStatus**](CommitStatus.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoCreateTag"></a>
# **repoCreateTag**
> Tag repoCreateTag(owner, repo, opts)

Create a new git tag in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateTagOption() // CreateTagOption | 
};
apiInstance.repoCreateTag(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**CreateTagOption**](CreateTagOption.md)|  | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoDelete"></a>
# **repoDelete**
> repoDelete(owner, repo)

Delete a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo to delete
let repo = "repo_example"; // String | name of the repo to delete

apiInstance.repoDelete(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo to delete | 
 **repo** | **String**| name of the repo to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteBranch"></a>
# **repoDeleteBranch**
> repoDeleteBranch(owner, repo, branch)

Delete a specific branch from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let branch = "branch_example"; // String | branch to delete

apiInstance.repoDeleteBranch(owner, repo, branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **branch** | **String**| branch to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteBranchProtection"></a>
# **repoDeleteBranchProtection**
> repoDeleteBranchProtection(owner, repo, name)

Delete a specific branch protection for the repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let name = "name_example"; // String | name of protected branch

apiInstance.repoDeleteBranchProtection(owner, repo, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **name** | **String**| name of protected branch | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteCollaborator"></a>
# **repoDeleteCollaborator**
> repoDeleteCollaborator(owner, repo, collaborator)

Delete a collaborator from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let collaborator = "collaborator_example"; // String | username of the collaborator to delete

apiInstance.repoDeleteCollaborator(owner, repo, collaborator, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **collaborator** | **String**| username of the collaborator to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteGitHook"></a>
# **repoDeleteGitHook**
> repoDeleteGitHook(owner, repo, id)

Delete a Git hook in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = "id_example"; // String | id of the hook to get

apiInstance.repoDeleteGitHook(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **String**| id of the hook to get | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteHook"></a>
# **repoDeleteHook**
> repoDeleteHook(owner, repo, id)

Delete a hook in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the hook to delete

apiInstance.repoDeleteHook(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the hook to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteKey"></a>
# **repoDeleteKey**
> repoDeleteKey(owner, repo, id)

Delete a key from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the key to delete

apiInstance.repoDeleteKey(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the key to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeletePullReview"></a>
# **repoDeletePullReview**
> repoDeletePullReview(owner, repo, index, id)

Delete a specific review from a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request
let id = 789; // Number | id of the review

apiInstance.repoDeletePullReview(owner, repo, index, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 
 **id** | **Number**| id of the review | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteRelease"></a>
# **repoDeleteRelease**
> repoDeleteRelease(owner, repo, id)

Delete a release

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release to delete

apiInstance.repoDeleteRelease(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteReleaseAttachment"></a>
# **repoDeleteReleaseAttachment**
> repoDeleteReleaseAttachment(owner, repo, id, attachmentId)

Delete a release attachment

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release
let attachmentId = 789; // Number | id of the attachment to delete

apiInstance.repoDeleteReleaseAttachment(owner, repo, id, attachmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release | 
 **attachmentId** | **Number**| id of the attachment to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteReleaseByTag"></a>
# **repoDeleteReleaseByTag**
> repoDeleteReleaseByTag(owner, repo, tag)

Delete a release by tag name

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let tag = "tag_example"; // String | tag name of the release to delete

apiInstance.repoDeleteReleaseByTag(owner, repo, tag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **tag** | **String**| tag name of the release to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteTag"></a>
# **repoDeleteTag**
> repoDeleteTag(owner, repo, tag)

Delete a repository&#x27;s tag by name

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let tag = "tag_example"; // String | name of tag to delete

apiInstance.repoDeleteTag(owner, repo, tag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **tag** | **String**| name of tag to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteTeam"></a>
# **repoDeleteTeam**
> repoDeleteTeam(owner, repo, team)

Delete a team from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let team = "team_example"; // String | team name

apiInstance.repoDeleteTeam(owner, repo, team, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **team** | **String**| team name | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDeleteTopic"></a>
# **repoDeleteTopic**
> repoDeleteTopic(owner, repo, topic)

Delete a topic from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let topic = "topic_example"; // String | name of the topic to delete

apiInstance.repoDeleteTopic(owner, repo, topic, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **topic** | **String**| name of the topic to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoDismissPullReview"></a>
# **repoDismissPullReview**
> PullReview repoDismissPullReview(body, owner, repo, index, id)

Dismiss a review for a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let body = new dcs.DismissPullReviewOptions(); // DismissPullReviewOptions | 
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request
let id = 789; // Number | id of the review

apiInstance.repoDismissPullReview(body, owner, repo, index, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DismissPullReviewOptions**](DismissPullReviewOptions.md)|  | 
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 
 **id** | **Number**| id of the review | 

### Return type

[**PullReview**](PullReview.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoDownloadPullDiff"></a>
# **repoDownloadPullDiff**
> &#x27;String&#x27; repoDownloadPullDiff(owner, repo, index)

Get a pull request diff

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request to get

apiInstance.repoDownloadPullDiff(owner, repo, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request to get | 

### Return type

**&#x27;String&#x27;**

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="repoDownloadPullPatch"></a>
# **repoDownloadPullPatch**
> &#x27;String&#x27; repoDownloadPullPatch(owner, repo, index)

Get a pull request patch file

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request to get

apiInstance.repoDownloadPullPatch(owner, repo, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request to get | 

### Return type

**&#x27;String&#x27;**

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="repoEdit"></a>
# **repoEdit**
> Repository repoEdit(owner, repo, opts)

Edit a repository&#x27;s properties. Only fields that are set will be changed.

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo to edit
let repo = "repo_example"; // String | name of the repo to edit
let opts = { 
  'body': new dcs.EditRepoOption() // EditRepoOption | Properties of a repo that you can edit
};
apiInstance.repoEdit(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo to edit | 
 **repo** | **String**| name of the repo to edit | 
 **body** | [**EditRepoOption**](EditRepoOption.md)| Properties of a repo that you can edit | [optional] 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoEditBranchProtection"></a>
# **repoEditBranchProtection**
> BranchProtection repoEditBranchProtection(owner, repo, name, opts)

Edit a branch protections for a repository. Only fields that are set will be changed

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let name = "name_example"; // String | name of protected branch
let opts = { 
  'body': new dcs.EditBranchProtectionOption() // EditBranchProtectionOption | 
};
apiInstance.repoEditBranchProtection(owner, repo, name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **name** | **String**| name of protected branch | 
 **body** | [**EditBranchProtectionOption**](EditBranchProtectionOption.md)|  | [optional] 

### Return type

[**BranchProtection**](BranchProtection.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoEditGitHook"></a>
# **repoEditGitHook**
> GitHook repoEditGitHook(owner, repo, id, opts)

Edit a Git hook in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = "id_example"; // String | id of the hook to get
let opts = { 
  'body': new dcs.EditGitHookOption() // EditGitHookOption | 
};
apiInstance.repoEditGitHook(owner, repo, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **String**| id of the hook to get | 
 **body** | [**EditGitHookOption**](EditGitHookOption.md)|  | [optional] 

### Return type

[**GitHook**](GitHook.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoEditHook"></a>
# **repoEditHook**
> Hook repoEditHook(owner, repo, id, opts)

Edit a hook in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | index of the hook
let opts = { 
  'body': new dcs.EditHookOption() // EditHookOption | 
};
apiInstance.repoEditHook(owner, repo, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| index of the hook | 
 **body** | [**EditHookOption**](EditHookOption.md)|  | [optional] 

### Return type

[**Hook**](Hook.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoEditPullRequest"></a>
# **repoEditPullRequest**
> PullRequest repoEditPullRequest(owner, repo, index, opts)

Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request to edit
let opts = { 
  'body': new dcs.EditPullRequestOption() // EditPullRequestOption | 
};
apiInstance.repoEditPullRequest(owner, repo, index, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request to edit | 
 **body** | [**EditPullRequestOption**](EditPullRequestOption.md)|  | [optional] 

### Return type

[**PullRequest**](PullRequest.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoEditRelease"></a>
# **repoEditRelease**
> Release repoEditRelease(owner, repo, id, opts)

Update a release

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release to edit
let opts = { 
  'body': new dcs.EditReleaseOption() // EditReleaseOption | 
};
apiInstance.repoEditRelease(owner, repo, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release to edit | 
 **body** | [**EditReleaseOption**](EditReleaseOption.md)|  | [optional] 

### Return type

[**Release**](Release.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoEditReleaseAttachment"></a>
# **repoEditReleaseAttachment**
> Attachment repoEditReleaseAttachment(owner, repo, id, attachmentId, opts)

Edit a release attachment

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release
let attachmentId = 789; // Number | id of the attachment to edit
let opts = { 
  'body': new dcs.EditAttachmentOptions() // EditAttachmentOptions | 
};
apiInstance.repoEditReleaseAttachment(owner, repo, id, attachmentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release | 
 **attachmentId** | **Number**| id of the attachment to edit | 
 **body** | [**EditAttachmentOptions**](EditAttachmentOptions.md)|  | [optional] 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoGet"></a>
# **repoGet**
> Repository repoGet(owner, repo)

Get a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoGet(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetAllCommits"></a>
# **repoGetAllCommits**
> [Commit] repoGetAllCommits(owner, repo, opts)

Get a list of all commits from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'sha': "sha_example", // String | SHA or branch to start listing commits from (usually 'master')
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoGetAllCommits(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **sha** | **String**| SHA or branch to start listing commits from (usually &#x27;master&#x27;) | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Commit]**](Commit.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetArchive"></a>
# **repoGetArchive**
> repoGetArchive(owner, repo, archive)

Get an archive of a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let archive = "archive_example"; // String | the git reference for download with attached archive format (e.g. master.zip)

apiInstance.repoGetArchive(owner, repo, archive, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **archive** | **String**| the git reference for download with attached archive format (e.g. master.zip) | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoGetAssignees"></a>
# **repoGetAssignees**
> [User] repoGetAssignees(owner, repo)

Return all users that have write access and can be assigned to issues

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoGetAssignees(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**[User]**](User.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetBranch"></a>
# **repoGetBranch**
> Branch repoGetBranch(owner, repo, branch)

Retrieve a specific branch from a repository, including its effective branch protection

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let branch = "branch_example"; // String | branch to get

apiInstance.repoGetBranch(owner, repo, branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **branch** | **String**| branch to get | 

### Return type

[**Branch**](Branch.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetBranchProtection"></a>
# **repoGetBranchProtection**
> BranchProtection repoGetBranchProtection(owner, repo, name)

Get a specific branch protection for the repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let name = "name_example"; // String | name of protected branch

apiInstance.repoGetBranchProtection(owner, repo, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **name** | **String**| name of protected branch | 

### Return type

[**BranchProtection**](BranchProtection.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetByID"></a>
# **repoGetByID**
> Repository repoGetByID(id)

Get a repository by id

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let id = 789; // Number | id of the repo to get

apiInstance.repoGetByID(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of the repo to get | 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetCombinedStatusByRef"></a>
# **repoGetCombinedStatusByRef**
> CombinedStatus repoGetCombinedStatusByRef(owner, repo, ref, opts)

Get a commit&#x27;s combined status, by branch/tag/commit reference

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let ref = "ref_example"; // String | name of branch/tag/commit
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoGetCombinedStatusByRef(owner, repo, ref, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **ref** | **String**| name of branch/tag/commit | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**CombinedStatus**](CombinedStatus.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetContents"></a>
# **repoGetContents**
> ContentsResponse repoGetContents(owner, repo, filepath, opts)

Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let filepath = "filepath_example"; // String | path of the dir, file, symlink or submodule in the repo
let opts = { 
  'ref': "ref_example" // String | The name of the commit/branch/tag. Default the repository’s default branch (usually master)
};
apiInstance.repoGetContents(owner, repo, filepath, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **filepath** | **String**| path of the dir, file, symlink or submodule in the repo | 
 **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] 

### Return type

[**ContentsResponse**](ContentsResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetContentsList"></a>
# **repoGetContentsList**
> [ContentsResponse] repoGetContentsList(owner, repo, opts)

Gets the metadata of all the entries of the root dir

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'ref': "ref_example" // String | The name of the commit/branch/tag. Default the repository’s default branch (usually master)
};
apiInstance.repoGetContentsList(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] 

### Return type

[**[ContentsResponse]**](ContentsResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetEditorConfig"></a>
# **repoGetEditorConfig**
> repoGetEditorConfig(owner, repo, filepath)

Get the EditorConfig definitions of a file in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let filepath = "filepath_example"; // String | filepath of file to get

apiInstance.repoGetEditorConfig(owner, repo, filepath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **filepath** | **String**| filepath of file to get | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoGetGitHook"></a>
# **repoGetGitHook**
> GitHook repoGetGitHook(owner, repo, id)

Get a Git hook

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = "id_example"; // String | id of the hook to get

apiInstance.repoGetGitHook(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **String**| id of the hook to get | 

### Return type

[**GitHook**](GitHook.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetHook"></a>
# **repoGetHook**
> Hook repoGetHook(owner, repo, id)

Get a hook

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the hook to get

apiInstance.repoGetHook(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the hook to get | 

### Return type

[**Hook**](Hook.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetIssueTemplates"></a>
# **repoGetIssueTemplates**
> [IssueTemplate] repoGetIssueTemplates(owner, repo)

Get available issue templates for a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoGetIssueTemplates(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**[IssueTemplate]**](IssueTemplate.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetKey"></a>
# **repoGetKey**
> DeployKey repoGetKey(owner, repo, id)

Get a repository&#x27;s key by id

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the key to get

apiInstance.repoGetKey(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the key to get | 

### Return type

[**DeployKey**](DeployKey.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetLanguages"></a>
# **repoGetLanguages**
> {&#x27;String&#x27;: &#x27;Number&#x27;} repoGetLanguages(owner, repo)

Get languages and number of bytes of code written

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoGetLanguages(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

**{&#x27;String&#x27;: &#x27;Number&#x27;}**

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetPullRequest"></a>
# **repoGetPullRequest**
> PullRequest repoGetPullRequest(owner, repo, index)

Get a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request to get

apiInstance.repoGetPullRequest(owner, repo, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request to get | 

### Return type

[**PullRequest**](PullRequest.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetPullRequestCommits"></a>
# **repoGetPullRequestCommits**
> [Commit] repoGetPullRequestCommits(owner, repo, index, opts)

Get commits for a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request to get
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoGetPullRequestCommits(owner, repo, index, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request to get | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Commit]**](Commit.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetPullReview"></a>
# **repoGetPullReview**
> PullReview repoGetPullReview(owner, repo, index, id)

Get a specific review for a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request
let id = 789; // Number | id of the review

apiInstance.repoGetPullReview(owner, repo, index, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 
 **id** | **Number**| id of the review | 

### Return type

[**PullReview**](PullReview.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetPullReviewComments"></a>
# **repoGetPullReviewComments**
> [PullReviewComment] repoGetPullReviewComments(owner, repo, index, id)

Get a specific review for a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request
let id = 789; // Number | id of the review

apiInstance.repoGetPullReviewComments(owner, repo, index, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 
 **id** | **Number**| id of the review | 

### Return type

[**[PullReviewComment]**](PullReviewComment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetRawFile"></a>
# **repoGetRawFile**
> repoGetRawFile(owner, repo, filepath, opts)

Get a file from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let filepath = "filepath_example"; // String | filepath of the file to get
let opts = { 
  'ref': "ref_example" // String | The name of the commit/branch/tag. Default the repository’s default branch (usually master)
};
apiInstance.repoGetRawFile(owner, repo, filepath, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **filepath** | **String**| filepath of the file to get | 
 **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoGetRelease"></a>
# **repoGetRelease**
> Release repoGetRelease(owner, repo, id)

Get a release

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release to get

apiInstance.repoGetRelease(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release to get | 

### Return type

[**Release**](Release.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetReleaseAttachment"></a>
# **repoGetReleaseAttachment**
> Attachment repoGetReleaseAttachment(owner, repo, id, attachmentId)

Get a release attachment

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release
let attachmentId = 789; // Number | id of the attachment to get

apiInstance.repoGetReleaseAttachment(owner, repo, id, attachmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release | 
 **attachmentId** | **Number**| id of the attachment to get | 

### Return type

[**Attachment**](Attachment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetReleaseByTag"></a>
# **repoGetReleaseByTag**
> Release repoGetReleaseByTag(owner, repo, tag)

Get a release by tag name

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let tag = "tag_example"; // String | tag name of the release to get

apiInstance.repoGetReleaseByTag(owner, repo, tag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **tag** | **String**| tag name of the release to get | 

### Return type

[**Release**](Release.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetReviewers"></a>
# **repoGetReviewers**
> [User] repoGetReviewers(owner, repo)

Return all users that can be requested to review in this repo

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoGetReviewers(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**[User]**](User.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetSingleCommit"></a>
# **repoGetSingleCommit**
> Commit repoGetSingleCommit(owner, repo, sha)

Get a single commit from a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let sha = "sha_example"; // String | a git ref or commit sha

apiInstance.repoGetSingleCommit(owner, repo, sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **sha** | **String**| a git ref or commit sha | 

### Return type

[**Commit**](Commit.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoGetTag"></a>
# **repoGetTag**
> Tag repoGetTag(owner, repo, tag)

Get the tag of a repository by tag name

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let tag = "tag_example"; // String | name of tag

apiInstance.repoGetTag(owner, repo, tag, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **tag** | **String**| name of tag | 

### Return type

[**Tag**](Tag.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListAllGitRefs"></a>
# **repoListAllGitRefs**
> [Reference] repoListAllGitRefs(owner, repo)

Get specified ref or filtered repository&#x27;s refs

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoListAllGitRefs(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**[Reference]**](Reference.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListBranchProtection"></a>
# **repoListBranchProtection**
> [BranchProtection] repoListBranchProtection(owner, repo)

List branch protections for a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoListBranchProtection(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**[BranchProtection]**](BranchProtection.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListBranches"></a>
# **repoListBranches**
> [Branch] repoListBranches(owner, repo, opts)

List a repository&#x27;s branches

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListBranches(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Branch]**](Branch.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListCollaborators"></a>
# **repoListCollaborators**
> [User] repoListCollaborators(owner, repo, opts)

List a repository&#x27;s collaborators

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListCollaborators(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListGitHooks"></a>
# **repoListGitHooks**
> [GitHook] repoListGitHooks(owner, repo)

List the Git hooks in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoListGitHooks(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**[GitHook]**](GitHook.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListGitRefs"></a>
# **repoListGitRefs**
> [Reference] repoListGitRefs(owner, repo, ref)

Get specified ref or filtered repository&#x27;s refs

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let ref = "ref_example"; // String | part or full name of the ref

apiInstance.repoListGitRefs(owner, repo, ref, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **ref** | **String**| part or full name of the ref | 

### Return type

[**[Reference]**](Reference.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListHooks"></a>
# **repoListHooks**
> [Hook] repoListHooks(owner, repo, opts)

List the hooks in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListHooks(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Hook]**](Hook.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListKeys"></a>
# **repoListKeys**
> [DeployKey] repoListKeys(owner, repo, opts)

List a repository&#x27;s keys

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'keyId': 56, // Number | the key_id to search for
  'fingerprint': "fingerprint_example", // String | fingerprint of the key
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListKeys(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **keyId** | **Number**| the key_id to search for | [optional] 
 **fingerprint** | **String**| fingerprint of the key | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[DeployKey]**](DeployKey.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListPullRequests"></a>
# **repoListPullRequests**
> [PullRequest] repoListPullRequests(owner, repo, opts)

List a repo&#x27;s pull requests

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'state': "state_example", // String | State of pull request: open or closed (optional)
  'sort': "sort_example", // String | Type of sort
  'milestone': 789, // Number | ID of the milestone
  'labels': [3.4], // [Number] | Label IDs
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListPullRequests(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **state** | **String**| State of pull request: open or closed (optional) | [optional] 
 **sort** | **String**| Type of sort | [optional] 
 **milestone** | **Number**| ID of the milestone | [optional] 
 **labels** | [**[Number]**](Number.md)| Label IDs | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[PullRequest]**](PullRequest.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListPullReviews"></a>
# **repoListPullReviews**
> [PullReview] repoListPullReviews(owner, repo, index, opts)

List all reviews for a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListPullReviews(owner, repo, index, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[PullReview]**](PullReview.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListReleaseAttachments"></a>
# **repoListReleaseAttachments**
> [Attachment] repoListReleaseAttachments(owner, repo, id)

List release&#x27;s attachments

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the release

apiInstance.repoListReleaseAttachments(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the release | 

### Return type

[**[Attachment]**](Attachment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListReleases"></a>
# **repoListReleases**
> [Release] repoListReleases(owner, repo, opts)

List a repo&#x27;s releases

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'draft': true, // Boolean | filter (exclude / include) drafts, if you dont have repo write access none will show
  'preRelease': true, // Boolean | filter (exclude / include) pre-releases
  'perPage': 56, // Number | page size of results, deprecated - use limit
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListReleases(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **draft** | **Boolean**| filter (exclude / include) drafts, if you dont have repo write access none will show | [optional] 
 **preRelease** | **Boolean**| filter (exclude / include) pre-releases | [optional] 
 **perPage** | **Number**| page size of results, deprecated - use limit | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Release]**](Release.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListStargazers"></a>
# **repoListStargazers**
> [User] repoListStargazers(owner, repo, opts)

List a repo&#x27;s stargazers

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListStargazers(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListStatuses"></a>
# **repoListStatuses**
> [CommitStatus] repoListStatuses(owner, repo, sha, opts)

Get a commit&#x27;s statuses

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let sha = "sha_example"; // String | sha of the commit
let opts = { 
  'sort': "sort_example", // String | type of sort
  'state': "state_example", // String | type of state
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListStatuses(owner, repo, sha, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **sha** | **String**| sha of the commit | 
 **sort** | **String**| type of sort | [optional] 
 **state** | **String**| type of state | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[CommitStatus]**](CommitStatus.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListStatusesByRef"></a>
# **repoListStatusesByRef**
> [CommitStatus] repoListStatusesByRef(owner, repo, ref, opts)

Get a commit&#x27;s statuses, by branch/tag/commit reference

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let ref = "ref_example"; // String | name of branch/tag/commit
let opts = { 
  'sort': "sort_example", // String | type of sort
  'state': "state_example", // String | type of state
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListStatusesByRef(owner, repo, ref, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **ref** | **String**| name of branch/tag/commit | 
 **sort** | **String**| type of sort | [optional] 
 **state** | **String**| type of state | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[CommitStatus]**](CommitStatus.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListSubscribers"></a>
# **repoListSubscribers**
> [User] repoListSubscribers(owner, repo, opts)

List a repo&#x27;s watchers

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListSubscribers(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListTags"></a>
# **repoListTags**
> [Tag] repoListTags(owner, repo, opts)

List a repository&#x27;s tags

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results, default maximum page size is 50
};
apiInstance.repoListTags(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results, default maximum page size is 50 | [optional] 

### Return type

[**[Tag]**](Tag.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListTeams"></a>
# **repoListTeams**
> [Team] repoListTeams(owner, repo)

List a repository&#x27;s teams

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoListTeams(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**[Team]**](Team.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoListTopics"></a>
# **repoListTopics**
> TopicName repoListTopics(owner, repo, opts)

Get list of topics that a repository has

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoListTopics(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**TopicName**](TopicName.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoMergePullRequest"></a>
# **repoMergePullRequest**
> repoMergePullRequest(owner, repo, index, opts)

Merge a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request to merge
let opts = { 
  'body': new dcs.MergePullRequestOption() // MergePullRequestOption | 
};
apiInstance.repoMergePullRequest(owner, repo, index, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request to merge | 
 **body** | [**MergePullRequestOption**](MergePullRequestOption.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: Not defined

<a name="repoMigrate"></a>
# **repoMigrate**
> Repository repoMigrate(opts)

Migrate a remote git repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let opts = { 
  'body': new dcs.MigrateRepoOptions() // MigrateRepoOptions | 
};
apiInstance.repoMigrate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MigrateRepoOptions**](MigrateRepoOptions.md)|  | [optional] 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoMirrorSync"></a>
# **repoMirrorSync**
> repoMirrorSync(owner, repo)

Sync a mirrored repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo to sync
let repo = "repo_example"; // String | name of the repo to sync

apiInstance.repoMirrorSync(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo to sync | 
 **repo** | **String**| name of the repo to sync | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoPullRequestIsMerged"></a>
# **repoPullRequestIsMerged**
> repoPullRequestIsMerged(owner, repo, index)

Check if a pull request has been merged

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request

apiInstance.repoPullRequestIsMerged(owner, repo, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoSearch"></a>
# **repoSearch**
> SearchResults repoSearch(opts)

Search for repositories

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let opts = { 
  'q': "q_example", // String | keyword
  'topic': true, // Boolean | Limit search to repositories with keyword as topic
  'includeDesc': true, // Boolean | include search of keyword within repository description (defaults to false)
  'uid': 789, // Number | search only for repos that the user with the given id owns or contributes to
  'priorityOwnerId': 789, // Number | repo owner to prioritize in the results
  'teamId': 789, // Number | search only for repos that belong to the given team id
  'starredBy': 789, // Number | search only for repos that the user with the given id has starred
  '_private': true, // Boolean | include private repositories this user has access to (defaults to true)
  'isPrivate': true, // Boolean | show only pubic, private or all repositories (defaults to all)
  'template': true, // Boolean | include template repositories this user has access to (defaults to true)
  'archived': true, // Boolean | show only archived, non-archived or all repositories (defaults to all)
  'mode': "mode_example", // String | type of repository to search for. Supported values are \"fork\", \"source\", \"mirror\" and \"collaborative\"
  'exclusive': true, // Boolean | if `uid` is given, search only for repos that the user owns
  'repo': "repo_example", // String | name of the repo. Multiple repo's are ORed.
  'owner': "owner_example", // String | owner of the repo. Multiple owner's are ORed.
  'lang': "lang_example", // String | If the repo is a resource of the given language(s), the repo will be in the results. Multiple lang's are ORed.
  'subject': "subject_example", // String | resource subject. Multiple subject's are ORed.
  'book': "book_example", // String | book (project id) that exist in a resource. If the resource contains the the book, its repository will be included in the results. Multiple book's are ORed.
  'includeMetadata': true, // Boolean | if false, q value will only be searched for in the repo name, owner, description and title and subject; otherwise search all values of the manifest file. (defaults to false)
  'sort': "sort_example", // String | sort repos by attribute. Supported values are \"alpha\", \"created\", \"updated\", \"size\", and \"id\". Default is \"alpha\"
  'order': "order_example", // String | sort order, either \"asc\" (ascending) or \"desc\" (descending). Default is \"asc\", ignored if \"sort\" is not specified.
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoSearch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| keyword | [optional] 
 **topic** | **Boolean**| Limit search to repositories with keyword as topic | [optional] 
 **includeDesc** | **Boolean**| include search of keyword within repository description (defaults to false) | [optional] 
 **uid** | **Number**| search only for repos that the user with the given id owns or contributes to | [optional] 
 **priorityOwnerId** | **Number**| repo owner to prioritize in the results | [optional] 
 **teamId** | **Number**| search only for repos that belong to the given team id | [optional] 
 **starredBy** | **Number**| search only for repos that the user with the given id has starred | [optional] 
 **_private** | **Boolean**| include private repositories this user has access to (defaults to true) | [optional] 
 **isPrivate** | **Boolean**| show only pubic, private or all repositories (defaults to all) | [optional] 
 **template** | **Boolean**| include template repositories this user has access to (defaults to true) | [optional] 
 **archived** | **Boolean**| show only archived, non-archived or all repositories (defaults to all) | [optional] 
 **mode** | **String**| type of repository to search for. Supported values are \&quot;fork\&quot;, \&quot;source\&quot;, \&quot;mirror\&quot; and \&quot;collaborative\&quot; | [optional] 
 **exclusive** | **Boolean**| if &#x60;uid&#x60; is given, search only for repos that the user owns | [optional] 
 **repo** | **String**| name of the repo. Multiple repo&#x27;s are ORed. | [optional] 
 **owner** | **String**| owner of the repo. Multiple owner&#x27;s are ORed. | [optional] 
 **lang** | **String**| If the repo is a resource of the given language(s), the repo will be in the results. Multiple lang&#x27;s are ORed. | [optional] 
 **subject** | **String**| resource subject. Multiple subject&#x27;s are ORed. | [optional] 
 **book** | **String**| book (project id) that exist in a resource. If the resource contains the the book, its repository will be included in the results. Multiple book&#x27;s are ORed. | [optional] 
 **includeMetadata** | **Boolean**| if false, q value will only be searched for in the repo name, owner, description and title and subject; otherwise search all values of the manifest file. (defaults to false) | [optional] 
 **sort** | **String**| sort repos by attribute. Supported values are \&quot;alpha\&quot;, \&quot;created\&quot;, \&quot;updated\&quot;, \&quot;size\&quot;, and \&quot;id\&quot;. Default is \&quot;alpha\&quot; | [optional] 
 **order** | **String**| sort order, either \&quot;asc\&quot; (ascending) or \&quot;desc\&quot; (descending). Default is \&quot;asc\&quot;, ignored if \&quot;sort\&quot; is not specified. | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoSigningKey"></a>
# **repoSigningKey**
> &#x27;String&#x27; repoSigningKey(owner, repo)

Get signing-key.gpg for given repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.repoSigningKey(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

**&#x27;String&#x27;**

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="repoSubmitPullReview"></a>
# **repoSubmitPullReview**
> PullReview repoSubmitPullReview(body, owner, repo, index, id)

Submit a pending review to an pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let body = new dcs.SubmitPullReviewOptions(); // SubmitPullReviewOptions | 
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request
let id = 789; // Number | id of the review

apiInstance.repoSubmitPullReview(body, owner, repo, index, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitPullReviewOptions**](SubmitPullReviewOptions.md)|  | 
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 
 **id** | **Number**| id of the review | 

### Return type

[**PullReview**](PullReview.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoTestHook"></a>
# **repoTestHook**
> repoTestHook(owner, repo, id)

Test a push webhook

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the hook to test

apiInstance.repoTestHook(owner, repo, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **id** | **Number**| id of the hook to test | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoTrackedTimes"></a>
# **repoTrackedTimes**
> [TrackedTime] repoTrackedTimes(owner, repo, opts)

List a repo&#x27;s tracked times

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'user': "user_example", // String | optional filter by user (available for issue managers)
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show times updated after the given time. This is a timestamp in RFC 3339 format
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show times updated before the given time. This is a timestamp in RFC 3339 format
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.repoTrackedTimes(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **user** | **String**| optional filter by user (available for issue managers) | [optional] 
 **since** | **Date**| Only show times updated after the given time. This is a timestamp in RFC 3339 format | [optional] 
 **before** | **Date**| Only show times updated before the given time. This is a timestamp in RFC 3339 format | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[TrackedTime]**](TrackedTime.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoTransfer"></a>
# **repoTransfer**
> Repository repoTransfer(body, owner, repo)

Transfer a repo ownership

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let body = new dcs.TransferRepoOption(); // TransferRepoOption | Transfer Options
let owner = "owner_example"; // String | owner of the repo to transfer
let repo = "repo_example"; // String | name of the repo to transfer

apiInstance.repoTransfer(body, owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransferRepoOption**](TransferRepoOption.md)| Transfer Options | 
 **owner** | **String**| owner of the repo to transfer | 
 **repo** | **String**| name of the repo to transfer | 

### Return type

[**Repository**](Repository.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="repoUnDismissPullReview"></a>
# **repoUnDismissPullReview**
> PullReview repoUnDismissPullReview(owner, repo, index, id)

Cancel to dismiss a review for a pull request

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request
let id = 789; // Number | id of the review

apiInstance.repoUnDismissPullReview(owner, repo, index, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request | 
 **id** | **Number**| id of the review | 

### Return type

[**PullReview**](PullReview.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="repoUpdateFile"></a>
# **repoUpdateFile**
> FileResponse repoUpdateFile(body, owner, repo, filepath)

Update a file in a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let body = new dcs.UpdateFileOptions(); // UpdateFileOptions | 
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let filepath = "filepath_example"; // String | path of the file to update

apiInstance.repoUpdateFile(body, owner, repo, filepath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateFileOptions**](UpdateFileOptions.md)|  | 
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **filepath** | **String**| path of the file to update | 

### Return type

[**FileResponse**](FileResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="repoUpdatePullRequest"></a>
# **repoUpdatePullRequest**
> repoUpdatePullRequest(owner, repo, index)

Merge PR&#x27;s baseBranch into headBranch

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the pull request to get

apiInstance.repoUpdatePullRequest(owner, repo, index, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **index** | **Number**| index of the pull request to get | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="repoUpdateTopics"></a>
# **repoUpdateTopics**
> repoUpdateTopics(owner, repo, opts)

Replace list of topics for a repository

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.RepoTopicOptions() // RepoTopicOptions | 
};
apiInstance.repoUpdateTopics(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **body** | [**RepoTopicOptions**](RepoTopicOptions.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: Not defined

<a name="topicSearch"></a>
# **topicSearch**
> [TopicResponse] topicSearch(q, opts)

search topics via keyword

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let q = "q_example"; // String | keywords to search
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.topicSearch(q, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| keywords to search | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[TopicResponse]**](TopicResponse.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="userCurrentCheckSubscription"></a>
# **userCurrentCheckSubscription**
> WatchInfo userCurrentCheckSubscription(owner, repo)

Check if the current user is watching a repo

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.userCurrentCheckSubscription(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**WatchInfo**](WatchInfo.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

<a name="userCurrentDeleteSubscription"></a>
# **userCurrentDeleteSubscription**
> userCurrentDeleteSubscription(owner, repo)

Unwatch a repo

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.userCurrentDeleteSubscription(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userCurrentPutSubscription"></a>
# **userCurrentPutSubscription**
> WatchInfo userCurrentPutSubscription(owner, repo)

Watch a repo

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo

apiInstance.userCurrentPutSubscription(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 

### Return type

[**WatchInfo**](WatchInfo.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

<a name="userTrackedTimes"></a>
# **userTrackedTimes**
> [TrackedTime] userTrackedTimes(owner, repo, user)

List a user&#x27;s tracked times in a repo

### Example
```javascript
import {dcs} from 'dcs';
let defaultClient = dcs.ApiClient.instance;

// Configure API key authorization: AccessToken
let AccessToken = defaultClient.authentications['AccessToken'];
AccessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AccessToken.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationHeaderToken
let AuthorizationHeaderToken = defaultClient.authentications['AuthorizationHeaderToken'];
AuthorizationHeaderToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationHeaderToken.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: SudoHeader
let SudoHeader = defaultClient.authentications['SudoHeader'];
SudoHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: SudoParam
let SudoParam = defaultClient.authentications['SudoParam'];
SudoParam.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SudoParam.apiKeyPrefix = 'Token';

// Configure API key authorization: TOTPHeader
let TOTPHeader = defaultClient.authentications['TOTPHeader'];
TOTPHeader.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//TOTPHeader.apiKeyPrefix = 'Token';

// Configure API key authorization: Token
let Token = defaultClient.authentications['Token'];
Token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix = 'Token';

let apiInstance = new dcs.RepositoryApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let user = "user_example"; // String | username of user

apiInstance.userTrackedTimes(owner, repo, user, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**| owner of the repo | 
 **repo** | **String**| name of the repo | 
 **user** | **String**| username of user | 

### Return type

[**[TrackedTime]**](TrackedTime.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

