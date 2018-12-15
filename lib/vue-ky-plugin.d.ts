import { Ky } from 'ky';
import _Vue from 'vue';
declare module 'vue/types/vue' {
    interface Vue {
        $ky: Ky;
    }
}
export default function KyPlugin<T extends Ky>(vue: typeof _Vue, options?: T): void;
