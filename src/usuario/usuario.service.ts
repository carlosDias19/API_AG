import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  findByEmail(email: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  findOne(id: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ where: { id: id.toString() } });
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, salt);

    const user = this.usuarioRepository.create({
      ...createUsuarioDto,  
      password: hashedPassword, 
    });

    return this.usuarioRepository.save(user);
  }
}
