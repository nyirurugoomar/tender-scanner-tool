import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tender } from '../../tenders/entities/tender.entity';

@Entity()
export class Requirement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  fileType: string;

  @Column({ default: true })
  required: boolean;

  @ManyToOne(() => Tender, (t) => t.requirements, { onDelete: 'CASCADE' })
  tender: Tender;
}