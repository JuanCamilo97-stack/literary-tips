import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGenreDto } from './dtos/create-genre.dto';
import { UpdateGenreDto } from './dtos/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genre } from './entities/genres.entity';
import { Repository } from 'typeorm';
import { Tip } from 'src/tips/entities/tips.entity';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,

    @InjectRepository(Tip)
    private readonly tipRepository: Repository<Tip>,

  ) { }

  async create(createGenreDto: CreateGenreDto): Promise<Genre> { 
    return this.genreRepository.save(createGenreDto);
  }

  async findAll(page: number = 1, limit: number = +process.env.LIMIT): Promise<Genre[]> {
    const skip = (page - 1) * limit;
    return this.genreRepository.find({
      skip,
      take: limit,
      where: { deletedAt: null },
      relations: ['tips'],
    });
  }

  findOne(id: number) {
    return this.genreRepository.findOne({
      where: { id },
      select: {
        id: true,
        name: true,
      },
    });
  }
  
  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    const result = await this.genreRepository.update(id, updateGenreDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Genre with ID ${id} not found`);
    }

    const dataUpdated = this.genreRepository.findOneBy({ id });
    return dataUpdated;
  }

  async remove(id: number) {
    const genre = await this.genreRepository.findOne({ where: { id } });
    if (!genre) {
      throw new NotFoundException('Genre not found');
    }
    
    await this.genreRepository.softRemove(genre);

    await this.genreRepository.update(id, { deletedAt: new Date() });

    const tip = await this.tipRepository.findOne({
      where: { id: genre.id, deletedAt: null },
      relations: ['genres']
    });

    if (tip) {
      tip.genres = tip.genres.map(lib => lib.id === id ? { ...lib, deletedAt: new Date() } : lib);
      await this.genreRepository.save(tip);
    }
  }
}
