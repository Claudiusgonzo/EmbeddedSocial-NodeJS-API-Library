/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PostSessionRequest class.
 * @constructor
 * Request to post (create) session
 * @member {string} identityProvider Gets or sets identity provider type.
 * Possible values include: 'Facebook', 'Microsoft', 'Google', 'Twitter',
 * 'Beihai'
 * 
 * @member {string} [accessToken] Gets or sets access or authentication token,
 * user code, or verifier obtained from third-party provider.
 * The server contacts the third-party provider to use the token
 * (or user code, or verifier) for discover the user's identity.
 * 
 * @member {string} [requestToken] Gets or sets request token obtained from
 * third-party provider.
 * Some providers do not issue authentication or access tokens,
 * but they issue request tokens
 * and verifiers.
 * 
 * @member {string} instanceId Gets or sets instance id -- Unique installation
 * id of the app
 * 
 * @member {boolean} [createUser] Gets or sets a value indicating whether we
 * should create a new user if the user doesn't exist
 * 
 */
function PostSessionRequest() {
}

/**
 * Defines the metadata of PostSessionRequest
 *
 * @returns {object} metadata of PostSessionRequest
 *
 */
PostSessionRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PostSessionRequest',
    type: {
      name: 'Composite',
      className: 'PostSessionRequest',
      modelProperties: {
        identityProvider: {
          required: true,
          serializedName: 'identityProvider',
          type: {
            name: 'Enum',
            allowedValues: [ 'Facebook', 'Microsoft', 'Google', 'Twitter', 'Beihai' ]
          }
        },
        accessToken: {
          required: false,
          serializedName: 'accessToken',
          type: {
            name: 'String'
          }
        },
        requestToken: {
          required: false,
          serializedName: 'requestToken',
          type: {
            name: 'String'
          }
        },
        instanceId: {
          required: true,
          serializedName: 'instanceId',
          type: {
            name: 'String'
          }
        },
        createUser: {
          required: false,
          serializedName: 'createUser',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = PostSessionRequest;
