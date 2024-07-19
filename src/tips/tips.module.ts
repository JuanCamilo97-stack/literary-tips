import { Module } from '@nestjs/common';
import { TipsService } from './tips.service';
import { TipsController } from './tips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tip } from './entities/tips.entity';
import { Genre } from 'src/genres/entities/genres.entity';
import { Level } from 'src/levels/entities/levels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tip, Genre, Level])],
  controllers: [TipsController],
  providers: [TipsService],
})
export class TipsModule {}
