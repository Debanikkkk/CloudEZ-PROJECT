import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
  } from "typeorm";
  import { CloudInstance } from "./CloudInstance";
  
  @Entity()
  export class Schedule {
    @PrimaryGeneratedColumn("uuid")
    id?: string;
  
    @Column()
    action?: string; // "start" | "stop"
  
    @Column()
    cron_expr?: string; // ex: "0 21 * * *" -> 9PM daily
  
    // @Column()
    // instanceId?: string;
  
    @ManyToOne(() => CloudInstance, (instance) => {instance.schedules})
    @JoinColumn({name:'cloud_instance_id'})
    instance?: CloudInstance;
  }
  