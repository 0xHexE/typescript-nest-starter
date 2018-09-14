import {AppModule} from './app.module';

describe('App module', () => {
    it('should be instantiable', () => {
        const appModule = new AppModule();
        expect(appModule).toBeTruthy();
    });
});
