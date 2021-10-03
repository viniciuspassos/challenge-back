import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  color: string;
}
