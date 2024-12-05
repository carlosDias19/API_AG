import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateProdutosDto {
  @ApiProperty({ description: 'ID do produto' })
  id: string;

  @ApiProperty({ description: 'Nome do produto', required: false })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({ description: 'Preço do produto', required: false })
  @IsOptional()
  @IsNumber()
  preco?: number;

  @ApiProperty({ description: 'Descrição do produto', required: false })
  @IsOptional()
  @IsString()
  descricao?: string;
}
