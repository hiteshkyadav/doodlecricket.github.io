import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JjService } from "./jj.service";
import { JjControllerBase } from "./base/jj.controller.base";

@swagger.ApiTags("jjs")
@common.Controller("jjs")
export class JjController extends JjControllerBase {
  constructor(
    protected readonly service: JjService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
