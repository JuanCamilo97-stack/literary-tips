import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, DeleteDateColumn } from 'typeorm';
import { Genre } from 'src/genres/entities/genres.entity';
import { Level } from 'src/levels/entities/levels.entity';

@Entity()
export class Tip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @ManyToOne(() => Level, level => level.tips)
  level: Level;

  @ManyToMany(() => Genre, genre => genre.tips)
  @JoinTable()
  genres: Genre[];

  @DeleteDateColumn()
  deletedAt: Date;
}