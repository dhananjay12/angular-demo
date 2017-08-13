import angular from 'angular';
import { rootComponent } from './root.component';


export const root = angular
  .module('myApp', [])
  .component('root', rootComponent)
  .name;
