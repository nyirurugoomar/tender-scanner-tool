import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tender } from '../../tenders/entities/tender.entity';
import { Submission } from '../../submissions/entities/submission.entity';


@Entity()
export class Requirement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // Tax Clearance

  @Column()
  fileType: string; // pdf

  @Column({ default: true })
  required: boolean;

  @ManyToOne(() => Tender, t => t.requirements, { onDelete: 'CASCADE' })
  tender: Tender;
  
  @ManyToOne(() => Submission, s => s.documents, { onDelete: 'CASCADE' })
  submission: Submission;
}
