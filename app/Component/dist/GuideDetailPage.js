"use strict";
exports.__esModule = true;
var react_1 = require("react");
var store_1 = require("@/app/Store/store");
var link_1 = require("next/link");
var image_1 = require("next/image");
var GuideDetailPage = function () {
    var color = store_1["default"](function (state) { return state.color; });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "flex justify-between" },
            react_1["default"].createElement("div", null, " Guideline "),
            react_1["default"].createElement("div", { className: "transition hover:scale-125" },
                react_1["default"].createElement(link_1["default"], { href: "/" },
                    react_1["default"].createElement(image_1["default"], { src: "/previous.png", width: 50, height: 50, alt: "previous" }),
                    " "),
                " ")),
        react_1["default"].createElement("ul", { className: "ml-6 list-disc" },
            react_1["default"].createElement("li", null, "This Portfolio basing on NextJS 14. Thanks for NextJS framework ^_^"),
            react_1["default"].createElement("li", null, " Create project with Command: npx create-next-app@latest "),
            react_1["default"].createElement("li", null,
                "Use Zustand state management",
                react_1["default"].createElement("ul", { className: "ml-6 list-decimal" },
                    react_1["default"].createElement("li", null, " Installation : npm install zustand "),
                    react_1["default"].createElement("li", null, " Create Stored "),
                    react_1["default"].createElement("li", { className: "p-2 rounded-md shadow-lg" },
                        react_1["default"].createElement("pre", { className: "overflow-x-scroll" },
                            react_1["default"].createElement("code", null, " \n  const useStore = create(  \n    persist(        // use persist de dong bo voi cac page khac\n        (set) => ({\n          color: '#3498db',\n          setColor: (value: string) => set({ color: value }),\n        }),\n      {\n        name: 'my-color', // Key to use for storing the state in local storage\n      }\n    )\n  ); "))),
                    react_1["default"].createElement("li", null, "Use Store"),
                    react_1["default"].createElement("li", { className: "p-2 rounded-md shadow-lg" },
                        react_1["default"].createElement("pre", { className: "overflow-x-scroll" },
                            react_1["default"].createElement("code", null, "  \n  const setColor = useStore((state: any) => state.setColor);\n  const color = useStore((state: any) => state.color);\n                  "))))),
            react_1["default"].createElement("li", null, "Colors on this page"),
            react_1["default"].createElement("li", { className: "p-2 rounded-md shadow-lg" },
                react_1["default"].createElement("pre", { className: "overflow-x-scroll" },
                    react_1["default"].createElement("code", null, " const colors = [ \n        { index: 1, name: 'Pumpkin',      colorValue: '#d35400' },\n        { index: 2, name: 'Belize hole',  colorValue: '#3498db' },   \n        { index: 3, name: 'Sun flower',   colorValue: '#f1c40f' },\n        { index: 4, name: 'Wisteria',     colorValue: '#8e44ad' },\n        { index: 5, name: 'Alizarin',     colorValue: '#e74c3c' },\n        { index: 6, name: 'Emerald',      colorValue: '#2ecc71' },\n  ]; \n"))),
            react_1["default"].createElement("li", null,
                "When user choose the color",
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", { className: "p-2 rounded-md shadow-lg" },
                        react_1["default"].createElement("pre", { className: "overflow-x-scroll" },
                            react_1["default"].createElement("code", null, "<div className=\"flex space-x-2 rounded-md border-[1px] p-8 h-[50px] items-center shadow-lg\" style= { { borderColor: color } }> \n    {colors.map((color) => (  \n        <div  \n          key={color.index} \n          onClick={ () => handleColorSelect( color.colorValue )}\n          style={{ backgroundColor: color.colorValue  }} \n          >   \n        </div> \n    ))} \n  </div>\n"))))),
            react_1["default"].createElement("li", null, "setColor on state in code below"),
            react_1["default"].createElement("li", { className: "p-2 rounded-md shadow-lg" },
                react_1["default"].createElement("pre", { className: "overflow-x-scroll" },
                    react_1["default"].createElement("code", null, " const handleColorSelect = ( color: string ) => {    \n    setColor(color)\n};",
                        ";"))))));
};
exports["default"] = GuideDetailPage;
