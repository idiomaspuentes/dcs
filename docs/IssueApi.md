# dcs.IssueApi

All URIs are relative to *https://git.door43.org/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueAddLabel**](IssueApi.md#issueAddLabel) | **POST** /repos/{owner}/{repo}/issues/{index}/labels | Add a label to an issue
[**issueAddSubscription**](IssueApi.md#issueAddSubscription) | **PUT** /repos/{owner}/{repo}/issues/{index}/subscriptions/{user} | Subscribe user to issue
[**issueAddTime**](IssueApi.md#issueAddTime) | **POST** /repos/{owner}/{repo}/issues/{index}/times | Add tracked time to a issue
[**issueCheckSubscription**](IssueApi.md#issueCheckSubscription) | **GET** /repos/{owner}/{repo}/issues/{index}/subscriptions/check | Check if user is subscribed to an issue
[**issueClearLabels**](IssueApi.md#issueClearLabels) | **DELETE** /repos/{owner}/{repo}/issues/{index}/labels | Remove all labels from an issue
[**issueCreateComment**](IssueApi.md#issueCreateComment) | **POST** /repos/{owner}/{repo}/issues/{index}/comments | Add a comment to an issue
[**issueCreateIssue**](IssueApi.md#issueCreateIssue) | **POST** /repos/{owner}/{repo}/issues | Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
[**issueCreateLabel**](IssueApi.md#issueCreateLabel) | **POST** /repos/{owner}/{repo}/labels | Create a label
[**issueCreateMilestone**](IssueApi.md#issueCreateMilestone) | **POST** /repos/{owner}/{repo}/milestones | Create a milestone
[**issueDeleteComment**](IssueApi.md#issueDeleteComment) | **DELETE** /repos/{owner}/{repo}/issues/comments/{id} | Delete a comment
[**issueDeleteCommentDeprecated**](IssueApi.md#issueDeleteCommentDeprecated) | **DELETE** /repos/{owner}/{repo}/issues/{index}/comments/{id} | Delete a comment
[**issueDeleteLabel**](IssueApi.md#issueDeleteLabel) | **DELETE** /repos/{owner}/{repo}/labels/{id} | Delete a label
[**issueDeleteMilestone**](IssueApi.md#issueDeleteMilestone) | **DELETE** /repos/{owner}/{repo}/milestones/{id} | Delete a milestone
[**issueDeleteStopWatch**](IssueApi.md#issueDeleteStopWatch) | **DELETE** /repos/{owner}/{repo}/issues/{index}/stopwatch/delete | Delete an issue&#x27;s existing stopwatch.
[**issueDeleteSubscription**](IssueApi.md#issueDeleteSubscription) | **DELETE** /repos/{owner}/{repo}/issues/{index}/subscriptions/{user} | Unsubscribe user from issue
[**issueDeleteTime**](IssueApi.md#issueDeleteTime) | **DELETE** /repos/{owner}/{repo}/issues/{index}/times/{id} | Delete specific tracked time
[**issueEditComment**](IssueApi.md#issueEditComment) | **PATCH** /repos/{owner}/{repo}/issues/comments/{id} | Edit a comment
[**issueEditCommentDeprecated**](IssueApi.md#issueEditCommentDeprecated) | **PATCH** /repos/{owner}/{repo}/issues/{index}/comments/{id} | Edit a comment
[**issueEditIssue**](IssueApi.md#issueEditIssue) | **PATCH** /repos/{owner}/{repo}/issues/{index} | Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
[**issueEditIssueDeadline**](IssueApi.md#issueEditIssueDeadline) | **POST** /repos/{owner}/{repo}/issues/{index}/deadline | Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
[**issueEditLabel**](IssueApi.md#issueEditLabel) | **PATCH** /repos/{owner}/{repo}/labels/{id} | Update a label
[**issueEditMilestone**](IssueApi.md#issueEditMilestone) | **PATCH** /repos/{owner}/{repo}/milestones/{id} | Update a milestone
[**issueGetComment**](IssueApi.md#issueGetComment) | **GET** /repos/{owner}/{repo}/issues/comments/{id} | Get a comment
[**issueGetCommentReactions**](IssueApi.md#issueGetCommentReactions) | **GET** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Get a list of reactions from a comment of an issue
[**issueGetComments**](IssueApi.md#issueGetComments) | **GET** /repos/{owner}/{repo}/issues/{index}/comments | List all comments on an issue
[**issueGetIssue**](IssueApi.md#issueGetIssue) | **GET** /repos/{owner}/{repo}/issues/{index} | Get an issue
[**issueGetIssueReactions**](IssueApi.md#issueGetIssueReactions) | **GET** /repos/{owner}/{repo}/issues/{index}/reactions | Get a list reactions of an issue
[**issueGetLabel**](IssueApi.md#issueGetLabel) | **GET** /repos/{owner}/{repo}/labels/{id} | Get a single label
[**issueGetLabels**](IssueApi.md#issueGetLabels) | **GET** /repos/{owner}/{repo}/issues/{index}/labels | Get an issue&#x27;s labels
[**issueGetMilestone**](IssueApi.md#issueGetMilestone) | **GET** /repos/{owner}/{repo}/milestones/{id} | Get a milestone
[**issueGetMilestonesList**](IssueApi.md#issueGetMilestonesList) | **GET** /repos/{owner}/{repo}/milestones | Get all of a repository&#x27;s opened milestones
[**issueGetRepoComments**](IssueApi.md#issueGetRepoComments) | **GET** /repos/{owner}/{repo}/issues/comments | List all comments in a repository
[**issueListIssues**](IssueApi.md#issueListIssues) | **GET** /repos/{owner}/{repo}/issues | List a repository&#x27;s issues
[**issueListLabels**](IssueApi.md#issueListLabels) | **GET** /repos/{owner}/{repo}/labels | Get all of a repository&#x27;s labels
[**issuePostCommentReaction**](IssueApi.md#issuePostCommentReaction) | **POST** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Add a reaction to a comment of an issue
[**issuePostIssueReaction**](IssueApi.md#issuePostIssueReaction) | **POST** /repos/{owner}/{repo}/issues/{index}/reactions | Add a reaction to an issue
[**issueRemoveLabel**](IssueApi.md#issueRemoveLabel) | **DELETE** /repos/{owner}/{repo}/issues/{index}/labels/{id} | Remove a label from an issue
[**issueReplaceLabels**](IssueApi.md#issueReplaceLabels) | **PUT** /repos/{owner}/{repo}/issues/{index}/labels | Replace an issue&#x27;s labels
[**issueResetTime**](IssueApi.md#issueResetTime) | **DELETE** /repos/{owner}/{repo}/issues/{index}/times | Reset a tracked time of an issue
[**issueSearchIssues**](IssueApi.md#issueSearchIssues) | **GET** /repos/issues/search | Search for issues across the repositories that the user has access to
[**issueStartStopWatch**](IssueApi.md#issueStartStopWatch) | **POST** /repos/{owner}/{repo}/issues/{index}/stopwatch/start | Start stopwatch on an issue.
[**issueStopStopWatch**](IssueApi.md#issueStopStopWatch) | **POST** /repos/{owner}/{repo}/issues/{index}/stopwatch/stop | Stop an issue&#x27;s existing stopwatch.
[**issueSubscriptions**](IssueApi.md#issueSubscriptions) | **GET** /repos/{owner}/{repo}/issues/{index}/subscriptions | Get users who subscribed on an issue.
[**issueTrackedTimes**](IssueApi.md#issueTrackedTimes) | **GET** /repos/{owner}/{repo}/issues/{index}/times | List an issue&#x27;s tracked times

<a name="issueAddLabel"></a>
# **issueAddLabel**
> [Label] issueAddLabel(owner, repo, index, opts)

Add a label to an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'body': new dcs.IssueLabelsOption() // IssueLabelsOption | 
};
apiInstance.issueAddLabel(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **body** | [**IssueLabelsOption**](IssueLabelsOption.md)|  | [optional] 

### Return type

[**[Label]**](Label.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueAddSubscription"></a>
# **issueAddSubscription**
> issueAddSubscription(owner, repo, index, user)

Subscribe user to issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let user = "user_example"; // String | user to subscribe

apiInstance.issueAddSubscription(owner, repo, index, user, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **user** | **String**| user to subscribe | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueAddTime"></a>
# **issueAddTime**
> TrackedTime issueAddTime(owner, repo, index, opts)

Add tracked time to a issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'body': new dcs.AddTimeOption() // AddTimeOption | 
};
apiInstance.issueAddTime(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **body** | [**AddTimeOption**](AddTimeOption.md)|  | [optional] 

### Return type

[**TrackedTime**](TrackedTime.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueCheckSubscription"></a>
# **issueCheckSubscription**
> WatchInfo issueCheckSubscription(owner, repo, index)

Check if user is subscribed to an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue

apiInstance.issueCheckSubscription(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 

### Return type

[**WatchInfo**](WatchInfo.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueClearLabels"></a>
# **issueClearLabels**
> issueClearLabels(owner, repo, index)

Remove all labels from an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue

apiInstance.issueClearLabels(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueCreateComment"></a>
# **issueCreateComment**
> Comment issueCreateComment(owner, repo, index, opts)

Add a comment to an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'body': new dcs.CreateIssueCommentOption() // CreateIssueCommentOption | 
};
apiInstance.issueCreateComment(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **body** | [**CreateIssueCommentOption**](CreateIssueCommentOption.md)|  | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueCreateIssue"></a>
# **issueCreateIssue**
> Issue issueCreateIssue(owner, repo, opts)

Create an issue. If using deadline only the date will be taken into account, and time of day ignored.

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateIssueOption() // CreateIssueOption | 
};
apiInstance.issueCreateIssue(owner, repo, opts, (error, data, response) => {
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
 **body** | [**CreateIssueOption**](CreateIssueOption.md)|  | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueCreateLabel"></a>
# **issueCreateLabel**
> Label issueCreateLabel(owner, repo, opts)

Create a label

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateLabelOption() // CreateLabelOption | 
};
apiInstance.issueCreateLabel(owner, repo, opts, (error, data, response) => {
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
 **body** | [**CreateLabelOption**](CreateLabelOption.md)|  | [optional] 

### Return type

[**Label**](Label.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueCreateMilestone"></a>
# **issueCreateMilestone**
> Milestone issueCreateMilestone(owner, repo, opts)

Create a milestone

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'body': new dcs.CreateMilestoneOption() // CreateMilestoneOption | 
};
apiInstance.issueCreateMilestone(owner, repo, opts, (error, data, response) => {
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
 **body** | [**CreateMilestoneOption**](CreateMilestoneOption.md)|  | [optional] 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueDeleteComment"></a>
# **issueDeleteComment**
> issueDeleteComment(owner, repo, id)

Delete a comment

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of comment to delete

apiInstance.issueDeleteComment(owner, repo, id, (error, data, response) => {
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
 **id** | **Number**| id of comment to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueDeleteCommentDeprecated"></a>
# **issueDeleteCommentDeprecated**
> issueDeleteCommentDeprecated(owner, repo, index, id)

Delete a comment

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 56; // Number | this parameter is ignored
let id = 789; // Number | id of comment to delete

apiInstance.issueDeleteCommentDeprecated(owner, repo, index, id, (error, data, response) => {
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
 **index** | **Number**| this parameter is ignored | 
 **id** | **Number**| id of comment to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueDeleteLabel"></a>
# **issueDeleteLabel**
> issueDeleteLabel(owner, repo, id)

Delete a label

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the label to delete

apiInstance.issueDeleteLabel(owner, repo, id, (error, data, response) => {
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
 **id** | **Number**| id of the label to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueDeleteMilestone"></a>
# **issueDeleteMilestone**
> issueDeleteMilestone(owner, repo, id)

Delete a milestone

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = "id_example"; // String | the milestone to delete, identified by ID and if not available by name

apiInstance.issueDeleteMilestone(owner, repo, id, (error, data, response) => {
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
 **id** | **String**| the milestone to delete, identified by ID and if not available by name | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueDeleteStopWatch"></a>
# **issueDeleteStopWatch**
> issueDeleteStopWatch(owner, repo, index)

Delete an issue&#x27;s existing stopwatch.

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue to stop the stopwatch on

apiInstance.issueDeleteStopWatch(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue to stop the stopwatch on | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueDeleteSubscription"></a>
# **issueDeleteSubscription**
> issueDeleteSubscription(owner, repo, index, user)

Unsubscribe user from issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let user = "user_example"; // String | user witch unsubscribe

apiInstance.issueDeleteSubscription(owner, repo, index, user, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **user** | **String**| user witch unsubscribe | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueDeleteTime"></a>
# **issueDeleteTime**
> issueDeleteTime(owner, repo, index, id)

Delete specific tracked time

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let id = 789; // Number | id of time to delete

apiInstance.issueDeleteTime(owner, repo, index, id, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **id** | **Number**| id of time to delete | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueEditComment"></a>
# **issueEditComment**
> Comment issueEditComment(owner, repo, id, opts)

Edit a comment

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the comment to edit
let opts = { 
  'body': new dcs.EditIssueCommentOption() // EditIssueCommentOption | 
};
apiInstance.issueEditComment(owner, repo, id, opts, (error, data, response) => {
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
 **id** | **Number**| id of the comment to edit | 
 **body** | [**EditIssueCommentOption**](EditIssueCommentOption.md)|  | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueEditCommentDeprecated"></a>
# **issueEditCommentDeprecated**
> Comment issueEditCommentDeprecated(owner, repo, index, id, opts)

Edit a comment

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 56; // Number | this parameter is ignored
let id = 789; // Number | id of the comment to edit
let opts = { 
  'body': new dcs.EditIssueCommentOption() // EditIssueCommentOption | 
};
apiInstance.issueEditCommentDeprecated(owner, repo, index, id, opts, (error, data, response) => {
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
 **index** | **Number**| this parameter is ignored | 
 **id** | **Number**| id of the comment to edit | 
 **body** | [**EditIssueCommentOption**](EditIssueCommentOption.md)|  | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueEditIssue"></a>
# **issueEditIssue**
> Issue issueEditIssue(owner, repo, index, opts)

Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue to edit
let opts = { 
  'body': new dcs.EditIssueOption() // EditIssueOption | 
};
apiInstance.issueEditIssue(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue to edit | 
 **body** | [**EditIssueOption**](EditIssueOption.md)|  | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueEditIssueDeadline"></a>
# **issueEditIssueDeadline**
> IssueDeadline issueEditIssueDeadline(owner, repo, index, opts)

Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue to create or update a deadline on
let opts = { 
  'body': new dcs.EditDeadlineOption() // EditDeadlineOption | 
};
apiInstance.issueEditIssueDeadline(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue to create or update a deadline on | 
 **body** | [**EditDeadlineOption**](EditDeadlineOption.md)|  | [optional] 

### Return type

[**IssueDeadline**](IssueDeadline.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueEditLabel"></a>
# **issueEditLabel**
> Label issueEditLabel(owner, repo, id, opts)

Update a label

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the label to edit
let opts = { 
  'body': new dcs.EditLabelOption() // EditLabelOption | 
};
apiInstance.issueEditLabel(owner, repo, id, opts, (error, data, response) => {
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
 **id** | **Number**| id of the label to edit | 
 **body** | [**EditLabelOption**](EditLabelOption.md)|  | [optional] 

### Return type

[**Label**](Label.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueEditMilestone"></a>
# **issueEditMilestone**
> Milestone issueEditMilestone(owner, repo, id, opts)

Update a milestone

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = "id_example"; // String | the milestone to edit, identified by ID and if not available by name
let opts = { 
  'body': new dcs.EditMilestoneOption() // EditMilestoneOption | 
};
apiInstance.issueEditMilestone(owner, repo, id, opts, (error, data, response) => {
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
 **id** | **String**| the milestone to edit, identified by ID and if not available by name | 
 **body** | [**EditMilestoneOption**](EditMilestoneOption.md)|  | [optional] 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueGetComment"></a>
# **issueGetComment**
> Comment issueGetComment(owner, repo, id)

Get a comment

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the comment

apiInstance.issueGetComment(owner, repo, id, (error, data, response) => {
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
 **id** | **Number**| id of the comment | 

### Return type

[**Comment**](Comment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetCommentReactions"></a>
# **issueGetCommentReactions**
> [Reaction] issueGetCommentReactions(owner, repo, id)

Get a list of reactions from a comment of an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the comment to edit

apiInstance.issueGetCommentReactions(owner, repo, id, (error, data, response) => {
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
 **id** | **Number**| id of the comment to edit | 

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetComments"></a>
# **issueGetComments**
> [Comment] issueGetComments(owner, repo, index, opts)

List all comments on an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | if provided, only comments updated since the specified time are returned.
  'before': new Date("2013-10-20T19:20:30+01:00") // Date | if provided, only comments updated before the provided time are returned.
};
apiInstance.issueGetComments(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **since** | **Date**| if provided, only comments updated since the specified time are returned. | [optional] 
 **before** | **Date**| if provided, only comments updated before the provided time are returned. | [optional] 

### Return type

[**[Comment]**](Comment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetIssue"></a>
# **issueGetIssue**
> Issue issueGetIssue(owner, repo, index)

Get an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue to get

apiInstance.issueGetIssue(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue to get | 

### Return type

[**Issue**](Issue.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetIssueReactions"></a>
# **issueGetIssueReactions**
> [Reaction] issueGetIssueReactions(owner, repo, index, opts)

Get a list reactions of an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueGetIssueReactions(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Reaction]**](Reaction.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetLabel"></a>
# **issueGetLabel**
> Label issueGetLabel(owner, repo, id)

Get a single label

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the label to get

apiInstance.issueGetLabel(owner, repo, id, (error, data, response) => {
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
 **id** | **Number**| id of the label to get | 

### Return type

[**Label**](Label.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetLabels"></a>
# **issueGetLabels**
> [Label] issueGetLabels(owner, repo, index)

Get an issue&#x27;s labels

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue

apiInstance.issueGetLabels(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 

### Return type

[**[Label]**](Label.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetMilestone"></a>
# **issueGetMilestone**
> Milestone issueGetMilestone(owner, repo, id)

Get a milestone

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = "id_example"; // String | the milestone to get, identified by ID and if not available by name

apiInstance.issueGetMilestone(owner, repo, id, (error, data, response) => {
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
 **id** | **String**| the milestone to get, identified by ID and if not available by name | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetMilestonesList"></a>
# **issueGetMilestonesList**
> [Milestone] issueGetMilestonesList(owner, repo, opts)

Get all of a repository&#x27;s opened milestones

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'state': "state_example", // String | Milestone state, Recognised values are open, closed and all. Defaults to \"open\"
  'name': "name_example", // String | filter by milestone name
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueGetMilestonesList(owner, repo, opts, (error, data, response) => {
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
 **state** | **String**| Milestone state, Recognised values are open, closed and all. Defaults to \&quot;open\&quot; | [optional] 
 **name** | **String**| filter by milestone name | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Milestone]**](Milestone.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueGetRepoComments"></a>
# **issueGetRepoComments**
> [Comment] issueGetRepoComments(owner, repo, opts)

List all comments in a repository

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | if provided, only comments updated since the provided time are returned.
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | if provided, only comments updated before the provided time are returned.
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueGetRepoComments(owner, repo, opts, (error, data, response) => {
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
 **since** | **Date**| if provided, only comments updated since the provided time are returned. | [optional] 
 **before** | **Date**| if provided, only comments updated before the provided time are returned. | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Comment]**](Comment.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueListIssues"></a>
# **issueListIssues**
> [Issue] issueListIssues(owner, repo, opts)

List a repository&#x27;s issues

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'state': "state_example", // String | whether issue is open or closed
  'labels': "labels_example", // String | comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded
  'q': "q_example", // String | search string
  'type': "type_example", // String | filter by type (issues / pulls) if set
  'milestones': "milestones_example", // String | comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
  'createdBy': "createdBy_example", // String | filter (issues / pulls) created to
  'assignedBy': "assignedBy_example", // String | filter (issues / pulls) assigned to
  'mentionedBy': "mentionedBy_example", // String | filter (issues / pulls) mentioning to
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueListIssues(owner, repo, opts, (error, data, response) => {
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
 **state** | **String**| whether issue is open or closed | [optional] 
 **labels** | **String**| comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded | [optional] 
 **q** | **String**| search string | [optional] 
 **type** | **String**| filter by type (issues / pulls) if set | [optional] 
 **milestones** | **String**| comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded | [optional] 
 **since** | **Date**| Only show notifications updated after the given time. This is a timestamp in RFC 3339 format | [optional] 
 **before** | **Date**| Only show notifications updated before the given time. This is a timestamp in RFC 3339 format | [optional] 
 **createdBy** | **String**| filter (issues / pulls) created to | [optional] 
 **assignedBy** | **String**| filter (issues / pulls) assigned to | [optional] 
 **mentionedBy** | **String**| filter (issues / pulls) mentioning to | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Issue]**](Issue.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueListLabels"></a>
# **issueListLabels**
> [Label] issueListLabels(owner, repo, opts)

Get all of a repository&#x27;s labels

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueListLabels(owner, repo, opts, (error, data, response) => {
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

[**[Label]**](Label.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issuePostCommentReaction"></a>
# **issuePostCommentReaction**
> Reaction issuePostCommentReaction(owner, repo, id, opts)

Add a reaction to a comment of an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let id = 789; // Number | id of the comment to edit
let opts = { 
  'body': new dcs.EditReactionOption() // EditReactionOption | 
};
apiInstance.issuePostCommentReaction(owner, repo, id, opts, (error, data, response) => {
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
 **id** | **Number**| id of the comment to edit | 
 **body** | [**EditReactionOption**](EditReactionOption.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issuePostIssueReaction"></a>
# **issuePostIssueReaction**
> Reaction issuePostIssueReaction(owner, repo, index, opts)

Add a reaction to an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'body': new dcs.EditReactionOption() // EditReactionOption | 
};
apiInstance.issuePostIssueReaction(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **body** | [**EditReactionOption**](EditReactionOption.md)|  | [optional] 

### Return type

[**Reaction**](Reaction.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueRemoveLabel"></a>
# **issueRemoveLabel**
> issueRemoveLabel(owner, repo, index, id)

Remove a label from an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let id = 789; // Number | id of the label to remove

apiInstance.issueRemoveLabel(owner, repo, index, id, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **id** | **Number**| id of the label to remove | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueReplaceLabels"></a>
# **issueReplaceLabels**
> [Label] issueReplaceLabels(owner, repo, index, opts)

Replace an issue&#x27;s labels

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'body': new dcs.IssueLabelsOption() // IssueLabelsOption | 
};
apiInstance.issueReplaceLabels(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **body** | [**IssueLabelsOption**](IssueLabelsOption.md)|  | [optional] 

### Return type

[**[Label]**](Label.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="issueResetTime"></a>
# **issueResetTime**
> issueResetTime(owner, repo, index)

Reset a tracked time of an issue

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue to add tracked time to

apiInstance.issueResetTime(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue to add tracked time to | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueSearchIssues"></a>
# **issueSearchIssues**
> [Issue] issueSearchIssues(opts)

Search for issues across the repositories that the user has access to

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

let apiInstance = new dcs.IssueApi();
let opts = { 
  'state': "state_example", // String | whether issue is open or closed
  'labels': "labels_example", // String | comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded
  'milestones': "milestones_example", // String | comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded
  'q': "q_example", // String | search string
  'priorityRepoId': 789, // Number | repository to prioritize in the results
  'type': "type_example", // String | filter by type (issues / pulls) if set
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
  'assigned': true, // Boolean | filter (issues / pulls) assigned to you, default is false
  'created': true, // Boolean | filter (issues / pulls) created by you, default is false
  'mentioned': true, // Boolean | filter (issues / pulls) mentioning you, default is false
  'reviewRequested': true, // Boolean | filter pulls requesting your review, default is false
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueSearchIssues(opts, (error, data, response) => {
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
 **state** | **String**| whether issue is open or closed | [optional] 
 **labels** | **String**| comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded | [optional] 
 **milestones** | **String**| comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded | [optional] 
 **q** | **String**| search string | [optional] 
 **priorityRepoId** | **Number**| repository to prioritize in the results | [optional] 
 **type** | **String**| filter by type (issues / pulls) if set | [optional] 
 **since** | **Date**| Only show notifications updated after the given time. This is a timestamp in RFC 3339 format | [optional] 
 **before** | **Date**| Only show notifications updated before the given time. This is a timestamp in RFC 3339 format | [optional] 
 **assigned** | **Boolean**| filter (issues / pulls) assigned to you, default is false | [optional] 
 **created** | **Boolean**| filter (issues / pulls) created by you, default is false | [optional] 
 **mentioned** | **Boolean**| filter (issues / pulls) mentioning you, default is false | [optional] 
 **reviewRequested** | **Boolean**| filter pulls requesting your review, default is false | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[Issue]**](Issue.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueStartStopWatch"></a>
# **issueStartStopWatch**
> issueStartStopWatch(owner, repo, index)

Start stopwatch on an issue.

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue to create the stopwatch on

apiInstance.issueStartStopWatch(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue to create the stopwatch on | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueStopStopWatch"></a>
# **issueStopStopWatch**
> issueStopStopWatch(owner, repo, index)

Stop an issue&#x27;s existing stopwatch.

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue to stop the stopwatch on

apiInstance.issueStopStopWatch(owner, repo, index, (error, data, response) => {
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
 **index** | **Number**| index of the issue to stop the stopwatch on | 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="issueSubscriptions"></a>
# **issueSubscriptions**
> [User] issueSubscriptions(owner, repo, index, opts)

Get users who subscribed on an issue.

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueSubscriptions(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="issueTrackedTimes"></a>
# **issueTrackedTimes**
> [TrackedTime] issueTrackedTimes(owner, repo, index, opts)

List an issue&#x27;s tracked times

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

let apiInstance = new dcs.IssueApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let index = 789; // Number | index of the issue
let opts = { 
  'user': "user_example", // String | optional filter by user (available for issue managers)
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show times updated after the given time. This is a timestamp in RFC 3339 format
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show times updated before the given time. This is a timestamp in RFC 3339 format
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.issueTrackedTimes(owner, repo, index, opts, (error, data, response) => {
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
 **index** | **Number**| index of the issue | 
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

