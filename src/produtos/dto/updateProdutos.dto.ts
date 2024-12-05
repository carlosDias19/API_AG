import { PartialType } from '@nestjs/swagger';
import { CreateProdutosDto } from './createProdutos.dto';

export class UpdateProdutosDto extends PartialType(
    CreateProdutosDto,
) {}
