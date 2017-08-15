import appHtml from './app.component.html'

export const appComponent = {
  template:appHtml,
  controller: class AppComponent {
    constructor($state) {
      'ngInject';

      this.$state = $state;
    }
    
  }
}