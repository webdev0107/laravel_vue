<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsBackgroundToWesglobalpageloginTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('wesglobalpagelogin', 'is_background')==false) {
            Schema::table('wesglobalpagelogin', function (Blueprint $table) {
                $table->tinyInteger("is_background")->default(0);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('wesglobalpagelogin', function (Blueprint $table) {
            //
        });
    }
}
