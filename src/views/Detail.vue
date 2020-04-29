<script>
import { ref, reactive, readonly, watchEffect } from '@vue/composition-api';
import { h } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const object = reactive({ foo: 'bar' });

    return () => h('div', [count.value, object.foo]);
  },
};
</script>