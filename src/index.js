import './index.html'
import './index.scss'

import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

import burgerMenu from "./js/modules/burgerMenu.js";

window.Stimulus = Application.start()
const context = require.context("./js/controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))

document.addEventListener('DOMContentLoaded', () => {
    burgerMenu()
})