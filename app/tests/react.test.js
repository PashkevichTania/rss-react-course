import React from 'react';
import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import App from '../src/App';
import About from '../src/Components/About/About';
import Page404 from "../src/Components/Page404/Page404";
import NewsPage from "../src/Components/News/NewsPage";
import NewsPageWrapper from "../src/Components/News/NewsPageWrapper";
import {fireEvent} from "@testing-library/dom";

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

  it('page404', () => {
    const about = render(Page404());
    const el = about.getByTestId('Page404paragraph');
    expect(el.textContent).toContain('Page not found!');
  });

  it('news page', () => {
    const about = render(NewsPageWrapper());
    const el = about.getByTestId('newsPage');
    const input = about.getByTestId('news-input');
    const btn = about.getByTestId('news-btn');
    expect(el).toBeInstanceOf(HTMLElement);

    fireEvent.change(input, {target: {value: 'apple'}})
    expect(input.value).toBe('apple')
    fireEvent.click(btn);
  });

});
