package org.poc.todoapp.repository;

import org.poc.todoapp.domain.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Jpa related configuration and session information is injected by spring automatically.
 *
 * @author rajababu 2/28/2018 10:16 AM
 */
@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Integer> {

}
