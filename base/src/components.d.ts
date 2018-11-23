/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyTest {
    'first': string;
    'last': string;
    'middle': string;
  }
  interface MyTestAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyTest': Components.MyTest;
  }

  interface StencilIntrinsicElements {
    'my-test': Components.MyTestAttributes;
  }


  interface HTMLMyTestElement extends Components.MyTest, HTMLStencilElement {}
  var HTMLMyTestElement: {
    prototype: HTMLMyTestElement;
    new (): HTMLMyTestElement;
  };

  interface HTMLElementTagNameMap {
    'my-test': HTMLMyTestElement
  }

  interface ElementTagNameMap {
    'my-test': HTMLMyTestElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
