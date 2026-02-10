import { Entity,PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

import { Tender } from "../../tenders/entities/tender.entity";
import { Requirement } from "../../requirements/entities/requirement.entity";
import { Document } from "../../documents/entities/document.entity";



@Entity()
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  vendorName: string;

  @ManyToOne(() => Tender, t => t.submissions)
  tender: Tender;

  @OneToMany(() => Requirement, r => r.submission)
  documents: Document[];
}
