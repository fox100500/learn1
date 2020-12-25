package main

import (
	"log"
	"net/http"

	"httprouter"

	"../learn1/controller"
	"../learn1/server"
)

func main() {
	//инициализируем подключение к базе данных
	err := server.InitDB()
	if err != nil {
		log.Fatal(err)
	}
	defer server.Db.Close()

	//создаем и запускаем в работу роутер для обслуживания запросов
	r := httprouter.New()

	
	routes(r)

	//прикрепляемся к хосту и свободному порту для приема и обслуживания входящих запросов
	//вторым параметром передается роутер, который будет работать с запросами
	err1 := http.ListenAndServe("localhost:8080", r)
	if err1 != nil {
		log.Fatal(err1)
	}
}

func routes(r *httprouter.Router) {
	//путь к папке со внешними файлами: html, js, css, изображения и т.д.
	r.ServeFiles("/public/*filepath", http.Dir("public"))
	//что следует выполнять при входящих запросах указанного типа и по указанному адресу
	r.GET("/", controller.StartPage)
	r.GET("/users", controller.GetUsers)
	r.POST("/user/add", controller.AddUser)
	
}
