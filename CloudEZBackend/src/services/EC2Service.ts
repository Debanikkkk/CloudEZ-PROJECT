import { EC2Client, DescribeInstancesCommand, RunInstancesCommand, StartInstancesCommand, StopInstancesCommand } from "@aws-sdk/client-ec2";
import { envs } from "utils/envVars";

const client = new EC2Client({
  region:envs.REGION,
  credentials: {
    accessKeyId:envs.AWS_KEY!,
    secretAccessKey: envs.AWS_SECRET!
  }
});

export class EC2Service {
  async listInstances() {
    const out = await client.send(new DescribeInstancesCommand({}));
    const instances: any[] = [];
    out.Reservations?.forEach(r => r.Instances?.forEach(i => instances.push({
      instanceId: i.InstanceId,
      state: i.State?.Name,
      instanceType: i.InstanceType,
      availabilityZone: i.Placement?.AvailabilityZone,
      publicIp: i.PublicIpAddress,
      privateIp: i.PrivateIpAddress,
      launchTime: i.LaunchTime
    })));
    return instances;
  }

  async createInstance(imageId: string, instanceType = "t3.micro", minCount = 1, maxCount = 1) {
    const params: any = {
      ImageId: imageId,
      InstanceType: instanceType,
      MinCount: minCount,
      MaxCount: maxCount
    };
 
    const out = await client.send(new RunInstancesCommand(params));
    const created = out.Instances?.map(i => ({ instanceId: i.InstanceId, state: i.State?.Name })) || [];
    return created;
  }

  async startInstance(instanceId: string) {
    await client.send(new StartInstancesCommand({ InstanceIds: [instanceId] }));
    return { instanceId, action: "starting" };
  }

  async stopInstance(instanceId: string) {
    await client.send(new StopInstancesCommand({ InstanceIds: [instanceId] }));
    return { instanceId, action: "stopping" };
  }
}
