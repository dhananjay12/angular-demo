import template from './app.component.html'

export const appComponent = {
  template:template,
  controller: class AppComponent {
    constructor($state) {
      'ngInject';

      this.$state = $state;
    }
    
  }
}