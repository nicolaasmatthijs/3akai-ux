/*!
 * Copyright 2012 Sakai Foundation (SF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

define(['exports', 'jquery', 'underscore', 'oae.api.i18n'], function(exports, $, _, i18nAPI) {

    /**
     * Get a full content profile.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to retrieve
     * @param  {Function}     callback            Standard callback method
     * @param  {Object}       callback.err        Error object containing error code and error message
     * @param  {Content}      callback.content    Content object representing the retrieved content
     * @throws {Error}                            Error thrown when no content id has been provided
     */
    var getContent = exports.getContent = function(contentId, callback) {
        if (!contentId) {
            throw new Error('A valid content id should be provided');
        }

        $.ajax({
            'url': '/api/content/' + contentId,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Create a new link.
     * 
     * @param  {String}         displayName         Display title for the created content item
     * @param  {String}         [description]       The content item's description
     * @param  {String}         [visibility]        The content item's visibility. This can be public, loggedin or private
     * @param  {String}         link                The URL that should be stored against this content item
     * @param  {String[]}       [managers]          Array of user/group ids that should be added as managers to the content item
     * @param  {String[]}       [viewers]           Array of user/group ids that should be added as viewers to the content item
     * @param  {Function}       [callback]          Standard callback method
     * @param  {Object}         [callback.err]      Error object containing error code and error message
     * @param  {Content}        [callback.content]  Content object representing the created content
     * @throws {Error}                              Error thrown when not all of the required parameters have been provided
     */
    var createLink = exports.createLink = function(displayName, description, visibility, link, managers, viewers, callback) {
        if (!displayName) {
            throw new Error('A valid link name should be provided');
        } else if (!link) {
            throw new Error('A valid link should be provided');
        }

        var data = {
            'resourceSubType': 'link',
            'displayName': displayName,
            'description': description,
            'visibility': visibility,
            'link': link,
            'managers': managers,
            'viewers': viewers
        };

        $.ajax({
            'url': '/api/content/create',
            'type': 'POST',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Create a new file.
     * 
     * @param  {String}             displayName         Display title for the created content item
     * @param  {String}             [description]       The content item's description
     * @param  {String}             [visibility]        The content item's visibility. This can be public, loggedin or private
     * @param  {Element|String}     $fileUploadField    jQuery element or selector for that jQuery element representing the file upload form field that has been used to initialise jQuery.fileupload
     * @param  {Object}             file                jQuery.fileUpload object that was returned when selecting the file that needed to be uploaded
     * @param  {String[]}           [managers]          Array of user/group ids that should be added as managers to the content item
     * @param  {String[]}           [viewers]           Array of user/group ids that should be added as viewers to the content item
     * @param  {Function}           [callback]          Standard callback method
     * @param  {Object}             [callback.err]      Error object containing error code and error message
     * @param  {Content}            [callback.content]  Content object representing the created content
     * @throws {Error}                                  Error thrown when not all of the required parameters have been provided
     */
    var createFile = exports.createFile = function(displayName, description, visibility, $fileUploadField, file, managers, viewers, callback) {
        if (!displayName) {
            throw new Error('A valid file name should be provided');
        } else if (!$fileUploadField) {
            throw new Error('A valid jquery.fileUpload container should be provided');
        } else if (!file) {
            throw new Error('A valid jquery.fileUpload file object should be provided');
        }

        // jQuery.fileupload requires sending the other form data as a .serializeArray object
        // http://api.jquery.com/serializeArray/
        var data = [
            {'name': 'resourceSubType', 'value': 'file'},
            {'name': 'displayName', 'value': displayName},
            {'name': 'description', 'value': description},
            {'name': 'visibility', 'value': visibility}
        ];

        // Add the managers and viewers as an array
        managers = managers || [];
        $.each(managers, function(index, manager) {
            data.push({'name': 'managers', 'value': manager});
        });
        viewers = viewers || [];
        $.each(viewers, function(index, viewer) {
            data.push({'name': 'viewers', 'value': viewer});
        });

        $($fileUploadField).fileupload('send', {
            'files': [file],
            'formData': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Create a new version of a file.
     *
     * @param  {Element|String}     $fileUploadField    jQuery element or selector for that jQuery element representing the file upload form field that has been used to initialise jQuery.fileupload
     * @param  {Object}             file                jQuery.fileUpload object that was returned when selecting the file that needed to be uploaded
     * @param  {Function}           [callback]          Standard callback method
     * @param  {Object}             [callback.err]      Error object containing error code and error message
     * @throws {Error}                                  Error thrown when not all of the required parameters have been provided
     */
    var createNewVersion = exports.createNewVersion = function($fileUploadField, file, callback) {
        if (!$fileUploadField) {
            throw new Error('A valid jquery.fileUpload container should be provided');
        } else if (!file) {
            throw new Error('A valid jquery.fileUpload file object should be provided');
        }

        $($fileUploadField).fileupload('send', {
            'files': [file],
            'success': function() {
                callback(null);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Create a new collaborative document.
     * 
     * @param  {String}       displayName         Display title for the created content item
     * @param  {String}       [description]       The content item's description
     * @param  {String}       [visibility]        The content item's visibility. This can be public, loggedin or private
     * @param  {String[]}     [managers]          Array of user/group ids that should be added as managers to the content item
     * @param  {String[]}     [viewers]           Array of user/group ids that should be added as viewers to the content item
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     * @param  {Content}      [callback.content]  Content object representing the created content
     * @throws {Error}                            Error thrown when not all of the required parameters have been provided
     */
    var createCollabDoc = exports.createCollabDoc = function(displayName, description, visibility, managers, viewers, callback) {
        if (!displayName) {
            throw new Error('A valid document name should be provided');
        }

        var data = {
            'resourceSubType': 'collabdoc',
            'displayName': displayName,
            'description': description,
            'visibility': visibility,
            'managers': managers,
            'viewers': viewers
        };

        $.ajax({
            'url': '/api/content/create',
            'type': 'POST',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Update a content item's metadata.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to update
     * @param  {Object}       params              JSON object where the keys represent all of the profile field names we want to update and the values represent the new values for those fields
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     * @throws {Error}                            Error thrown when not all of the required parameters have been provided
     */
    var updateContent = exports.updateContent = function(contentId, params, callback) {
        if (!contentId) {
            throw new Error('A valid content id should be provided');
        } else if (!params || _.keys(params).length === 0) {
            throw new Error('At least one update parameter should be provided');
        }

        $.ajax({
            'url': '/api/content/' + contentId,
            'type': 'POST',
            'data': params,
            'success': function() {
                callback(null);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Delete a content item through the REST API.
     * 
     * @param  {String}        contentId           Content id of the content item we're trying to delete
     * @param  {Function}      callback            Standard callback method
     * @param  {Object}        callback.err        Error object containing error code and error message
     */
    var deleteContent = exports.deleteContent = function(contentId, callback) {};

    /**
     * Get the viewers and managers of a content item.
     * 
     * @param  {String}          contentId           Content id of the content item we're trying to retrieve the members for
     * @param  {String}          [start]             The principal id to start from (this will not be included in the response)
     * @param  {Number}          [limit]             The number of members to retrieve.
     * @param  {Function}        callback            Standard callback method
     * @param  {Object}          callback.err        Error object containing error code and error message
     * @param  {User[]|Group[]}  callback.members    Array that contains an object for each member. Each object has a role property that contains the role of the member and a profile property that contains the principal profile of the member
     * @throws {Error}                               Error thrown when no content ID has been provided
     */
    var getMembers = exports.getMembers = function(contentId, start, limit, callback) {
        if (!contentId) {
            throw new Error('A content ID should be provided');
        }

        var data = {
            'start': start,
            'limit': limit
        };

        $.ajax({
            'url': '/api/content/'+ contentId + '/members',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Change the members and managers of a content item.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to update the members for
     * @param  {Object}       updatedMembers      JSON Object where the keys are the user/group ids we want to update membership for, and the values are the roles these members should get (manager or viewer). If false is passed in as a role, the principal will be removed as a member
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     * @throws {Error}                            Error thrown when not all of the required parameters have been provided
     */
    var updateMembers = exports.updateMembers = function(contentId, updatedMembers, callback) {
        if (!contentId) {
            throw new Error('A valid content id should be provided');
        } else if (!updatedMembers || _.keys(updatedMembers).length === 0) {
            throw new Error('The updatedMembers hash should contain at least 1 update.');
        }

        $.ajax({
            'url': '/api/content/'+ contentId + '/members',
            'type': 'POST',
            'data': updatedMembers,
            'success': function() {
                callback(null);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Share a content item.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to share
     * @param  {String[]}     principals          Array of principal ids with who the content should be shared
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     * @throws {Error}                            Error thrown when no content ID or Array of principal IDs has been provided
     */
    var shareContent = exports.shareContent = function(contentId, principals, callback) {
        if (!contentId) {
            throw new Error('A content ID should be provided');
        } else if (!principals.length) {
            throw new Error('A user or group to share with should be provided');
        }

        var data = {
            'viewers': principals
        };

        $.ajax({
            'url': '/api/content/' + contentId + '/share',
            'type': 'POST',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Get a principal library.
     * 
     * @param  {String}         principalId         User or group id for who we want to retrieve the library
     * @param  {String}         [start]             The content id to start from (this will not be included in the response). If the first page is needed, null should be passed in.
     * @param  {Number}         [limit]             The number of content items to retrieve.
     * @param  {Function}       callback            Standard callback method
     * @param  {Object}         callback.err        Error object containing error code and error message
     * @param  {Content[]}      callback.items      Array of content items representing the content items present in the library
     * @throws {Error}                              Error thrown when no principal ID has been provided
     */
    var getLibrary = exports.getLibrary = function(principalId, start, limit, callback) {
        if (!principalId) {
            throw new Error('A user ID should be provided');
        }

        var data = {
            'start': start,
            'limit': limit
        };

        $.ajax({
            'url': '/api/content/library/' + principalId,
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };


    ///////////////////////
    // Content utilities //
    ///////////////////////

    // Constant that holds regular expressions for the different mimeTypes that might be returned by the
    // back-end, allowing for these mimeTypes to be transformed into a human readable mime type description.
    var MIMETYPES = {
        'archive': {
            'description': '__MSG__ARCHIVE__',
            'icon': '/dev/images/mimetypes/zip.png',
            'regex': [
                'application/zip',
                'application/x-zip',
                'application/x-zip*'
            ]
        },
        'audio': {
            'description': '__MSG__AUDIO__',
            'icon': '/dev/images/mimetypes/sound.png',
            'regex': [
                'audio/*',
                'kaltura/audio'
            ]
        },
        'collabdoc': {
            // The document type will be used for collaborative documents
            'description': '__MSG__DOCUMENT__'
        },
        'image': {
            'description': '__MSG__IMAGE__',
            'icon': '/dev/images/mimetypes/images.png',
            'regex': 'image/*'
        },
        'flash': {
            'description': '__MSG__FLASH__',
            'icon': '/dev/images/mimetypes/swf.png',
            'regex': 'application/x-shockwave-flash'
        },
        'html': {
            'description': '__MSG__HTML_DOCUMENT__',
            'icon': '/dev/images/mimetypes/html.png',
            'regex': 'text/html'
        },
        'link': {
            // The link type will be used for added links
            'description': '__MSG__LINK'
        },
        'other': {
            // The other type will be used for all unrecognized mimeTypes
            'description': '__MSG__OTHER__',
            'icon': '/dev/images/mimetypes/unknown.png'
        },
        'pdf': {
            'description': '__MSG__PDF__',
            'icon': '/dev/images/mimetypes/pdf.png',
            'regex': [
                'application/pdf',
                'application/x-download',
                'application/x-pdf'
            ]
        },
        'presentation': {
            'description': '__MSG__PRESENTATION__',
            'icon': '/dev/images/mimetypes/pps.png',
            'regex': [
                'application/vnd.ms-powerpoint',
                'application/vnd.oasis.opendocument.presentation',
                'application/vnd.openxmlformats-officedocument.presentation*'
            ]
        },
        'spreadsheet': {
            'description': '__MSG__SPREADSHEET',
            'icon': '/dev/images/mimetypes/spreadsheet.png',
            'regex': [
                'application/vnd.oasis.opendocument.spreadsheet',
                'application/vnd.openxmlformats-officedocument.spreadsheet*',
                'application/vnd.ms-excel'
            ]
        },
        'text': {
            'description': '__MSG__TEXT_DOCUMENT__',
            'icon': '/dev/images/mimetypes/txt.png',
            'regex': [
                'text/plain',
                'text/rtf'
            ]
        },
        'video': {
            'description': '__MSG__VIDEO__',
            'icon': '/dev/images/mimetypes/video.png',
            'regex': [
                'video/*',
                'kaltura/video'
            ]
        },
        'word': {
            'description': '__MSG__WORD_DOCUMENT__',
            'icon': '/dev/images/mimetypes/doc.png',
            'regex': [
                'application/doc',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.word*',
                'application/vnd.oasis.opendocument.text'
            ]
        }
    };

    /**
     * Get a human readable mimeType description and icon for a piece of content. 
     * Unrecognized mimeTypes will default to the `other` type.
     * 
     * @param  {Content}        contentObj              Content object to get the mimetype information for. This is a standard content object returned by the list or search feeds
     * @return {Object}         mimeType                Object containing a human readable mimeType description and a link to a mimeType icon
     *                          mimeType.description    Human readable mimeType description
     *                          mimeType.icon           Link to the icon representing the mimeType
     */
    var getMimeType = exports.getMimeType = function(contentObj) {
        if (!contentObj) {
            throw new Error('A content object should be provided');
        }

        var mimeType = null;

        // Only files will have an actual mimeType. For all of these, we will run through the available
        // mimeType mappings and check if the content mimeType matches any of the regular expressions for
        // the mimeType mapping.
        if (contentObj.resourceSubType === 'file') {
            var mime = contentObj.mime || '';
            $.each(MIMETYPES, function(mimeTypeMappingId, mimeTypeMapping) {
                // Some mimeType mappings might not have any regular expressions. No need to check for those.
                if (mimeTypeMapping.regex) {
                    // When only a single regex is available for a mimeType mapping, a string can be provided
                    // as well.Ensure that the mimeType mapping regex is an array. 
                    var regex = _.isArray(mimeTypeObj.regex) ? mimeTypeObj.regex : [mimeTypeObj.regex];
                    // Parse the provided regular expressions into a single regular expression and match
                    // on the content's mimeType
                    var joinedRegex = new RegExp(regex.join('|'), 'i');
                    if (mime.match(joinedRegex)) {
                        mimeType = mimeTypeObj;
                    }
                }
            });
        // Links and collabdocs
        } else {
            mimeType = MIMETYPES[contentObj.resourceSubType];
        }

        // If no mimeType mapping has matches the content's mimeType, we can default back
        // to the `other` mimeType.
        if (!mimeType) {
            mimeType = MIMETYPES.other;
        }

        // Return a compact mimeType object. We also need to translate the
        // mimeType description into the user's language.
        return {
            'description': i18nAPI.translate(mimeType.description),
            'icon': mimeType.icon
        }
    };

    /**
     * Get the filesize of a file as a human readable string. This will only be done for uploaded files, 
     * other content items will remain unchanged.
     * 
     * @param  {Content}        contentObj          Content object for which to set the readable filesize information. This object will be modified to include the mimetype info.
     */
    var getFileSize = exports.getFileSize = function(contentObj) {};

    //////////////////////
    // Content comments //
    //////////////////////

    /**
     * Gets the comments on a content item
     *
     * @param  {String}       contentId           Content id of the content item for which to get the comments
     * @param  {String}       [start]             Determines the point at which content items are returned for paging purposed.
     * @param  {Integer}      [limit]             Number of items to return
     * @param  {Function}     callback            Standard callback method
     * @param  {Object}       callback.err        Error object containing error code and error message
     * @param  {Comment[]}    callback.comments   Array of comments on the content item
     * @throws {Error}                            Error thrown when no content id has been provided
     */
    var getComments = exports.getComments = function(contentId, start, limit, callback) {
        if (!contentId) {
            throw new Error('A valid content id should be provided');
        }

        var data = {
            'start': start,
            'limit': limit
        };

        $.ajax({
            'url': '/api/content/' + contentId + '/comments',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Create a comment on a content item or reply to an existing comment.
     *
     * @param  {String}       contentId           Content id of the content item we're trying to comment on
     * @param  {String}       body                The comment to be placed on the content item
     * @param  {String}       [replyTo]           Id of the comment to reply to
     * @param  {Function}     callback            Standard callback method
     * @param  {Object}       callback.err        Error object containing error code and error message
     * @param  {Comment}      callback.comment    Comment object representing the created comment
     * @throws {Error}                            Error thrown when not all of the required parameters have been provided
     */
    var createComment = exports.createComment = function(contentId, body, replyTo, callback) {
        if (!contentId) {
            throw new Error('A valid content id should be provided');
        } else if (!body) {
            throw new Error('A comment should be provided');
        }

        var data = {
            'body': body,
            'replyTo': replyTo
        };

        $.ajax({
            'url': '/api/content/' + contentId + '/comments',
            'type': 'POST',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Delete an existing comment from a content item
     *
     * @param  {String}       contentId               Content id of the content item we're trying to delete a comment from
     * @param  {String}       commentId               The ID of the comment to delete
     * @param  {Function}     callback                Standard callback method
     * @param  {Object}       callback.err            Error object containing error code and error message
     * @param  {Object}       [callback.softDeleted]  If the comment is not deleted, but instead flagged as deleted because it has replies, this will return a stripped down comment object representing the deleted comment will be returned, with the `deleted` parameter set to `false`.. If the comment has been properly deleted, no comment will be returned.
     */
    var deleteComment = exports.deleteComment = function(contentId, commentId, callback) {
        if (!contentId) {
            throw new Error('A valid content id should be provided');
        } else if (!commentId) {
            throw new Error('A comment id should be provided');
        }

        $.ajax({
            'url': '/api/content/' + contentId + '/comments/' + commentId,
            'type': 'DELETE',
            'dataType': 'json',
            'success': function(softDeleted) {
                callback(null, softDeleted);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

});
