import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JjModuleBase } from "./base/jj.module.base";
import { JjService } from "./jj.service";
import { JjController } from "./jj.controller";
import { JjResolver } from "./jj.resolver";

@Module({
  imports: [JjModuleBase, forwardRef(() => AuthModule)],
  controllers: [JjController],
  providers: [JjService, JjResolver],
  exports: [JjService],
})
export class JjModule {}
