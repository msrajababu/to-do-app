package org.poc.todoapp.controller;

import org.poc.todoapp.domain.ToDo;
import org.poc.todoapp.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * Rest controller for todo-service.
 *
 * @author rajababu 2/28/2018 9:30 AM
 */
@RestController
@RequestMapping("/")
public class ToDoRestController {
    private static final String RESPONSE_STATUS_SUCCESS = "Success...";
    private final ToDoService toDoService;

    @Autowired
    public ToDoRestController(final ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping(path = "/todo", produces = APPLICATION_JSON_VALUE)
    public List<ToDo> listAllToDos() {

        return toDoService.listAllToDos();
    }

    @PostMapping(path = "/todo")
    @ResponseStatus(HttpStatus.CREATED)
    public void addToDo(@RequestBody final ToDo toDo) {
        toDoService.addToDo(toDo);
    }

    @PutMapping(value = "/todo")
    public void putToDo(@RequestBody final ToDo toDo) {
        toDoService.putToDo(toDo);
    }

    @DeleteMapping(path = "/todo/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void removeToDo(@PathVariable("id") final Integer id) {
        toDoService.removeToDo(id);
    }

}
