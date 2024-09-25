import { Migration } from '@mikro-orm/migrations';

export class Migration20240924134628 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "user" drop constraint "user_email_unique";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "user" add constraint "user_email_unique" unique ("email");`);
  }

}
