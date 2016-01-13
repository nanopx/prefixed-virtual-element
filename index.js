import element from 'magic-virtual-element';
import Prefixer from 'inline-style-prefixer';
import componentType from 'component-type';

export default function magicPrefixedElement(type, attributes, ...children) {
  if (componentType(attributes.style) === 'object') {
    attributes.style = Prefixer.prefixAll(attributes.style);
  }
  return element(type, attributes, ...children);
}
