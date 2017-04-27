
import { Service1 } from '../../ng1-app/services/service1.svc';
export function service1Factory(i: any) {
    return i.getSomeData();
}
export const service1Provider = {
    provide: Service1,
    useFactory: service1Factory,
    deps: ['$injector']
};


