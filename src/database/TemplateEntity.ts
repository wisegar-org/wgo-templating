import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { TemplateDocumentType } from "../models/Template";

@Entity()
export class TemplateEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  title!: string;
  @Column({ type: "text" })
  body!: string;
  @Column({ default: TemplateDocumentType.document })
  documentType!: TemplateDocumentType;
  @Column({ default: "style" })
  entityTemplate!: string;
  @Column({ default: false })
  defaultTemplate!: boolean;
  @Column({ nullable: true })
  styleTemplateId!: number;
  @ManyToOne(() => TemplateEntity, (template) => template.id, {
    nullable: true,
  })
  styleTemplate!: TemplateEntity;
}

export default TemplateEntity;
