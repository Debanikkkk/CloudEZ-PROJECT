import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './Role';
// import { Show } from './Show';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: 64,
  })
  name?: string;

  @Column({
    length: 16,
  })
  password?: string;

  @Column({
    length: 64,
  })
  address?: string;

  @Column({
    length: 64,
  })
  phone_number?: string;

  @Column({
    nullable: true,
    default: true,
  })
  status?: boolean;

  @Column({
    length: 64,
  })
  email?: string;

  @ManyToOne(
    () => Role,
    (role) => {
      role.users;
    },
    { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: true },
  )
  @JoinColumn({
    name: 'role_id',
  })
  role?: Promise<Role> ;
}
