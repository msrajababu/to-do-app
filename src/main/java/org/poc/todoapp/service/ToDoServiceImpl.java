package org.poc.todoapp.service;

import org.poc.todoapp.domain.ToDo;
import org.poc.todoapp.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * ToDoService implementation
 *
 * @author rajababu 2/28/2018 9:28 AM
 */
@Service("toDoService")
public class ToDoServiceImpl implements ToDoService {
    private final ToDoRepository toDoRepository;

    @Autowired
    public ToDoServiceImpl(final ToDoRepository toDoRepository) {
        this.toDoRepository = toDoRepository;
    }

    @Override
    public void addToDo(final ToDo toDo) {
        toDoRepository.saveAndFlush(toDo);
    }

    @Override
    public List<ToDo> listAllToDos() {

        return toDoRepository.findAll();
    }

    @Override
    public void putToDo(final ToDo toDo) {
        final ToDo updateToDo = toDoRepository.findOne(toDo.getId());
        if (updateToDo != null) {
            updateToDo.setDone(toDo.isDone());
            toDoRepository.save(updateToDo);
        }
    }

    @Override
    public void removeToDo(final Integer index) {
        Optional
            .ofNullable(index)
            .ifPresent(integer -> toDoRepository.delete(index));
    }

}
