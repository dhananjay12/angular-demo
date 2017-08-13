import template from './header.html';

class HeaderComponentController{

  constructor(){
    this.message='@Footer';
  }

}

export const headerComponent = {
  template:template,
  controller:HeaderComponentController,
  controllerAs: 'ctrl'
}