import { Loading } from 'element-ui';

export default {
  data() {
    return {
      loadingVeil: null,
    };
  },
  methods: {
    // Show Loading veil
    startLoading(text) {
      if (!this.loadingVeil) {
        this.loadingVeil = Loading.service({
          lock: true,
          text,
          background: 'rgba(0, 0, 0, 0.7)',
        });
      } else {
        this.loadingVeil.text = text;
      }
    },
    // Hide loading veil
    endLoading() {
      if (this.loadingVeil) {
        this.loadingVeil.close();
        this.loadingVeil = null;
      }
    },
  },
};
