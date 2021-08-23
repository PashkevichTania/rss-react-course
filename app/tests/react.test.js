import React from 'react';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import App from '../src/App';
import About from '../src/Components/About/About';

describe('testing react components', () => {
  it('app', () => {
    const app = render(App());
    const el = app.getByTestId('App');
    expect(el).toBeInstanceOf(HTMLElement);
  });

  it('about', () => {
    const about = render(About());
    const el = about.getByTestId('About');
    expect(el.textContent).toContain('Lorem ipsum');
  });
});
