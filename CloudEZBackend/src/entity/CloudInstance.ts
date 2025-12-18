import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./Schedule";

export enum cloudStatus{
    running='Running', 
    stopped="Stopped"
}
@Entity()
export class CloudInstance{
    @PrimaryGeneratedColumn("uuid")
    id?: string;
  
    @Column() // AWS EC2 instance ID
    instance_id?: string;
  
    @Column()
    provider?: string; // "aws" | "azure" (future-proof)
  
    @Column()
    name?: string;
  
    @Column({ type: 'enum',
        enum: cloudStatus,
        default: cloudStatus.stopped 
    }) 
    status?: cloudStatus; // running | stopped
  
    @OneToMany(() => Schedule, (s) => {s.instance})
    schedules?: Schedule[];
}