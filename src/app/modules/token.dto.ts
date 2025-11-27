import { TokenDataDto } from "./tokenData.dto";

export interface TokenDto {

  TimeStamp: string;
  Message: string;
  Status: number;
  Data: TokenDataDto;
}
