import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, DeleteDateColumn } from 'typeorm';
import { Tip } from 'src/tips/entities/tips.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Tip, tip => tip.genres)
  @JoinTable()
  tips: Tip[];

  @DeleteDateColumn()
  deletedAt: Date;
}
