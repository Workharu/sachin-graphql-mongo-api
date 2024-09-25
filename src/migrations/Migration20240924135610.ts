import { Migration } from '@mikro-orm/migrations';

export class Migration20240924135610 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "post" ("id" serial primary key, "title" varchar(255) not null, "content" varchar(255) not null, "user_id" int not null);`);

    this.addSql(`create table "comment" ("id" serial primary key, "text" varchar(255) not null, "user_id" int not null, "post_id" int not null);`);

    this.addSql(`alter table "post" add constraint "post_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;`);

    this.addSql(`alter table "comment" add constraint "comment_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;`);
    this.addSql(`alter table "comment" add constraint "comment_post_id_foreign" foreign key ("post_id") references "post" ("id") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "comment" drop constraint "comment_post_id_foreign";`);

    this.addSql(`drop table if exists "post" cascade;`);

    this.addSql(`drop table if exists "comment" cascade;`);
  }

}
