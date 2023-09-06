/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JjWhereInput } from "./JjWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JjOrderByInput } from "./JjOrderByInput";

@ArgsType()
class JjFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JjWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JjWhereInput, { nullable: true })
  @Type(() => JjWhereInput)
  where?: JjWhereInput;

  @ApiProperty({
    required: false,
    type: [JjOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JjOrderByInput], { nullable: true })
  @Type(() => JjOrderByInput)
  orderBy?: Array<JjOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JjFindManyArgs as JjFindManyArgs };
