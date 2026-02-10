import { Submission } from "../../submissions/entities/submission.entity";
import { Entity, PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";

@Entity()
export class ScanResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Submission)
  submission: Submission;

  @Column()
  requirementName: string;

  @Column()
  status: 'PASSED' | 'MISSING' | 'INVALID';

  @Column({ nullable: true })
  reason: string;
}
