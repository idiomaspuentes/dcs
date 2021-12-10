# dcs.MiscellaneousApi

All URIs are relative to *https://git.door43.org/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSigningKey**](MiscellaneousApi.md#getSigningKey) | **GET** /signing-key.gpg | Get default signing-key.gpg
[**getVersion**](MiscellaneousApi.md#getVersion) | **GET** /version | Returns the version of the Gitea application
[**renderMarkdown**](MiscellaneousApi.md#renderMarkdown) | **POST** /markdown | Render a markdown document as HTML
[**renderMarkdownRaw**](MiscellaneousApi.md#renderMarkdownRaw) | **POST** /markdown/raw | Render raw markdown as HTML

<a name="getSigningKey"></a>
# **getSigningKey**
> &#x27;String&#x27; getSigningKey()

Get default signing-key.gpg

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

let apiInstance = new dcs.MiscellaneousApi();
apiInstance.getSigningKey((error, data, response) => {
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

**&#x27;String&#x27;**

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

<a name="getVersion"></a>
# **getVersion**
> ServerVersion getVersion()

Returns the version of the Gitea application

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

let apiInstance = new dcs.MiscellaneousApi();
apiInstance.getVersion((error, data, response) => {
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

[**ServerVersion**](ServerVersion.md)

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="renderMarkdown"></a>
# **renderMarkdown**
> &#x27;String&#x27; renderMarkdown(opts)

Render a markdown document as HTML

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

let apiInstance = new dcs.MiscellaneousApi();
let opts = { 
  'body': new dcs.MarkdownOption() // MarkdownOption | 
};
apiInstance.renderMarkdown(opts, (error, data, response) => {
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
 **body** | [**MarkdownOption**](MarkdownOption.md)|  | [optional] 

### Return type

**&#x27;String&#x27;**

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

<a name="renderMarkdownRaw"></a>
# **renderMarkdownRaw**
> &#x27;String&#x27; renderMarkdownRaw(body)

Render raw markdown as HTML

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

let apiInstance = new dcs.MiscellaneousApi();
let body = "body_example"; // String | Request body to render

apiInstance.renderMarkdownRaw(body, (error, data, response) => {
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
 **body** | [**String**](String.md)| Request body to render | 

### Return type

**&#x27;String&#x27;**

### Authorization

[AccessToken](../README.md#AccessToken), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [BasicAuth](../README.md#BasicAuth), [SudoHeader](../README.md#SudoHeader), [SudoParam](../README.md#SudoParam), [TOTPHeader](../README.md#TOTPHeader), [Token](../README.md#Token)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/html

