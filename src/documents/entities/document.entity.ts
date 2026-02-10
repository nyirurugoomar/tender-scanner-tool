import { Entity,PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Submission } from "../../submissions/entities/submission.entity";

@Entity()
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  requirementName: string;

  @Column()
  filename: string;

  @Column()
  path: string;

  @ManyToOne(() => Submission, s => s.documents, { onDelete: 'CASCADE' })
  submission: Submission;
}
