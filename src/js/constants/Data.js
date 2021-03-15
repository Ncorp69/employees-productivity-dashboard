// [
//     '{{repeat(10)}}',
//     {
//         id: '{{objectId()}}',
//         name: '{{firstName()}} {{surname()}}',
//         active: '{{bool()}}',
//         times: [
//             '{{repeat(1, 4)}}',
//             {
//                 timeId: '{{objectId()}}',
//                 clockedIn: function (tags){
//                     var clIn = tags.date(new Date(2021, 0, 1), new Date());
//                     clIn.setHours( 12 );
//                     var clOut = new Date( clIn.setHours(tags.integer(13, 23)));
//                     clIn.setHours( tags.integer(0, 12) );
//                     this.clockedOut = clOut.toUTCString();
//                     this.unproductiveTime = tags.integer(0, (clOut - clIn)/60000) + 'min';
//
//                     return clIn.toUTCString();
//                 }
//             }
//         ]
//     }
// ]

export const Data = [
    {
        "id": "604dfc7ad94c2e5d1c3cf43c",
        "name": "Aguilar Solis",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ae775fedd04c86f92",
                "clockedIn": "Wed, 10 Feb 2021 09:39:44 GMT",
                "clockedOut": "Wed, 10 Feb 2021 12:39:44 GMT",
                "unproductiveTime": "48min"
            },
            {
                "timeId": "604dfc7a39f182b4b5fc395b",
                "clockedIn": "Thu, 07 Jan 2021 21:24:25 GMT",
                "clockedOut": "Fri, 08 Jan 2021 20:24:25 GMT",
                "unproductiveTime": "655min"
            },
            {
                "timeId": "604dfc7a938ccbea1c752070",
                "clockedIn": "Wed, 06 Jan 2021 01:39:06 GMT",
                "clockedOut": "Wed, 06 Jan 2021 12:39:06 GMT",
                "unproductiveTime": "512min"
            }
        ]
    },
    {
        "id": "604dfc7ad5fb4e33c5127639",
        "name": "Fulton Meyers",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a9c70635dc0f81a68",
                "clockedIn": "Wed, 03 Feb 2021 03:26:52 GMT",
                "clockedOut": "Wed, 03 Feb 2021 14:26:52 GMT",
                "unproductiveTime": "419min"
            },
            {
                "timeId": "604dfc7acb91d7dfb54607fc",
                "clockedIn": "Tue, 23 Feb 2021 07:43:32 GMT",
                "clockedOut": "Tue, 23 Feb 2021 15:43:32 GMT",
                "unproductiveTime": "332min"
            },
            {
                "timeId": "604dfc7a632332326f2325f6",
                "clockedIn": "Fri, 05 Feb 2021 01:52:44 GMT",
                "clockedOut": "Fri, 05 Feb 2021 15:52:44 GMT",
                "unproductiveTime": "188min"
            }
        ]
    },
    {
        "id": "604dfc7afc075b922435ca93",
        "name": "Dominique James",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aa9255900a857e96e",
                "clockedIn": "Mon, 08 Feb 2021 04:07:26 GMT",
                "clockedOut": "Mon, 08 Feb 2021 13:07:26 GMT",
                "unproductiveTime": "313min"
            },
            {
                "timeId": "604dfc7abe71bb05b01414ec",
                "clockedIn": "Thu, 11 Feb 2021 02:12:35 GMT",
                "clockedOut": "Thu, 11 Feb 2021 17:12:35 GMT",
                "unproductiveTime": "888min"
            },
            {
                "timeId": "604dfc7a188c0b2d2beee6b1",
                "clockedIn": "Fri, 12 Feb 2021 23:31:14 GMT",
                "clockedOut": "Sat, 13 Feb 2021 16:31:14 GMT",
                "unproductiveTime": "750min"
            },
            {
                "timeId": "604dfc7a35ddf299058f13f0",
                "clockedIn": "Mon, 08 Mar 2021 09:29:35 GMT",
                "clockedOut": "Mon, 08 Mar 2021 14:29:35 GMT",
                "unproductiveTime": "259min"
            }
        ]
    },
    {
        "id": "604dfc7a6384b7d9e790b4b6",
        "name": "Trisha Waller",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aab72dc06a70157d3",
                "clockedIn": "Thu, 21 Jan 2021 07:13:28 GMT",
                "clockedOut": "Thu, 21 Jan 2021 17:13:28 GMT",
                "unproductiveTime": "151min"
            },
            {
                "timeId": "604dfc7abee30036a6b97590",
                "clockedIn": "Wed, 03 Mar 2021 06:44:15 GMT",
                "clockedOut": "Wed, 03 Mar 2021 17:44:15 GMT",
                "unproductiveTime": "462min"
            },
            {
                "timeId": "604dfc7aa21a06e87d8eb634",
                "clockedIn": "Mon, 18 Jan 2021 06:32:55 GMT",
                "clockedOut": "Mon, 18 Jan 2021 17:32:55 GMT",
                "unproductiveTime": "442min"
            }
        ]
    },
    {
        "id": "604dfc7ab4fe1c7328b12e3d",
        "name": "Coleman Farrell",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aa7717e0ff7ce8a7b",
                "clockedIn": "Sun, 24 Jan 2021 09:07:23 GMT",
                "clockedOut": "Sun, 24 Jan 2021 14:07:23 GMT",
                "unproductiveTime": "217min"
            }
        ]
    },
    {
        "id": "604dfc7a6a66a8d6f1f278bd",
        "name": "Elsie Baker",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ae92fc77b2b002b5c",
                "clockedIn": "Thu, 18 Feb 2021 04:46:54 GMT",
                "clockedOut": "Thu, 18 Feb 2021 19:46:54 GMT",
                "unproductiveTime": "457min"
            },
            {
                "timeId": "604dfc7a978be4c85f41deb7",
                "clockedIn": "Sat, 27 Feb 2021 00:43:56 GMT",
                "clockedOut": "Sat, 27 Feb 2021 20:43:56 GMT",
                "unproductiveTime": "722min"
            }
        ]
    },
    {
        "id": "604dfc7a8621d4dc47700d4e",
        "name": "Barbra Fuentes",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aebbb97748659c813",
                "clockedIn": "Sun, 17 Jan 2021 23:23:25 GMT",
                "clockedOut": "Mon, 18 Jan 2021 13:23:25 GMT",
                "unproductiveTime": "61min"
            },
            {
                "timeId": "604dfc7a8b92b8c122e44fa7",
                "clockedIn": "Thu, 21 Jan 2021 01:07:02 GMT",
                "clockedOut": "Thu, 21 Jan 2021 12:07:02 GMT",
                "unproductiveTime": "506min"
            }
        ]
    },
    {
        "id": "604dfc7aa5090605b25e3e2c",
        "name": "Hubbard Yates",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aa161d04db1df66d2",
                "clockedIn": "Sat, 06 Feb 2021 08:18:24 GMT",
                "clockedOut": "Sat, 06 Feb 2021 17:18:24 GMT",
                "unproductiveTime": "321min"
            },
            {
                "timeId": "604dfc7a6f14b8e806508800",
                "clockedIn": "Tue, 02 Feb 2021 09:59:07 GMT",
                "clockedOut": "Tue, 02 Feb 2021 13:59:07 GMT",
                "unproductiveTime": "138min"
            }
        ]
    },
    {
        "id": "604dfc7a8c0a395f20134c44",
        "name": "Evangeline Craig",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7af1d800843f770c67",
                "clockedIn": "Wed, 06 Jan 2021 07:16:58 GMT",
                "clockedOut": "Wed, 06 Jan 2021 11:16:58 GMT",
                "unproductiveTime": "125min"
            },
            {
                "timeId": "604dfc7ae39943a166b7e6d9",
                "clockedIn": "Sun, 07 Mar 2021 06:40:09 GMT",
                "clockedOut": "Sun, 07 Mar 2021 20:40:09 GMT",
                "unproductiveTime": "832min"
            },
            {
                "timeId": "604dfc7a1acf1024292af033",
                "clockedIn": "Wed, 24 Feb 2021 23:22:05 GMT",
                "clockedOut": "Thu, 25 Feb 2021 18:22:05 GMT",
                "unproductiveTime": "1072min"
            }
        ]
    },
    {
        "id": "604dfc7aa3a4d60d8da639a2",
        "name": "Bailey Boyd",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a93149a4b3478183d",
                "clockedIn": "Thu, 11 Feb 2021 04:58:53 GMT",
                "clockedOut": "Thu, 11 Feb 2021 15:58:53 GMT",
                "unproductiveTime": "189min"
            }
        ]
    },
    {
        "id": "604dfc7a2437ccb861f122e4",
        "name": "Watson Baxter",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a2117e6c1ff9c43ac",
                "clockedIn": "Fri, 22 Jan 2021 07:47:12 GMT",
                "clockedOut": "Fri, 22 Jan 2021 12:47:12 GMT",
                "unproductiveTime": "178min"
            }
        ]
    },
    {
        "id": "604dfc7a6d794376013e3446",
        "name": "Kramer Mccormick",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a8b2b7ad66e598f7f",
                "clockedIn": "Mon, 08 Mar 2021 22:06:35 GMT",
                "clockedOut": "Tue, 09 Mar 2021 10:06:35 GMT",
                "unproductiveTime": "368min"
            },
            {
                "timeId": "604dfc7aed7768729a310b52",
                "clockedIn": "Sun, 28 Feb 2021 08:40:43 GMT",
                "clockedOut": "Sun, 28 Feb 2021 10:40:43 GMT",
                "unproductiveTime": "110min"
            },
            {
                "timeId": "604dfc7a50be0baa2d20b738",
                "clockedIn": "Fri, 29 Jan 2021 00:16:55 GMT",
                "clockedOut": "Fri, 29 Jan 2021 19:16:55 GMT",
                "unproductiveTime": "920min"
            }
        ]
    },
    {
        "id": "604dfc7a2309f32bcdefc8f2",
        "name": "Levine Mcmahon",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a6294e17deb0046b0",
                "clockedIn": "Sun, 24 Jan 2021 05:53:10 GMT",
                "clockedOut": "Sun, 24 Jan 2021 14:53:10 GMT",
                "unproductiveTime": "492min"
            },
            {
                "timeId": "604dfc7a9724849be58f93cf",
                "clockedIn": "Sat, 23 Jan 2021 09:28:58 GMT",
                "clockedOut": "Sat, 23 Jan 2021 12:28:58 GMT",
                "unproductiveTime": "51min"
            },
            {
                "timeId": "604dfc7ab0ab73400e001ce8",
                "clockedIn": "Thu, 04 Mar 2021 04:07:39 GMT",
                "clockedOut": "Thu, 04 Mar 2021 16:07:39 GMT",
                "unproductiveTime": "142min"
            }
        ]
    },
    {
        "id": "604dfc7a329772d7640d7219",
        "name": "Marie Gibson",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7af62f6bc162edf770",
                "clockedIn": "Fri, 08 Jan 2021 04:20:49 GMT",
                "clockedOut": "Fri, 08 Jan 2021 18:20:49 GMT",
                "unproductiveTime": "589min"
            }
        ]
    },
    {
        "id": "604dfc7a6ed7fa6e4ac6dae7",
        "name": "Wyatt Wise",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a610a97b88e137390",
                "clockedIn": "Wed, 03 Mar 2021 21:21:18 GMT",
                "clockedOut": "Thu, 04 Mar 2021 15:21:18 GMT",
                "unproductiveTime": "942min"
            },
            {
                "timeId": "604dfc7a5a626a4952382d1e",
                "clockedIn": "Wed, 10 Mar 2021 23:22:13 GMT",
                "clockedOut": "Thu, 11 Mar 2021 17:22:13 GMT",
                "unproductiveTime": "57min"
            },
            {
                "timeId": "604dfc7a12e157bd0918d09c",
                "clockedIn": "Sat, 02 Jan 2021 06:30:25 GMT",
                "clockedOut": "Sat, 02 Jan 2021 12:30:25 GMT",
                "unproductiveTime": "13min"
            },
            {
                "timeId": "604dfc7aefddf1a9ef17e781",
                "clockedIn": "Sat, 20 Feb 2021 03:46:22 GMT",
                "clockedOut": "Sat, 20 Feb 2021 10:46:22 GMT",
                "unproductiveTime": "133min"
            }
        ]
    },
    {
        "id": "604dfc7ac2bdb4a8d06c7d8a",
        "name": "Maryellen Henry",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ad7499d70369376d2",
                "clockedIn": "Sat, 27 Feb 2021 07:16:57 GMT",
                "clockedOut": "Sat, 27 Feb 2021 10:16:57 GMT",
                "unproductiveTime": "84min"
            }
        ]
    },
    {
        "id": "604dfc7a84ae01e952fdfce6",
        "name": "Kayla Peck",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7adf64826599ad1e90",
                "clockedIn": "Mon, 04 Jan 2021 07:07:04 GMT",
                "clockedOut": "Mon, 04 Jan 2021 18:07:04 GMT",
                "unproductiveTime": "246min"
            }
        ]
    },
    {
        "id": "604dfc7a4b216d8f5c19298c",
        "name": "Brandy Lang",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a5b3f58d293a5427b",
                "clockedIn": "Mon, 01 Feb 2021 21:01:59 GMT",
                "clockedOut": "Tue, 02 Feb 2021 20:01:59 GMT",
                "unproductiveTime": "474min"
            },
            {
                "timeId": "604dfc7adeb8062ec9745ad5",
                "clockedIn": "Thu, 04 Mar 2021 01:27:19 GMT",
                "clockedOut": "Thu, 04 Mar 2021 18:27:19 GMT",
                "unproductiveTime": "587min"
            },
            {
                "timeId": "604dfc7abd83fbab7a6bf886",
                "clockedIn": "Wed, 06 Jan 2021 05:30:33 GMT",
                "clockedOut": "Wed, 06 Jan 2021 20:30:33 GMT",
                "unproductiveTime": "126min"
            }
        ]
    },
    {
        "id": "604dfc7a1f5d62fd2bc8ae65",
        "name": "Katie Noble",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7adce4027e98bf6980",
                "clockedIn": "Wed, 24 Feb 2021 22:51:06 GMT",
                "clockedOut": "Thu, 25 Feb 2021 14:51:06 GMT",
                "unproductiveTime": "307min"
            }
        ]
    },
    {
        "id": "604dfc7aeee864ce3f69c8eb",
        "name": "Lois Schwartz",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a9557c1eaa7496a95",
                "clockedIn": "Thu, 04 Feb 2021 06:47:11 GMT",
                "clockedOut": "Thu, 04 Feb 2021 14:47:11 GMT",
                "unproductiveTime": "408min"
            },
            {
                "timeId": "604dfc7a67d171810c947834",
                "clockedIn": "Sun, 24 Jan 2021 01:51:56 GMT",
                "clockedOut": "Sun, 24 Jan 2021 10:51:56 GMT",
                "unproductiveTime": "206min"
            },
            {
                "timeId": "604dfc7a4b22fd49dc85d7df",
                "clockedIn": "Sun, 17 Jan 2021 02:33:52 GMT",
                "clockedOut": "Sun, 17 Jan 2021 11:33:52 GMT",
                "unproductiveTime": "328min"
            },
            {
                "timeId": "604dfc7a7b1d7e7a7ee1af1a",
                "clockedIn": "Tue, 19 Jan 2021 07:18:34 GMT",
                "clockedOut": "Tue, 19 Jan 2021 20:18:34 GMT",
                "unproductiveTime": "541min"
            }
        ]
    },
    {
        "id": "604dfc7a7ce6cbe9289e03cd",
        "name": "Ila Garza",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a902488f1b106db4e",
                "clockedIn": "Fri, 08 Jan 2021 00:37:21 GMT",
                "clockedOut": "Fri, 08 Jan 2021 20:37:21 GMT",
                "unproductiveTime": "696min"
            }
        ]
    },
    {
        "id": "604dfc7a5de616ac7bb2237e",
        "name": "Margo Reilly",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a6e2d79e05b591a37",
                "clockedIn": "Tue, 19 Jan 2021 07:53:18 GMT",
                "clockedOut": "Tue, 19 Jan 2021 16:53:18 GMT",
                "unproductiveTime": "178min"
            },
            {
                "timeId": "604dfc7a07f265fda68464a1",
                "clockedIn": "Sun, 28 Feb 2021 21:28:43 GMT",
                "clockedOut": "Mon, 01 Mar 2021 15:28:43 GMT",
                "unproductiveTime": "437min"
            },
            {
                "timeId": "604dfc7a1a0321db3a933e98",
                "clockedIn": "Sat, 20 Feb 2021 23:31:16 GMT",
                "clockedOut": "Sun, 21 Feb 2021 13:31:16 GMT",
                "unproductiveTime": "829min"
            }
        ]
    },
    {
        "id": "604dfc7ac28f80bdbfc089fc",
        "name": "Shawn Cleveland",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7acc238b3aada05816",
                "clockedIn": "Sun, 03 Jan 2021 23:45:09 GMT",
                "clockedOut": "Mon, 04 Jan 2021 19:45:09 GMT",
                "unproductiveTime": "630min"
            },
            {
                "timeId": "604dfc7a5a1d62f3f425becb",
                "clockedIn": "Sat, 09 Jan 2021 01:43:48 GMT",
                "clockedOut": "Sat, 09 Jan 2021 16:43:48 GMT",
                "unproductiveTime": "818min"
            },
            {
                "timeId": "604dfc7ab1533dc9452fbfb5",
                "clockedIn": "Tue, 02 Feb 2021 01:33:33 GMT",
                "clockedOut": "Tue, 02 Feb 2021 17:33:33 GMT",
                "unproductiveTime": "498min"
            },
            {
                "timeId": "604dfc7a8c20602ef5a1564f",
                "clockedIn": "Tue, 16 Feb 2021 04:31:01 GMT",
                "clockedOut": "Tue, 16 Feb 2021 16:31:01 GMT",
                "unproductiveTime": "427min"
            }
        ]
    },
    {
        "id": "604dfc7a221a8a6ae82d4547",
        "name": "Gladys Compton",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aec82208aa1fddc08",
                "clockedIn": "Wed, 10 Feb 2021 23:50:47 GMT",
                "clockedOut": "Thu, 11 Feb 2021 17:50:47 GMT",
                "unproductiveTime": "314min"
            },
            {
                "timeId": "604dfc7a23753bc4a311cbc4",
                "clockedIn": "Wed, 24 Feb 2021 02:47:02 GMT",
                "clockedOut": "Wed, 24 Feb 2021 11:47:02 GMT",
                "unproductiveTime": "347min"
            }
        ]
    },
    {
        "id": "604dfc7a09b7802647246e7f",
        "name": "Palmer Walton",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a87638aca3260e3a4",
                "clockedIn": "Sun, 03 Jan 2021 04:05:46 GMT",
                "clockedOut": "Sun, 03 Jan 2021 18:05:46 GMT",
                "unproductiveTime": "786min"
            },
            {
                "timeId": "604dfc7a78284869e93f813f",
                "clockedIn": "Wed, 10 Mar 2021 05:59:18 GMT",
                "clockedOut": "Wed, 10 Mar 2021 19:59:18 GMT",
                "unproductiveTime": "610min"
            },
            {
                "timeId": "604dfc7a84596aa35c581bb8",
                "clockedIn": "Thu, 25 Feb 2021 02:25:11 GMT",
                "clockedOut": "Thu, 25 Feb 2021 14:25:11 GMT",
                "unproductiveTime": "205min"
            }
        ]
    },
    {
        "id": "604dfc7a2a6dc0e2ffdf7f0e",
        "name": "Alyce Abbott",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a6475327fc619fbb1",
                "clockedIn": "Sun, 17 Jan 2021 00:14:18 GMT",
                "clockedOut": "Sun, 17 Jan 2021 18:14:18 GMT",
                "unproductiveTime": "252min"
            },
            {
                "timeId": "604dfc7af0def3d487e93050",
                "clockedIn": "Sat, 13 Mar 2021 01:46:07 GMT",
                "clockedOut": "Sat, 13 Mar 2021 13:46:07 GMT",
                "unproductiveTime": "240min"
            }
        ]
    },
    {
        "id": "604dfc7a67720da5a6d85704",
        "name": "Jayne Gillespie",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aef0d3ff68ab1af8d",
                "clockedIn": "Sat, 13 Mar 2021 07:39:00 GMT",
                "clockedOut": "Sat, 13 Mar 2021 17:39:00 GMT",
                "unproductiveTime": "187min"
            },
            {
                "timeId": "604dfc7abc8deb7fa1856de3",
                "clockedIn": "Fri, 08 Jan 2021 22:40:51 GMT",
                "clockedOut": "Sat, 09 Jan 2021 14:40:51 GMT",
                "unproductiveTime": "157min"
            },
            {
                "timeId": "604dfc7ab22996d4d38822cd",
                "clockedIn": "Sat, 06 Mar 2021 22:17:20 GMT",
                "clockedOut": "Sun, 07 Mar 2021 18:17:20 GMT",
                "unproductiveTime": "258min"
            }
        ]
    },
    {
        "id": "604dfc7a4a1429b39161515b",
        "name": "Marcia Burks",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a4d871ef261256f5d",
                "clockedIn": "Sat, 13 Mar 2021 23:05:44 GMT",
                "clockedOut": "Sun, 14 Mar 2021 14:05:44 GMT",
                "unproductiveTime": "7min"
            }
        ]
    },
    {
        "id": "604dfc7a1e2bba35150f3e6d",
        "name": "Dona Kinney",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aa206f01ad8b71144",
                "clockedIn": "Tue, 09 Feb 2021 04:16:01 GMT",
                "clockedOut": "Tue, 09 Feb 2021 10:16:01 GMT",
                "unproductiveTime": "229min"
            },
            {
                "timeId": "604dfc7af28626b08b68ba0d",
                "clockedIn": "Wed, 13 Jan 2021 08:04:57 GMT",
                "clockedOut": "Wed, 13 Jan 2021 12:04:57 GMT",
                "unproductiveTime": "176min"
            }
        ]
    },
    {
        "id": "604dfc7adb593d52f99ea2e4",
        "name": "Hurley Garcia",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a343dce1b1588dc03",
                "clockedIn": "Thu, 14 Jan 2021 03:24:13 GMT",
                "clockedOut": "Thu, 14 Jan 2021 14:24:13 GMT",
                "unproductiveTime": "464min"
            },
            {
                "timeId": "604dfc7a2d63b26c476dd449",
                "clockedIn": "Sat, 20 Feb 2021 00:35:04 GMT",
                "clockedOut": "Sat, 20 Feb 2021 12:35:04 GMT",
                "unproductiveTime": "358min"
            },
            {
                "timeId": "604dfc7afb1e9de519785891",
                "clockedIn": "Wed, 17 Feb 2021 08:40:24 GMT",
                "clockedOut": "Wed, 17 Feb 2021 12:40:24 GMT",
                "unproductiveTime": "197min"
            }
        ]
    },
    {
        "id": "604dfc7aa5b952ce9d04b1f7",
        "name": "Bishop Dale",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a26f0d712d45e4526",
                "clockedIn": "Mon, 08 Feb 2021 01:05:14 GMT",
                "clockedOut": "Mon, 08 Feb 2021 13:05:14 GMT",
                "unproductiveTime": "43min"
            },
            {
                "timeId": "604dfc7a8e435792d04525f9",
                "clockedIn": "Sun, 03 Jan 2021 04:22:54 GMT",
                "clockedOut": "Sun, 03 Jan 2021 13:22:54 GMT",
                "unproductiveTime": "244min"
            }
        ]
    },
    {
        "id": "604dfc7a113761142cdd1a1a",
        "name": "Deloris Weiss",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ab6fd90fe64bf2793",
                "clockedIn": "Fri, 12 Mar 2021 06:43:36 GMT",
                "clockedOut": "Fri, 12 Mar 2021 15:43:36 GMT",
                "unproductiveTime": "170min"
            },
            {
                "timeId": "604dfc7a58c0431ab1a0a9e6",
                "clockedIn": "Fri, 05 Feb 2021 02:41:23 GMT",
                "clockedOut": "Fri, 05 Feb 2021 10:41:23 GMT",
                "unproductiveTime": "269min"
            },
            {
                "timeId": "604dfc7ae46b0c0e2ef4d6d8",
                "clockedIn": "Wed, 27 Jan 2021 02:21:00 GMT",
                "clockedOut": "Wed, 27 Jan 2021 15:21:00 GMT",
                "unproductiveTime": "80min"
            }
        ]
    },
    {
        "id": "604dfc7a5dadf772fe3e75e6",
        "name": "Chase Watson",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ae74113f8ef139c69",
                "clockedIn": "Mon, 15 Feb 2021 06:12:56 GMT",
                "clockedOut": "Mon, 15 Feb 2021 10:12:56 GMT",
                "unproductiveTime": "216min"
            },
            {
                "timeId": "604dfc7aa7def4e55eae562c",
                "clockedIn": "Thu, 28 Jan 2021 04:28:01 GMT",
                "clockedOut": "Thu, 28 Jan 2021 20:28:01 GMT",
                "unproductiveTime": "917min"
            },
            {
                "timeId": "604dfc7a9e8daeaa04bb0ff3",
                "clockedIn": "Tue, 02 Feb 2021 23:55:41 GMT",
                "clockedOut": "Wed, 03 Feb 2021 16:55:41 GMT",
                "unproductiveTime": "788min"
            },
            {
                "timeId": "604dfc7a065ebacbbb0f6363",
                "clockedIn": "Fri, 29 Jan 2021 04:43:30 GMT",
                "clockedOut": "Fri, 29 Jan 2021 19:43:30 GMT",
                "unproductiveTime": "719min"
            }
        ]
    },
    {
        "id": "604dfc7ad15689e69a9ee2ac",
        "name": "Debbie Francis",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ae39b942732b09b2d",
                "clockedIn": "Sat, 02 Jan 2021 05:43:31 GMT",
                "clockedOut": "Sat, 02 Jan 2021 14:43:31 GMT",
                "unproductiveTime": "345min"
            },
            {
                "timeId": "604dfc7af4c1cd7e8e14404f",
                "clockedIn": "Sun, 24 Jan 2021 00:22:36 GMT",
                "clockedOut": "Sun, 24 Jan 2021 17:22:36 GMT",
                "unproductiveTime": "640min"
            },
            {
                "timeId": "604dfc7a3f9c5ebfaa72b857",
                "clockedIn": "Mon, 22 Feb 2021 05:57:52 GMT",
                "clockedOut": "Mon, 22 Feb 2021 14:57:52 GMT",
                "unproductiveTime": "515min"
            }
        ]
    },
    {
        "id": "604dfc7acc7ba21ea9b6e7f4",
        "name": "Alfreda Wright",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ac6f97ad48ef8b870",
                "clockedIn": "Wed, 03 Feb 2021 22:44:09 GMT",
                "clockedOut": "Thu, 04 Feb 2021 19:44:09 GMT",
                "unproductiveTime": "309min"
            },
            {
                "timeId": "604dfc7a1b19cb82ade2da9b",
                "clockedIn": "Thu, 31 Dec 2020 22:56:06 GMT",
                "clockedOut": "Fri, 01 Jan 2021 20:56:06 GMT",
                "unproductiveTime": "333min"
            }
        ]
    },
    {
        "id": "604dfc7ac33e1b2da315ac1f",
        "name": "Sullivan Parker",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ab0fa47bae8c29cff",
                "clockedIn": "Mon, 11 Jan 2021 05:49:46 GMT",
                "clockedOut": "Mon, 11 Jan 2021 11:49:46 GMT",
                "unproductiveTime": "208min"
            },
            {
                "timeId": "604dfc7ad82feeb27c2e57b0",
                "clockedIn": "Thu, 04 Mar 2021 07:29:07 GMT",
                "clockedOut": "Thu, 04 Mar 2021 12:29:07 GMT",
                "unproductiveTime": "75min"
            },
            {
                "timeId": "604dfc7adbd6ca1ffcfd67e3",
                "clockedIn": "Sun, 21 Feb 2021 00:22:45 GMT",
                "clockedOut": "Sun, 21 Feb 2021 16:22:45 GMT",
                "unproductiveTime": "16min"
            },
            {
                "timeId": "604dfc7ad4f31245f4f913a1",
                "clockedIn": "Thu, 31 Dec 2020 23:35:01 GMT",
                "clockedOut": "Fri, 01 Jan 2021 19:35:01 GMT",
                "unproductiveTime": "760min"
            }
        ]
    },
    {
        "id": "604dfc7a2ebc39418d0a91c7",
        "name": "Guerrero Jacobs",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7adcfff02f4c33d2a3",
                "clockedIn": "Mon, 22 Feb 2021 08:13:55 GMT",
                "clockedOut": "Mon, 22 Feb 2021 16:13:55 GMT",
                "unproductiveTime": "73min"
            },
            {
                "timeId": "604dfc7a76e98dae2dd7db9b",
                "clockedIn": "Wed, 13 Jan 2021 23:39:56 GMT",
                "clockedOut": "Thu, 14 Jan 2021 13:39:56 GMT",
                "unproductiveTime": "115min"
            },
            {
                "timeId": "604dfc7a5c54f30e0e377b99",
                "clockedIn": "Mon, 04 Jan 2021 05:05:16 GMT",
                "clockedOut": "Mon, 04 Jan 2021 10:05:16 GMT",
                "unproductiveTime": "160min"
            },
            {
                "timeId": "604dfc7a233118962848705f",
                "clockedIn": "Sat, 09 Jan 2021 07:23:39 GMT",
                "clockedOut": "Sat, 09 Jan 2021 18:23:39 GMT",
                "unproductiveTime": "13min"
            }
        ]
    },
    {
        "id": "604dfc7a4bbf8398943796ab",
        "name": "Pearson Crosby",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a4e96e9c974f9ea5e",
                "clockedIn": "Sun, 10 Jan 2021 02:27:00 GMT",
                "clockedOut": "Sun, 10 Jan 2021 13:27:00 GMT",
                "unproductiveTime": "324min"
            }
        ]
    },
    {
        "id": "604dfc7a3e6ba7ae8cf54075",
        "name": "Heidi Mosley",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aaecf8d0af3754e0b",
                "clockedIn": "Thu, 14 Jan 2021 01:46:07 GMT",
                "clockedOut": "Thu, 14 Jan 2021 11:46:07 GMT",
                "unproductiveTime": "206min"
            },
            {
                "timeId": "604dfc7a5cf16f2d69937bb4",
                "clockedIn": "Fri, 15 Jan 2021 22:02:03 GMT",
                "clockedOut": "Sat, 16 Jan 2021 15:02:03 GMT",
                "unproductiveTime": "985min"
            },
            {
                "timeId": "604dfc7ab60d59999aabcc10",
                "clockedIn": "Sun, 21 Feb 2021 04:29:54 GMT",
                "clockedOut": "Sun, 21 Feb 2021 18:29:54 GMT",
                "unproductiveTime": "470min"
            }
        ]
    },
    {
        "id": "604dfc7a804cb01d91a5b927",
        "name": "Marion Mays",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aacf61ae24b9de679",
                "clockedIn": "Sun, 10 Jan 2021 21:18:25 GMT",
                "clockedOut": "Mon, 11 Jan 2021 20:18:25 GMT",
                "unproductiveTime": "60min"
            }
        ]
    },
    {
        "id": "604dfc7a0e3add9d92260438",
        "name": "Nancy Pollard",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a7e1918ad816d3588",
                "clockedIn": "Tue, 19 Jan 2021 23:15:02 GMT",
                "clockedOut": "Wed, 20 Jan 2021 13:15:02 GMT",
                "unproductiveTime": "462min"
            },
            {
                "timeId": "604dfc7a58813ae92634a22d",
                "clockedIn": "Thu, 04 Mar 2021 08:09:48 GMT",
                "clockedOut": "Thu, 04 Mar 2021 10:09:48 GMT",
                "unproductiveTime": "64min"
            }
        ]
    },
    {
        "id": "604dfc7a2f6b6fad8d568a56",
        "name": "Eaton Mccoy",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a52578e0e49398d8e",
                "clockedIn": "Fri, 26 Feb 2021 08:02:57 GMT",
                "clockedOut": "Fri, 26 Feb 2021 19:02:57 GMT",
                "unproductiveTime": "538min"
            },
            {
                "timeId": "604dfc7a06e7af2445795e4e",
                "clockedIn": "Sat, 02 Jan 2021 03:09:50 GMT",
                "clockedOut": "Sat, 02 Jan 2021 14:09:50 GMT",
                "unproductiveTime": "280min"
            },
            {
                "timeId": "604dfc7ac7d255f044fdd87e",
                "clockedIn": "Mon, 04 Jan 2021 00:26:50 GMT",
                "clockedOut": "Mon, 04 Jan 2021 18:26:50 GMT",
                "unproductiveTime": "377min"
            }
        ]
    },
    {
        "id": "604dfc7a58411c1a43247b4c",
        "name": "Lester Hughes",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a33921e023f5797fc",
                "clockedIn": "Thu, 14 Jan 2021 05:24:34 GMT",
                "clockedOut": "Thu, 14 Jan 2021 17:24:34 GMT",
                "unproductiveTime": "65min"
            },
            {
                "timeId": "604dfc7a558388ffa3db1a09",
                "clockedIn": "Fri, 15 Jan 2021 07:15:24 GMT",
                "clockedOut": "Fri, 15 Jan 2021 18:15:24 GMT",
                "unproductiveTime": "551min"
            },
            {
                "timeId": "604dfc7a22bdd5f30602c961",
                "clockedIn": "Mon, 04 Jan 2021 00:42:08 GMT",
                "clockedOut": "Mon, 04 Jan 2021 20:42:08 GMT",
                "unproductiveTime": "965min"
            },
            {
                "timeId": "604dfc7aa566a1b436c21b6a",
                "clockedIn": "Sun, 21 Feb 2021 07:59:26 GMT",
                "clockedOut": "Sun, 21 Feb 2021 18:59:26 GMT",
                "unproductiveTime": "451min"
            }
        ]
    },
    {
        "id": "604dfc7ae4548aeaaa27f68d",
        "name": "Hollie Mcneil",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a738800199aabcf85",
                "clockedIn": "Sun, 24 Jan 2021 01:21:16 GMT",
                "clockedOut": "Sun, 24 Jan 2021 14:21:16 GMT",
                "unproductiveTime": "584min"
            },
            {
                "timeId": "604dfc7a7e9ddea7588e628d",
                "clockedIn": "Mon, 25 Jan 2021 05:54:21 GMT",
                "clockedOut": "Mon, 25 Jan 2021 14:54:21 GMT",
                "unproductiveTime": "421min"
            },
            {
                "timeId": "604dfc7a57b1c55e3aa8e406",
                "clockedIn": "Mon, 04 Jan 2021 05:25:15 GMT",
                "clockedOut": "Mon, 04 Jan 2021 13:25:15 GMT",
                "unproductiveTime": "133min"
            }
        ]
    },
    {
        "id": "604dfc7a4cff8145754f0929",
        "name": "Madden Graves",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7afe8c0ef777cce2ae",
                "clockedIn": "Fri, 22 Jan 2021 09:54:50 GMT",
                "clockedOut": "Fri, 22 Jan 2021 13:54:50 GMT",
                "unproductiveTime": "0min"
            },
            {
                "timeId": "604dfc7abcacc5275a44c987",
                "clockedIn": "Sat, 16 Jan 2021 02:16:39 GMT",
                "clockedOut": "Sat, 16 Jan 2021 11:16:39 GMT",
                "unproductiveTime": "363min"
            }
        ]
    },
    {
        "id": "604dfc7a64435191f972e8b6",
        "name": "Marisa Huffman",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a9a561e1267d6d6b0",
                "clockedIn": "Fri, 05 Mar 2021 00:25:04 GMT",
                "clockedOut": "Fri, 05 Mar 2021 12:25:04 GMT",
                "unproductiveTime": "654min"
            },
            {
                "timeId": "604dfc7aba1226c225ece193",
                "clockedIn": "Fri, 12 Feb 2021 01:16:04 GMT",
                "clockedOut": "Fri, 12 Feb 2021 13:16:04 GMT",
                "unproductiveTime": "564min"
            }
        ]
    },
    {
        "id": "604dfc7adec45042e66b57ca",
        "name": "Dolores Hancock",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7acdd9f05af79456d6",
                "clockedIn": "Fri, 05 Feb 2021 05:05:53 GMT",
                "clockedOut": "Fri, 05 Feb 2021 17:05:53 GMT",
                "unproductiveTime": "645min"
            },
            {
                "timeId": "604dfc7ace75710b7918e93a",
                "clockedIn": "Sat, 06 Feb 2021 22:24:40 GMT",
                "clockedOut": "Sun, 07 Feb 2021 18:24:40 GMT",
                "unproductiveTime": "331min"
            },
            {
                "timeId": "604dfc7a3b7ef406e85c7020",
                "clockedIn": "Fri, 22 Jan 2021 04:04:23 GMT",
                "clockedOut": "Fri, 22 Jan 2021 12:04:23 GMT",
                "unproductiveTime": "371min"
            }
        ]
    },
    {
        "id": "604dfc7a2f545b11a4e96199",
        "name": "Finley Spears",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a73b1b2997be0ad0d",
                "clockedIn": "Thu, 04 Mar 2021 06:13:28 GMT",
                "clockedOut": "Thu, 04 Mar 2021 14:13:28 GMT",
                "unproductiveTime": "445min"
            },
            {
                "timeId": "604dfc7a793d942f6cb8c1f2",
                "clockedIn": "Wed, 27 Jan 2021 07:10:24 GMT",
                "clockedOut": "Wed, 27 Jan 2021 18:10:24 GMT",
                "unproductiveTime": "115min"
            }
        ]
    },
    {
        "id": "604dfc7aaae179172031fb14",
        "name": "Ewing Woodard",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7abf49be4b9ef6b111",
                "clockedIn": "Tue, 02 Mar 2021 01:34:32 GMT",
                "clockedOut": "Tue, 02 Mar 2021 11:34:32 GMT",
                "unproductiveTime": "558min"
            }
        ]
    },
    {
        "id": "604dfc7a246ade44dddbfdf0",
        "name": "Berry England",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a52657d5ad03d1b83",
                "clockedIn": "Tue, 19 Jan 2021 01:41:06 GMT",
                "clockedOut": "Tue, 19 Jan 2021 14:41:06 GMT",
                "unproductiveTime": "364min"
            },
            {
                "timeId": "604dfc7a7dba52c793bc5f50",
                "clockedIn": "Sun, 10 Jan 2021 08:32:24 GMT",
                "clockedOut": "Sun, 10 Jan 2021 15:32:24 GMT",
                "unproductiveTime": "200min"
            }
        ]
    },
    {
        "id": "604dfc7ab1fcb948094e13b5",
        "name": "Caroline Dejesus",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a20ebb414cb2fda94",
                "clockedIn": "Sat, 13 Feb 2021 04:57:26 GMT",
                "clockedOut": "Sat, 13 Feb 2021 16:57:26 GMT",
                "unproductiveTime": "163min"
            },
            {
                "timeId": "604dfc7ab57b4ed0dfb975b6",
                "clockedIn": "Tue, 09 Mar 2021 22:30:25 GMT",
                "clockedOut": "Wed, 10 Mar 2021 15:30:25 GMT",
                "unproductiveTime": "611min"
            },
            {
                "timeId": "604dfc7a63a557af5207e5a0",
                "clockedIn": "Fri, 12 Feb 2021 02:52:41 GMT",
                "clockedOut": "Fri, 12 Feb 2021 11:52:41 GMT",
                "unproductiveTime": "3min"
            }
        ]
    },
    {
        "id": "604dfc7adc78623ec1867ad5",
        "name": "Tammy Holman",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a1153398bf18d2722",
                "clockedIn": "Fri, 19 Feb 2021 22:06:43 GMT",
                "clockedOut": "Sat, 20 Feb 2021 18:06:43 GMT",
                "unproductiveTime": "793min"
            },
            {
                "timeId": "604dfc7a86f875574f22a07b",
                "clockedIn": "Mon, 22 Feb 2021 22:42:34 GMT",
                "clockedOut": "Tue, 23 Feb 2021 12:42:34 GMT",
                "unproductiveTime": "680min"
            },
            {
                "timeId": "604dfc7a2811007d804712df",
                "clockedIn": "Sat, 02 Jan 2021 23:03:51 GMT",
                "clockedOut": "Sun, 03 Jan 2021 17:03:51 GMT",
                "unproductiveTime": "1034min"
            }
        ]
    },
    {
        "id": "604dfc7ac3d3a850344959a3",
        "name": "Barnes Dudley",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aa20a4d2a26a0c164",
                "clockedIn": "Fri, 19 Feb 2021 09:03:57 GMT",
                "clockedOut": "Fri, 19 Feb 2021 18:03:57 GMT",
                "unproductiveTime": "107min"
            },
            {
                "timeId": "604dfc7ac4fc658e70c2d3fc",
                "clockedIn": "Sun, 03 Jan 2021 09:35:54 GMT",
                "clockedOut": "Sun, 03 Jan 2021 15:35:54 GMT",
                "unproductiveTime": "333min"
            }
        ]
    },
    {
        "id": "604dfc7ae63d72c33bfdf504",
        "name": "Holder Harrison",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a07622a5784aa783d",
                "clockedIn": "Mon, 15 Feb 2021 08:54:01 GMT",
                "clockedOut": "Mon, 15 Feb 2021 18:54:01 GMT",
                "unproductiveTime": "578min"
            },
            {
                "timeId": "604dfc7a9e9edc2170ec694a",
                "clockedIn": "Sat, 27 Feb 2021 03:39:09 GMT",
                "clockedOut": "Sat, 27 Feb 2021 16:39:09 GMT",
                "unproductiveTime": "222min"
            }
        ]
    },
    {
        "id": "604dfc7af4230788a4286559",
        "name": "Janine Owens",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a616e64921eb93ed3",
                "clockedIn": "Sat, 06 Feb 2021 23:58:47 GMT",
                "clockedOut": "Sun, 07 Feb 2021 15:58:47 GMT",
                "unproductiveTime": "712min"
            },
            {
                "timeId": "604dfc7aff09f0fb6bc330ba",
                "clockedIn": "Tue, 12 Jan 2021 23:11:05 GMT",
                "clockedOut": "Wed, 13 Jan 2021 11:11:05 GMT",
                "unproductiveTime": "314min"
            },
            {
                "timeId": "604dfc7a8c5d8157e8b6d227",
                "clockedIn": "Fri, 19 Feb 2021 04:49:39 GMT",
                "clockedOut": "Fri, 19 Feb 2021 20:49:39 GMT",
                "unproductiveTime": "951min"
            },
            {
                "timeId": "604dfc7aa5ac3a317d06e5e4",
                "clockedIn": "Mon, 08 Mar 2021 05:42:17 GMT",
                "clockedOut": "Mon, 08 Mar 2021 15:42:17 GMT",
                "unproductiveTime": "352min"
            }
        ]
    },
    {
        "id": "604dfc7adddb9a5da321fe77",
        "name": "Valeria Moreno",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a2f103ea3b96d27ee",
                "clockedIn": "Mon, 15 Feb 2021 04:18:23 GMT",
                "clockedOut": "Mon, 15 Feb 2021 14:18:23 GMT",
                "unproductiveTime": "216min"
            },
            {
                "timeId": "604dfc7a8caba1b78f98fa7e",
                "clockedIn": "Fri, 15 Jan 2021 22:31:04 GMT",
                "clockedOut": "Sat, 16 Jan 2021 12:31:04 GMT",
                "unproductiveTime": "626min"
            },
            {
                "timeId": "604dfc7a8cc9c7e9a4b513cb",
                "clockedIn": "Sun, 17 Jan 2021 05:38:33 GMT",
                "clockedOut": "Sun, 17 Jan 2021 18:38:33 GMT",
                "unproductiveTime": "99min"
            },
            {
                "timeId": "604dfc7aa7c307762faccaad",
                "clockedIn": "Mon, 15 Feb 2021 08:07:33 GMT",
                "clockedOut": "Mon, 15 Feb 2021 10:07:33 GMT",
                "unproductiveTime": "7min"
            }
        ]
    },
    {
        "id": "604dfc7a40037258e31fe850",
        "name": "Cathy Villarreal",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a0393c1c969d0d662",
                "clockedIn": "Mon, 25 Jan 2021 03:13:59 GMT",
                "clockedOut": "Mon, 25 Jan 2021 16:13:59 GMT",
                "unproductiveTime": "495min"
            }
        ]
    },
    {
        "id": "604dfc7a3b4fa6edc3c1e7f3",
        "name": "Georgia Carey",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a55b7e7ef346f02db",
                "clockedIn": "Wed, 03 Mar 2021 03:46:22 GMT",
                "clockedOut": "Wed, 03 Mar 2021 17:46:22 GMT",
                "unproductiveTime": "464min"
            },
            {
                "timeId": "604dfc7af320d1ff1c7932dd",
                "clockedIn": "Tue, 12 Jan 2021 07:31:44 GMT",
                "clockedOut": "Tue, 12 Jan 2021 11:31:44 GMT",
                "unproductiveTime": "56min"
            },
            {
                "timeId": "604dfc7a8953cfe24f2d7157",
                "clockedIn": "Fri, 08 Jan 2021 09:26:05 GMT",
                "clockedOut": "Fri, 08 Jan 2021 14:26:05 GMT",
                "unproductiveTime": "156min"
            },
            {
                "timeId": "604dfc7a2b9c76d45c38b46c",
                "clockedIn": "Sat, 16 Jan 2021 08:04:19 GMT",
                "clockedOut": "Sat, 16 Jan 2021 14:04:19 GMT",
                "unproductiveTime": "338min"
            }
        ]
    },
    {
        "id": "604dfc7a37552713ba74bdb8",
        "name": "Annabelle Juarez",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a1d7023f7a3cb324f",
                "clockedIn": "Thu, 04 Mar 2021 07:03:26 GMT",
                "clockedOut": "Thu, 04 Mar 2021 10:03:26 GMT",
                "unproductiveTime": "37min"
            },
            {
                "timeId": "604dfc7ac823beee6e8536bf",
                "clockedIn": "Tue, 02 Feb 2021 23:26:40 GMT",
                "clockedOut": "Wed, 03 Feb 2021 17:26:40 GMT",
                "unproductiveTime": "911min"
            },
            {
                "timeId": "604dfc7a66098b725dd42c5b",
                "clockedIn": "Wed, 03 Feb 2021 09:10:40 GMT",
                "clockedOut": "Wed, 03 Feb 2021 16:10:40 GMT",
                "unproductiveTime": "23min"
            },
            {
                "timeId": "604dfc7a03b4e9cfd7455b37",
                "clockedIn": "Sat, 27 Feb 2021 09:42:31 GMT",
                "clockedOut": "Sat, 27 Feb 2021 16:42:31 GMT",
                "unproductiveTime": "296min"
            }
        ]
    },
    {
        "id": "604dfc7a053ad656ef8d4683",
        "name": "Barton Sosa",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a63e501624941d79f",
                "clockedIn": "Fri, 26 Feb 2021 21:26:15 GMT",
                "clockedOut": "Sat, 27 Feb 2021 11:26:15 GMT",
                "unproductiveTime": "489min"
            },
            {
                "timeId": "604dfc7ab98e08ec4183d854",
                "clockedIn": "Fri, 15 Jan 2021 22:17:52 GMT",
                "clockedOut": "Sat, 16 Jan 2021 16:17:52 GMT",
                "unproductiveTime": "1011min"
            },
            {
                "timeId": "604dfc7acd60b1ae0038c765",
                "clockedIn": "Thu, 07 Jan 2021 01:22:09 GMT",
                "clockedOut": "Thu, 07 Jan 2021 15:22:09 GMT",
                "unproductiveTime": "785min"
            }
        ]
    },
    {
        "id": "604dfc7a54e795b340ca25a8",
        "name": "Angel Phillips",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a424bd85ad337982e",
                "clockedIn": "Mon, 15 Feb 2021 23:04:14 GMT",
                "clockedOut": "Tue, 16 Feb 2021 12:04:14 GMT",
                "unproductiveTime": "500min"
            },
            {
                "timeId": "604dfc7a8575ed38afd19b9a",
                "clockedIn": "Sun, 14 Mar 2021 09:50:48 GMT",
                "clockedOut": "Sun, 14 Mar 2021 19:50:48 GMT",
                "unproductiveTime": "346min"
            },
            {
                "timeId": "604dfc7afa5b83c11e6d0342",
                "clockedIn": "Sun, 03 Jan 2021 21:45:24 GMT",
                "clockedOut": "Mon, 04 Jan 2021 10:45:24 GMT",
                "unproductiveTime": "55min"
            }
        ]
    },
    {
        "id": "604dfc7aa99ba5021d3de1d2",
        "name": "Latonya Snider",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a2e9201754d6b6906",
                "clockedIn": "Wed, 06 Jan 2021 08:26:53 GMT",
                "clockedOut": "Wed, 06 Jan 2021 13:26:53 GMT",
                "unproductiveTime": "43min"
            },
            {
                "timeId": "604dfc7a73f5769e4678cfe1",
                "clockedIn": "Tue, 09 Feb 2021 03:18:53 GMT",
                "clockedOut": "Tue, 09 Feb 2021 17:18:53 GMT",
                "unproductiveTime": "138min"
            },
            {
                "timeId": "604dfc7a90d002cf5020cfed",
                "clockedIn": "Tue, 12 Jan 2021 00:20:06 GMT",
                "clockedOut": "Tue, 12 Jan 2021 13:20:06 GMT",
                "unproductiveTime": "385min"
            }
        ]
    },
    {
        "id": "604dfc7a0e7d3e6f0e0a0e11",
        "name": "Leola Head",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a3365c0080eb07fd7",
                "clockedIn": "Sat, 16 Jan 2021 01:33:27 GMT",
                "clockedOut": "Sat, 16 Jan 2021 17:33:27 GMT",
                "unproductiveTime": "171min"
            }
        ]
    },
    {
        "id": "604dfc7a68959a07571b8578",
        "name": "Craft Kemp",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a2e1cbc9fed87a75c",
                "clockedIn": "Sun, 10 Jan 2021 04:06:56 GMT",
                "clockedOut": "Sun, 10 Jan 2021 18:06:56 GMT",
                "unproductiveTime": "540min"
            },
            {
                "timeId": "604dfc7a33fbc237d041b0f7",
                "clockedIn": "Tue, 19 Jan 2021 21:10:54 GMT",
                "clockedOut": "Wed, 20 Jan 2021 12:10:54 GMT",
                "unproductiveTime": "589min"
            },
            {
                "timeId": "604dfc7a7e586c8942e92451",
                "clockedIn": "Wed, 06 Jan 2021 07:25:44 GMT",
                "clockedOut": "Wed, 06 Jan 2021 20:25:44 GMT",
                "unproductiveTime": "466min"
            },
            {
                "timeId": "604dfc7a1b0b604d0671dfb2",
                "clockedIn": "Wed, 20 Jan 2021 07:06:18 GMT",
                "clockedOut": "Wed, 20 Jan 2021 12:06:18 GMT",
                "unproductiveTime": "109min"
            }
        ]
    },
    {
        "id": "604dfc7a519947e51d071483",
        "name": "Wolfe Morris",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ac6b9220782bc955d",
                "clockedIn": "Fri, 15 Jan 2021 22:26:49 GMT",
                "clockedOut": "Sat, 16 Jan 2021 14:26:49 GMT",
                "unproductiveTime": "13min"
            }
        ]
    },
    {
        "id": "604dfc7abae78cd900d26bff",
        "name": "Mandy Flynn",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7af698cb581abc17e1",
                "clockedIn": "Wed, 10 Mar 2021 21:06:45 GMT",
                "clockedOut": "Thu, 11 Mar 2021 15:06:45 GMT",
                "unproductiveTime": "542min"
            },
            {
                "timeId": "604dfc7adcf40b6a91bab194",
                "clockedIn": "Fri, 05 Feb 2021 06:16:28 GMT",
                "clockedOut": "Fri, 05 Feb 2021 10:16:28 GMT",
                "unproductiveTime": "57min"
            },
            {
                "timeId": "604dfc7ae6e577fcc5a8efca",
                "clockedIn": "Sat, 02 Jan 2021 06:55:20 GMT",
                "clockedOut": "Sat, 02 Jan 2021 20:55:20 GMT",
                "unproductiveTime": "812min"
            }
        ]
    },
    {
        "id": "604dfc7ab25ccf2767aa8ffa",
        "name": "Cecelia Frost",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aadcb717ae5011745",
                "clockedIn": "Thu, 21 Jan 2021 04:47:37 GMT",
                "clockedOut": "Thu, 21 Jan 2021 18:47:37 GMT",
                "unproductiveTime": "356min"
            }
        ]
    },
    {
        "id": "604dfc7a1a0e374fe32a60d8",
        "name": "Adkins Fry",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a5feb1a300b2c7f56",
                "clockedIn": "Fri, 01 Jan 2021 02:50:55 GMT",
                "clockedOut": "Fri, 01 Jan 2021 15:50:55 GMT",
                "unproductiveTime": "394min"
            },
            {
                "timeId": "604dfc7a483403069ee7be05",
                "clockedIn": "Sun, 07 Mar 2021 22:36:45 GMT",
                "clockedOut": "Mon, 08 Mar 2021 15:36:45 GMT",
                "unproductiveTime": "517min"
            },
            {
                "timeId": "604dfc7a8214dcd4ab78141b",
                "clockedIn": "Wed, 06 Jan 2021 03:23:49 GMT",
                "clockedOut": "Wed, 06 Jan 2021 12:23:49 GMT",
                "unproductiveTime": "246min"
            },
            {
                "timeId": "604dfc7aab9d0c24d4b7763d",
                "clockedIn": "Thu, 14 Jan 2021 22:12:37 GMT",
                "clockedOut": "Fri, 15 Jan 2021 10:12:37 GMT",
                "unproductiveTime": "638min"
            }
        ]
    },
    {
        "id": "604dfc7a3d8ca5bd77e9d5f5",
        "name": "Carlene Sweeney",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aef0163a3f07dc1aa",
                "clockedIn": "Sat, 02 Jan 2021 08:10:33 GMT",
                "clockedOut": "Sat, 02 Jan 2021 20:10:33 GMT",
                "unproductiveTime": "407min"
            }
        ]
    },
    {
        "id": "604dfc7a5ae2cbcc88fb2fe5",
        "name": "Fitzpatrick Johns",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7afbf6a18dceb3a8b9",
                "clockedIn": "Sat, 06 Mar 2021 22:14:42 GMT",
                "clockedOut": "Sun, 07 Mar 2021 10:14:42 GMT",
                "unproductiveTime": "563min"
            },
            {
                "timeId": "604dfc7a2a509fce8e3b1ddf",
                "clockedIn": "Thu, 18 Feb 2021 07:41:47 GMT",
                "clockedOut": "Thu, 18 Feb 2021 17:41:47 GMT",
                "unproductiveTime": "459min"
            }
        ]
    },
    {
        "id": "604dfc7a64513ee50b3eb6eb",
        "name": "Baird Slater",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aabc5537612f4793f",
                "clockedIn": "Thu, 28 Jan 2021 22:11:51 GMT",
                "clockedOut": "Fri, 29 Jan 2021 16:11:51 GMT",
                "unproductiveTime": "78min"
            },
            {
                "timeId": "604dfc7ae76a51da04bdb7ee",
                "clockedIn": "Tue, 05 Jan 2021 01:44:38 GMT",
                "clockedOut": "Tue, 05 Jan 2021 15:44:38 GMT",
                "unproductiveTime": "536min"
            },
            {
                "timeId": "604dfc7ac1a14923ff552d46",
                "clockedIn": "Thu, 25 Feb 2021 05:18:59 GMT",
                "clockedOut": "Thu, 25 Feb 2021 18:18:59 GMT",
                "unproductiveTime": "644min"
            },
            {
                "timeId": "604dfc7a5b26d20763c3f581",
                "clockedIn": "Thu, 18 Feb 2021 05:13:24 GMT",
                "clockedOut": "Thu, 18 Feb 2021 10:13:24 GMT",
                "unproductiveTime": "256min"
            }
        ]
    },
    {
        "id": "604dfc7a8af211044a23930e",
        "name": "Luz Cline",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ababb8d61d41a817b",
                "clockedIn": "Sun, 17 Jan 2021 04:54:59 GMT",
                "clockedOut": "Sun, 17 Jan 2021 10:54:59 GMT",
                "unproductiveTime": "14min"
            },
            {
                "timeId": "604dfc7a5bd1df8acb1929ee",
                "clockedIn": "Mon, 15 Feb 2021 21:29:46 GMT",
                "clockedOut": "Tue, 16 Feb 2021 13:29:46 GMT",
                "unproductiveTime": "578min"
            },
            {
                "timeId": "604dfc7ae56ab3d8cd7c88ea",
                "clockedIn": "Thu, 28 Jan 2021 05:57:09 GMT",
                "clockedOut": "Thu, 28 Jan 2021 11:57:09 GMT",
                "unproductiveTime": "357min"
            }
        ]
    },
    {
        "id": "604dfc7a2946b1ed96052df7",
        "name": "Latoya Sandoval",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a42d57942ba492dbc",
                "clockedIn": "Mon, 01 Feb 2021 00:37:23 GMT",
                "clockedOut": "Mon, 01 Feb 2021 19:37:23 GMT",
                "unproductiveTime": "316min"
            },
            {
                "timeId": "604dfc7a1c4915862e53ca36",
                "clockedIn": "Sat, 13 Mar 2021 02:29:59 GMT",
                "clockedOut": "Sat, 13 Mar 2021 15:29:59 GMT",
                "unproductiveTime": "278min"
            },
            {
                "timeId": "604dfc7a13c073974db5994e",
                "clockedIn": "Wed, 17 Feb 2021 02:57:55 GMT",
                "clockedOut": "Wed, 17 Feb 2021 16:57:55 GMT",
                "unproductiveTime": "172min"
            }
        ]
    },
    {
        "id": "604dfc7afbf44a7be3c07ae2",
        "name": "Myra Spence",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a0c3fc181ba52d6e7",
                "clockedIn": "Sun, 21 Feb 2021 05:13:12 GMT",
                "clockedOut": "Sun, 21 Feb 2021 15:13:12 GMT",
                "unproductiveTime": "515min"
            }
        ]
    },
    {
        "id": "604dfc7a2bd1a9c1ead3dc75",
        "name": "Jill Long",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ac93f488ba4e7c49d",
                "clockedIn": "Tue, 02 Feb 2021 08:22:24 GMT",
                "clockedOut": "Tue, 02 Feb 2021 13:22:24 GMT",
                "unproductiveTime": "91min"
            }
        ]
    },
    {
        "id": "604dfc7a5e5b0427b341d75f",
        "name": "Richards Foster",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a599a374af824f925",
                "clockedIn": "Mon, 01 Mar 2021 08:05:49 GMT",
                "clockedOut": "Mon, 01 Mar 2021 13:05:49 GMT",
                "unproductiveTime": "170min"
            }
        ]
    },
    {
        "id": "604dfc7a54383a5a458a144f",
        "name": "Mara Mclean",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aee24ceacfc23d15d",
                "clockedIn": "Thu, 11 Feb 2021 05:15:32 GMT",
                "clockedOut": "Thu, 11 Feb 2021 17:15:32 GMT",
                "unproductiveTime": "428min"
            }
        ]
    },
    {
        "id": "604dfc7a4cf5866a4cfbd1bc",
        "name": "Brock Little",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a08c9ded739cae0bd",
                "clockedIn": "Sat, 09 Jan 2021 00:22:04 GMT",
                "clockedOut": "Sat, 09 Jan 2021 15:22:04 GMT",
                "unproductiveTime": "644min"
            },
            {
                "timeId": "604dfc7a99165b24598c98e2",
                "clockedIn": "Tue, 09 Mar 2021 05:45:00 GMT",
                "clockedOut": "Tue, 09 Mar 2021 14:45:00 GMT",
                "unproductiveTime": "397min"
            },
            {
                "timeId": "604dfc7ac1c42a035a9a5edc",
                "clockedIn": "Mon, 08 Feb 2021 02:40:50 GMT",
                "clockedOut": "Mon, 08 Feb 2021 14:40:50 GMT",
                "unproductiveTime": "74min"
            },
            {
                "timeId": "604dfc7a27fdfd79c0d77673",
                "clockedIn": "Wed, 13 Jan 2021 08:07:29 GMT",
                "clockedOut": "Wed, 13 Jan 2021 20:07:29 GMT",
                "unproductiveTime": "573min"
            }
        ]
    },
    {
        "id": "604dfc7adbfbd30abea97a3b",
        "name": "Ursula Hickman",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a8020deb509e14ab2",
                "clockedIn": "Sun, 21 Feb 2021 09:41:08 GMT",
                "clockedOut": "Sun, 21 Feb 2021 19:41:08 GMT",
                "unproductiveTime": "274min"
            },
            {
                "timeId": "604dfc7ac2d50563b59434d0",
                "clockedIn": "Mon, 15 Feb 2021 04:08:05 GMT",
                "clockedOut": "Mon, 15 Feb 2021 17:08:05 GMT",
                "unproductiveTime": "649min"
            },
            {
                "timeId": "604dfc7aee1d444f4bfee87b",
                "clockedIn": "Mon, 08 Mar 2021 02:39:33 GMT",
                "clockedOut": "Mon, 08 Mar 2021 15:39:33 GMT",
                "unproductiveTime": "365min"
            }
        ]
    },
    {
        "id": "604dfc7a2af6761219f612ec",
        "name": "Kris Valentine",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a9d6784f17ad409c4",
                "clockedIn": "Tue, 19 Jan 2021 09:43:45 GMT",
                "clockedOut": "Tue, 19 Jan 2021 11:43:45 GMT",
                "unproductiveTime": "17min"
            },
            {
                "timeId": "604dfc7a436df3ff7cb43f45",
                "clockedIn": "Sun, 17 Jan 2021 05:41:30 GMT",
                "clockedOut": "Sun, 17 Jan 2021 12:41:30 GMT",
                "unproductiveTime": "100min"
            },
            {
                "timeId": "604dfc7a1aad67c59cf226e1",
                "clockedIn": "Sat, 09 Jan 2021 01:42:39 GMT",
                "clockedOut": "Sat, 09 Jan 2021 14:42:39 GMT",
                "unproductiveTime": "1min"
            }
        ]
    },
    {
        "id": "604dfc7ade774697b7aab51f",
        "name": "West Kelley",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a8d6ec716eeb6a30e",
                "clockedIn": "Tue, 16 Feb 2021 03:52:24 GMT",
                "clockedOut": "Tue, 16 Feb 2021 12:52:24 GMT",
                "unproductiveTime": "34min"
            },
            {
                "timeId": "604dfc7a26be97f61862d1bb",
                "clockedIn": "Sat, 30 Jan 2021 01:06:47 GMT",
                "clockedOut": "Sat, 30 Jan 2021 20:06:47 GMT",
                "unproductiveTime": "603min"
            }
        ]
    },
    {
        "id": "604dfc7a491595a2ae333064",
        "name": "Delia Wilcox",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ad701c1cbf72723cd",
                "clockedIn": "Tue, 09 Mar 2021 23:47:22 GMT",
                "clockedOut": "Wed, 10 Mar 2021 14:47:22 GMT",
                "unproductiveTime": "437min"
            },
            {
                "timeId": "604dfc7abc695067afc1b207",
                "clockedIn": "Mon, 08 Feb 2021 23:43:17 GMT",
                "clockedOut": "Tue, 09 Feb 2021 18:43:17 GMT",
                "unproductiveTime": "219min"
            },
            {
                "timeId": "604dfc7a007c9e3075157c98",
                "clockedIn": "Thu, 28 Jan 2021 22:23:56 GMT",
                "clockedOut": "Fri, 29 Jan 2021 14:23:56 GMT",
                "unproductiveTime": "30min"
            }
        ]
    },
    {
        "id": "604dfc7ab12e000589612c82",
        "name": "Shaffer Keith",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a1cf67af08cde929e",
                "clockedIn": "Wed, 06 Jan 2021 06:14:25 GMT",
                "clockedOut": "Wed, 06 Jan 2021 16:14:25 GMT",
                "unproductiveTime": "110min"
            },
            {
                "timeId": "604dfc7a4a76941131f0dfb8",
                "clockedIn": "Wed, 03 Feb 2021 00:42:25 GMT",
                "clockedOut": "Wed, 03 Feb 2021 14:42:25 GMT",
                "unproductiveTime": "159min"
            },
            {
                "timeId": "604dfc7a666ab3ba07ff5745",
                "clockedIn": "Thu, 04 Mar 2021 21:31:11 GMT",
                "clockedOut": "Fri, 05 Mar 2021 20:31:11 GMT",
                "unproductiveTime": "182min"
            },
            {
                "timeId": "604dfc7a9661ceda56cd72cf",
                "clockedIn": "Sat, 27 Feb 2021 23:10:04 GMT",
                "clockedOut": "Sun, 28 Feb 2021 11:10:04 GMT",
                "unproductiveTime": "622min"
            }
        ]
    },
    {
        "id": "604dfc7a05e75c807f4cdf48",
        "name": "Sandy Emerson",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a4a2d966c6ee25ba5",
                "clockedIn": "Sat, 06 Mar 2021 02:27:31 GMT",
                "clockedOut": "Sat, 06 Mar 2021 18:27:31 GMT",
                "unproductiveTime": "444min"
            },
            {
                "timeId": "604dfc7ab793c8674df50965",
                "clockedIn": "Mon, 18 Jan 2021 21:45:59 GMT",
                "clockedOut": "Tue, 19 Jan 2021 14:45:59 GMT",
                "unproductiveTime": "882min"
            },
            {
                "timeId": "604dfc7ae74c275caa4c268d",
                "clockedIn": "Sat, 30 Jan 2021 02:39:12 GMT",
                "clockedOut": "Sat, 30 Jan 2021 18:39:12 GMT",
                "unproductiveTime": "490min"
            }
        ]
    },
    {
        "id": "604dfc7a90c7c249c856b64e",
        "name": "Simon Petty",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aab396e3a5f91027a",
                "clockedIn": "Mon, 08 Feb 2021 05:06:17 GMT",
                "clockedOut": "Mon, 08 Feb 2021 16:06:17 GMT",
                "unproductiveTime": "312min"
            },
            {
                "timeId": "604dfc7ab53bfa699fe31da3",
                "clockedIn": "Thu, 11 Mar 2021 01:02:27 GMT",
                "clockedOut": "Thu, 11 Mar 2021 18:02:27 GMT",
                "unproductiveTime": "892min"
            },
            {
                "timeId": "604dfc7a6158a1acb70217d7",
                "clockedIn": "Wed, 06 Jan 2021 06:42:29 GMT",
                "clockedOut": "Wed, 06 Jan 2021 17:42:29 GMT",
                "unproductiveTime": "246min"
            }
        ]
    },
    {
        "id": "604dfc7a13b1f3423f64ca50",
        "name": "Hoffman Allison",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a255ebd1801b7eff0",
                "clockedIn": "Thu, 07 Jan 2021 04:07:26 GMT",
                "clockedOut": "Thu, 07 Jan 2021 10:07:26 GMT",
                "unproductiveTime": "284min"
            },
            {
                "timeId": "604dfc7a576ee7524f90b5f6",
                "clockedIn": "Tue, 05 Jan 2021 04:30:45 GMT",
                "clockedOut": "Tue, 05 Jan 2021 19:30:45 GMT",
                "unproductiveTime": "388min"
            },
            {
                "timeId": "604dfc7a1307d89d1713c851",
                "clockedIn": "Sun, 03 Jan 2021 22:04:21 GMT",
                "clockedOut": "Mon, 04 Jan 2021 12:04:21 GMT",
                "unproductiveTime": "97min"
            }
        ]
    },
    {
        "id": "604dfc7a85fbaf8d491739b5",
        "name": "Baldwin Gonzalez",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7acdcf8f93471c479c",
                "clockedIn": "Tue, 23 Feb 2021 09:34:12 GMT",
                "clockedOut": "Tue, 23 Feb 2021 16:34:12 GMT",
                "unproductiveTime": "87min"
            }
        ]
    },
    {
        "id": "604dfc7a627ea95cf8d3ca8f",
        "name": "Toni Dodson",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ae362a0c324035373",
                "clockedIn": "Fri, 29 Jan 2021 07:05:35 GMT",
                "clockedOut": "Fri, 29 Jan 2021 14:05:35 GMT",
                "unproductiveTime": "168min"
            },
            {
                "timeId": "604dfc7a405c961658ad0b95",
                "clockedIn": "Mon, 22 Feb 2021 23:08:29 GMT",
                "clockedOut": "Tue, 23 Feb 2021 16:08:29 GMT",
                "unproductiveTime": "375min"
            },
            {
                "timeId": "604dfc7ae6ed00a334659eef",
                "clockedIn": "Thu, 04 Feb 2021 21:24:17 GMT",
                "clockedOut": "Fri, 05 Feb 2021 15:24:17 GMT",
                "unproductiveTime": "593min"
            }
        ]
    },
    {
        "id": "604dfc7a3ba14c9d4d6d3f7b",
        "name": "Ruthie Beard",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a5d374e6335aee0fe",
                "clockedIn": "Tue, 02 Feb 2021 23:43:13 GMT",
                "clockedOut": "Wed, 03 Feb 2021 18:43:13 GMT",
                "unproductiveTime": "323min"
            },
            {
                "timeId": "604dfc7a7f2fdc31853ceb55",
                "clockedIn": "Sat, 02 Jan 2021 02:51:10 GMT",
                "clockedOut": "Sat, 02 Jan 2021 13:51:10 GMT",
                "unproductiveTime": "620min"
            },
            {
                "timeId": "604dfc7a584af5aab9b4810c",
                "clockedIn": "Sat, 06 Mar 2021 02:28:14 GMT",
                "clockedOut": "Sat, 06 Mar 2021 11:28:14 GMT",
                "unproductiveTime": "284min"
            },
            {
                "timeId": "604dfc7a41b2bff29fa248d8",
                "clockedIn": "Sat, 16 Jan 2021 21:28:48 GMT",
                "clockedOut": "Sun, 17 Jan 2021 18:28:48 GMT",
                "unproductiveTime": "221min"
            }
        ]
    },
    {
        "id": "604dfc7aad31504b1908db7a",
        "name": "Villarreal Paul",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aab23b10ee3a1dbe4",
                "clockedIn": "Fri, 29 Jan 2021 04:02:59 GMT",
                "clockedOut": "Fri, 29 Jan 2021 14:02:59 GMT",
                "unproductiveTime": "314min"
            }
        ]
    },
    {
        "id": "604dfc7ab9787b7974d14322",
        "name": "Cherie Richards",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a84b9b22fe002fbe9",
                "clockedIn": "Sun, 31 Jan 2021 06:24:50 GMT",
                "clockedOut": "Sun, 31 Jan 2021 18:24:50 GMT",
                "unproductiveTime": "611min"
            },
            {
                "timeId": "604dfc7ae38308a6a5732ba7",
                "clockedIn": "Mon, 15 Feb 2021 07:35:14 GMT",
                "clockedOut": "Mon, 15 Feb 2021 11:35:14 GMT",
                "unproductiveTime": "110min"
            },
            {
                "timeId": "604dfc7ae23bb1cd7afee947",
                "clockedIn": "Mon, 01 Feb 2021 07:34:21 GMT",
                "clockedOut": "Mon, 01 Feb 2021 19:34:21 GMT",
                "unproductiveTime": "115min"
            }
        ]
    },
    {
        "id": "604dfc7a21bbdf5345ab3b5e",
        "name": "Allison Mckee",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ac55fac3eeef7c19e",
                "clockedIn": "Wed, 10 Feb 2021 09:56:41 GMT",
                "clockedOut": "Wed, 10 Feb 2021 17:56:41 GMT",
                "unproductiveTime": "386min"
            },
            {
                "timeId": "604dfc7a3d9986f6acd193a5",
                "clockedIn": "Sun, 21 Feb 2021 06:47:53 GMT",
                "clockedOut": "Sun, 21 Feb 2021 14:47:53 GMT",
                "unproductiveTime": "131min"
            },
            {
                "timeId": "604dfc7a6dfcbf98286e34f7",
                "clockedIn": "Sat, 13 Feb 2021 07:48:55 GMT",
                "clockedOut": "Sat, 13 Feb 2021 16:48:55 GMT",
                "unproductiveTime": "241min"
            }
        ]
    },
    {
        "id": "604dfc7a429292d319f361c0",
        "name": "Dickson Maddox",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a3ab724179236db86",
                "clockedIn": "Mon, 08 Mar 2021 01:50:37 GMT",
                "clockedOut": "Mon, 08 Mar 2021 19:50:37 GMT",
                "unproductiveTime": "839min"
            },
            {
                "timeId": "604dfc7a65c8338280244d04",
                "clockedIn": "Fri, 12 Feb 2021 23:40:34 GMT",
                "clockedOut": "Sat, 13 Feb 2021 19:40:34 GMT",
                "unproductiveTime": "524min"
            }
        ]
    },
    {
        "id": "604dfc7abb0b5e226f5d261d",
        "name": "Elvira Moody",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aad8f80e7e16dd9a3",
                "clockedIn": "Fri, 29 Jan 2021 23:21:52 GMT",
                "clockedOut": "Sat, 30 Jan 2021 16:21:52 GMT",
                "unproductiveTime": "540min"
            },
            {
                "timeId": "604dfc7ac712c32652aae750",
                "clockedIn": "Sun, 10 Jan 2021 04:57:19 GMT",
                "clockedOut": "Sun, 10 Jan 2021 16:57:19 GMT",
                "unproductiveTime": "477min"
            },
            {
                "timeId": "604dfc7a2d4b049e907f1c71",
                "clockedIn": "Sun, 14 Feb 2021 01:09:17 GMT",
                "clockedOut": "Sun, 14 Feb 2021 10:09:17 GMT",
                "unproductiveTime": "480min"
            },
            {
                "timeId": "604dfc7afd209098191880d3",
                "clockedIn": "Fri, 08 Jan 2021 08:15:23 GMT",
                "clockedOut": "Fri, 08 Jan 2021 11:15:23 GMT",
                "unproductiveTime": "103min"
            }
        ]
    },
    {
        "id": "604dfc7a549f2161084baeff",
        "name": "Wise Palmer",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a6afb901b6801a3be",
                "clockedIn": "Fri, 19 Feb 2021 23:06:53 GMT",
                "clockedOut": "Sat, 20 Feb 2021 17:06:53 GMT",
                "unproductiveTime": "289min"
            },
            {
                "timeId": "604dfc7a96e2fc6f2f0e8e41",
                "clockedIn": "Mon, 01 Mar 2021 01:57:21 GMT",
                "clockedOut": "Mon, 01 Mar 2021 10:57:21 GMT",
                "unproductiveTime": "132min"
            },
            {
                "timeId": "604dfc7a296b806bb775640d",
                "clockedIn": "Mon, 22 Feb 2021 23:19:38 GMT",
                "clockedOut": "Tue, 23 Feb 2021 15:19:38 GMT",
                "unproductiveTime": "18min"
            },
            {
                "timeId": "604dfc7a0d12f49b3c1daba4",
                "clockedIn": "Mon, 04 Jan 2021 05:56:39 GMT",
                "clockedOut": "Mon, 04 Jan 2021 15:56:39 GMT",
                "unproductiveTime": "387min"
            }
        ]
    },
    {
        "id": "604dfc7a5575a016ebaef1e4",
        "name": "Hood Blair",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a32da7a7a9cfcfb8c",
                "clockedIn": "Sun, 10 Jan 2021 00:48:49 GMT",
                "clockedOut": "Sun, 10 Jan 2021 17:48:49 GMT",
                "unproductiveTime": "770min"
            }
        ]
    },
    {
        "id": "604dfc7a51cd836c54423f6d",
        "name": "Jeannie Chavez",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a0f4c80c18ab18f09",
                "clockedIn": "Fri, 19 Feb 2021 00:08:35 GMT",
                "clockedOut": "Fri, 19 Feb 2021 18:08:35 GMT",
                "unproductiveTime": "318min"
            },
            {
                "timeId": "604dfc7abec935e129f573c4",
                "clockedIn": "Mon, 08 Mar 2021 09:47:09 GMT",
                "clockedOut": "Mon, 08 Mar 2021 17:47:09 GMT",
                "unproductiveTime": "184min"
            },
            {
                "timeId": "604dfc7af77dcdf9fe6c9a7e",
                "clockedIn": "Fri, 26 Feb 2021 04:19:46 GMT",
                "clockedOut": "Fri, 26 Feb 2021 17:19:46 GMT",
                "unproductiveTime": "35min"
            },
            {
                "timeId": "604dfc7abb28dbf04b9d4af7",
                "clockedIn": "Sun, 10 Jan 2021 23:35:45 GMT",
                "clockedOut": "Mon, 11 Jan 2021 17:35:45 GMT",
                "unproductiveTime": "604min"
            }
        ]
    },
    {
        "id": "604dfc7aee99e3b980106e34",
        "name": "Penelope Griffin",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a87af84de9146a5e8",
                "clockedIn": "Tue, 02 Mar 2021 00:03:10 GMT",
                "clockedOut": "Tue, 02 Mar 2021 18:03:10 GMT",
                "unproductiveTime": "267min"
            }
        ]
    },
    {
        "id": "604dfc7af3af2997fb7fff15",
        "name": "Marian Guy",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a1b134eab6b396b2f",
                "clockedIn": "Fri, 05 Feb 2021 04:44:23 GMT",
                "clockedOut": "Fri, 05 Feb 2021 16:44:23 GMT",
                "unproductiveTime": "446min"
            },
            {
                "timeId": "604dfc7a8befb584b15a1e9b",
                "clockedIn": "Sat, 13 Mar 2021 23:25:52 GMT",
                "clockedOut": "Sun, 14 Mar 2021 15:25:52 GMT",
                "unproductiveTime": "446min"
            },
            {
                "timeId": "604dfc7a39f20ece2945bee3",
                "clockedIn": "Thu, 18 Feb 2021 05:23:19 GMT",
                "clockedOut": "Thu, 18 Feb 2021 11:23:19 GMT",
                "unproductiveTime": "241min"
            },
            {
                "timeId": "604dfc7a32173e8a8076a586",
                "clockedIn": "Sun, 31 Jan 2021 21:08:48 GMT",
                "clockedOut": "Mon, 01 Feb 2021 19:08:48 GMT",
                "unproductiveTime": "3min"
            }
        ]
    },
    {
        "id": "604dfc7ac3fcfd7ddaa4cf2e",
        "name": "Rosanna Hopkins",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a16b83ff38aa9399b",
                "clockedIn": "Mon, 01 Feb 2021 04:13:59 GMT",
                "clockedOut": "Mon, 01 Feb 2021 12:13:59 GMT",
                "unproductiveTime": "453min"
            },
            {
                "timeId": "604dfc7a791a93c2aa2d0ca9",
                "clockedIn": "Mon, 22 Feb 2021 23:15:20 GMT",
                "clockedOut": "Tue, 23 Feb 2021 13:15:20 GMT",
                "unproductiveTime": "29min"
            },
            {
                "timeId": "604dfc7a4276c7f6dd6e3e5f",
                "clockedIn": "Mon, 01 Feb 2021 06:51:44 GMT",
                "clockedOut": "Mon, 01 Feb 2021 18:51:44 GMT",
                "unproductiveTime": "100min"
            },
            {
                "timeId": "604dfc7a28c7625ec84fe803",
                "clockedIn": "Wed, 24 Feb 2021 21:04:07 GMT",
                "clockedOut": "Thu, 25 Feb 2021 15:04:07 GMT",
                "unproductiveTime": "963min"
            }
        ]
    },
    {
        "id": "604dfc7a2e24d86cc1080847",
        "name": "Rowena Rollins",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aaddfbfb503cd7ad8",
                "clockedIn": "Mon, 08 Mar 2021 21:53:06 GMT",
                "clockedOut": "Tue, 09 Mar 2021 13:53:06 GMT",
                "unproductiveTime": "276min"
            }
        ]
    },
    {
        "id": "604dfc7a9418426a9304015e",
        "name": "Morrison Dillard",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a9b79300a45da8f1b",
                "clockedIn": "Tue, 02 Mar 2021 05:21:01 GMT",
                "clockedOut": "Tue, 02 Mar 2021 14:21:01 GMT",
                "unproductiveTime": "17min"
            }
        ]
    },
    {
        "id": "604dfc7a195ba1b1736be663",
        "name": "Carter Morrison",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a6bc9de0d56bd1fcc",
                "clockedIn": "Fri, 15 Jan 2021 02:21:08 GMT",
                "clockedOut": "Fri, 15 Jan 2021 17:21:08 GMT",
                "unproductiveTime": "781min"
            }
        ]
    },
    {
        "id": "604dfc7ab862bc91a5945ec8",
        "name": "Love Miles",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aa0211d78d79d0a3c",
                "clockedIn": "Thu, 04 Feb 2021 22:39:32 GMT",
                "clockedOut": "Fri, 05 Feb 2021 16:39:32 GMT",
                "unproductiveTime": "754min"
            },
            {
                "timeId": "604dfc7a385516065ee4afc9",
                "clockedIn": "Sat, 06 Mar 2021 06:27:33 GMT",
                "clockedOut": "Sat, 06 Mar 2021 18:27:33 GMT",
                "unproductiveTime": "720min"
            },
            {
                "timeId": "604dfc7a36bc96f38811bc0d",
                "clockedIn": "Mon, 04 Jan 2021 01:16:04 GMT",
                "clockedOut": "Mon, 04 Jan 2021 16:16:04 GMT",
                "unproductiveTime": "494min"
            }
        ]
    },
    {
        "id": "604dfc7a0cb4c23cbb545663",
        "name": "Ferrell Rivera",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a2c531220402bc985",
                "clockedIn": "Mon, 18 Jan 2021 02:23:54 GMT",
                "clockedOut": "Mon, 18 Jan 2021 16:23:54 GMT",
                "unproductiveTime": "346min"
            }
        ]
    },
    {
        "id": "604dfc7a19b044444b4904ba",
        "name": "Rodriquez Simon",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a72826e7d3b36f170",
                "clockedIn": "Tue, 12 Jan 2021 04:18:02 GMT",
                "clockedOut": "Tue, 12 Jan 2021 11:18:02 GMT",
                "unproductiveTime": "54min"
            },
            {
                "timeId": "604dfc7ac656502e20cf00d7",
                "clockedIn": "Sun, 17 Jan 2021 05:59:07 GMT",
                "clockedOut": "Sun, 17 Jan 2021 20:59:07 GMT",
                "unproductiveTime": "748min"
            },
            {
                "timeId": "604dfc7a1905e766ee8e5d5b",
                "clockedIn": "Tue, 12 Jan 2021 01:05:41 GMT",
                "clockedOut": "Tue, 12 Jan 2021 16:05:41 GMT",
                "unproductiveTime": "392min"
            },
            {
                "timeId": "604dfc7afb384aa9fa5420bc",
                "clockedIn": "Wed, 03 Mar 2021 00:46:27 GMT",
                "clockedOut": "Wed, 03 Mar 2021 17:46:27 GMT",
                "unproductiveTime": "61min"
            }
        ]
    },
    {
        "id": "604dfc7acb885cd61178fab2",
        "name": "Langley Woodward",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ad2580b689b26e513",
                "clockedIn": "Sun, 14 Mar 2021 07:48:24 GMT",
                "clockedOut": "Sun, 14 Mar 2021 15:48:24 GMT",
                "unproductiveTime": "440min"
            },
            {
                "timeId": "604dfc7a458364228ea45146",
                "clockedIn": "Thu, 21 Jan 2021 09:51:45 GMT",
                "clockedOut": "Thu, 21 Jan 2021 14:51:45 GMT",
                "unproductiveTime": "244min"
            },
            {
                "timeId": "604dfc7ade48e884ab3057ec",
                "clockedIn": "Mon, 25 Jan 2021 06:08:59 GMT",
                "clockedOut": "Mon, 25 Jan 2021 11:08:59 GMT",
                "unproductiveTime": "20min"
            }
        ]
    },
    {
        "id": "604dfc7ab880867d134e5c9e",
        "name": "Alvarez Rasmussen",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a6935dc27b60c0335",
                "clockedIn": "Thu, 04 Mar 2021 07:00:56 GMT",
                "clockedOut": "Thu, 04 Mar 2021 12:00:56 GMT",
                "unproductiveTime": "267min"
            },
            {
                "timeId": "604dfc7a8d1935a30e2defff",
                "clockedIn": "Wed, 13 Jan 2021 21:57:15 GMT",
                "clockedOut": "Thu, 14 Jan 2021 10:57:15 GMT",
                "unproductiveTime": "454min"
            },
            {
                "timeId": "604dfc7a43d05eee447d2e32",
                "clockedIn": "Tue, 02 Mar 2021 09:53:59 GMT",
                "clockedOut": "Tue, 02 Mar 2021 20:53:59 GMT",
                "unproductiveTime": "372min"
            }
        ]
    },
    {
        "id": "604dfc7abdcd34c8eb905df7",
        "name": "Melva Davis",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a7a54478dc12b0ebd",
                "clockedIn": "Mon, 01 Feb 2021 22:39:17 GMT",
                "clockedOut": "Tue, 02 Feb 2021 14:39:17 GMT",
                "unproductiveTime": "430min"
            },
            {
                "timeId": "604dfc7a0016f7c8c45fd77a",
                "clockedIn": "Mon, 04 Jan 2021 00:18:51 GMT",
                "clockedOut": "Mon, 04 Jan 2021 13:18:51 GMT",
                "unproductiveTime": "74min"
            },
            {
                "timeId": "604dfc7aab4caf45e67b21e9",
                "clockedIn": "Mon, 08 Feb 2021 21:52:18 GMT",
                "clockedOut": "Tue, 09 Feb 2021 16:52:18 GMT",
                "unproductiveTime": "46min"
            }
        ]
    },
    {
        "id": "604dfc7a872a194ea6bbdcbf",
        "name": "Snider Shepard",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a135c8cb1c4b93286",
                "clockedIn": "Fri, 05 Mar 2021 23:08:18 GMT",
                "clockedOut": "Sat, 06 Mar 2021 15:08:18 GMT",
                "unproductiveTime": "671min"
            },
            {
                "timeId": "604dfc7a8d23ee89dc9a0a59",
                "clockedIn": "Sat, 30 Jan 2021 07:38:03 GMT",
                "clockedOut": "Sat, 30 Jan 2021 10:38:03 GMT",
                "unproductiveTime": "97min"
            },
            {
                "timeId": "604dfc7acdd9ee0f598bfe8f",
                "clockedIn": "Tue, 02 Mar 2021 06:15:40 GMT",
                "clockedOut": "Tue, 02 Mar 2021 16:15:40 GMT",
                "unproductiveTime": "109min"
            }
        ]
    },
    {
        "id": "604dfc7adbc199fb31c7ccfe",
        "name": "Anita Molina",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ae6a138b29903290b",
                "clockedIn": "Wed, 10 Feb 2021 03:29:23 GMT",
                "clockedOut": "Wed, 10 Feb 2021 13:29:23 GMT",
                "unproductiveTime": "559min"
            },
            {
                "timeId": "604dfc7a6295a314043b9b87",
                "clockedIn": "Thu, 25 Feb 2021 07:02:04 GMT",
                "clockedOut": "Thu, 25 Feb 2021 16:02:04 GMT",
                "unproductiveTime": "21min"
            }
        ]
    },
    {
        "id": "604dfc7a8d6ea4d34c9fbd83",
        "name": "Dawson Sargent",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ad884d6f6673c1a49",
                "clockedIn": "Thu, 28 Jan 2021 03:11:13 GMT",
                "clockedOut": "Thu, 28 Jan 2021 11:11:13 GMT",
                "unproductiveTime": "365min"
            },
            {
                "timeId": "604dfc7af23cadbd4b093e51",
                "clockedIn": "Thu, 28 Jan 2021 08:26:52 GMT",
                "clockedOut": "Thu, 28 Jan 2021 17:26:52 GMT",
                "unproductiveTime": "365min"
            }
        ]
    },
    {
        "id": "604dfc7a4b3fc56bece58fdd",
        "name": "Decker Sawyer",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a687b632eca4ae246",
                "clockedIn": "Mon, 11 Jan 2021 09:52:02 GMT",
                "clockedOut": "Mon, 11 Jan 2021 12:52:02 GMT",
                "unproductiveTime": "156min"
            },
            {
                "timeId": "604dfc7a71fa32fd28040588",
                "clockedIn": "Mon, 22 Feb 2021 23:47:08 GMT",
                "clockedOut": "Tue, 23 Feb 2021 18:47:08 GMT",
                "unproductiveTime": "49min"
            },
            {
                "timeId": "604dfc7a2d25d9b6dc6de663",
                "clockedIn": "Fri, 05 Feb 2021 01:12:51 GMT",
                "clockedOut": "Fri, 05 Feb 2021 17:12:51 GMT",
                "unproductiveTime": "429min"
            },
            {
                "timeId": "604dfc7ab06654641b409594",
                "clockedIn": "Wed, 24 Feb 2021 06:41:19 GMT",
                "clockedOut": "Wed, 24 Feb 2021 19:41:19 GMT",
                "unproductiveTime": "520min"
            }
        ]
    },
    {
        "id": "604dfc7a8386988b19277f33",
        "name": "April Ford",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a21a73238ce6f2bda",
                "clockedIn": "Mon, 01 Mar 2021 21:26:42 GMT",
                "clockedOut": "Tue, 02 Mar 2021 12:26:42 GMT",
                "unproductiveTime": "246min"
            },
            {
                "timeId": "604dfc7ae82ee6e0f67d8926",
                "clockedIn": "Tue, 09 Feb 2021 03:51:20 GMT",
                "clockedOut": "Tue, 09 Feb 2021 10:51:20 GMT",
                "unproductiveTime": "160min"
            },
            {
                "timeId": "604dfc7ae8fed743d72dee85",
                "clockedIn": "Wed, 24 Feb 2021 05:39:46 GMT",
                "clockedOut": "Wed, 24 Feb 2021 13:39:46 GMT",
                "unproductiveTime": "18min"
            }
        ]
    },
    {
        "id": "604dfc7a97393f870cd16567",
        "name": "Richmond Thompson",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ad4d4ad8741b55861",
                "clockedIn": "Tue, 19 Jan 2021 01:34:51 GMT",
                "clockedOut": "Tue, 19 Jan 2021 10:34:51 GMT",
                "unproductiveTime": "516min"
            },
            {
                "timeId": "604dfc7abfe796f8f9f3a121",
                "clockedIn": "Wed, 13 Jan 2021 03:06:10 GMT",
                "clockedOut": "Wed, 13 Jan 2021 18:06:10 GMT",
                "unproductiveTime": "508min"
            },
            {
                "timeId": "604dfc7a26aa6650acb4809e",
                "clockedIn": "Sun, 07 Mar 2021 22:11:09 GMT",
                "clockedOut": "Mon, 08 Mar 2021 18:11:09 GMT",
                "unproductiveTime": "108min"
            },
            {
                "timeId": "604dfc7a5e2d2d380d40e945",
                "clockedIn": "Fri, 08 Jan 2021 06:10:46 GMT",
                "clockedOut": "Fri, 08 Jan 2021 10:10:46 GMT",
                "unproductiveTime": "137min"
            }
        ]
    },
    {
        "id": "604dfc7a6d24f9377a0c8e5c",
        "name": "Carmella Byers",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7ab9bc37b63fe826f0",
                "clockedIn": "Thu, 07 Jan 2021 23:44:25 GMT",
                "clockedOut": "Fri, 08 Jan 2021 11:44:25 GMT",
                "unproductiveTime": "4min"
            },
            {
                "timeId": "604dfc7aed56417a81bcf7ca",
                "clockedIn": "Sun, 14 Mar 2021 04:23:17 GMT",
                "clockedOut": "Sun, 14 Mar 2021 20:23:17 GMT",
                "unproductiveTime": "449min"
            },
            {
                "timeId": "604dfc7aa077adec5822fc8c",
                "clockedIn": "Tue, 19 Jan 2021 03:21:23 GMT",
                "clockedOut": "Tue, 19 Jan 2021 12:21:23 GMT",
                "unproductiveTime": "47min"
            }
        ]
    },
    {
        "id": "604dfc7aa8744c64a8cd9e13",
        "name": "Shelton Aguilar",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a90a328feb540dd8b",
                "clockedIn": "Thu, 04 Mar 2021 07:12:40 GMT",
                "clockedOut": "Thu, 04 Mar 2021 16:12:40 GMT",
                "unproductiveTime": "140min"
            },
            {
                "timeId": "604dfc7a83ee828cbcb7331a",
                "clockedIn": "Sun, 17 Jan 2021 21:47:15 GMT",
                "clockedOut": "Mon, 18 Jan 2021 15:47:15 GMT",
                "unproductiveTime": "42min"
            },
            {
                "timeId": "604dfc7a626cc994046ea4e4",
                "clockedIn": "Sat, 09 Jan 2021 09:08:14 GMT",
                "clockedOut": "Sat, 09 Jan 2021 19:08:14 GMT",
                "unproductiveTime": "275min"
            },
            {
                "timeId": "604dfc7a707444b13af28bd0",
                "clockedIn": "Fri, 26 Feb 2021 02:57:53 GMT",
                "clockedOut": "Fri, 26 Feb 2021 17:57:53 GMT",
                "unproductiveTime": "461min"
            }
        ]
    },
    {
        "id": "604dfc7adfda954c6fbd21ee",
        "name": "Cassie Case",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a5dabec303eff5daa",
                "clockedIn": "Sun, 24 Jan 2021 01:52:16 GMT",
                "clockedOut": "Sun, 24 Jan 2021 12:52:16 GMT",
                "unproductiveTime": "108min"
            },
            {
                "timeId": "604dfc7a184fab6d17e85caf",
                "clockedIn": "Mon, 22 Feb 2021 23:11:03 GMT",
                "clockedOut": "Tue, 23 Feb 2021 19:11:03 GMT",
                "unproductiveTime": "539min"
            },
            {
                "timeId": "604dfc7ac68bd3c127f290eb",
                "clockedIn": "Thu, 14 Jan 2021 00:27:05 GMT",
                "clockedOut": "Thu, 14 Jan 2021 16:27:05 GMT",
                "unproductiveTime": "87min"
            },
            {
                "timeId": "604dfc7ac765b1c346294e51",
                "clockedIn": "Sun, 31 Jan 2021 00:38:25 GMT",
                "clockedOut": "Sun, 31 Jan 2021 19:38:25 GMT",
                "unproductiveTime": "436min"
            }
        ]
    },
    {
        "id": "604dfc7a2548dc33e9b1c124",
        "name": "Bird Hodge",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7af984142cb430a7f9",
                "clockedIn": "Sun, 07 Mar 2021 07:13:56 GMT",
                "clockedOut": "Sun, 07 Mar 2021 11:13:56 GMT",
                "unproductiveTime": "165min"
            }
        ]
    },
    {
        "id": "604dfc7a3ca6a4eadadd5ee5",
        "name": "Colette Raymond",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a20b68e8ee3d7ca74",
                "clockedIn": "Fri, 12 Mar 2021 01:50:27 GMT",
                "clockedOut": "Fri, 12 Mar 2021 18:50:27 GMT",
                "unproductiveTime": "353min"
            },
            {
                "timeId": "604dfc7a5f620b7f0a939b7e",
                "clockedIn": "Sat, 16 Jan 2021 00:33:05 GMT",
                "clockedOut": "Sat, 16 Jan 2021 15:33:05 GMT",
                "unproductiveTime": "472min"
            },
            {
                "timeId": "604dfc7afa887e9204ae373c",
                "clockedIn": "Tue, 12 Jan 2021 00:59:17 GMT",
                "clockedOut": "Tue, 12 Jan 2021 15:59:17 GMT",
                "unproductiveTime": "224min"
            },
            {
                "timeId": "604dfc7a579ee83cab0e20e2",
                "clockedIn": "Sat, 06 Feb 2021 02:12:25 GMT",
                "clockedOut": "Sat, 06 Feb 2021 13:12:25 GMT",
                "unproductiveTime": "160min"
            }
        ]
    },
    {
        "id": "604dfc7a4affca495bc1b06e",
        "name": "Walsh Brown",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a261d5f842418943e",
                "clockedIn": "Mon, 11 Jan 2021 23:09:26 GMT",
                "clockedOut": "Tue, 12 Jan 2021 16:09:26 GMT",
                "unproductiveTime": "49min"
            },
            {
                "timeId": "604dfc7a251e92dbeafbf77e",
                "clockedIn": "Sat, 30 Jan 2021 02:38:49 GMT",
                "clockedOut": "Sat, 30 Jan 2021 16:38:49 GMT",
                "unproductiveTime": "617min"
            },
            {
                "timeId": "604dfc7ae3b262e64940b0bf",
                "clockedIn": "Tue, 05 Jan 2021 02:22:10 GMT",
                "clockedOut": "Tue, 05 Jan 2021 19:22:10 GMT",
                "unproductiveTime": "437min"
            },
            {
                "timeId": "604dfc7a077806ffba63e1d7",
                "clockedIn": "Tue, 09 Mar 2021 22:45:03 GMT",
                "clockedOut": "Wed, 10 Mar 2021 19:45:03 GMT",
                "unproductiveTime": "1087min"
            }
        ]
    },
    {
        "id": "604dfc7a0e012757112f0325",
        "name": "Pansy Gilliam",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a387791bd04594a23",
                "clockedIn": "Fri, 22 Jan 2021 04:37:52 GMT",
                "clockedOut": "Fri, 22 Jan 2021 17:37:52 GMT",
                "unproductiveTime": "739min"
            },
            {
                "timeId": "604dfc7af30ee7abe1e2afd7",
                "clockedIn": "Fri, 05 Feb 2021 04:59:49 GMT",
                "clockedOut": "Fri, 05 Feb 2021 13:59:49 GMT",
                "unproductiveTime": "531min"
            },
            {
                "timeId": "604dfc7a81a326e611cc4052",
                "clockedIn": "Tue, 12 Jan 2021 02:35:07 GMT",
                "clockedOut": "Tue, 12 Jan 2021 16:35:07 GMT",
                "unproductiveTime": "376min"
            }
        ]
    },
    {
        "id": "604dfc7a5a898d88dc14544c",
        "name": "Emily Medina",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a290debe62614b59d",
                "clockedIn": "Wed, 27 Jan 2021 09:07:59 GMT",
                "clockedOut": "Wed, 27 Jan 2021 10:07:59 GMT",
                "unproductiveTime": "12min"
            },
            {
                "timeId": "604dfc7a3c4a461c83761069",
                "clockedIn": "Wed, 27 Jan 2021 02:40:13 GMT",
                "clockedOut": "Wed, 27 Jan 2021 17:40:13 GMT",
                "unproductiveTime": "498min"
            }
        ]
    },
    {
        "id": "604dfc7afb47fdc1aeb4692f",
        "name": "Mcconnell Schroeder",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7acce4802c7e3a347b",
                "clockedIn": "Mon, 04 Jan 2021 09:51:44 GMT",
                "clockedOut": "Mon, 04 Jan 2021 13:51:44 GMT",
                "unproductiveTime": "171min"
            }
        ]
    },
    {
        "id": "604dfc7a095d211f30f8f118",
        "name": "Madge Burnett",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a99db019e4609cb17",
                "clockedIn": "Thu, 18 Feb 2021 09:01:47 GMT",
                "clockedOut": "Thu, 18 Feb 2021 12:01:47 GMT",
                "unproductiveTime": "10min"
            },
            {
                "timeId": "604dfc7a77c552c000d7cb73",
                "clockedIn": "Fri, 15 Jan 2021 07:25:11 GMT",
                "clockedOut": "Fri, 15 Jan 2021 14:25:11 GMT",
                "unproductiveTime": "388min"
            },
            {
                "timeId": "604dfc7a2a5d2280055a3483",
                "clockedIn": "Sat, 13 Feb 2021 05:41:40 GMT",
                "clockedOut": "Sat, 13 Feb 2021 11:41:40 GMT",
                "unproductiveTime": "17min"
            },
            {
                "timeId": "604dfc7a9a7d6a76985544e2",
                "clockedIn": "Sun, 28 Feb 2021 23:36:14 GMT",
                "clockedOut": "Mon, 01 Mar 2021 19:36:14 GMT",
                "unproductiveTime": "161min"
            }
        ]
    },
    {
        "id": "604dfc7a47c341edae2c4198",
        "name": "Gertrude Thomas",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7adacd9e6a97a2b9ba",
                "clockedIn": "Sat, 06 Feb 2021 02:51:36 GMT",
                "clockedOut": "Sat, 06 Feb 2021 17:51:36 GMT",
                "unproductiveTime": "522min"
            },
            {
                "timeId": "604dfc7a1dd0d010fce0d5e3",
                "clockedIn": "Sat, 06 Mar 2021 00:53:28 GMT",
                "clockedOut": "Sat, 06 Mar 2021 14:53:28 GMT",
                "unproductiveTime": "696min"
            },
            {
                "timeId": "604dfc7a6cb605456e46e68b",
                "clockedIn": "Thu, 04 Mar 2021 21:10:46 GMT",
                "clockedOut": "Fri, 05 Mar 2021 16:10:46 GMT",
                "unproductiveTime": "968min"
            }
        ]
    },
    {
        "id": "604dfc7a98237e61701368cb",
        "name": "Kasey Mccall",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aa0d9dfa26bc569b0",
                "clockedIn": "Fri, 29 Jan 2021 04:23:08 GMT",
                "clockedOut": "Fri, 29 Jan 2021 13:23:08 GMT",
                "unproductiveTime": "115min"
            },
            {
                "timeId": "604dfc7a258e09aa1d87ffc2",
                "clockedIn": "Wed, 10 Feb 2021 02:01:08 GMT",
                "clockedOut": "Wed, 10 Feb 2021 14:01:08 GMT",
                "unproductiveTime": "597min"
            },
            {
                "timeId": "604dfc7af0d00f915a68a5e2",
                "clockedIn": "Sun, 07 Feb 2021 08:06:38 GMT",
                "clockedOut": "Sun, 07 Feb 2021 15:06:38 GMT",
                "unproductiveTime": "328min"
            },
            {
                "timeId": "604dfc7a1438b904aa6d290f",
                "clockedIn": "Sat, 06 Mar 2021 06:56:53 GMT",
                "clockedOut": "Sat, 06 Mar 2021 19:56:53 GMT",
                "unproductiveTime": "667min"
            }
        ]
    },
    {
        "id": "604dfc7ad942908785fae7c4",
        "name": "Fuentes Howell",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aec14c64d80c45fa3",
                "clockedIn": "Mon, 01 Mar 2021 23:01:40 GMT",
                "clockedOut": "Tue, 02 Mar 2021 16:01:40 GMT",
                "unproductiveTime": "497min"
            }
        ]
    },
    {
        "id": "604dfc7adbaf7c8485bdb096",
        "name": "Aurora Vaughn",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a8e70443c9236aae2",
                "clockedIn": "Mon, 04 Jan 2021 03:40:22 GMT",
                "clockedOut": "Mon, 04 Jan 2021 12:40:22 GMT",
                "unproductiveTime": "501min"
            }
        ]
    },
    {
        "id": "604dfc7a190b48a8147b1c41",
        "name": "Williams Mcgee",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a6f5f10ab207dbe2d",
                "clockedIn": "Sat, 06 Feb 2021 00:19:49 GMT",
                "clockedOut": "Sat, 06 Feb 2021 17:19:49 GMT",
                "unproductiveTime": "976min"
            },
            {
                "timeId": "604dfc7ac262f08c0b73b9e2",
                "clockedIn": "Sun, 14 Mar 2021 04:19:28 GMT",
                "clockedOut": "Sun, 14 Mar 2021 15:19:28 GMT",
                "unproductiveTime": "337min"
            },
            {
                "timeId": "604dfc7a812a8a8f96cc89b8",
                "clockedIn": "Fri, 22 Jan 2021 22:16:58 GMT",
                "clockedOut": "Sat, 23 Jan 2021 13:16:58 GMT",
                "unproductiveTime": "267min"
            },
            {
                "timeId": "604dfc7aff1555d8fd59572b",
                "clockedIn": "Fri, 15 Jan 2021 05:53:41 GMT",
                "clockedOut": "Fri, 15 Jan 2021 18:53:41 GMT",
                "unproductiveTime": "304min"
            }
        ]
    },
    {
        "id": "604dfc7a5ae1a2359be145d0",
        "name": "Ronda Tyler",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a4af680c3b86f7b5a",
                "clockedIn": "Thu, 11 Mar 2021 01:59:55 GMT",
                "clockedOut": "Thu, 11 Mar 2021 15:59:55 GMT",
                "unproductiveTime": "766min"
            }
        ]
    },
    {
        "id": "604dfc7a466105eb53711b5f",
        "name": "Brittney Clark",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a51b171414576a2bf",
                "clockedIn": "Wed, 03 Mar 2021 08:56:19 GMT",
                "clockedOut": "Wed, 03 Mar 2021 18:56:19 GMT",
                "unproductiveTime": "0min"
            },
            {
                "timeId": "604dfc7a0ff963da3bedec8a",
                "clockedIn": "Wed, 20 Jan 2021 00:15:31 GMT",
                "clockedOut": "Wed, 20 Jan 2021 15:15:31 GMT",
                "unproductiveTime": "18min"
            },
            {
                "timeId": "604dfc7aeea52475c9ee276f",
                "clockedIn": "Wed, 03 Feb 2021 01:45:51 GMT",
                "clockedOut": "Wed, 03 Feb 2021 13:45:51 GMT",
                "unproductiveTime": "471min"
            }
        ]
    },
    {
        "id": "604dfc7aa819f6cc08ac26ba",
        "name": "Ellis Wade",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a7a15c97396ad6e5d",
                "clockedIn": "Sun, 28 Feb 2021 05:49:56 GMT",
                "clockedOut": "Sun, 28 Feb 2021 10:49:56 GMT",
                "unproductiveTime": "8min"
            },
            {
                "timeId": "604dfc7a1919421bfeaaf1ab",
                "clockedIn": "Thu, 11 Feb 2021 00:51:41 GMT",
                "clockedOut": "Thu, 11 Feb 2021 14:51:41 GMT",
                "unproductiveTime": "538min"
            },
            {
                "timeId": "604dfc7a2a1a115a1a36ea0f",
                "clockedIn": "Tue, 09 Mar 2021 08:53:49 GMT",
                "clockedOut": "Tue, 09 Mar 2021 19:53:49 GMT",
                "unproductiveTime": "49min"
            }
        ]
    },
    {
        "id": "604dfc7a4addbd603ffde31f",
        "name": "Sheena Davidson",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a3b03565c515c56e7",
                "clockedIn": "Sat, 20 Feb 2021 02:35:21 GMT",
                "clockedOut": "Sat, 20 Feb 2021 11:35:21 GMT",
                "unproductiveTime": "52min"
            },
            {
                "timeId": "604dfc7a4fffc2f5c8d1005a",
                "clockedIn": "Thu, 11 Feb 2021 23:57:27 GMT",
                "clockedOut": "Fri, 12 Feb 2021 18:57:27 GMT",
                "unproductiveTime": "480min"
            },
            {
                "timeId": "604dfc7a56475c67455c50b9",
                "clockedIn": "Sun, 03 Jan 2021 01:49:20 GMT",
                "clockedOut": "Sun, 03 Jan 2021 20:49:20 GMT",
                "unproductiveTime": "427min"
            },
            {
                "timeId": "604dfc7aaf803351f094c3f5",
                "clockedIn": "Sat, 06 Mar 2021 21:57:33 GMT",
                "clockedOut": "Sun, 07 Mar 2021 17:57:33 GMT",
                "unproductiveTime": "92min"
            }
        ]
    },
    {
        "id": "604dfc7a0108d0c27c66e122",
        "name": "Alejandra Mullins",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a4b25a99583e8899e",
                "clockedIn": "Sat, 13 Feb 2021 22:42:48 GMT",
                "clockedOut": "Sun, 14 Feb 2021 18:42:48 GMT",
                "unproductiveTime": "698min"
            }
        ]
    },
    {
        "id": "604dfc7aad1edfe74d195012",
        "name": "Aurelia Cantu",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a9f6640603fac1472",
                "clockedIn": "Mon, 22 Feb 2021 21:52:51 GMT",
                "clockedOut": "Tue, 23 Feb 2021 10:52:51 GMT",
                "unproductiveTime": "491min"
            },
            {
                "timeId": "604dfc7a3bbead6007f07f75",
                "clockedIn": "Tue, 26 Jan 2021 21:25:04 GMT",
                "clockedOut": "Wed, 27 Jan 2021 16:25:04 GMT",
                "unproductiveTime": "138min"
            },
            {
                "timeId": "604dfc7aa54310e9422ae34f",
                "clockedIn": "Mon, 04 Jan 2021 21:09:32 GMT",
                "clockedOut": "Tue, 05 Jan 2021 14:09:32 GMT",
                "unproductiveTime": "691min"
            }
        ]
    },
    {
        "id": "604dfc7a70d3596d31bccc50",
        "name": "Bond Cole",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a9347171c45e8e262",
                "clockedIn": "Fri, 15 Jan 2021 05:38:43 GMT",
                "clockedOut": "Fri, 15 Jan 2021 17:38:43 GMT",
                "unproductiveTime": "455min"
            },
            {
                "timeId": "604dfc7aded39cff15efdd76",
                "clockedIn": "Sat, 27 Feb 2021 23:57:26 GMT",
                "clockedOut": "Sun, 28 Feb 2021 13:57:26 GMT",
                "unproductiveTime": "691min"
            },
            {
                "timeId": "604dfc7aa4a419a2b1c99ded",
                "clockedIn": "Thu, 28 Jan 2021 06:30:16 GMT",
                "clockedOut": "Thu, 28 Jan 2021 16:30:16 GMT",
                "unproductiveTime": "140min"
            },
            {
                "timeId": "604dfc7a018a8933495ce8cd",
                "clockedIn": "Sun, 14 Feb 2021 03:36:36 GMT",
                "clockedOut": "Sun, 14 Feb 2021 12:36:36 GMT",
                "unproductiveTime": "448min"
            }
        ]
    },
    {
        "id": "604dfc7a21be9771edc49227",
        "name": "Knox Barber",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a0b673bcbfd0eacf1",
                "clockedIn": "Mon, 11 Jan 2021 05:57:56 GMT",
                "clockedOut": "Mon, 11 Jan 2021 11:57:56 GMT",
                "unproductiveTime": "149min"
            },
            {
                "timeId": "604dfc7acd6e93435de5d05c",
                "clockedIn": "Sat, 06 Feb 2021 06:58:07 GMT",
                "clockedOut": "Sat, 06 Feb 2021 13:58:07 GMT",
                "unproductiveTime": "270min"
            },
            {
                "timeId": "604dfc7a03e4651963b54c8e",
                "clockedIn": "Mon, 08 Mar 2021 00:40:29 GMT",
                "clockedOut": "Mon, 08 Mar 2021 10:40:29 GMT",
                "unproductiveTime": "589min"
            }
        ]
    },
    {
        "id": "604dfc7a3ec3cd4033462651",
        "name": "Robinson Mitchell",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a19bbae838633e276",
                "clockedIn": "Thu, 07 Jan 2021 02:50:40 GMT",
                "clockedOut": "Thu, 07 Jan 2021 19:50:40 GMT",
                "unproductiveTime": "15min"
            }
        ]
    },
    {
        "id": "604dfc7aa243e2bcda4688fb",
        "name": "Guzman Calhoun",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a10d7522477c93aeb",
                "clockedIn": "Mon, 08 Mar 2021 08:11:20 GMT",
                "clockedOut": "Mon, 08 Mar 2021 15:11:20 GMT",
                "unproductiveTime": "196min"
            },
            {
                "timeId": "604dfc7a93eccef72e80f625",
                "clockedIn": "Mon, 04 Jan 2021 21:10:22 GMT",
                "clockedOut": "Tue, 05 Jan 2021 20:10:22 GMT",
                "unproductiveTime": "213min"
            }
        ]
    },
    {
        "id": "604dfc7aefeff2cfc87936a7",
        "name": "Carol Clements",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a8818621f2032116e",
                "clockedIn": "Sun, 07 Feb 2021 23:07:14 GMT",
                "clockedOut": "Mon, 08 Feb 2021 18:07:14 GMT",
                "unproductiveTime": "767min"
            }
        ]
    },
    {
        "id": "604dfc7a57698653ec15d5de",
        "name": "Bryan Hernandez",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7aa7bc48786d3f612b",
                "clockedIn": "Sun, 24 Jan 2021 03:33:58 GMT",
                "clockedOut": "Sun, 24 Jan 2021 14:33:58 GMT",
                "unproductiveTime": "334min"
            }
        ]
    },
    {
        "id": "604dfc7afa9b70e87ab986bd",
        "name": "Lee Barnes",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a5e02fbd0ec88fef4",
                "clockedIn": "Thu, 04 Feb 2021 04:57:14 GMT",
                "clockedOut": "Thu, 04 Feb 2021 13:57:14 GMT",
                "unproductiveTime": "538min"
            },
            {
                "timeId": "604dfc7aba06abb5bb902ec4",
                "clockedIn": "Sun, 28 Feb 2021 21:22:24 GMT",
                "clockedOut": "Mon, 01 Mar 2021 17:22:24 GMT",
                "unproductiveTime": "986min"
            },
            {
                "timeId": "604dfc7a5fb4c93790913281",
                "clockedIn": "Sun, 07 Mar 2021 09:06:47 GMT",
                "clockedOut": "Sun, 07 Mar 2021 12:06:47 GMT",
                "unproductiveTime": "30min"
            },
            {
                "timeId": "604dfc7ae2e1c7397b000412",
                "clockedIn": "Fri, 08 Jan 2021 22:55:06 GMT",
                "clockedOut": "Sat, 09 Jan 2021 20:55:06 GMT",
                "unproductiveTime": "1014min"
            }
        ]
    },
    {
        "id": "604dfc7a8ab16a359624487b",
        "name": "Amy Cross",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a671075c474f22f5c",
                "clockedIn": "Wed, 24 Feb 2021 06:28:43 GMT",
                "clockedOut": "Wed, 24 Feb 2021 18:28:43 GMT",
                "unproductiveTime": "351min"
            },
            {
                "timeId": "604dfc7ae3daa1b146558565",
                "clockedIn": "Sun, 07 Feb 2021 07:22:27 GMT",
                "clockedOut": "Sun, 07 Feb 2021 15:22:27 GMT",
                "unproductiveTime": "65min"
            },
            {
                "timeId": "604dfc7ad37c8cd7aa4c38f1",
                "clockedIn": "Fri, 01 Jan 2021 09:51:18 GMT",
                "clockedOut": "Fri, 01 Jan 2021 15:51:18 GMT",
                "unproductiveTime": "217min"
            }
        ]
    },
    {
        "id": "604dfc7a7a1ef71698f5695a",
        "name": "Sargent Justice",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7ab3af0e21a8964320",
                "clockedIn": "Sun, 21 Feb 2021 01:46:40 GMT",
                "clockedOut": "Sun, 21 Feb 2021 14:46:40 GMT",
                "unproductiveTime": "649min"
            },
            {
                "timeId": "604dfc7a01e954c60a2184a7",
                "clockedIn": "Tue, 02 Mar 2021 06:07:20 GMT",
                "clockedOut": "Tue, 02 Mar 2021 11:07:20 GMT",
                "unproductiveTime": "203min"
            },
            {
                "timeId": "604dfc7a12ddebfa310e5dbe",
                "clockedIn": "Mon, 15 Feb 2021 03:55:37 GMT",
                "clockedOut": "Mon, 15 Feb 2021 18:55:37 GMT",
                "unproductiveTime": "203min"
            }
        ]
    },
    {
        "id": "604dfc7a998b738052369b16",
        "name": "Barrera Stout",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a093124eded241b6f",
                "clockedIn": "Sun, 17 Jan 2021 22:49:56 GMT",
                "clockedOut": "Mon, 18 Jan 2021 18:49:56 GMT",
                "unproductiveTime": "796min"
            },
            {
                "timeId": "604dfc7a0620bbf29fd0a980",
                "clockedIn": "Tue, 02 Mar 2021 22:48:22 GMT",
                "clockedOut": "Wed, 03 Mar 2021 11:48:22 GMT",
                "unproductiveTime": "475min"
            }
        ]
    },
    {
        "id": "604dfc7aa1745d5319bf37d6",
        "name": "James Smith",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7a7f92c628273405ce",
                "clockedIn": "Tue, 09 Mar 2021 07:27:12 GMT",
                "clockedOut": "Tue, 09 Mar 2021 17:27:12 GMT",
                "unproductiveTime": "526min"
            }
        ]
    },
    {
        "id": "604dfc7a02f6073d9dec5b4d",
        "name": "Roberson Rich",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7a8928af2f63c95a42",
                "clockedIn": "Tue, 09 Feb 2021 03:28:02 GMT",
                "clockedOut": "Tue, 09 Feb 2021 10:28:02 GMT",
                "unproductiveTime": "293min"
            },
            {
                "timeId": "604dfc7acca454da41ada333",
                "clockedIn": "Wed, 27 Jan 2021 23:58:35 GMT",
                "clockedOut": "Thu, 28 Jan 2021 16:58:35 GMT",
                "unproductiveTime": "763min"
            },
            {
                "timeId": "604dfc7a9cbbcf5d7e4d92ce",
                "clockedIn": "Fri, 15 Jan 2021 23:47:02 GMT",
                "clockedOut": "Sat, 16 Jan 2021 15:47:02 GMT",
                "unproductiveTime": "756min"
            },
            {
                "timeId": "604dfc7a377ed0d643e4e506",
                "clockedIn": "Tue, 26 Jan 2021 04:31:57 GMT",
                "clockedOut": "Tue, 26 Jan 2021 13:31:57 GMT",
                "unproductiveTime": "40min"
            }
        ]
    },
    {
        "id": "604dfc7a21bea1b4a218cd3b",
        "name": "Velez Riggs",
        "active": false,
        "times": [
            {
                "timeId": "604dfc7aa80de1bc2071cc10",
                "clockedIn": "Sat, 02 Jan 2021 06:16:17 GMT",
                "clockedOut": "Sat, 02 Jan 2021 17:16:17 GMT",
                "unproductiveTime": "506min"
            },
            {
                "timeId": "604dfc7a19b2a84fa6ac5522",
                "clockedIn": "Sat, 23 Jan 2021 21:44:00 GMT",
                "clockedOut": "Sun, 24 Jan 2021 13:44:00 GMT",
                "unproductiveTime": "528min"
            }
        ]
    },
    {
        "id": "604dfc7acc7aaa232c5b643b",
        "name": "Connie Hart",
        "active": true,
        "times": [
            {
                "timeId": "604dfc7af7ad506880610275",
                "clockedIn": "Wed, 03 Mar 2021 23:17:40 GMT",
                "clockedOut": "Thu, 04 Mar 2021 14:17:40 GMT",
                "unproductiveTime": "181min"
            }
        ]
    }
];

