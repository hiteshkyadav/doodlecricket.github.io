import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JjServiceBase } from "./base/jj.service.base";

@Injectable()
export class JjService extends JjServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
