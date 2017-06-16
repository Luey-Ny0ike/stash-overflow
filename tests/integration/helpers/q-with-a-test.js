
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('q-with-a', 'helper:q-with-a', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{q-with-a inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

