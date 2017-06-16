
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('yes-answer', 'helper:yes-answer', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{yes-answer inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

