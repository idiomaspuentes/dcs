# dcs.NotificationApi

All URIs are relative to *https://git.door43.org/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notifyGetList**](NotificationApi.md#notifyGetList) | **GET** /notifications | List users&#x27;s notification threads
[**notifyGetRepoList**](NotificationApi.md#notifyGetRepoList) | **GET** /repos/{owner}/{repo}/notifications | List users&#x27;s notification threads on a specific repo
[**notifyGetThread**](NotificationApi.md#notifyGetThread) | **GET** /notifications/threads/{id} | Get notification thread by ID
[**notifyNewAvailable**](NotificationApi.md#notifyNewAvailable) | **GET** /notifications/new | Check if unread notifications exist
[**notifyReadList**](NotificationApi.md#notifyReadList) | **PUT** /notifications | Mark notification threads as read, pinned or unread
[**notifyReadRepoList**](NotificationApi.md#notifyReadRepoList) | **PUT** /repos/{owner}/{repo}/notifications | Mark notification threads as read, pinned or unread on a specific repo
[**notifyReadThread**](NotificationApi.md#notifyReadThread) | **PATCH** /notifications/threads/{id} | Mark notification thread as read by ID

<a name="notifyGetList"></a>
# **notifyGetList**
> [NotificationThread] notifyGetList(opts)

List users&#x27;s notification threads

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

let apiInstance = new dcs.NotificationApi();
let opts = { 
  'all': true, // Boolean | If true, show notifications marked as read. Default value is false
  'statusTypes': ["statusTypes_example"], // [String] | Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned.
  'subjectType': ["subjectType_example"], // [String] | filter notifications by subject type
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.notifyGetList(opts, (error, data, response) => {
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
 **all** | **Boolean**| If true, show notifications marked as read. Default value is false | [optional] 
 **statusTypes** | [**[String]**](String.md)| Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned. | [optional] 
 **subjectType** | [**[String]**](String.md)| filter notifications by subject type | [optional] 
 **since** | **Date**| Only show notifications updated after the given time. This is a timestamp in RFC 3339 format | [optional] 
 **before** | **Date**| Only show notifications updated before the given time. This is a timestamp in RFC 3339 format | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[NotificationThread]**](NotificationThread.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="notifyGetRepoList"></a>
# **notifyGetRepoList**
> [NotificationThread] notifyGetRepoList(owner, repo, opts)

List users&#x27;s notification threads on a specific repo

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

let apiInstance = new dcs.NotificationApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'all': true, // Boolean | If true, show notifications marked as read. Default value is false
  'statusTypes': ["statusTypes_example"], // [String] | Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned
  'subjectType': ["subjectType_example"], // [String] | filter notifications by subject type
  'since': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
  'before': new Date("2013-10-20T19:20:30+01:00"), // Date | Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
  'page': 56, // Number | page number of results to return (1-based)
  'limit': 56 // Number | page size of results
};
apiInstance.notifyGetRepoList(owner, repo, opts, (error, data, response) => {
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
 **all** | **Boolean**| If true, show notifications marked as read. Default value is false | [optional] 
 **statusTypes** | [**[String]**](String.md)| Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned | [optional] 
 **subjectType** | [**[String]**](String.md)| filter notifications by subject type | [optional] 
 **since** | **Date**| Only show notifications updated after the given time. This is a timestamp in RFC 3339 format | [optional] 
 **before** | **Date**| Only show notifications updated before the given time. This is a timestamp in RFC 3339 format | [optional] 
 **page** | **Number**| page number of results to return (1-based) | [optional] 
 **limit** | **Number**| page size of results | [optional] 

### Return type

[**[NotificationThread]**](NotificationThread.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="notifyGetThread"></a>
# **notifyGetThread**
> NotificationThread notifyGetThread(id)

Get notification thread by ID

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

let apiInstance = new dcs.NotificationApi();
let id = "id_example"; // String | id of notification thread

apiInstance.notifyGetThread(id, (error, data, response) => {
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
 **id** | **String**| id of notification thread | 

### Return type

[**NotificationThread**](NotificationThread.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="notifyNewAvailable"></a>
# **notifyNewAvailable**
> NotificationCount notifyNewAvailable()

Check if unread notifications exist

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

let apiInstance = new dcs.NotificationApi();
apiInstance.notifyNewAvailable((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**NotificationCount**](NotificationCount.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/html

<a name="notifyReadList"></a>
# **notifyReadList**
> notifyReadList(opts)

Mark notification threads as read, pinned or unread

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

let apiInstance = new dcs.NotificationApi();
let opts = { 
  'lastReadAt': new Date("2013-10-20T19:20:30+01:00"), // Date | Describes the last point that notifications were checked. Anything updated since this time will not be updated.
  'all': "all_example", // String | If true, mark all notifications on this repo. Default value is false
  'statusTypes': ["statusTypes_example"], // [String] | Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.
  'toStatus': "toStatus_example" // String | Status to mark notifications as, Defaults to read.
};
apiInstance.notifyReadList(opts, (error, data, response) => {
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
 **lastReadAt** | **Date**| Describes the last point that notifications were checked. Anything updated since this time will not be updated. | [optional] 
 **all** | **String**| If true, mark all notifications on this repo. Default value is false | [optional] 
 **statusTypes** | [**[String]**](String.md)| Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. | [optional] 
 **toStatus** | **String**| Status to mark notifications as, Defaults to read. | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notifyReadRepoList"></a>
# **notifyReadRepoList**
> notifyReadRepoList(owner, repo, opts)

Mark notification threads as read, pinned or unread on a specific repo

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

let apiInstance = new dcs.NotificationApi();
let owner = "owner_example"; // String | owner of the repo
let repo = "repo_example"; // String | name of the repo
let opts = { 
  'all': "all_example", // String | If true, mark all notifications on this repo. Default value is false
  'statusTypes': ["statusTypes_example"], // [String] | Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.
  'toStatus': "toStatus_example", // String | Status to mark notifications as. Defaults to read.
  'lastReadAt': new Date("2013-10-20T19:20:30+01:00") // Date | Describes the last point that notifications were checked. Anything updated since this time will not be updated.
};
apiInstance.notifyReadRepoList(owner, repo, opts, (error, data, response) => {
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
 **all** | **String**| If true, mark all notifications on this repo. Default value is false | [optional] 
 **statusTypes** | [**[String]**](String.md)| Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. | [optional] 
 **toStatus** | **String**| Status to mark notifications as. Defaults to read. | [optional] 
 **lastReadAt** | **Date**| Describes the last point that notifications were checked. Anything updated since this time will not be updated. | [optional] 

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="notifyReadThread"></a>
# **notifyReadThread**
> notifyReadThread(id, opts)

Mark notification thread as read by ID

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

let apiInstance = new dcs.NotificationApi();
let id = "id_example"; // String | id of notification thread
let opts = { 
  'toStatus': "read" // String | Status to mark notifications as
};
apiInstance.notifyReadThread(id, opts, (error, data, response) => {
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
 **id** | **String**| id of notification thread | 
 **toStatus** | **String**| Status to mark notifications as | [optional] [default to read]

### Return type

null (empty response body)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

