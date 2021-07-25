import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Videos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  title: string;
  @Column()
  description: string;
  @Column()
  url: string;
}
