# dcs.SettingsApi

All URIs are relative to *https://git.door43.org/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGeneralAPISettings**](SettingsApi.md#getGeneralAPISettings) | **GET** /settings/api | Get instance&#x27;s global settings for api
[**getGeneralAttachmentSettings**](SettingsApi.md#getGeneralAttachmentSettings) | **GET** /settings/attachment | Get instance&#x27;s global settings for Attachment
[**getGeneralRepositorySettings**](SettingsApi.md#getGeneralRepositorySettings) | **GET** /settings/repository | Get instance&#x27;s global settings for repositories
[**getGeneralUISettings**](SettingsApi.md#getGeneralUISettings) | **GET** /settings/ui | Get instance&#x27;s global settings for ui

<a name="getGeneralAPISettings"></a>
# **getGeneralAPISettings**
> GeneralAPISettings getGeneralAPISettings()

Get instance&#x27;s global settings for api

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

let apiInstance = new dcs.SettingsApi();
apiInstance.getGeneralAPISettings((error, data, response) => {
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

[**GeneralAPISettings**](GeneralAPISettings.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGeneralAttachmentSettings"></a>
# **getGeneralAttachmentSettings**
> GeneralAttachmentSettings getGeneralAttachmentSettings()

Get instance&#x27;s global settings for Attachment

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

let apiInstance = new dcs.SettingsApi();
apiInstance.getGeneralAttachmentSettings((error, data, response) => {
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

[**GeneralAttachmentSettings**](GeneralAttachmentSettings.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGeneralRepositorySettings"></a>
# **getGeneralRepositorySettings**
> GeneralRepoSettings getGeneralRepositorySettings()

Get instance&#x27;s global settings for repositories

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

let apiInstance = new dcs.SettingsApi();
apiInstance.getGeneralRepositorySettings((error, data, response) => {
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

[**GeneralRepoSettings**](GeneralRepoSettings.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGeneralUISettings"></a>
# **getGeneralUISettings**
> GeneralUISettings getGeneralUISettings()

Get instance&#x27;s global settings for ui

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

let apiInstance = new dcs.SettingsApi();
apiInstance.getGeneralUISettings((error, data, response) => {
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

[**GeneralUISettings**](GeneralUISettings.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

