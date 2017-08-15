import footerHtml from './footer.html';

class FooterComponentController{

  constructor(){
    this.message='@Footer';
  }

}

export const footerComponent = {
  template:footerHtml,
  controller: FooterComponentController,
  controllerAs: 'ctrl',
  transclude:true
}