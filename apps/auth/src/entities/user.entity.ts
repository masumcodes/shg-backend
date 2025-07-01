import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  role: string; // president,secretary,treasurer,member

  @Column()
  createdBy: string; // presidentId who created the user
}
