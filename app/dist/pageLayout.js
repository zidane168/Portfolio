"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var TitleUI_1 = require("./Component/UI/TitleUI");
var LanguageSection_1 = require("./Component/Section/Language/LanguageSection");
var SocialSection_1 = require("./Component/Section/Social/SocialSection");
var SkillSection2_1 = require("./Component/Section/Skill/SkillSection2");
var SlideInLeft_1 = require("./Component/Animation/SlideInLeft");
var store_1 = require("./Store/store");
var link_1 = require("next/link");
var PageLayout = function (_a) {
    var children = _a.children;
    var color = store_1["default"](function (state) { return state.color; });
    var date = new Date();
    return (react_1["default"].createElement("div", { className: "p-[20px] border-[2px] rounded-lg m-[20px] ", style: { borderColor: color, boxShadow: "10px 10px 100px " + color } },
        react_1["default"].createElement("div", { className: "text-sm flex flex-col space-y-[20px] lg:flex-row lg:space-x-[20px] h-full" },
            react_1["default"].createElement("div", { className: "lg:w-[25%]  flex-col text-center border-r-[2px] pr-[20px]", style: { borderRightColor: color } },
                react_1["default"].createElement("div", { className: "flex justify-center" },
                    react_1["default"].createElement(image_1["default"], { src: "/zidane.jpg", alt: "Avatar", className: "rounded-full", width: 150, height: 150 })),
                react_1["default"].createElement("div", { className: "mt-[10px]" },
                    react_1["default"].createElement(TitleUI_1["default"], { title: "LY HUU VI", bgColor: color })),
                react_1["default"].createElement("hr", { className: "mt-[20px] mb-[20px]", style: { borderColor: color } }),
                react_1["default"].createElement("div", { className: "text-left" },
                    react_1["default"].createElement("ul", { className: "ml-4 leading-6 list-disc" },
                        react_1["default"].createElement(SlideInLeft_1["default"], null, " Technical Lead | Management with Flexible/Tough  "),
                        react_1["default"].createElement(SlideInLeft_1["default"], null, " Fullstack Developer | CakePHP/Twig/NestJS/ORM  "),
                        react_1["default"].createElement(SlideInLeft_1["default"], null, " AutoGame Developer | C#, ASM, Inject Packet, Obfuscate, Assembly  "))),
                react_1["default"].createElement(SocialSection_1["default"], null),
                react_1["default"].createElement("hr", { className: "mt-[20px] mb-[20px]", style: { borderColor: color } }),
                react_1["default"].createElement(LanguageSection_1["default"], { color: color }),
                react_1["default"].createElement("hr", { className: "mt-[20px] mb-[20px]", style: { borderColor: color } }),
                react_1["default"].createElement(SkillSection2_1["default"], { color: color }),
                react_1["default"].createElement("hr", { className: "mt-[20px] mb-[20px]", style: { borderColor: color } }),
                react_1["default"].createElement("div", { className: "underline transition hover:scale-125" },
                    react_1["default"].createElement(link_1["default"], { target: "_blank", href: "https://learn-tech-tips.blogspot.com/" }, " Technical Blog ")),
                react_1["default"].createElement("div", null,
                    "Copyright @",
                    date.getFullYear())),
            react_1["default"].createElement("div", { className: "w-[100%] " }, children))));
};
exports["default"] = PageLayout;
