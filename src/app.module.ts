import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipsModule } from './tips/tips.module';

@Module({
  imports: [TipsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
