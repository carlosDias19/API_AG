import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUsuarioDto {
  @ApiProperty({ description: 'Nome do usuário', required: false })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({ description: 'Sobrenome do usuário', required: false })
  @IsOptional()
  @IsString()
  sobrenome?: string;

  @ApiProperty({
    description: 'CPF do usuário',
    required: false,
  })
  @IsOptional()
  @Length(14)
  cpf?: string;

  @ApiProperty({
    description: 'Email do usuário',
    required: false,
  })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    description: 'Gênero do usuário',
    required: false,
  })
  @IsOptional()
  @IsString()
  genero?: string;
}
