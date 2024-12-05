import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({ description: 'Nome do usuário', example: 'João' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Sobrenome do usuário', example: 'Silva' })
  @IsNotEmpty()
  @IsString()
  sobrenome: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'joao@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(1, 255)
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'password123',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
