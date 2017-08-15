import angular from 'angular';
import { footerComponent } from './footer.component';
import './footer.scss';


export const footer = angular
  .module('common.footer', [])
  .component('footer', footerComponent)
  .name;
