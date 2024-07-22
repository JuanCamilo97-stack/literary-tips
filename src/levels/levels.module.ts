import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level } from './entities/levels.entity';
import { Tip } from 'src/tips/entities/tips.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Level, Tip])],
  controllers: [LevelsController],
  providers: [LevelsService],
})
export class LevelsModule {}
