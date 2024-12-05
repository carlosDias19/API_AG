import { Injectable } from '@nestjs/common';
import { CreateProdutosDto } from './dto/createProdutos.dto';
import { UpdateProdutosDto } from './dto/updateProdutos.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from './entities/produtos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private readonly produtosRepository: Repository<Produtos>,
  ) {}

  create(createProdutosDto: CreateProdutosDto) {
    if (!createProdutosDto.nome || createProdutosDto.nome.trim() === '') {
      throw new Error('O nome do produto não pode estar vazio');
    }
    if (createProdutosDto.preco < 0) {
      throw new Error('O preço do produto não pode ser negativo');
    }

    const entity = this.produtosRepository.create(createProdutosDto);
    return this.produtosRepository.save(entity);
  }

  findAll() {
    return this.produtosRepository.find();
  }

  findOne(id: string) {
    return this.produtosRepository.findOne({ where: { id } });
  }

  update(id: string, updateProdutosDto: UpdateProdutosDto) {
    if (updateProdutosDto.nome && updateProdutosDto.nome.trim() === '') {
      throw new Error('O nome do produto não pode estar vazio');
    }
    if (updateProdutosDto.preco && updateProdutosDto.preco < 0) {
      throw new Error('O preço do produto não pode ser negativo');
    }

    return this.produtosRepository.update(id, updateProdutosDto);
  }

  remove(id: string) {
    return this.produtosRepository.delete(id);
  }
}
