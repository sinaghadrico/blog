import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: '09373806464', description: 'The username of the User' })
  @IsNotEmpty()
   username: string;

  @ApiProperty({ example: 'info@sinaghadri.com', description: 'The email of the User' })
  @IsNotEmpty()
   email: string;

  @ApiProperty({ example: '123', description: 'The password of the User' })
  @IsNotEmpty()
   password: string;
}