// src/usuario/entities/usuario.entity.ts
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity('usuario')
export class Usuario {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({ length: 255 })
  nome: string;

  @ApiProperty()
  @Column({ length: 255 })
  sobrenome: string;

  @ApiProperty()
  @Column({ length: 255, unique: true })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
}
