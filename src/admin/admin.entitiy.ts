import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity("AdminEntity")
export class AdminEntity{
  save(): any {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar'})
  @Generated('uuid')
  uniqueId: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  joiningDate: Date;

  @Column({ length: 30, default: 'Unknown' })
  country: string;
}

