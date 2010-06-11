/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

/*global $, sakai */

var sakai = sakai || {};

/**
 * Initialize the Activitystream widget
 * @param {String} tuid unique id of the widget
 * @param {Boolean} showSettings show the settings of the widget or not
 */
sakai.activitystream38 = function(tuid, showSettings) {


    /////////////////////////////
    // Configuration variables //
    /////////////////////////////

    var activityData = {};
    var contactsData = {};
    var activityitemsCount = 10;
    var activityitemsSortOrder = "descending";
    var displayMe = true;

    // HTML elements
    var $rootel = $("#" + tuid);
    var $contentContainer = $("#as_content_container", $rootel);
    var $mainScreen = $("#as_main", $rootel);
    var $settingsScreen = $("#as_settings", $rootel);

    var $settingsItemCountInput = $("#as_item_count", $rootel);
    var $settingsDisplayMeInput = $("#as_display_me", $rootel);
    var $settingsCancelButton = $("#as_settings_cancel");
    var $settingsOkButton = $("#as_settings_ok");

    var $feedContainer = $("#as_feed", $rootel);
    var $feedTitle = $("#as_feed_title", $rootel);

    /////////////////
    // Main screen //
    /////////////////

    /////////////////////
    // Settings screen //
    /////////////////////

    /**
     * Init function
     */
    var doInit = function(){


    };

    doInit();
};

sakai.api.Widgets.widgetLoader.informOnLoad("activitystream38");
