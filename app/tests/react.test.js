import React from 'react';
import App from '../src/App';
import About from '../src/Components/About/About';
import {describe, it} from "@jest/globals";
import { render } from '@testing-library/react';


describe ('testing react components', ()=>{

  it('app', ()=>{
    let app = render(App());
    let el = app.getByTestId("App");
    expect(el).toBeInstanceOf(HTMLElement)
  });

  it('app', ()=>{
    let about = render(About());
    let el = about.getByTestId("About");
    expect(el.textContent).toContain('Lorem ipsum')
  });

});
