"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var TitleUI_1 = require("../../UI/TitleUI");
var ImageSliderUI_1 = require("../../UI/ImageSliderUI");
var ProjectSection = function (_a) {
    var color = _a.color;
    var projects = [
        {
            title: "Webzone Tech Tips Blogs",
            role: "Author's Technical blog <span class='bg-sky-600 text-white px-2' ><a class='underline' href='https://learn-tech-tips.blogspot.com/'>   https://learn-tech-tips.blogspot.com/ </a>  </span>  ",
            name: "Feel free to explore the blog at Learn-Tech-Tips for valuable insights and knowledge, This blog covers a wide range of web development topics, including Next.js, NestJS, CakePHP, and other frameworks. It delves into subjects like RabbitMQ, Apache Kafka, HTML, CSS, Photoshop, and Office 365. The blog aims to help readers build amazing websites using modern technologies and best practices",
            screenshot: [
                { src: '/project/webzone-1.png' },
                { src: '/project/webzone-2.png' },
                { src: '/project/webzone-3.png' },
                { src: '/project/webzone-4.png' },
            ],
            description: [
                "Blogspot",
                "CSS, TailwindCSS, js",
            ],
            library: [
                { src: 'https://learn-tech-tips.blogspot.com/', name: 'Link URL' },
            ]
        },
        {
            title: "VTV Team AutoPlay",
            role: "Co-Founder at <span class='bg-sky-600 text-white px-2 '> <a href='https://tieungaoauto.com'> https://tieungaoauto.com </a> </span>",
            name: "AutoPlay for online Game, SendPackage ASM, InjectDLL, packet, manage user, manage license, manage admin",
            screenshot: [
                { src: '/project/vtv-team-1.png' },
                { src: '/project/vtv-team-2.png' },
            ],
            description: [
                "PHP - MySQL - C#, DotNet framework 4.7.2",
                "PHP Server side: Restful API",
                "CURD, Customize View, Responsive, API",
                "PHP Webpage: TailwindCSS, CakePHP, CSS, JS, LESS",
                "Inject DLL, Send Packet, ASM Injection",
                "RabbitMQ, Ratchet Server",
                "Threading, Async Await, Task, Task.Delay, API, Socket",
                "JWT multiple device login design",
            ],
            library: [
                { src: 'https://tieungaoauto.com/', name: 'Link URL' },
            ]
        },
        {
            title: "Ecpark",
            name: "Project for Crawling data and social login, manage  user's information, manage administrator information login, role, permissions",
            screenshot: [
                { src: '/project/ecpark-1.png' },
                { src: '/project/ecpark-2.png' },
                { src: '/project/ecpark-3.png' },
                { src: '/project/ecpark-4.png' },
            ],
            description: [
                "PHP - MySQL - Cronjob - CrawlData - FireBase - Social Login - NestJS Socket",
                "Use CakePHP 4.2.0",
                "CURD, Customize View, Responsive, API",
                'Using Goutte/Client "fabpot/goutte": "^4.0" and "voku/simple_html_dom": "^4.8" for crawl data',
                'Using GoogleAPI "google/apiclient": "^2.12.1" for make a social login',
                'Using FirebaseAPI "kreait/firebase-php": "^5.0"',
                'Using Stripe payment gateway by using "stripe/stripe-php": "^10.5"',
                'NestJS SocketIO "socket.io": "^4.5.0" for realtime get the number of user enter a page',
            ],
            library: [
                { src: '/library/ecpark-composer-be.json', name: 'BackEnd' },
                { src: '/library/ecpark-package-fe.json', name: 'FrontEnd' },
                { src: '/library/ecpark-package-socket.json', name: 'Node Socket' },
            ]
        },
        {
            title: "Crystaljade",
            name: "Project for Dynamic Menu with dynamic branches",
            screenshot: [
                { src: '/project/crystaljade-1.png' },
                { src: '/project/crystaljade-2.png' },
                { src: '/project/crystaljade-3.png' },
            ],
            description: [
                "PHP - MySQL 8.0 - FireBase - Google Map",
                "Use CakePHP 4.4.0",
                "CURD, Customize View, Responsive, API",
                'Display and use CMS to manage the content of each page',
            ],
            library: [
                { src: '/library/crystaljade-composer-be.json', name: 'BackEnd' },
                { src: '/library/crystaljade-package-fe.json', name: 'FrontEnd' },
            ]
        },
        {
            title: "Cityu",
            name: "Project for Booking (patient with pet and booking vet times, manage vet time, manage booking conflict), manage administrator information login, role, permissions Sync data from MicrosoftSQL Server to MySQL",
            screenshot: [
                { src: '/project/cityu-1.png' },
                { src: '/project/cityu-2.png' },
            ],
            description: [
                "PHP - MySQL 5.7 - MicrosoftSQL Server - Cronjob - Trigger Event - Sync Data - RabbitMQ",
                "Use CakePHP 4.2.0",
                "CURD, Customize View, Responsive, API",
                "Cronjob for sync data from Client data",
                "RabbitMQ for trigger Event Created, Updated, Deleted Record on Microsoft Server and sync back to MySQL",
                "Integrated React as frame put on Wordpress webpage",
                "Use HangSheng(NTT Data) payment gateway (use CryptoJS.enc.Base64.stringify/base64_encode; CryptoJS.enc.Hex.stringify/bin2hex)"
            ],
            library: [
                { src: '/library/cityu-composer-be.json', name: 'BackEnd' },
                { src: '/library/cityu-docker-compose.yaml', name: 'Docker' },
                { src: 'https://app.diagrams.net/#G1zGEwtQrTvM2ze49UEr_7_MY3b5NDHWD4#%7B%22pageId%22%3A%22prtHgNgQTEPvFCAcTncT%22%7D', name: 'Structure(Personal)' },
            ]
        },
        {
            title: "Metrosouth",
            name: "Project for Booking, manage holiday booking, booking combined room, single room, rules refund, cancel, book by user and admin, calc expiry point rules, manage users, manage administrator",
            screenshot: [
                { src: '/project/metrosouth-1.png' },
                { src: '/project/metrosouth-2.png' },
            ],
            description: [
                "PHP - MySQL 8.0 - Cronjob",
                "Use CakePHP 4.2.0",
                "CURD, Customize View, Responsive, API",
                "Cronjob for calc the expiry point, token",
                "Use Stripe Payment gateway",
            ],
            library: [
                { src: '/library/metrosouth-composer-be.json', name: 'BackEnd' },
                { src: '/library/metrosouth-package-fe.json', name: 'FrontEnd' },
            ]
        },
        {
            title: "TodoListApp",
            name: "Project about management the Task list from user",
            video: "https://www.youtube.com/embed/Kwx1BUP1cxM?si=I9Q9_rFGeYXYYqjI",
            screenshot: [
                { src: '' },
            ],
            description: [
                "NextJS, NestJS, TailWindCSS, Zustand, Axios, MongoDB, JWT",
            ],
            library: [
                { src: '/library/todoapp-package-be.json', name: 'BackEnd' },
                { src: '/library/todoapp-package-fe.json', name: 'FrontEnd' },
            ]
        },
        {
            title: "DragonFire",
            name: "Project about management the inventory, the client and user, project about E-commerce, allow admin can configuration and save keyboards to client, management blog, management promotion rules",
            screenshot: [
                { src: '/project/dragonfire-1.png' },
                { src: '/project/dragonfire-2.png' },
                { src: '/project/dragonfire-3.png' },
                { src: '/project/dragonfire-4.png' },
            ],
            description: [
                "PHP - MySQL 8.0",
                "Use CakePHP 4.4.0",
                "CURD, Customize View, Responsive, API",
                "Using chartjs to write a dashboard!",
            ],
            library: [
                { src: '/library/dragonfire-composer-be.json', name: 'BackEnd' },
            ]
        },
        {
            title: "CidcKids",
            name: "Project for management Courses, User, Staff(Teacher), User(Student), manage Annual leave for student",
            screenshot: [
                { src: '/project/cidckids-1.png' },
                { src: '/project/cidckids-2.png' },
                { src: '/project/cidckids-3.png' },
                { src: '/project/cidckids-4.png' },
                { src: '/project/cidckids-5.png' },
            ],
            description: [
                "PHP - MySQL 5.7 - Cronjob",
                "Use CakePHP 4.2.0",
                "Schedule manage for booking control",
                "Firebase push notification to users",
            ],
            library: [
                { src: '/library/cidckids-composer-be.json', name: 'BackEnd' },
                { src: 'https://app.genmymodel.com/personal/projects/_qmnwAPkdEeydvaHhUPK6Jg', name: "Structure (Personal only)" }
            ]
        },
        {
            title: "Ibmsm",
            name: "Project about divination, destiny, design sales course and share Youtube video link if already register, and formula for calculating destiny",
            screenshot: [
                { src: '/project/ibmsm-1.png' },
                { src: '/project/ibmsm-2.png' },
                { src: '/project/ibmsm-3.png' },
            ],
            description: [
                "PHP - MySQL 8.0",
                "Use CakePHP 4.2.0",
                "Use Stripe Payment gateway",
            ],
            library: [
                { src: '/library/ibmsm-composer-be.json', name: 'BackEnd' },
                { src: '/library/ibmsm-package-fe.json', name: 'FrontEnd' },
                { src: '/library/ibmsm-Dockerfile', name: 'DockerFile' },
                { src: '/library/ibmsm-package-fe.json', name: 'FrontEnd' },
            ]
        },
        {
            title: "ChungHing",
            name: "Project about management the sales, the client and the product",
            screenshot: [
                { src: '/project/chunghing-1.png' },
                { src: '/project/chunghing-2.png' },
            ],
            description: [
                "PHP - MySQL 8.0",
                "Use CakePHP 4.4.0",
            ],
            library: []
        },
    ];
    return (React.createElement("div", { className: "p-2 shadow-lg mt-[10px] rounded-md max-h-full p-[20px]" },
        React.createElement("div", { className: "" },
            React.createElement(TitleUI_1["default"], { title: "My Project Background", bgColor: color })),
        projects.map(function (value, index) {
            var _a;
            var src = [];
            (_a = value['screenshot']) === null || _a === void 0 ? void 0 : _a.map(function (screenshot, index) {
                src.push(screenshot.src);
            });
            return (React.createElement("div", { key: index, className: "flex flex-col w-full p-2 p-4 mb-6 space-y-4 rounded-md shadow-lg md:space-x-6 md:flex-row w-fill" },
                value['video'] ?
                    React.createElement("div", { className: "p-2 rounded-lg" },
                        React.createElement("iframe", { width: "300", height: "300", src: value['video'], title: "NextJS NextJS ToDoApp", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }))
                    :
                        React.createElement("div", { className: "p-2 rounded-lg", style: { borderColor: color, boxShadow: "2px 2px 10px " + color } },
                            React.createElement(ImageSliderUI_1["default"], { src: src, color: color })),
                React.createElement("div", { className: "md:w-[70%]" },
                    React.createElement(TitleUI_1["default"], { title: value['title'], bgColor: color }),
                    React.createElement("div", { className: "px-4" },
                        React.createElement("div", { dangerouslySetInnerHTML: { __html: value['role'] || '' } }),
                        React.createElement("div", null,
                            " ",
                            value['name'],
                            " "),
                        React.createElement("ul", { className: "ml-8 list-disc" }, value['description'].map(function (description, index) {
                            return (React.createElement("li", { key: index },
                                " ",
                                description,
                                "  "));
                        })),
                        React.createElement("div", { className: "flex justify-around" },
                            (value['library'].length > 0) ? (React.createElement("div", null, " --- Here are details: ")) : null,
                            value['library'].map(function (library, index) {
                                return (React.createElement(link_1["default"], { key: index, className: "underline transition hover:scale-125", target: "_blank", href: library['src'] },
                                    " ",
                                    library['name'],
                                    "  "));
                            }))))));
        }),
        React.createElement("div", null,
            " For a comprehensive overview of my additional projects, please explore my `public` ",
            React.createElement(link_1["default"], { className: "underline", href: "https://github.com/zidane168/", target: "_blank" }, " GITHUB"),
            " profile. Thank you."),
        React.createElement("div", null,
            " This project hosted by  ",
            React.createElement(link_1["default"], { className: "underline", href: "https://vercel.com/", target: "_blank" }, "vercel"),
            " . Thank you Vercel.")));
};
exports["default"] = ProjectSection;
