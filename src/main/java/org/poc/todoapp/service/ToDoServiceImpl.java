package org.poc.todoapp.service;

import org.poc.todoapp.domain.ToDo;
import org.poc.todoapp.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * X.
 *
 * @author rsrinivasalu 2/28/2018 9:28 AM
 */
@Service("toDoService")
public class ToDoServiceImpl {
    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoServiceImpl(final ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    public List<ToDo> listAllToDos() {

        return toDoRepository.findAll();
    }

    public void addToDo(final ToDo toDo) {
        toDoRepository.save(toDo);
    }

    public void removeToDo(final Integer index) {
        Optional
            .ofNullable(index)
            .ifPresent(integer -> toDoRepository.delete(index));
    }

}
