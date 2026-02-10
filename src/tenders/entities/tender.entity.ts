import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Requirement } from '../../requirements/entities/requirement.entity';



@Entity()
export class Tender {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'date' })
  deadline: Date;

  @Column({ default: 'OPEN' })
  status: string;

  @OneToMany(() => Requirement, r => r.tender)
  requirements: Requirement[];

//   @OneToMany(() => Submission, s => s.tender)
//   submissions: Submission[];
}
