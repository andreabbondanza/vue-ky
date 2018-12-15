import ky, { Ky } from 'ky';
import _Vue from 'vue';

declare module 'vue/types/vue' {
  // tslint:disable-next-line:interface-name
  interface Vue {
    $ky: Ky;
  }
}

export default function KyPlugin<T extends Ky>(vue: typeof _Vue, instance?: T): void {
  if (instance === undefined) {
    vue.prototype.$ky = ky;
  } else {
    vue.prototype.$ky = instance;
  }
}
