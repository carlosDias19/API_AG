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
    const entity = this.produtosRepository.create(
        createProdutosDto,);
    return this.produtosRepository.save(entity);
  }

  findAll() {
    return this.produtosRepository.find();
  }

  findOne(id: string) {
    return this.produtosRepository.findOne({where: {id : id.toString()}});;
  }

  update(
    id: string,
    updateProdutosDto: UpdateProdutosDto,
  ) {
    return this.produtosRepository.update(
      id,
      updateProdutosDto,
    );
  }

  remove(id: string) {
    this.produtosRepository.delete(id);;
  }
}