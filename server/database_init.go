package server

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

//Db - database handle
var Db *sqlx.DB

//функция, инициирующая подключение к БД
func InitDB() (err error) {
	//строка, содержащая данные для подключения к БД в следующем формате:
	//login:password@tcp(host:port)/dbname
	var dataSourceName = "nina:blabla@tcp(localhost:3306)/main"
	//подключаемся к БД, используя нужный драйвер и данные для подключения
	Db, err = sqlx.Connect("mysql", dataSourceName)
	if err != nil {
		return
	}

	err = Db.Ping()
	return
}
