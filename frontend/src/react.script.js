// import { createElement } from './vanilla.script';
// document.createElement(type)
// el.setAttribue(attrName, attrValue)

// React.createElement(type, props, ...chilrdren); // [자식1, 자식2, 자식3, ...]

const articleReactEl = React.createElement('article');

const containerEl = document.createElement('div');
containerEl.setAttribute('class', 'container container--md');
containerEl.textContent = '컨테이너 요소';

console.dir(containerEl);

/* ======================================================================= */

// Virtual DOM
// 실제의 것을 추상화 한것
// 가상 문서 객체 모델

const createElement = (type, props, ...children) => {
  return {
    $$typeof: Symbol('virtual.dom.element'),
    type,
    props: {
      ...props,
      chldren,
    },
  };
};

// React API
// Creating React Element
const containerReactEl = React.createElement(
  'div',
  { className: 'container container--md' },
  React.createElement('h1', null, '웹브라우저 환경에서 React 라이브러리 시작하기'),
  React.createElement(
    'p',
    null,
    'React 라이브러리 코드가 웹 브라우저 환경에서 어떻게 해석되고 작동되는 지 살펴봅니다.'
  ),
  React.createElement(
    'ul',
    {},
    React.createElement('li', null, 'React 및 ReactDOM API 활용'),
    React.createElement('li', null, '가상(Virtual) 노드 vs. 실제(Actual) DOM 노드')
  )
);
