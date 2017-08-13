import template from './footer.html';

class FooterComponentController{

  constructor(){
    this.message='@Footer';
  }

}

export const footerComponent = {
  template:template,
  controller: FooterComponentController,
  controllerAs: 'ctrl'
}