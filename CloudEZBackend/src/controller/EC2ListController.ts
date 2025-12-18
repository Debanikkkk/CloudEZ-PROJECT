import { Controller, Route, Get, Post, Body } from "tsoa";
import { EC2Service } from "../services/EC2Service";

class IdBody {
  instanceId!: string;
}

@Route("ec2")
export class EC2ListController extends Controller {
  private svc = new EC2Service();

  @Get("list")
  public async list() {
    return this.svc.listInstances();
  }

  @Post("start")
  public async start(@Body() body: IdBody) {
    return this.svc.startInstance(body.instanceId);
  }

  @Post("stop")
  public async stop(@Body() body: IdBody) {
    return this.svc.stopInstance(body.instanceId);
  }
}
