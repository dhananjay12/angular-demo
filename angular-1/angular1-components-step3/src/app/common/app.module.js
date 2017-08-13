import angular from 'angular'
import uiRouter from 'angular-ui-router';
import { appComponent } from './app.component';
import { footer } from './footer/footer.module';
import { header } from './header/header.module';
import './app.component.scss';

export const app = angular
  .module('common.app', [
    uiRouter,
    footer,
    header,
  ])
  .component('app', appComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('app', {
       // redirectTo: 'contacts',
        url: '/',
        component: 'app',
      });
  })
  .name;
