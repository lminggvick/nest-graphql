import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('spots')
export class Spots {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  center_x: string;

  @Column()
  center_y: string;

  @Column('json')
  coordinates;

  @Column()
  area_name: string;

  @Column()
  property_count: number;

  @Column()
  spot_code: number;
}
