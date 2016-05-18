
import angular from 'angular';

// Controllers
import { ButtonController } from './controllers/button.controller';

// Our Module
  angular
    .module('myApp', [])
    .controller('ButtonController', ButtonController)
  ;
