"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var head_1 = require("next/head");
var link_1 = require("next/link");
exports.metadata = {
    title: "Vi Ly Huu's Portfolio",
    description: "This is my Portfolio"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement(head_1["default"], null,
            React.createElement(link_1["default"], { ref: "icon", href: "/favicon.ico" })),
        React.createElement("body", null, children)));
}
exports["default"] = RootLayout;
