package org.poc.todoapp.service;

import org.poc.todoapp.domain.ToDo;

import java.util.List;

/**
 * @author rajababu 2/28/2018 9:28 AM
 */
public interface ToDoService {

    List<ToDo> listAllToDos();

    void addToDo(ToDo toDo);

    void removeToDo(Integer index);

    void putToDo(final ToDo toDo);

}
