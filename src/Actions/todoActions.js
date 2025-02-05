import {FINISH_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO } from '../constants/actions'
export const todoFinished = (todo, isFinished) => ({type: FINISH_TODO, payload: {todo: todo, isFinished: isFinished}})
export const addTodo = (inputText) => ({type: ADD_TODO, payload: {todoText: inputText}})
export const deleteTodo = (id) => ({type: DELETE_TODO, payload: {todoId: id}})
export const editTodo = (todo, todoText) => ({type: EDIT_TODO, payload: {todo: todo, todoText:todoText}})