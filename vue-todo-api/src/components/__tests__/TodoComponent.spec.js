import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Todo from '../TodoComponent.vue';

let props = {
  todo: {
    title: "Test todo",
    completed: false
  }
};
let wrapper = null;

function factory(props) {
  return mount(Todo, { props });
}

describe('Todo component', () => {
  beforeEach(() => {
    wrapper = factory(props);
  });

  it('renders todo title', () => {
    // given

    // when

    // then
    expect(wrapper.text()).toContain("Test todo");
  });

  it('should have not-completed class when not completed', () => {
    // given

    // when

    // then
    expect(wrapper.classes()).toContain("not-completed");
  });

  it('should not have not-completed class when completed', () => {
    // given
    props.todo.completed = true;
    wrapper = factory(props);

    // when

    // then
    expect(wrapper.classes()).not.toContain("not-completed");
  });

  it('should toggle completed on click', async () => {
    // given

    // when
    await wrapper.trigger('click');

    // then
    expect(wrapper.classes()).toContain("not-completed");

    // when
    await wrapper.trigger('click');

    // then
    expect(wrapper.classes()).not.toContain("not-completed");
  });
});
