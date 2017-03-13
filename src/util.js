import React from 'react';
import Const from './Const';
import classSet from 'classnames';

export default {
  renderReactSortCaret(order) {
    const orderClass = classSet('order', {
      'dropup': order === Const.SORT_ASC
    });
    return (
      <span className={ orderClass }>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16' height='16'><path d='M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z'></path></svg>
      </span>
    );
  },

  getScrollBarWidth() {
    const inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    const w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;
    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
  },

  canUseDOM() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  }
};
