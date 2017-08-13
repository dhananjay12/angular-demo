import angular from 'angular';
import { headerComponent } from './header.component';
import './header.scss';


export const header = angular
  .module('common.header', [])
  .component('header', header)
  .name;
