/*!
 * Copyright 2013 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

define(['exports', 'jquery', 'underscore', 'oae.core', '/admin/js/admin.skin.js', '/admin/js/admin.util.js'], function(exports, $, _, oae, adminSkin, adminUtil) {

    // The user management container
    var $rootel = $('#admin-usermanagement-container');

    // Variable that will be used to keep track of the current tenant
    var currentContext = null;

    // Variable that will be used to keep track of the current infinite scroll instance
    var infinityScroll = false;

    /**
     * Initialize the user management related functionality
     *
     * @param  {Tenant}    currentContext        The tenant for which the admin UI is displaying
     */
    var init = exports.init = function(_currentContext) {
        currentContext = _currentContext;

        renderUserManagement();
        getUserList();
        addBinding();
    }

    /**
     * Render the available configuration modules and their configured values
     */
    var renderUserManagement = function() {
        oae.api.util.template().render($('#admin-usermanagement-template'), null, $('#admin-usermanagement-container'));
    };

    /**
     * TODO
     */
    var getUserList = function() {
        // Disable the previous infinite scroll
        if (infinityScroll) {
            infinityScroll.kill();
        }

        // Detect whether or not we need to do a search by checking if
        // the History.js state has a query parameter
        var query = History.getState().data.query;
        $('#admin-usermanagement-search-query', $rootel).val(query);

        // Set up the list actions
        var initialContent = null;
        if (!query) {
            initialContent = oae.api.util.template().render($('#admin-usermanagement-list-actions-template'));
        }

        // Set up the infinite scroll for the content library
        infinityScroll = $('.oae-list', $rootel).infiniteScroll('/api/search/general', {
            'limit': 12,
            'q': query,
            'resourceTypes': 'user',
            'tenantAlias': currentContext.alias
        }, '#admin-usermanagement-list-template', {
            'initialContent': initialContent,
            'postProcessor': function(data) {
                // Let the template know whether or not the current list
                // is a main list or a search list, as different paging
                // keys need to be provided for each
                data.query = query;
                return data;
            },
            'emptyListProcessor': function() {
                //TODO
                oae.api.util.template().render($('#contentlibrary-noresults-template', $rootel), {
                    'query': query
                }, $('.oae-list', $rootel));
            }
        });
    }

    /**
     * Add event binding to the user management related functionality
     */
    var addBinding = function() {
        // TODO
    };

});
