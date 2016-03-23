/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostBlockedUserRequest class.
 * @constructor
 * Request to post a blocked user (block user)
 * @member {string} userHandle Gets or sets user handle
 * 
 */
function PostBlockedUserRequest() {
}

/**
 * Defines the metadata of PostBlockedUserRequest
 *
 * @returns {object} metadata of PostBlockedUserRequest
 *
 */
PostBlockedUserRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostBlockedUserRequest',
    type: {
      name: 'Composite',
      className: 'PostBlockedUserRequest',
      modelProperties: {
        userHandle: {
          required: true,
          serializedName: 'userHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PostBlockedUserRequest;
