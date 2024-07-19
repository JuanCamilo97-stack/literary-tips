import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT||3000
  app.setGlobalPrefix("api/v1")

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Literary Tips API')
    .setDescription('API documentation for the Literary Tips application.')
    .setVersion('1.0')
    .addTag('tips')
    .addTag('levels')
    .addTag('genres')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const swaggerPath = "api/swagger"
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);
}
bootstrap();
