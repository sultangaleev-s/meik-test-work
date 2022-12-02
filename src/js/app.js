import * as flsFunctions from "./modules/functions.js";
import { Application } from "@hotwired/stimulus"

import burgerMenu from "./modules/burgerMenu.js";

import SelectController from "./controllers/select_controller.js"
import TabsController from "./controllers/tabs_controller.js"
import AccardeonController from "./controllers/accardeon_controller.js"
import InputController from './controllers/input_controller.js'
import NavigationController from './controllers/navigation_controller.js'

flsFunctions.isWebp()

window.Stimulus = Application.start()
Stimulus.register("select", SelectController)
Stimulus.register("tabs", TabsController)
Stimulus.register("accardeon", AccardeonController)
Stimulus.register("input", InputController)
Stimulus.register("navigation", NavigationController)


document.addEventListener('DOMContentLoaded', () => {
    burgerMenu()
})