import { string } from 'to-style'
import classNames from 'classnames'
import Prefixer from 'inline-style-prefixer';
import componentType from 'component-type';

export default function prefixedVirtualElement(type, attributes, ...children) {
  let vnode = element(type, attributes, ...children)

  if (componentType(vnode.attributes.class) === 'array') {
    vnode.attributes.class = classNames.apply(null, vnode.attributes.class)
  }

  if (componentType(vnode.attributes.class) === 'object') {
    vnode.attributes.class = classNames(vnode.attributes.class)
  }

  if (componentType(vnode.attributes.style) === 'object') {
    const prefixedStyle = Prefixer.prefixAll(vnode.attributes.style)
    vnode.attributes.style = string(prefixedStyle)
  }

  if (!vnode.attributes.hidden) {
    delete vnode.attributes.hidden
  }

  return vnode
}
