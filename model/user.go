package modelUser

import (
	"../server"
)

type User struct {
	ID      int
	Name    string
	Surname string
}

func GetAllUsers() (users []User, err error) {
	query := `SELECT * FROM users`
	err = server.Db.Select(&users, query)
	return
}

func NewUser(name, surname string) *User {
	return &User{Name: name, Surname: surname}
}

func GetUserById(userId string) (u User, err error) {
	query := `SELECT * FROM users WHERE id = ?`
	err = server.Db.Get(&u, query, userId)
	return
}

func (u *User) Add() (err error) {
	query := `INSERT INTO users (name, surname) VALUES (?, ?)`
	_, err = server.Db.Exec(query, u.Name, u.Surname)
	return
}

/*
func GetAllUsers() (users []User, err error) {
	users = []User{
		{1, "Джон", "До"},
		{2, "Говард", "Рорк"},
		{3, "Джек", "Доусон"},
		{4, "Лизель", "Мемингер"},
		{5, "Джейн", "Эйр"},
		{6, "Мартин", "Иден"},
		{7, "Джон", "Голт"},
		{8, "Сэмвелл", "Тарли"},
		{9, "Гермиона", "Грейнджер"},
	}
	return
}
*/
