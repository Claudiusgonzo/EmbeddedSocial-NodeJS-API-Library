/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * TopicComments
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SocialPlusClient.
 * Initializes a new instance of the TopicComments class.
 * @constructor
 *
 * @param {SocialPlusClient} client Reference to the service client.
 */
function TopicComments(client) {
  this.client = client;
}

/**
 * @summary Get comments for a topic
 *
 * @param {string} topicHandle Topic handle
 * 
 * @param {string} authorization Authentication (must begin with string
 * "Bearer "). Possible values are:
 * 
 * -sessionToken for client auth
 * 
 * -AAD token for service auth
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.cursor] Current read cursor
 * 
 * @param {number} [options.limit] Number of items to return
 * 
 * @param {string} [options.appkey] App key must be filled in when using AAD
 * tokens for Authentication.
 * 
 * @param {string} [options.userHandle] User handle must be filled when using
 * AAD tokens for Authentication.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link FeedResponseCommentView} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
TopicComments.prototype.getTopicComments = function (topicHandle, authorization, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var cursor = (options && options.cursor !== undefined) ? options.cursor : undefined;
  var limit = (options && options.limit !== undefined) ? options.limit : undefined;
  var appkey = (options && options.appkey !== undefined) ? options.appkey : undefined;
  var userHandle = (options && options.userHandle !== undefined) ? options.userHandle : undefined;
  // Validate
  try {
    if (topicHandle === null || topicHandle === undefined || typeof topicHandle.valueOf() !== 'string') {
      throw new Error('topicHandle cannot be null or undefined and it must be of type string.');
    }
    if (cursor !== null && cursor !== undefined && typeof cursor.valueOf() !== 'string') {
      throw new Error('cursor must be of type string.');
    }
    if (limit !== null && limit !== undefined && typeof limit !== 'number') {
      throw new Error('limit must be of type number.');
    }
    if (appkey !== null && appkey !== undefined && typeof appkey.valueOf() !== 'string') {
      throw new Error('appkey must be of type string.');
    }
    if (authorization === null || authorization === undefined || typeof authorization.valueOf() !== 'string') {
      throw new Error('authorization cannot be null or undefined and it must be of type string.');
    }
    if (userHandle !== null && userHandle !== undefined && typeof userHandle.valueOf() !== 'string') {
      throw new Error('userHandle must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//v0.3/topics/{topicHandle}/comments';
  requestUrl = requestUrl.replace('{topicHandle}', encodeURIComponent(topicHandle));
  var queryParameters = [];
  if (cursor !== null && cursor !== undefined) {
    queryParameters.push('cursor=' + encodeURIComponent(cursor));
  }
  if (limit !== null && limit !== undefined) {
    queryParameters.push('limit=' + encodeURIComponent(limit.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (appkey !== undefined && appkey !== null) {
    httpRequest.headers['appkey'] = appkey;
  }
  if (authorization !== undefined && authorization !== null) {
    httpRequest.headers['Authorization'] = authorization;
  }
  if (userHandle !== undefined && userHandle !== null) {
    httpRequest.headers['UserHandle'] = userHandle;
  }
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 500) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['FeedResponseCommentView']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * @summary Create a new comment
 *
 * @param {string} topicHandle Topic handle
 * 
 * @param {object} request Post comment request
 * 
 * @param {string} [request.text] Gets or sets comment text
 * 
 * @param {string} [request.blobType] Gets or sets comment blob type. Possible
 * values include: 'Unknown', 'Image', 'Video', 'Custom'
 * 
 * @param {string} [request.blobHandle] Gets or sets comment blob handle
 * 
 * @param {string} [request.language] Gets or sets comment language
 * 
 * @param {string} authorization Authentication (must begin with string
 * "Bearer "). Possible values are:
 * 
 * -sessionToken for client auth
 * 
 * -AAD token for service auth
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.appkey] App key must be filled in when using AAD
 * tokens for Authentication.
 * 
 * @param {string} [options.userHandle] User handle must be filled when using
 * AAD tokens for Authentication.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link PostCommentResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
TopicComments.prototype.postComment = function (topicHandle, request, authorization, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var appkey = (options && options.appkey !== undefined) ? options.appkey : undefined;
  var userHandle = (options && options.userHandle !== undefined) ? options.userHandle : undefined;
  // Validate
  try {
    if (topicHandle === null || topicHandle === undefined || typeof topicHandle.valueOf() !== 'string') {
      throw new Error('topicHandle cannot be null or undefined and it must be of type string.');
    }
    if (request === null || request === undefined) {
      throw new Error('request cannot be null or undefined.');
    }
    if (appkey !== null && appkey !== undefined && typeof appkey.valueOf() !== 'string') {
      throw new Error('appkey must be of type string.');
    }
    if (authorization === null || authorization === undefined || typeof authorization.valueOf() !== 'string') {
      throw new Error('authorization cannot be null or undefined and it must be of type string.');
    }
    if (userHandle !== null && userHandle !== undefined && typeof userHandle.valueOf() !== 'string') {
      throw new Error('userHandle must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri +
                   '//v0.3/topics/{topicHandle}/comments';
  requestUrl = requestUrl.replace('{topicHandle}', encodeURIComponent(topicHandle));
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (appkey !== undefined && appkey !== null) {
    httpRequest.headers['appkey'] = appkey;
  }
  if (authorization !== undefined && authorization !== null) {
    httpRequest.headers['Authorization'] = authorization;
  }
  if (userHandle !== undefined && userHandle !== null) {
    httpRequest.headers['UserHandle'] = userHandle;
  }
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (request !== null && request !== undefined) {
      var requestModelMapper = new client.models['PostCommentRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, request, 'request');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(request, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 201 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 500) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['PostCommentResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};


module.exports = TopicComments;
