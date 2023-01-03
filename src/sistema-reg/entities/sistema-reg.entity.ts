import { SistemaNombresReg } from 'src/sistema-nombres-reg';
import { SistemaProcDest } from 'src/sistema-proc-dest';
import { SistemaTipDocCal } from 'src/sistema-tip-doc-cal';
import { SistemaTipSal } from 'src/sistema-tip-sal/entities/sistema-tip-sal.entity';
import { SistemaUnidadReg } from 'src/sistema-unidad-reg';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ENT_SAL_ENUM } from './sistema-reg.enum';

@Unique("co_reg_nr", ["Num_unidad_reg", "num_reg", "ent_sal", "year", "Co_pdest", "repartir"])
@Entity('sistema_reg')
export class SistemaReg {
  @PrimaryGeneratedColumn()
  Co_reg: number;

  @ManyToOne(
    (type) => SistemaNombresReg,
    (sistemanombresReg) => sistemanombresReg.sistemareg,
  )
  @JoinColumn({ name: 'Co_nombre' })
  Co_nombre: SistemaNombresReg;

  @ManyToOne(
    (type) => SistemaUnidadReg,
    (sistemaUnidadReg) => sistemaUnidadReg.sistemareg,
  )
  @JoinColumn({ name: 'Num_unidad_reg' })
  Num_unidad_reg: SistemaUnidadReg;

  @Column({
    type: 'enum',
    enum: ENT_SAL_ENUM,
    default: [ENT_SAL_ENUM.RS],
  })
  ent_sal: ENT_SAL_ENUM; //enum R/E y R/S

  //Relacion Tabla tipos de documentos de la calidad
  @ManyToOne(
    (type) => SistemaTipDocCal,
    (sistemaTipDocCal) => sistemaTipDocCal.sistemareg,
  )
  @JoinColumn({ name: 'Co_tdoc' })
  Co_tdoc: SistemaTipDocCal;

  @Column({ type: 'int', width: 20 })
  num_reg: number;

  @Column({ type: 'varchar', length: 50 })
  aclar_adic: string;

  @Column({ type: 'date', default: '0000-00-00' })
  fecha: Date;

  @Column({ type: 'varchar', length: 200 })
  denomindoc: string;

  //Relacion Destino o Procedencia
  @ManyToOne(
    (type) => SistemaProcDest,
    (sistemaProcDest) => sistemaProcDest.sistemareg,
  )
  @JoinColumn({ name: 'Co_pdest' })
  Co_pdest: SistemaProcDest;

  //Relación como llegó o entró el documento
  @ManyToOne(
    (type) => SistemaTipSal,
    (sistemaTipSal) => sistemaTipSal.sistemareg,
  )
  @JoinColumn({ name: 'Co_tipsal' })
  Co_tipsal: SistemaTipSal;

  @Column({ type: 'int', width: 10 })
  numejemp: number;

  @Column({ type: 'varchar', length: 4 })
  year: string;

  @Column({ type: 'varchar', length: 4, default: 'R' })
  repartir: string;
}
