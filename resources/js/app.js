/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";
import switcher from "./components/switcher.vue";

import { chessboard } from "vue-chessboard";
import "vue-chessboard/dist/vue-chessboard.css";

const app = new Vue({
    el: "#app",
    components: {
        switcher,
        chessboard
    }
});
