'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var pageLayout_1 = require("./pageLayout");
var HomeDetailPage_1 = require("./Component/HomeDetailPage");
var next_1 = require("@vercel/speed-insights/next");
var MainPage = function () {
    return (react_1["default"].createElement(pageLayout_1["default"], null,
        react_1["default"].createElement(HomeDetailPage_1["default"], null),
        react_1["default"].createElement(next_1.SpeedInsights, null)));
};
exports["default"] = MainPage;
