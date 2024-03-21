import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class RegisterUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsPhoneNumber()
  readonly tel: string;
}
