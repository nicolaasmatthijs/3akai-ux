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

// load the master sakai object to access all Sakai OAE API methods
require(["jquery", "sakai/sakai.api.core"], function($, sakai) {
     
    /**
     * @name sakai.camcard
     *
     * @class camcard
     *
     * @description
     * WIDGET DESCRIPTION
     *
     * @version 0.0.1
     * @param {String} tuid Unique id of the widget
     * @param {Boolean} showSettings Show the settings of the widget or not
     */
    sakai_global.camcard = function (tuid, showSettings) {
        
		var data = sakai_global.profile.main.data;
		var obj = {
			"displayname": sakai.api.User.getDisplayName(data),
			"picture": sakai.api.User.getProfilePicture(data),
			"college": sakai.api.User.getProfileBasicElementValue(data, "college"),
			"department": sakai.api.User.getProfileBasicElementValue(data, "department"),
		};
		$("#camcard_container").html(sakai.api.Util.TemplateRenderer("camcard_template", obj));
        
    };

    // inform Sakai OAE that this widget has loaded and is ready to run
    sakai.api.Widgets.widgetLoader.informOnLoad("camcard");
});
