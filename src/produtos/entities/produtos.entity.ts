import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos')
export class Produtos {
  
  @ApiProperty({ description: 'ID do produto' }) 
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Nome do produto' })
  @Column({ name: 'nome', length: 50 })
  nome: string;

  @ApiProperty({ description: 'Preço do produto', required: true })
  @Column({ name: 'preco', type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @ApiProperty({ description: 'Descrição do produto', required: false })
  @Column({ name: 'descricao', length: 255, nullable: true })
  descricao: string;
}
