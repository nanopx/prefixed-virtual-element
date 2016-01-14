import element from './element';

function onCreate() {

}

function onUpdate() {

}

function onRemove() {

}

function render({ props }) {
  const { scope, rules } = props;
  return element('style', {
    _style: true,
    innerHTML: `
      .${scope}: ${rules}
    `
  });
}

export default {
  onCreate,
  onUpdate,
  onRemove,
  render,
};
