import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entities/genres.entity';
import { Tip } from 'src/tips/entities/tips.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genre, Tip])],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
