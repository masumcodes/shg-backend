import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ShgEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Index()
  @Column({
    length: 50,
    unique: true,
  })
  groupId: string;

  @Column()
  shgType: string;

  @Column({
    nullable: true,
  })
  promotedBy: string;

  @Column({
    type: 'date',
  })
  formationDate: Date;

  @Column()
  bankName: string;

  @Column({
    unique: true,
  })
  bankAccountNumber: string;

  @Column()
  bankBranch: string;

  @Column({
    type: 'date',
  })
  bankOpeningDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
