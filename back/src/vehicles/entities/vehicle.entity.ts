import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Driver } from '../../drivers/entities/driver.entity';
import { Ride } from '../../rides/entities/ride.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @Column('float')
  startPrice: number;

  @Column('float')
  pricePerKm: number;

  @Column()
  isAvailable: boolean;

  @OneToMany(() => Ride, (ride) => ride.vehicle)
  rides: Ride[];

  @ManyToOne(() => Driver, (driver) => driver.vehicles)
  driver: Driver;
}
