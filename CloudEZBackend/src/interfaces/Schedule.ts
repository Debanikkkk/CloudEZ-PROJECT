import { ResCloudInstance } from "./CloudInstance";


export interface ReqSchedule{
    action?: string,
    cronExpr?: string,
    id?: string,
    instance?: number,
}


export interface ResSchedule{
    action?: string,
    cronExpr?: string,
    id?: string,
    instance?: ResCloudInstance,
}
