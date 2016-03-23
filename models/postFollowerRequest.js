/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostFollowerRequest class.
 * @constructor
 * Request to post (accept) a follower
 * @member {string} userHandle Gets or sets user handle
 * 
 */
function PostFollowerRequest() {
}

/**
 * Defines the metadata of PostFollowerRequest
 *
 * @returns {object} metadata of PostFollowerRequest
 *
 */
PostFollowerRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostFollowerRequest',
    type: {
      name: 'Composite',
      className: 'PostFollowerRequest',
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

module.exports = PostFollowerRequest;
