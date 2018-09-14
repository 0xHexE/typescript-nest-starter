import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config';

// @ts-ignore
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(config.get('port'));
}

bootstrap();
