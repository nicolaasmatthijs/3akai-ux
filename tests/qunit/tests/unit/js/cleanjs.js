require(
    [
    "jquery", 
    "sakai/sakai.api.core",
    "qunitjs/qunit",
    "../../../../tests/qunit/js/sakai_qunit_lib.js",
    "../../../../tests/qunit/js/dev.js",
    "../../../../tests/qunit/js/devwidgets.js",
    "../../../../tests/qunit/js/jshint.js"
    ], function($, sakai) {

        module("Clean Javascript");

        var consoleregex = new RegExp(/console\.(?:log|warn|error|debug|trace)/g),
            alertregex = new RegExp(/alert\([.\s\S]*\)/g),
            spaceregex = new RegExp(/\(\{/g),
            ifregex = new RegExp(/if\(/g),
            elseregex = new RegExp(/else\{/g),
            forregex =  new RegExp(/for\(/g);

        var checkForSpaces = function(file) {
            var matchesSpace = spaceregex.exec(file);
            var matchesIf = ifregex.exec(file);
            var matchesElse = elseregex.exec(file);
            var matchesFor = forregex.exec(file);
            if (matchesSpace && matchesSpace.length) {
                for (var s=0;s<matchesSpace.length;s++) {
                    ok(false, "found space issues around ){");
                }
            }
            if (matchesIf && matchesIf.length) {
                for (var i=0; i<matchesIf.length; i++) {
                    ok(false, "found space issue around if(");
                }
            }
            if (matchesElse && matchesElse.length) {
                for (var e=0;e<matchesElse.length;e++) {
                    ok(false, "found space issue around else{");
                }
            }
            if (matchesFor && matchesFor.length) {
                for (var f=0;f<matchesFor.length;f++) {
                    ok(false, "found space issue around for(");
                }
            }   
            if (!((matchesSpace && matchesSpace.length) || (matchesIf && matchesIf.length) ||
                 (matchesElse && matchesElse.length) || (matchesFor && matchesFor.length))) {
                ok(true, "No space issues found");
            }
        };

        var checkForConsoleLog = function(file, filename) {
            var matches = consoleregex.exec(file);
            if (filename === "/dev/lib/sakai/sakai.dependencies.js" && matches && matches.length === 1) {
                ok(true, "Found a single console.log in sakai.dependencies.js which is the only one allowed as it is the wrapper for debug.log");
            } else if (matches && matches.length) {
                for (var i=0,j=matches.length; i<j; i++) {
                    ok(false, "found console.(log|warn|error|debug|trace)");
                }
            } else {
                ok(true, "No console.(log|warn|error|debug|trace) calls");
            }
        };

        var checkForAlert = function(file) {
            var matches = alertregex.exec(file);
            if (matches && matches.length) {
                for (var i=0,j=matches.length; i<j; i++) {
                    ok(false, "found alert()");
                }
            } else {
                ok(true, "No alert() found");
            }
        };

        var JSHintfile = function(data, callback) {
            var result = JSHINT(data, {
                // http://www.jshint.com/options/
                sub:true // ignore dot notation recommendations - ie ["userid"] should be .userid
            });
            if (result) {
                ok(result, "JSHint clean");
            } else {
                for (var i=0,j=JSHINT.errors.length; i<j; i++) {
                    var error = JSHINT.errors[i];
                    if (error) {
                        ok(false, "JSHint error on line " + error.line + " character " + error.character + ": " + error.reason + ", " + error.evidence);
                    }
                }
            }
            callback();
        };

        var makeCleanJSTest = function(filename) {
            asyncTest(filename, function() {
                $.ajax({
                    dataType: "text",
                    url: filename,
                    success: function(data) {
                        checkForConsoleLog(data, filename);
                        checkForAlert(data);
                        checkForSpaces(data);
                        JSHintfile(data, function() {
                            start();
                        });
                    }
                });
            });
        };

        var cleanJSTest = function() {
            $(window).trigger("addlocalbinding.qunit.sakai");
            QUnit.start();
            for (var i=0, j=sakai_global.qunit.allJSFiles.length; i<j; i++) {
                var file = sakai_global.qunit.allJSFiles[i];
                makeCleanJSTest(file);
            }
        };

        if (sakai_global.qunit && sakai_global.qunit.ready) {
            cleanJSTest();
        } else {
            $(window).bind("ready.qunit.sakai", function() {
                cleanJSTest();
            });
        }
    }
);
