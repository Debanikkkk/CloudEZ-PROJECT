// import { cloudStatus } from "entity/CloudInstance";
// import { ReqCloudInstance, ResCloudInstance } from "interfaces/CloudInstance";
// import { CloudInstanceService } from "services/cloudInstance.service";
// import { Body, Controller, Example, Post, Route, SuccessResponse, Tags } from "tsoa";
// @Tags('Cloud Instance')
// @Route('/cloudInstance')
// export class CloudInstanceController extends Controller{
//     private cloudInstance=new CloudInstanceService()



//     @Post()
//     @SuccessResponse("201", "Cloud instance created")
//     @Example<ReqCloudInstance>({
//         instanceId: "i-09abc123xyz09876",
//         name: "Production EC2",
//         provider: "AWS",
//         status: cloudStatus.running
//     })
//     public async saveCloudInstance(@Body() req: ReqCloudInstance){
//         const savedCloudInstance=await this.cloudInstance.saveCloudInstance(req)
//         const resCloudInstance: ResCloudInstance={
//             id: savedCloudInstance.id,
//             instanceId: savedCloudInstance.instance_id,
//             name: savedCloudInstance.name,
//             provider: savedCloudInstance.provider,
//             // schedules: savedCloudInstance.schedules,
//             status: savedCloudInstance.status
//         }

//         return resCloudInstance
//     }

    
// }