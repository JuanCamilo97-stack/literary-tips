import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLevelDto } from './dtos/create-level-dto';
import { UpdateLevelDto } from './dtos/update-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Level } from './entities/levels.entity';
import { Repository } from 'typeorm';
import { Tip } from 'src/tips/entities/tips.entity';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private readonly levelRepository: Repository<Level>,

    @InjectRepository(Tip)
    private readonly tipRepository: Repository<Tip>,
  ) { }

  async create(createLevelDto: CreateLevelDto): Promise<Level> {
    return this.levelRepository.save(createLevelDto);
  }

  async findAll(page: number = 1, limit: number = +process.env.LIMIT): Promise<Level[]> {
    const skip = (page - 1) * limit;
    return this.levelRepository.find({
      skip,
      take: limit,
      where: { deletedAt: null },
      relations: ['tips'],
    });
  }

  findOne(id: number) {
    return this.levelRepository.findOne({
      where: { id },
      relations: ['tips'],
    });
  }
  
  async update(id: number, updateLevelDto: UpdateLevelDto): Promise<Level> {
    const result = await this.levelRepository.update(id, updateLevelDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Level with ID ${id} not found`);
    }

    return this.levelRepository.findOneBy({ id });
  }

  async remove(id: number) {
    const level = await this.levelRepository.findOne({ where: { id } });
    if (!level) {
      throw new NotFoundException('Level not found');
    }
    
    await this.levelRepository.softRemove(level);

    await this.levelRepository.update(id, { deletedAt: new Date() });

    const tip = await this.tipRepository.findOne({
      where: { level: { id }, deletedAt: null },
      relations: ['level']
    });

    if (tip) {
      tip.level = { ...tip.level, deletedAt: new Date() };
      await this.tipRepository.save(tip);
    }
  }
}
