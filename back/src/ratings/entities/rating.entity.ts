import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Driver } from '../../drivers/entities/driver.entity';
import { Ride } from '../../rides/entities/ride.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column({ nullable: true })
  comment: string;

  @ManyToOne(() => User, (user) => user.ratings)
  user: User;

  @ManyToOne(() => Driver, (driver) => driver.ratings)
  driver: Driver;

  @OneToOne(() => Ride, (ride) => ride.rating)
  ride: Ride;
}
