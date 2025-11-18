import { IsString } from "class-validator";

export class AdminDto{
  @IsString()
  uniqueId: string;
  joiningDate: Date;
  country: string;

}