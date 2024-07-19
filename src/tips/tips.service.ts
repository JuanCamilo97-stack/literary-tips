import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipDto } from './dtos/create-tip-dto';
import { UpdateTipDto } from './dtos/update-tip.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tip } from './entities/tips.entity';
import { Repository } from 'typeorm';
import { Genre } from 'src/genres/entities/genres.entity';
import { Level } from 'src/levels/entities/levels.entity';

@Injectable()
export class TipsService {
  constructor(
    @InjectRepository(Tip)
    private readonly tipRepository: Repository<Tip>,

    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,

    @InjectRepository(Level)
    private readonly levelRepository: Repository<Level>,
  ) { }

  async create(createTipDto: CreateTipDto): Promise<Tip> {
    return this.tipRepository.save(createTipDto);
  }

  async findAll(page: number = 1, limit: number = +process.env.LIMIT): Promise<Tip[]> {
    const skip = (page - 1) * limit;
    return this.tipRepository.find({
      skip,
      take: limit,
      where: { deletedAt: null },
      relations: ['genres', 'levels'],
    });
  }

  findOne(id: number) {
    return this.tipRepository.findOne({
      where: { id },
      relations: ['genres', 'levels'],
    });
  }
  
  async update(id: number, updateTipDto: UpdateTipDto): Promise<Tip> {
    const result = await this.tipRepository.update(id, updateTipDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Tip with ID ${id} not found`);
    }

    return this.tipRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const tip = await this.tipRepository.findOne({ where: { id } });
    if (!tip) {
      throw new NotFoundException('Tip not found');
    }
    
    await this.tipRepository.softRemove(tip);

    await this.tipRepository.update(id, { deletedAt: new Date() });

    const genre = await this.genreRepository.findOne({
      where: { id: tip.id, deletedAt: null },
      relations: ['tips']
    });

    if (genre) {
      genre.tips = genre.tips.map(lib => lib.id === id ? { ...lib, deletedAt: new Date() } : lib);
      await this.tipRepository.save(genre);
    }

    const level = await this.levelRepository.findOne({
      where: { id: tip.id, deletedAt: null },
      relations: ['tips']
    });

    if (level) {
      level.tips = level.tips.map(lib => lib.id === id ? { ...lib, deletedAt: new Date() } : lib);
      await this.tipRepository.save(level);
    }
  }
}
