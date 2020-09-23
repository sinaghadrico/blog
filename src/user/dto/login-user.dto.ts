import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginUserDto {

  @ApiProperty({ example: 'info@sinaghadri.com', description: 'The email of the User' })
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty({ example: '123', description: 'The password of the User' })
  @IsNotEmpty()
  readonly password: string;
}