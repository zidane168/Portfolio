"use strict";
exports.__esModule = true;
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var SlideInLeft = function (_a) {
    var children = _a.children;
    var controls = framer_motion_1.useAnimation();
    react_1.useEffect(function () {
        controls.start({ x: 0, opacity: 1 });
    }, [controls]);
    return (React.createElement(framer_motion_1.motion.li, { initial: { x: -100, opacity: 0 }, animate: controls, transition: { duration: 0.5 } }, children));
};
exports["default"] = SlideInLeft;
