/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * <autogenerated> This file was generated using AutoRest. </autogenerated>
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PutNotificationsStatusRequest class.
 * @constructor
 * Request to put (update) notifications status
 * @member {string} [readActivityHandle] Gets or sets last read activity handle
 * 
 */
function PutNotificationsStatusRequest() {
}

/**
 * Defines the metadata of PutNotificationsStatusRequest
 *
 * @returns {object} metadata of PutNotificationsStatusRequest
 *
 */
PutNotificationsStatusRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PutNotificationsStatusRequest',
    type: {
      name: 'Composite',
      className: 'PutNotificationsStatusRequest',
      modelProperties: {
        readActivityHandle: {
          required: false,
          serializedName: 'readActivityHandle',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PutNotificationsStatusRequest;
