import { Migration } from '@mikro-orm/migrations';

export class Migration20240924134415 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "user" add column "email" varchar(255) not null;`);
    this.addSql(`alter table "user" add constraint "user_email_unique" unique ("email");`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "user" drop constraint "user_email_unique";`);
    this.addSql(`alter table "user" drop column "email";`);
  }

}
