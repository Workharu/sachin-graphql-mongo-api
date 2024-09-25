import { Entity, PrimaryKey, Property, ManyToOne } from "@mikro-orm/core";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property({ nullable: true })
  age?: number;
}

@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  content!: string;

  @ManyToOne(() => User)
  user!: User;
}

@Entity()
export class Comment {
  @PrimaryKey()
  id!: number;

  @Property()
  text!: string;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Post)
  post!: Post;
}
