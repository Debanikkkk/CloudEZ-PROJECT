import {  cloudStatus } from "entity/CloudInstance";
import { ResSchedule } from "./Schedule";

export interface ReqCloudInstance{
    // id?: string,
    instanceId?: string,
    name?: string,
    provider?: string,
    // schedules?: ,
    status?: cloudStatus
}

export interface ResCloudInstance{
       id?: string,
       instanceId?: string,
       name?: string,
       provider?: string,
       schedules?: ResSchedule[],
       status?: cloudStatus
}