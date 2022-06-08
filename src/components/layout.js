import m from 'mithril';

import 'material-design-lite';

import theme from '../css/material.min.css';
import styles from '../css/layout.css';

import header from './header';
import main from './main';
import footer from './footer';

import OneWord from './oneword';

const layout = {
  view: vnode => {
    return m(
      'div',
      {
        class: 'mdl-layout mdl-js-layout mdl-layout--fixed-header site',
      },
      [m(header), m(main, vnode.attrs), m(footer)]
    );
  },
  oncreate: function () {
    var canvas = document.getElementById('oneword');

    // Get the DPR and size of the canvas
    var dpr = window.devicePixelRatio;
    var rect = canvas.getBoundingClientRect();

    // Set the "actual" size of the canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Set the "drawn" size of the canvas
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    var ctx = canvas.getContext('2d');

    // Scale the context to ensure correct drawing operations
    ctx.scale(dpr, dpr);

    ctx.font = '30px Comic Sans MS';
    ctx.fillStyle = '#456456';
    ctx.textAlign = 'center';

    OneWord.render('oneword', OneWord.words);
  },
};

export default layout;
