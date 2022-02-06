"use strict";

import {
    viewDevice
} from "./modules/view_device";
import {
    slider
} from "./modules/slider";

import "./modules/hamburger"

document.addEventListener("DOMContentLoaded", () => {
    viewDevice();
    slider();
});