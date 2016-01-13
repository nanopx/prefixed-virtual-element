# prefixed-virtual-element

Simply extends [dekujs/magic-virtual-element](https://github.com/dekujs/magic-virtual-element) to use vendor-prefixes.

```
npm install prefixed-virtual-element
```

## Top-Level API

```js
element(component: string|Function , [props: object], [...children: Array]): Component
```

## Example
```js
import element from 'prefixed-virtual-element';

let divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  transition: 'all', // this will be vendor prefixed
};

element('div', { class: ["App", "foo", "bar"], style: divStyle }, [
  element('button', { class: "Button" }, 'Click Me!')
]);
```
