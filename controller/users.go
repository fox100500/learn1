package controller

import (
	"encoding/json"
	"fmt"
	"httprouter"
	"net/http"
	"path/filepath"
	"text/template"

	modelUser "../model"
)

func GetUsers(rw http.ResponseWriter, r *http.Request, p httprouter.Params) {
	//получаем список всех пользователей

	users, err := modelUser.GetAllUsers()
	if err != nil {
		http.Error(rw, err.Error(), 400)
		return
	}

	//указываем пути к файлам с шаблонами
	main := filepath.Join("public", "html", "usersDynamicPage.html")
	common := filepath.Join("public", "html", "common.html")

	//создаем html-шаблон
	tmpl, err := template.ParseFiles(main, common)
	if err != nil {
		http.Error(rw, err.Error(), 400)
		return
	}

	//исполняем именованный шаблон "users", передавая туда массив со списком пользователей
	err = tmpl.ExecuteTemplate(rw, "users", users)
	if err != nil {
		http.Error(rw, err.Error(), 400)
		return
	}
}

func AddUser(rw http.ResponseWriter, r *http.Request, p httprouter.Params) {
	//получаем значение из параметра name, переданного в форме запроса
	name := r.FormValue("name")
	//получаем значение из параметра surname, переданного в форме запроса
	surname := r.FormValue("surname")
	fmt.Println("remote Ip=", r.RemoteAddr)

	//проверяем на пустые значения
	if name == "" || surname == "" {
		http.Error(rw, "Имя и фамилия не могут быть пустыми", 400)
		return
	}

	//создаем новый объект
	user := modelUser.NewUser(name, surname)
	//записываем нового пользователя в таблицу БД
	err := user.Add()
	if err != nil {
		http.Error(rw, err.Error(), 400)
		return
	}

	//возвращаем текстовое подтверждение об успешном выполнении операции
	err = json.NewEncoder(rw).Encode("Пользователь успешно добавлен!")
	if err != nil {
		http.Error(rw, err.Error(), 400)
		return
	}
}
