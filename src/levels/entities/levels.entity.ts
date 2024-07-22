import { Entity, Column, PrimaryGeneratedColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { Tip } from 'src/tips/entities/tips.entity';

@Entity()
export class Level {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Tip, tip => tip.level)
  tips: Tip[];

  @DeleteDateColumn()
  deletedAt: Date;
}
