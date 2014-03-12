/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
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

require(['jquery','oae.core'], function($, oae) {

    oae.api.content.getContent('c:cam:l1bCCzsc5', function(err, content) {
        var content2 = $.extend(true, {}, content);
        content2.displayName = 'REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY REALLY LONG DISPLAY NAME';
        oae.api.util.template().render($('#test-template'), {'content': content, 'content2': content2}, $('#test-container-1'));
        oae.api.util.template().render($('#test-template'), {'content': content, 'content2': content2}, $('#test-container-2'));
        oae.api.util.template().render($('#test-template'), {'content': content, 'content2': content2}, $('#test-container-3'));
    });

});