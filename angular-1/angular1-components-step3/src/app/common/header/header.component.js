import headerHtml from './header.html';

class HeaderComponentController{

  constructor(){
    this.message='@Footer';
  }

}

export const headerComponent = {
  template:headerHtml,
  controller:HeaderComponentController,
  controllerAs: 'ctrl'
}