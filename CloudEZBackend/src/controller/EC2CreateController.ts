import { Controller, Route, Post, Body } from "tsoa";
import { EC2Service } from "../services/EC2Service";

class CreateBody {
  imageId!: string;
  instanceType?: string;
//   keyName?: string;
//   subnetId?: string;
  minCount?: number;
  maxCount?: number;
}

@Route("ec2")
export class EC2CreateController extends Controller {
  private svc = new EC2Service();

  @Post("create")
  public async create(@Body() body: CreateBody) {
    return this.svc.createInstance(body.imageId, body.instanceType, body.minCount ?? 1, body.maxCount ?? 1);
  }
}
