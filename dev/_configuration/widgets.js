var Widgets = {
    "relationships": [
        {"name": "Classmate", "definition": "My Classmate"},
        {"name": "Supervisor", "inverse": "Supervised", "definition": "is my supervisor"},
        {"name": "Supervised", "inverse": "Supervisor", "definition": "is being supervised by me"},
        {"name": "Lecturer", "inverse": "Student", "definition": "is my lecturer"},
        {"name": "Student", "inverse": "Lecturer", "definition": "is my student"},
        {"name": "Colleague", "definition": "is my colleague"},
        {"name": "College Mate", "definition": "is my college mate"},
        {"name": "Shares Interests", "definition": "shares an interest with me"}
    ],
    "groups":[
        "Administrators",
        "Lecturers & Supervisors",
        "Researchers",
        "Students"
    ],
    "layouts": {
        "onecolumn": {
            "name":"One column",
            "widths":[100],
            "siteportal": true
        },
        "dev": {
            "name":"Dev Layout",
            "widths":[50,50],
            "siteportal": true
        },
        "threecolumn": {
            "name":"Three equal columns",
            "widths":[33,33,33],
            "siteportal": false
        },
        "fourcolumn": {
            "name":"Four equal columns",
            "widths":[25,25,25,25],
            "siteportal": false
        },
        "fivecolumn": {
            "name":"Five equal columns",
            "widths":[20,20,20,20,20],
            "siteportal": false
        }
    },
    "widgets": {
        "addcontent": {
            "ca":true,
            "description":"Add Resource to a Site",
            "name":"Add Resource",
            "id":"addcontent",
            "img":"/devwidgets/addcontent/images/addcontent.png",
            "showinsakaigoodies":true,
            "url":"/devwidgets/addcontent/addcontent.html"
        },
        "activitystream": {
            "description":"Activity Stream Widget",
            "hasSettings":true,
            "img": "/devwidgets/activitystream/images/activitystream_icon.png",
            "id":"activitystream",
            "i18n": {
                "default": "/devwidgets/activitystream/bundles/default.json",
                "en_US": "/devwidgets/activitystream/bundles/en_US.json"
            },
            "name":"Activity Stream",
            "personalportal":true,
            "url":"/devwidgets/activitystream/activitystream.html"
        },
        "activitystream1": {
            "description": "Activity Stream Widget - 1",
            "hasSettings": true,
            "img": "/devwidgets/activitystream1/images/activitystream_icon.png",
            "id": "activitystream1",
            "i18n": {
                "default": "/devwidgets/activitystream1/bundles/default.json",
                "en_US": "/devwidgets/activitystream1/bundles/en_US.json"
            },
            "name": "Activity Stream - 1",
            "personalportal": true,
            "url": "/devwidgets/activitystream1/activitystream1.html"
        },
        "activitystream2": {
            "description": "Activity Stream Widget - 2",
            "hasSettings": true,
            "img": "/devwidgets/activitystream2/images/activitystream_icon.png",
            "id": "activitystream2",
            "i18n": {
                "default": "/devwidgets/activitystream2/bundles/default.json",
                "en_US": "/devwidgets/activitystream2/bundles/en_US.json"
            },
            "name": "Activity Stream - 2",
            "personalportal": true,
            "url": "/devwidgets/activitystream2/activitystream2.html"
        },
        "activitystream3": {
            "description": "Activity Stream Widget - 3",
            "hasSettings": true,
            "img": "/devwidgets/activitystream3/images/activitystream_icon.png",
            "id": "activitystream3",
            "i18n": {
                "default": "/devwidgets/activitystream3/bundles/default.json",
                "en_US": "/devwidgets/activitystream3/bundles/en_US.json"
            },
            "name": "Activity Stream - 3",
            "personalportal": true,
            "url": "/devwidgets/activitystream3/activitystream3.html"
        },
        "activitystream4": {
            "description": "Activity Stream Widget - 4",
            "hasSettings": true,
            "img": "/devwidgets/activitystream4/images/activitystream_icon.png",
            "id": "activitystream4",
            "i18n": {
                "default": "/devwidgets/activitystream4/bundles/default.json",
                "en_US": "/devwidgets/activitystream4/bundles/en_US.json"
            },
            "name": "Activity Stream - 4",
            "personalportal": true,
            "url": "/devwidgets/activitystream4/activitystream4.html"
        },
        "activitystream5": {
            "description": "Activity Stream Widget - 5",
            "hasSettings": true,
            "img": "/devwidgets/activitystream5/images/activitystream_icon.png",
            "id": "activitystream5",
            "i18n": {
                "default": "/devwidgets/activitystream5/bundles/default.json",
                "en_US": "/devwidgets/activitystream5/bundles/en_US.json"
            },
            "name": "Activity Stream - 5",
            "personalportal": true,
            "url": "/devwidgets/activitystream5/activitystream5.html"
        },
        "activitystream6": {
            "description": "Activity Stream Widget - 6",
            "hasSettings": true,
            "img": "/devwidgets/activitystream6/images/activitystream_icon.png",
            "id": "activitystream6",
            "i18n": {
                "default": "/devwidgets/activitystream6/bundles/default.json",
                "en_US": "/devwidgets/activitystream6/bundles/en_US.json"
            },
            "name": "Activity Stream - 6",
            "personalportal": true,
            "url": "/devwidgets/activitystream6/activitystream6.html"
        },
        "activitystream7": {
            "description": "Activity Stream Widget - 7",
            "hasSettings": true,
            "img": "/devwidgets/activitystream7/images/activitystream_icon.png",
            "id": "activitystream7",
            "i18n": {
                "default": "/devwidgets/activitystream7/bundles/default.json",
                "en_US": "/devwidgets/activitystream7/bundles/en_US.json"
            },
            "name": "Activity Stream - 7",
            "personalportal": true,
            "url": "/devwidgets/activitystream7/activitystream7.html"
        },
        "activitystream8": {
            "description": "Activity Stream Widget - 8",
            "hasSettings": true,
            "img": "/devwidgets/activitystream8/images/activitystream_icon.png",
            "id": "activitystream8",
            "i18n": {
                "default": "/devwidgets/activitystream8/bundles/default.json",
                "en_US": "/devwidgets/activitystream8/bundles/en_US.json"
            },
            "name": "Activity Stream - 8",
            "personalportal": true,
            "url": "/devwidgets/activitystream8/activitystream8.html"
        },
        "activitystream9": {
            "description": "Activity Stream Widget - 9",
            "hasSettings": true,
            "img": "/devwidgets/activitystream9/images/activitystream_icon.png",
            "id": "activitystream9",
            "i18n": {
                "default": "/devwidgets/activitystream9/bundles/default.json",
                "en_US": "/devwidgets/activitystream9/bundles/en_US.json"
            },
            "name": "Activity Stream - 9",
            "personalportal": true,
            "url": "/devwidgets/activitystream9/activitystream9.html"
        },
        "activitystream10": {
            "description": "Activity Stream Widget - 10",
            "hasSettings": true,
            "img": "/devwidgets/activitystream10/images/activitystream_icon.png",
            "id": "activitystream10",
            "i18n": {
                "default": "/devwidgets/activitystream10/bundles/default.json",
                "en_US": "/devwidgets/activitystream10/bundles/en_US.json"
            },
            "name": "Activity Stream - 10",
            "personalportal": true,
            "url": "/devwidgets/activitystream10/activitystream10.html"
        },
        "activitystream11": {
            "description": "Activity Stream Widget - 11",
            "hasSettings": true,
            "img": "/devwidgets/activitystream11/images/activitystream_icon.png",
            "id": "activitystream11",
            "i18n": {
                "default": "/devwidgets/activitystream11/bundles/default.json",
                "en_US": "/devwidgets/activitystream11/bundles/en_US.json"
            },
            "name": "Activity Stream - 11",
            "personalportal": true,
            "url": "/devwidgets/activitystream11/activitystream11.html"
        },
        "activitystream12": {
            "description": "Activity Stream Widget - 12",
            "hasSettings": true,
            "img": "/devwidgets/activitystream12/images/activitystream_icon.png",
            "id": "activitystream12",
            "i18n": {
                "default": "/devwidgets/activitystream12/bundles/default.json",
                "en_US": "/devwidgets/activitystream12/bundles/en_US.json"
            },
            "name": "Activity Stream - 12",
            "personalportal": true,
            "url": "/devwidgets/activitystream12/activitystream12.html"
        },
        "activitystream13": {
            "description": "Activity Stream Widget - 13",
            "hasSettings": true,
            "img": "/devwidgets/activitystream13/images/activitystream_icon.png",
            "id": "activitystream13",
            "i18n": {
                "default": "/devwidgets/activitystream13/bundles/default.json",
                "en_US": "/devwidgets/activitystream13/bundles/en_US.json"
            },
            "name": "Activity Stream - 13",
            "personalportal": true,
            "url": "/devwidgets/activitystream13/activitystream13.html"
        },
        "activitystream14": {
            "description": "Activity Stream Widget - 14",
            "hasSettings": true,
            "img": "/devwidgets/activitystream14/images/activitystream_icon.png",
            "id": "activitystream14",
            "i18n": {
                "default": "/devwidgets/activitystream14/bundles/default.json",
                "en_US": "/devwidgets/activitystream14/bundles/en_US.json"
            },
            "name": "Activity Stream - 14",
            "personalportal": true,
            "url": "/devwidgets/activitystream14/activitystream14.html"
        },
        "activitystream15": {
            "description": "Activity Stream Widget - 15",
            "hasSettings": true,
            "img": "/devwidgets/activitystream15/images/activitystream_icon.png",
            "id": "activitystream15",
            "i18n": {
                "default": "/devwidgets/activitystream15/bundles/default.json",
                "en_US": "/devwidgets/activitystream15/bundles/en_US.json"
            },
            "name": "Activity Stream - 15",
            "personalportal": true,
            "url": "/devwidgets/activitystream15/activitystream15.html"
        },
        "activitystream16": {
            "description": "Activity Stream Widget - 16",
            "hasSettings": true,
            "img": "/devwidgets/activitystream16/images/activitystream_icon.png",
            "id": "activitystream16",
            "i18n": {
                "default": "/devwidgets/activitystream16/bundles/default.json",
                "en_US": "/devwidgets/activitystream16/bundles/en_US.json"
            },
            "name": "Activity Stream - 16",
            "personalportal": true,
            "url": "/devwidgets/activitystream16/activitystream16.html"
        },
        "activitystream17": {
            "description": "Activity Stream Widget - 17",
            "hasSettings": true,
            "img": "/devwidgets/activitystream17/images/activitystream_icon.png",
            "id": "activitystream17",
            "i18n": {
                "default": "/devwidgets/activitystream17/bundles/default.json",
                "en_US": "/devwidgets/activitystream17/bundles/en_US.json"
            },
            "name": "Activity Stream - 17",
            "personalportal": true,
            "url": "/devwidgets/activitystream17/activitystream17.html"
        },
        "activitystream18": {
            "description": "Activity Stream Widget - 18",
            "hasSettings": true,
            "img": "/devwidgets/activitystream18/images/activitystream_icon.png",
            "id": "activitystream18",
            "i18n": {
                "default": "/devwidgets/activitystream18/bundles/default.json",
                "en_US": "/devwidgets/activitystream18/bundles/en_US.json"
            },
            "name": "Activity Stream - 18",
            "personalportal": true,
            "url": "/devwidgets/activitystream18/activitystream18.html"
        },
        "activitystream19": {
            "description": "Activity Stream Widget - 19",
            "hasSettings": true,
            "img": "/devwidgets/activitystream19/images/activitystream_icon.png",
            "id": "activitystream19",
            "i18n": {
                "default": "/devwidgets/activitystream19/bundles/default.json",
                "en_US": "/devwidgets/activitystream19/bundles/en_US.json"
            },
            "name": "Activity Stream - 19",
            "personalportal": true,
            "url": "/devwidgets/activitystream19/activitystream19.html"
        },
        "activitystream20": {
            "description": "Activity Stream Widget - 20",
            "hasSettings": true,
            "img": "/devwidgets/activitystream20/images/activitystream_icon.png",
            "id": "activitystream20",
            "i18n": {
                "default": "/devwidgets/activitystream20/bundles/default.json",
                "en_US": "/devwidgets/activitystream20/bundles/en_US.json"
            },
            "name": "Activity Stream - 20",
            "personalportal": true,
            "url": "/devwidgets/activitystream20/activitystream20.html"
        },
        "activitystream21": {
            "description": "Activity Stream Widget - 21",
            "hasSettings": true,
            "img": "/devwidgets/activitystream21/images/activitystream_icon.png",
            "id": "activitystream21",
            "i18n": {
                "default": "/devwidgets/activitystream21/bundles/default.json",
                "en_US": "/devwidgets/activitystream21/bundles/en_US.json"
            },
            "name": "Activity Stream - 21",
            "personalportal": true,
            "url": "/devwidgets/activitystream21/activitystream21.html"
        },
        "activitystream22": {
            "description": "Activity Stream Widget - 22",
            "hasSettings": true,
            "img": "/devwidgets/activitystream22/images/activitystream_icon.png",
            "id": "activitystream22",
            "i18n": {
                "default": "/devwidgets/activitystream22/bundles/default.json",
                "en_US": "/devwidgets/activitystream22/bundles/en_US.json"
            },
            "name": "Activity Stream - 22",
            "personalportal": true,
            "url": "/devwidgets/activitystream22/activitystream22.html"
        },
        "activitystream23": {
            "description": "Activity Stream Widget - 23",
            "hasSettings": true,
            "img": "/devwidgets/activitystream23/images/activitystream_icon.png",
            "id": "activitystream23",
            "i18n": {
                "default": "/devwidgets/activitystream23/bundles/default.json",
                "en_US": "/devwidgets/activitystream23/bundles/en_US.json"
            },
            "name": "Activity Stream - 23",
            "personalportal": true,
            "url": "/devwidgets/activitystream23/activitystream23.html"
        },
        "activitystream24": {
            "description": "Activity Stream Widget - 24",
            "hasSettings": true,
            "img": "/devwidgets/activitystream24/images/activitystream_icon.png",
            "id": "activitystream24",
            "i18n": {
                "default": "/devwidgets/activitystream24/bundles/default.json",
                "en_US": "/devwidgets/activitystream24/bundles/en_US.json"
            },
            "name": "Activity Stream - 24",
            "personalportal": true,
            "url": "/devwidgets/activitystream24/activitystream24.html"
        },
        "activitystream25": {
            "description": "Activity Stream Widget - 25",
            "hasSettings": true,
            "img": "/devwidgets/activitystream25/images/activitystream_icon.png",
            "id": "activitystream25",
            "i18n": {
                "default": "/devwidgets/activitystream25/bundles/default.json",
                "en_US": "/devwidgets/activitystream25/bundles/en_US.json"
            },
            "name": "Activity Stream - 25",
            "personalportal": true,
            "url": "/devwidgets/activitystream25/activitystream25.html"
        },
        "activitystream26": {
            "description": "Activity Stream Widget - 26",
            "hasSettings": true,
            "img": "/devwidgets/activitystream26/images/activitystream_icon.png",
            "id": "activitystream26",
            "i18n": {
                "default": "/devwidgets/activitystream26/bundles/default.json",
                "en_US": "/devwidgets/activitystream26/bundles/en_US.json"
            },
            "name": "Activity Stream - 26",
            "personalportal": true,
            "url": "/devwidgets/activitystream26/activitystream26.html"
        },
        "activitystream27": {
            "description": "Activity Stream Widget - 27",
            "hasSettings": true,
            "img": "/devwidgets/activitystream27/images/activitystream_icon.png",
            "id": "activitystream27",
            "i18n": {
                "default": "/devwidgets/activitystream27/bundles/default.json",
                "en_US": "/devwidgets/activitystream27/bundles/en_US.json"
            },
            "name": "Activity Stream - 27",
            "personalportal": true,
            "url": "/devwidgets/activitystream27/activitystream27.html"
        },
        "activitystream28": {
            "description": "Activity Stream Widget - 28",
            "hasSettings": true,
            "img": "/devwidgets/activitystream28/images/activitystream_icon.png",
            "id": "activitystream28",
            "i18n": {
                "default": "/devwidgets/activitystream28/bundles/default.json",
                "en_US": "/devwidgets/activitystream28/bundles/en_US.json"
            },
            "name": "Activity Stream - 28",
            "personalportal": true,
            "url": "/devwidgets/activitystream28/activitystream28.html"
        },
        "activitystream29": {
            "description": "Activity Stream Widget - 29",
            "hasSettings": true,
            "img": "/devwidgets/activitystream29/images/activitystream_icon.png",
            "id": "activitystream29",
            "i18n": {
                "default": "/devwidgets/activitystream29/bundles/default.json",
                "en_US": "/devwidgets/activitystream29/bundles/en_US.json"
            },
            "name": "Activity Stream - 29",
            "personalportal": true,
            "url": "/devwidgets/activitystream29/activitystream29.html"
        },
        "activitystream30": {
            "description": "Activity Stream Widget - 30",
            "hasSettings": true,
            "img": "/devwidgets/activitystream30/images/activitystream_icon.png",
            "id": "activitystream30",
            "i18n": {
                "default": "/devwidgets/activitystream30/bundles/default.json",
                "en_US": "/devwidgets/activitystream30/bundles/en_US.json"
            },
            "name": "Activity Stream - 30",
            "personalportal": true,
            "url": "/devwidgets/activitystream30/activitystream30.html"
        },
        "activitystream31": {
            "description": "Activity Stream Widget - 31",
            "hasSettings": true,
            "img": "/devwidgets/activitystream31/images/activitystream_icon.png",
            "id": "activitystream31",
            "i18n": {
                "default": "/devwidgets/activitystream31/bundles/default.json",
                "en_US": "/devwidgets/activitystream31/bundles/en_US.json"
            },
            "name": "Activity Stream - 31",
            "personalportal": true,
            "url": "/devwidgets/activitystream31/activitystream31.html"
        },
        "activitystream32": {
            "description": "Activity Stream Widget - 32",
            "hasSettings": true,
            "img": "/devwidgets/activitystream32/images/activitystream_icon.png",
            "id": "activitystream32",
            "i18n": {
                "default": "/devwidgets/activitystream32/bundles/default.json",
                "en_US": "/devwidgets/activitystream32/bundles/en_US.json"
            },
            "name": "Activity Stream - 32",
            "personalportal": true,
            "url": "/devwidgets/activitystream32/activitystream32.html"
        },
        "activitystream33": {
            "description": "Activity Stream Widget - 33",
            "hasSettings": true,
            "img": "/devwidgets/activitystream33/images/activitystream_icon.png",
            "id": "activitystream33",
            "i18n": {
                "default": "/devwidgets/activitystream33/bundles/default.json",
                "en_US": "/devwidgets/activitystream33/bundles/en_US.json"
            },
            "name": "Activity Stream - 33",
            "personalportal": true,
            "url": "/devwidgets/activitystream33/activitystream33.html"
        },
        "activitystream34": {
            "description": "Activity Stream Widget - 34",
            "hasSettings": true,
            "img": "/devwidgets/activitystream34/images/activitystream_icon.png",
            "id": "activitystream34",
            "i18n": {
                "default": "/devwidgets/activitystream34/bundles/default.json",
                "en_US": "/devwidgets/activitystream34/bundles/en_US.json"
            },
            "name": "Activity Stream - 34",
            "personalportal": true,
            "url": "/devwidgets/activitystream34/activitystream34.html"
        },
        "activitystream35": {
            "description": "Activity Stream Widget - 35",
            "hasSettings": true,
            "img": "/devwidgets/activitystream35/images/activitystream_icon.png",
            "id": "activitystream35",
            "i18n": {
                "default": "/devwidgets/activitystream35/bundles/default.json",
                "en_US": "/devwidgets/activitystream35/bundles/en_US.json"
            },
            "name": "Activity Stream - 35",
            "personalportal": true,
            "url": "/devwidgets/activitystream35/activitystream35.html"
        },
        "activitystream36": {
            "description": "Activity Stream Widget - 36",
            "hasSettings": true,
            "img": "/devwidgets/activitystream36/images/activitystream_icon.png",
            "id": "activitystream36",
            "i18n": {
                "default": "/devwidgets/activitystream36/bundles/default.json",
                "en_US": "/devwidgets/activitystream36/bundles/en_US.json"
            },
            "name": "Activity Stream - 36",
            "personalportal": true,
            "url": "/devwidgets/activitystream36/activitystream36.html"
        },
        "activitystream37": {
            "description": "Activity Stream Widget - 37",
            "hasSettings": true,
            "img": "/devwidgets/activitystream37/images/activitystream_icon.png",
            "id": "activitystream37",
            "i18n": {
                "default": "/devwidgets/activitystream37/bundles/default.json",
                "en_US": "/devwidgets/activitystream37/bundles/en_US.json"
            },
            "name": "Activity Stream - 37",
            "personalportal": true,
            "url": "/devwidgets/activitystream37/activitystream37.html"
        },
        "activitystream38": {
            "description": "Activity Stream Widget - 38",
            "hasSettings": true,
            "img": "/devwidgets/activitystream38/images/activitystream_icon.png",
            "id": "activitystream38",
            "i18n": {
                "default": "/devwidgets/activitystream38/bundles/default.json",
                "en_US": "/devwidgets/activitystream38/bundles/en_US.json"
            },
            "name": "Activity Stream - 38",
            "personalportal": true,
            "url": "/devwidgets/activitystream38/activitystream38.html"
        },
        "activitystream39": {
            "description": "Activity Stream Widget - 39",
            "hasSettings": true,
            "img": "/devwidgets/activitystream39/images/activitystream_icon.png",
            "id": "activitystream39",
            "i18n": {
                "default": "/devwidgets/activitystream39/bundles/default.json",
                "en_US": "/devwidgets/activitystream39/bundles/en_US.json"
            },
            "name": "Activity Stream - 39",
            "personalportal": true,
            "url": "/devwidgets/activitystream39/activitystream39.html"
        },
        "activitystream40": {
            "description": "Activity Stream Widget - 40",
            "hasSettings": true,
            "img": "/devwidgets/activitystream40/images/activitystream_icon.png",
            "id": "activitystream40",
            "i18n": {
                "default": "/devwidgets/activitystream40/bundles/default.json",
                "en_US": "/devwidgets/activitystream40/bundles/en_US.json"
            },
            "name": "Activity Stream - 40",
            "personalportal": true,
            "url": "/devwidgets/activitystream40/activitystream40.html"
        },
        "activitystream41": {
            "description": "Activity Stream Widget - 41",
            "hasSettings": true,
            "img": "/devwidgets/activitystream41/images/activitystream_icon.png",
            "id": "activitystream41",
            "i18n": {
                "default": "/devwidgets/activitystream41/bundles/default.json",
                "en_US": "/devwidgets/activitystream41/bundles/en_US.json"
            },
            "name": "Activity Stream - 41",
            "personalportal": true,
            "url": "/devwidgets/activitystream41/activitystream41.html"
        },
        "activitystream42": {
            "description": "Activity Stream Widget - 42",
            "hasSettings": true,
            "img": "/devwidgets/activitystream42/images/activitystream_icon.png",
            "id": "activitystream42",
            "i18n": {
                "default": "/devwidgets/activitystream42/bundles/default.json",
                "en_US": "/devwidgets/activitystream42/bundles/en_US.json"
            },
            "name": "Activity Stream - 42",
            "personalportal": true,
            "url": "/devwidgets/activitystream42/activitystream42.html"
        },
        "activitystream43": {
            "description": "Activity Stream Widget - 43",
            "hasSettings": true,
            "img": "/devwidgets/activitystream43/images/activitystream_icon.png",
            "id": "activitystream43",
            "i18n": {
                "default": "/devwidgets/activitystream43/bundles/default.json",
                "en_US": "/devwidgets/activitystream43/bundles/en_US.json"
            },
            "name": "Activity Stream - 43",
            "personalportal": true,
            "url": "/devwidgets/activitystream43/activitystream43.html"
        },
        "activitystream44": {
            "description": "Activity Stream Widget - 44",
            "hasSettings": true,
            "img": "/devwidgets/activitystream44/images/activitystream_icon.png",
            "id": "activitystream44",
            "i18n": {
                "default": "/devwidgets/activitystream44/bundles/default.json",
                "en_US": "/devwidgets/activitystream44/bundles/en_US.json"
            },
            "name": "Activity Stream - 44",
            "personalportal": true,
            "url": "/devwidgets/activitystream44/activitystream44.html"
        },
        "activitystream45": {
            "description": "Activity Stream Widget - 45",
            "hasSettings": true,
            "img": "/devwidgets/activitystream45/images/activitystream_icon.png",
            "id": "activitystream45",
            "i18n": {
                "default": "/devwidgets/activitystream45/bundles/default.json",
                "en_US": "/devwidgets/activitystream45/bundles/en_US.json"
            },
            "name": "Activity Stream - 45",
            "personalportal": true,
            "url": "/devwidgets/activitystream45/activitystream45.html"
        },
        "activitystream46": {
            "description": "Activity Stream Widget - 46",
            "hasSettings": true,
            "img": "/devwidgets/activitystream46/images/activitystream_icon.png",
            "id": "activitystream46",
            "i18n": {
                "default": "/devwidgets/activitystream46/bundles/default.json",
                "en_US": "/devwidgets/activitystream46/bundles/en_US.json"
            },
            "name": "Activity Stream - 46",
            "personalportal": true,
            "url": "/devwidgets/activitystream46/activitystream46.html"
        },
        "activitystream47": {
            "description": "Activity Stream Widget - 47",
            "hasSettings": true,
            "img": "/devwidgets/activitystream47/images/activitystream_icon.png",
            "id": "activitystream47",
            "i18n": {
                "default": "/devwidgets/activitystream47/bundles/default.json",
                "en_US": "/devwidgets/activitystream47/bundles/en_US.json"
            },
            "name": "Activity Stream - 47",
            "personalportal": true,
            "url": "/devwidgets/activitystream47/activitystream47.html"
        },
        "activitystream48": {
            "description": "Activity Stream Widget - 48",
            "hasSettings": true,
            "img": "/devwidgets/activitystream48/images/activitystream_icon.png",
            "id": "activitystream48",
            "i18n": {
                "default": "/devwidgets/activitystream48/bundles/default.json",
                "en_US": "/devwidgets/activitystream48/bundles/en_US.json"
            },
            "name": "Activity Stream - 48",
            "personalportal": true,
            "url": "/devwidgets/activitystream48/activitystream48.html"
        },
        "activitystream49": {
            "description": "Activity Stream Widget - 49",
            "hasSettings": true,
            "img": "/devwidgets/activitystream49/images/activitystream_icon.png",
            "id": "activitystream49",
            "i18n": {
                "default": "/devwidgets/activitystream49/bundles/default.json",
                "en_US": "/devwidgets/activitystream49/bundles/en_US.json"
            },
            "name": "Activity Stream - 49",
            "personalportal": true,
            "url": "/devwidgets/activitystream49/activitystream49.html"
        },
        "activitystream50": {
            "description": "Activity Stream Widget - 50",
            "hasSettings": true,
            "img": "/devwidgets/activitystream50/images/activitystream_icon.png",
            "id": "activitystream50",
            "i18n": {
                "default": "/devwidgets/activitystream50/bundles/default.json",
                "en_US": "/devwidgets/activitystream50/bundles/en_US.json"
            },
            "name": "Activity Stream - 50",
            "personalportal": true,
            "url": "/devwidgets/activitystream50/activitystream50.html"
        },

        "addtocontacts": {
            "description":"Add a contact",
            "name":"Add a contact",
            "i18n": {
                "default": "/devwidgets/addtocontacts/bundles/default.json",
                "en_US": "/devwidgets/addtocontacts/bundles/en_US.json",
                "zh_CN": "/devwidgets/addtocontacts/bundles/zh_CN.json"
            },
            "id":"addtocontacts",
            "url":"/devwidgets/addtocontacts/addtocontacts.html"
        },
        "basiclti": {
            "ca":true,
            "description":"Basic LTI Widget",
            "id":"basiclti",
            "img":"/devwidgets/basiclti/images/basiclti.png",
            "name":"Basic LTI",
            "showinsakaigoodies":true,
            "url":"/devwidgets/basiclti/basiclti.html"
        },
        "bookmarkandshare": {
            "ca": true,
            "description": "Bookmark and share widget",
            "i18n": {
                "default": "/devwidgets/bookmarkandshare/bundles/default.json",
                "en_US": "/devwidgets/bookmarkandshare/bundles/en_US.json",
                "nl_NL": "/devwidgets/bookmarkandshare/bundles/nl_NL.json"
            },
            "img": "/devwidgets/bookmarkandshare/images/addthis.png",
            "id": "bookmarkandshare",
            "name": "Bookmark and share",
            "showinsakaigoodies": true,
            "url":"/devwidgets/bookmarkandshare/bookmarkandshare.html"
        },
        "changepic": {
            "i18n": {
                "default": "/devwidgets/changepic/bundles/default.json",
                "en_US": "/devwidgets/changepic/bundles/en_US.json",
                "zh_CN": "/devwidgets/changepic/bundles/zh_CN.json"
            },
            "id":"changepic",
            "name":"changepic",
            "url":"/devwidgets/changepic/changepic.html"
        },
        "comments": {
            "description":"Comments",
            "ca":true,
            "hasSettings":true,
            "id":"comments",
            "img":"/devwidgets/comments/images/comments.png",
            "name":"Comments",
            "showinsakaigoodies":true,
            "siteportal":true,
            "url":"/devwidgets/comments/comments.html"
        },
        "createsite": {
            "description":"Create site",
            "name":"Create Site",
            "id":"createsite",
            "i18n": {
                "default": "/devwidgets/createsite/bundles/default.json",
                "en_US": "/devwidgets/createsite/bundles/en_US.json",
                "zh_CN": "/devwidgets/createsite/bundles/zh_CN.json"
            },
            "url":"/devwidgets/createsite/createsite.html"
        },
        "delicious": {
            "description":"Delicious widget",
            "hasSettings":true,
            "id":"delicious",
            "i18n": {
                "default": "/devwidgets/delicious/bundles/default.json",
                "en_US": "/devwidgets/delicious/bundles/en_US.json",
                "nl_NL": "/devwidgets/delicious/bundles/nl_NL.json"
            },
            "name":"Delicious",
            "personalportal":true,
            "url":"/devwidgets/delicious/delicious.html"
        },
        "deletecontent": {
            "description":"Delete content widget",
            "id":"deletecontent",
            "i18n": {
                "default": "/devwidgets/deletecontent/bundles/default.json"
            },
            "name":"Delete Content",
            "url":"/devwidgets/deletecontent/deletecontent.html"
        },
        "discussion": {
            "ca":true,
            "description":"Discussion widget",
            "id":"discussion",
            "img":"/devwidgets/discussion/images/discussion.png",
            "i18n": {
                "default": "/devwidgets/discussion/bundles/default.json",
                "en_US": "/devwidgets/discussion/bundles/en_US.json",
                "zh_CN": "/devwidgets/discussion/bundles/zh_CN.json"
            },
            "name":"Discussion",
            "showinsakaigoodies":true,
            "url":"/devwidgets/discussion/discussion.html"
        },
        "entity": {
            "id":"entity",
            "url":"/devwidgets/entity/entity.html"
        },
        "footer": {
            "description":"Dynamic Footer with Debug Info",
            "i18n": {
                "default": "/devwidgets/footer/bundles/default.json",
                "en_US": "/devwidgets/footer/bundles/en_US.json",
                "zh_CN": "/devwidgets/footer/bundles/zh_CN.json"
            },
            "id":"footer",
            "name":"Dynamic Footer",
            "url":"/devwidgets/footer/footer.html"
        },
        "flickr": {
            "ca": true,
            "description": "flickr widget",
            "i18n": {
                "default": "/devwidgets/flickr/bundles/default.json",
                "en_US": "/devwidgets/flickr/bundles/en_US.json",
                "nl_NL": "/devwidgets/flickr/bundles/nl_NL.json"
            },
            "id": "flickr",
            "img": "/devwidgets/flickr/images/flickr.png",
            "name": "flickr",
            "showinsakaigoodies": true,
            "url":"/devwidgets/flickr/flickr.html"
        },
        "filepicker": {
            "description":"Pick a file.",
            "name":"File",
            "id":"filepicker",
            "img":"/devwidgets/discussion/images/discussion.png",
            "hasSettings": true,
            "showinsakaigoodies":true,
            "url":"/devwidgets/pickers/filepicker.html"
        },
        "folderpicker": {
            "description":"Pick a folder.",
            "hasSettings":false,
            "id":"folderpicker",
            "img":"/devwidgets/discussion/images/discussion.png",
            "name":"Folder",
            "showinsakaigoodies":true,
            "url":"/devwidgets/pickers/folderpicker.html"
        },
        "ggadget": {
            "ca":true,
            "description":"Embed Google Gadgets in your page or dashboard",
            "id":"ggadget",
            "img":"/devwidgets/ggadget/images/ggadget.png",
            "name":"Google Gadget",
            "showinsakaigoodies":true,
            "url":"/devwidgets/ggadget/ggadget.html"
        },
        "googledocs": {
            "description": "Google docs - Show your recent google documents",
            "id":"googledocs",
            "iframe":true,
            "name":"Google docs",
            "personalportal":true,
            "scrolling": false,
            "url":"http://docs.google.com/API/IGoogle?up_numDocuments=5&browserok=true"
        },
        "googlemaps": {
            "ca":true,
            "description":"Google maps",
            "i18n": {
                "default": "/devwidgets/googlemaps/bundles/default.json",
                "en_US": "/devwidgets/googlemaps/bundles/en_US.json",
                "zh_CN": "/devwidgets/googlemaps/bundles/zh_CN.json"
            },
            "id":"googlemaps",
            "img":"/devwidgets/googlemaps/images/googlemaps.png",
            "name":"Google maps",
            "showinsakaigoodies":true,
            "url":"/devwidgets/googlemaps/googlemaps.html"
        },
        "helloworld": {
            "description":"Sakai Hackathon Example",
            "hasSettings":true,
            "id":"helloworld",
            "name":"Hello World",
            "url":"/devwidgets/helloworld/helloworld.html"
        },
        "helloworldwow": {
            "description":"GWT Widget Example",
            "gwt":true,
            "hasSettings":true,
            "id":"helloworldwow",
            "name":"Hello World GWT",
            "url":"/devwidgets/helloworldwow/war/Helloworldwow.html"
        },
        "listgeneral": {
            "description":"General space, site and content lister widget",
            "hasSettings": false,
            "id": "listgeneral",
            "i18n": {
                "default": "/devwidgets/listgeneral/bundles/default.json"
            },
            "name": "General Lister",
            "url": "/devwidgets/listgeneral/listgeneral.html"
        },
        "listpeople": {
            "description":"General people lister widget",
            "hasSettings": false,
            "id": "listpeople",
            "i18n": {
                "default": "/devwidgets/listpeople/bundles/default.json"
            },
            "name": "People Lister",
            "url": "/devwidgets/listpeople/listpeople.html"
        },
        "myfriends": {
            "description":"A list of my connections",
            "id":"myfriends",
            "multipleinstance": false,
            "i18n": {
                "default": "/devwidgets/myfriends/bundles/default.json",
                "en_US": "/devwidgets/myfriends/bundles/en_US.json",
                "zh_CN": "/devwidgets/myfriends/bundles/zh_CN.json"
            },
            "name":"My Contacts",
            "personalportal":true,
            "url":"/devwidgets/myfriends/myfriends.html"
        },
        "myprofile": {
            "description":"My Personal Profile",
            "name":"My Profile",
            "id":"myprofile",
            "personalportal":true,
            "i18n": {
                "default": "/devwidgets/myprofile/bundles/default.json",
                "en_US": "/devwidgets/myprofile/bundles/en_US.json",
                "zh_CN": "/devwidgets/myprofile/bundles/zh_CN.json"
            },
            "url":"/devwidgets/myprofile/myprofile.html"
        },
        "navigation": {
            "ca":true,
            "description":"Navigation Widgets",
            "hasSettings": false,
            "id":"navigation",
            "img":"/devwidgets/navigation/images/icon.png",
            "name":"Navigation",
            "showinsidebar":true,
            "url":"/devwidgets/navigation/navigation.html"
        },
        "navigationchat": {
            "description":"navigationchat",
            "i18n": {
                "default": "/devwidgets/navigationchat/bundles/default.json",
                "en_US": "/devwidgets/navigationchat/bundles/en_US.json",
                "nl_NL": "/devwidgets/navigationchat/bundles/nl_NL.json",
                "zh_CN": "/devwidgets/navigationchat/bundles/zh_CN.json"
            },
            "id":"navigationchat",
            "name":"navigationchat",
            "url":"/devwidgets/navigationchat/navigationchat.html"
        },
        "poll": {
            "ca":true,
            "description":"Poll widget",
            "id":"poll",
            "img":"/devwidgets/poll/images/poll.png",
            "name":"Poll",
            "showinsakaigoodies":true,
            "url":"/devwidgets/poll/poll.html"
        },
        "quiz": {
            "ca":true,
            "description":"Quiz widget",
            "id":"quiz",
            "img":"/devwidgets/quiz/images/quiz.png",
            "name":"Quiz",
            "showinsakaigoodies":true,
            "url":"/devwidgets/quiz/quiz.html"
        },
        "recentmessages": {
            "description":"Your recent messages",
            "i18n": {
                "default": "/devwidgets/recentmessages/bundles/default.json",
                "en_US": "/devwidgets/recentmessages/bundles/en_US.json"
            },
            "id":"recentmessages",
            "name":"Recent Messages",
            "personalportal":true,
            "url":"/devwidgets/recentmessages/recentmessages.html"
        },
        "remotecontent": {
            "ca":true,
            "description":"Remote Content",
            "id":"remotecontent",
            "img":"/devwidgets/remotecontent/images/remotecontent.png",
            "name":"Remote Content",
            "showinsakaigoodies":true,
            "url":"/devwidgets/remotecontent/remotecontent.html"
        },
        "rss": {
            "ca":true,
            "description":"RSS Feed Reader",
            "hasSettings":true,
            "id":"rss",
            "img":"/devwidgets/rss/images/rss.png",
            "name":"RSS Feed",
            "showinsakaigoodies":true,
            "url":"/devwidgets/rss/rss.html"
        },
        "s23courses": {
            "description":"Your courses &amp; sites for Sakai2",
            "id":"s23courses",
            "name":"Sakai 2 Courses &amp; Projects",
            "personalportal":true,
            "url":"/devwidgets/s23/s23courses/s23courses.html"
        },
        "sendmessage": {
            "description":"Send a message",
            "i18n": {
                "default": "/devwidgets/sites/bundles/default.json",
                "zh_CN": "/devwidgets/sites/bundles/zh_CN.json"
            },
            "id":"sendmessage",
            "name":"Send a message",
            "url":"/devwidgets/sendmessage/sendmessage.html"
        },
        "sitemembers": {
            "ca":true,
            "description":"List of site members",
            "hasSettings":true,
            "id":"sitemembers",
            "img":"/devwidgets/sitemembers/images/sitemembers.png",
            "showinsakaigoodies":true,
            "siteportal":true,
            "name":"Site members",
            "url":"/devwidgets/sitemembers/sitemembers.html"
        },
        "siterecentactivity": {
            "ca":true,
            "description":"Site Recent Activity",
            "hasSettings": false,
            "id":"siterecentactivity",
            "img":"/devwidgets/siterecentactivity/images/icon.png",
            "name":"Recent Activity",
            "showinsidebar":true,
            "url":"/devwidgets/siterecentactivity/siterecentactivity.html"
        },
        "sites": {
            "description":"Listing of the sites I'm a member of",
            "i18n": {
                "default": "/devwidgets/sites/bundles/default.json",
                "en_US": "/devwidgets/sites/bundles/en_US.json",
                "zh_CN": "/devwidgets/sites/bundles/zh_CN.json"
            },
            "id":"sites",
            "name":"My Courses & Sites",
            "personalportal":true,
            "url":"/devwidgets/sites/sites.html"
        },
        "tangler": {
            "ca":true,
            "description":"Tangler Forum",
            "id":"tangler",
            "img":"/devwidgets/tangler/images/tangler.png",
            "name":"Tangler Forum",
            "showinsakaigoodies":true,
            "url":"/devwidgets/tangler/tangler.html"
        },
        "twitter": {
            "description":"Twitter Widget",
            "hasSettings":true,
            "i18n": {
                "default": "/devwidgets/twitter/bundles/default.json",
                "en_US": "/devwidgets/twitter/bundles/en_US.json",
                "nl_NL": "/devwidgets/twitter/bundles/nl_NL.json",
                "zh_CN": "/devwidgets/twitter/bundles/zh_CN.json"
            },
            "id":"twitter",
            "name":"Twitter",
            "personalportal":true,
            "url":"/devwidgets/twitter/twitter.html"
        },
        "uploadcontent": {
            "description": "Upload content to Sakai3",
            "i18n": {
                "default": "/devwidgets/uploadcontent/bundles/default.json"
            },
            "id": "uploadcontent",
            "name": "Upload Content",
            "url": "/devwidgets/uploadcontent/uploadcontent.html"
        },
        "video": {
            "ca":true,
            "description":"Video",
            "hasSettings":true,
            "id":"video",
            "img":"/devwidgets/video/images/video.png",
            "name":"Video",
            "showinmedia":true,
            "url":"/devwidgets/video/video.html"
        },
        "wookiechat": {
            "ca":true,
            "description":"wookiechat",
            "name":"Chat",
            "id":"wookiechat",
            "img":"/devwidgets/wookiechat/images/wookiechat.png",
            "url":"/devwidgets/wookiechat/wookiechat.html"
        },
        "wookieforum": {
            "ca":true,
            "description":"wookieforum",
            "id":"wookieforum",
            "img":"/devwidgets/wookieforum/images/icon.png",
            "name":"Wookie Forum",
            "url":"/devwidgets/wookieforum/wookieforum.html"
        },
        "youtubevideo": {
            "ca":true,
            "description":"YouTube Video",
            "id":"youtubevideo",
            "img":"/devwidgets/youtubevideo/images/video.png",
            "name":"YouTube Video",
            "url":"/devwidgets/youtubevideo/youtubevideo.html"
        }
    },
    "orders":[
        {
            "grouptype":"General",
            "widgets": ["mycoursesandprojects","messageoftheday","recentactivity"],
            "id":1,
            "layout": "twocolumnspecial"
        },
        {
            "grouptype":"Administrators",
            "widgets": ["mycoursesandprojects","messageoftheday","quickannouncement"],
            "id":1,
            "layout": "twocolumn"
        },
        {
            "grouptype":"Lecturers & Supervisors",
            "widgets":["mycoursesandprojects","recentactivity"],
            "id":2,
            "layout": "twocolumnspecial"
        },
        {
            "grouptype":"Researchers",
            "widgets":["recentactivity","mycoursesandprojects","messageoftheday"],
            "id":3,
            "layout": "threecolumn"
        },
        {
            "grouptype":"Students",
            "widgets":["recentactivity","mycoursesandprojects","quickannouncement","messageoftheday","myrssfeed"],
            "id":4,
            "layout": "fourcolumn"
        }
    ]
};
