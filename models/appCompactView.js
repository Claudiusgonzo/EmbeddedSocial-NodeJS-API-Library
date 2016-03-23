/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under
 * the MIT License. See LICENSE in the project root for license information.
 * This file was generated using AutoRest.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AppCompactView class.
 * @constructor
 * App compact view
 * @member {string} appHandle Gets or sets app handle
 * 
 * @member {string} name Gets or sets app name
 * 
 * @member {string} [iconHandle] Gets or sets app icon handle
 * 
 * @member {string} [iconUrl] Gets or sets app icon url
 * 
 * @member {string} platformType Gets or sets platform type. Possible values
 * include: 'Windows', 'Android', 'IOS'
 * 
 * @member {string} [deepLink] Gets or sets app deep link
 * 
 * @member {string} [storeLink] Gets or sets app store link
 * 
 */
function AppCompactView() {
}

/**
 * Defines the metadata of AppCompactView
 *
 * @returns {object} metadata of AppCompactView
 *
 */
AppCompactView.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppCompactView',
    type: {
      name: 'Composite',
      className: 'AppCompactView',
      modelProperties: {
        appHandle: {
          required: true,
          serializedName: 'appHandle',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        iconHandle: {
          required: false,
          serializedName: 'iconHandle',
          type: {
            name: 'String'
          }
        },
        iconUrl: {
          required: false,
          serializedName: 'iconUrl',
          type: {
            name: 'String'
          }
        },
        platformType: {
          required: true,
          serializedName: 'platformType',
          type: {
            name: 'Enum',
            allowedValues: [ 'Windows', 'Android', 'IOS' ]
          }
        },
        deepLink: {
          required: false,
          serializedName: 'deepLink',
          type: {
            name: 'String'
          }
        },
        storeLink: {
          required: false,
          serializedName: 'storeLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AppCompactView;
