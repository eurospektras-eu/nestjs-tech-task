import { Entity, PrimaryColumn, Column } from 'typeorm';
import { Role } from 'src/common/enums/role.enum';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'varchar', enum: Role, default: Role.Customer })
  role: Role;

  @Column()
  name: string;
}