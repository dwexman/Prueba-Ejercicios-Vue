import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Parent from '../views/Parent.vue';
import Child from '../components/Child.vue';

describe('Parent and Child Communication', () => {
  it('should display the message sent from Child', async () => {
    // Montar el componente Parent
    const wrapper = mount(Parent);

    // Encontrar el componente Child dentro de Parent
    const childComponent = wrapper.findComponent(Child);

    // Simular la entrada de texto y el clic en el botón
    await childComponent.find('input').setValue('Hello from Child');
    await childComponent.find('button').trigger('click');

    // Verificar que el mensaje se actualizó en el componente Parent
    expect(wrapper.text()).toContain('Hello from Child');
  });
});
