import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcryptjs";
import { Comment } from "./comment.entity"; // ✅ Correctly import with uppercase

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => Comment, (comment) => comment.user) // ✅ Proper reference
  comments: Comment[];

  @BeforeInsert()
  async hashPassword() { // ✅ fixed typo: hashPasword → hashPassword
    this.password = await bcrypt.hash(this.password, 10);
  }
}

