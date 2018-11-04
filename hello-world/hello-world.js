{
const template = document.createElement('template');

template.innerHTML = `<button>hello</button>
<style>
:host {
  display: inline-block;
  color: red;
}
</style>`;

const currentDocument = document.currentScript.ownerDocument;

class HelloWorld extends HTMLElement {
    constructor() {
      super();
      this.addEventListener('click', this._handleBtnClick);
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
    _handleBtnClick () {
      alert(1);
    }
  }
  
  customElements.define('hello-world', HelloWorld);
};