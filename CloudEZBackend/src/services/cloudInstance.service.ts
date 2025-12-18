import { AppDataSource } from "data-source";
import { CloudInstance } from "entity/CloudInstance";
import { ReqCloudInstance } from "interfaces/CloudInstance";
// import { User } from "entity/User";

export class CloudInstanceService{
    private cloudInstanceRep=AppDataSource.getRepository(CloudInstance)


    public async getAllCloudInstance(){
        return this.cloudInstanceRep.find()
    }

    public async getOneCloudInstance(cloudInstanceId: string){
        return this.cloudInstanceRep.findOne({where:{id:cloudInstanceId}})
    }

    public async deleteCloudInstance(cloudInstanceId:string){
        const cloudInstnaceToDelete= await this.cloudInstanceRep.findOne({where:{id: cloudInstanceId}})
        if(!cloudInstnaceToDelete){
            throw new Error("CLOUD INSTANCE TO DELETE NOT FOUND")
        }
        return this.cloudInstanceRep.remove(cloudInstnaceToDelete)
    }

    public async saveCloudInstance(req: ReqCloudInstance){
        const {instanceId,name,provider,status}=req

        const cloudInstance: CloudInstance={
            // id,
            instance_id: instanceId,
            name,
            provider,
            // schedules,
            status
        }

        const newCloudInstance=Object.assign(new CloudInstance(), cloudInstance)
        const saveCloudInstance=await this.cloudInstanceRep.save(newCloudInstance)

        return saveCloudInstance
    }

    
}