"use strict";
exports.__esModule = true;
var SlideInLeft_1 = require("../../Animation/SlideInLeft");
var TitleUI_1 = require("../../UI/TitleUI");
var LanguageSection = function (_a) {
    var color = _a.color;
    var minWidth = "160px";
    return (React.createElement("div", { className: "leading-6 text-left" },
        React.createElement(TitleUI_1["default"], { title: "Languages", bgColor: color }),
        React.createElement("div", { className: "flex flex-row justify-between lg:flex-col" },
            React.createElement("div", { className: "font-bold" }, " English "),
            React.createElement("div", null,
                "  ",
                React.createElement(SlideInLeft_1["default"], null, "  Professional working proficiency  "),
                "  ")),
        React.createElement("div", { className: "flex flex-row justify-between lg:flex-col lg:mt-2" },
            React.createElement("div", { className: "font-bold" }, " Chinese (Mandarin) "),
            React.createElement("div", null,
                "  ",
                React.createElement(SlideInLeft_1["default"], null, " Native or bilingual proficiency "),
                " ")),
        React.createElement("div", { className: "flex flex-row justify-between lg:flex-col lg:mt-2" },
            React.createElement("div", { className: "font-bold" }, " Chinese (Cantonese) "),
            React.createElement("div", null,
                "  ",
                React.createElement(SlideInLeft_1["default"], null, " Native or bilingual proficiency "),
                " ")),
        React.createElement("div", { className: "flex flex-row justify-between lg:flex-col lg:mt-2" },
            React.createElement("div", { className: "font-bold" }, " Vietnamese "),
            React.createElement("div", null,
                " ",
                React.createElement(SlideInLeft_1["default"], null, "  Native or bilingual proficiency "),
                " "))));
};
exports["default"] = LanguageSection;
