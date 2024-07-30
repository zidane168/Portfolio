"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var MenuSection = function (_a) {
    var color = _a.color;
    return (React.createElement("div", { className: "flex w-full p-2 space-x-4 w-fill" },
        React.createElement(link_1["default"], { className: "flex items-center gap-4 transition hover:underline hover:scale-110", href: "/guideline", target: "_blank" },
            "How to build this page?",
            React.createElement(image_1["default"], { src: "/next.png", width: 50, height: 50, alt: "next" }))));
};
exports["default"] = MenuSection;
