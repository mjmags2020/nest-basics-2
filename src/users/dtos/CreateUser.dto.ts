import { IsEmail, IsNotEmpty, IsString, isNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  age: number;
}
