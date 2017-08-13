import template from './root.html';

class RootComponentController{

  constructor(){
    this.from='Root component';
  }

  $onInit(){
    this.count=10;
  }

  increment() {
    this.count++;
  }

}

export const rootComponent = {
  template:template,
  controller:RootComponentController
}