package org.poc.todoapp.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author rajababu 2/28/2018 9:36 AM
 */
@Entity
@Table(name = "todo")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ToDo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotBlank
    private String name;

    @JsonProperty("isDone")
    private Boolean done;

    public int getId() {
        return id;
    }

    public void setId(final int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public Boolean isDone() {
        return done;
    }

    public void setDone(final Boolean done) {
        this.done = done;
    }

    @Override
    public int hashCode() {return Objects.hash(id, name, done);}

    @Override
    public boolean equals(final Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        final ToDo other = (ToDo) obj;
        return Objects.equals(this.id, other.id)
            && Objects.equals(this.name, other.name)
            && Objects.equals(this.done, other.done);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("ToDo{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", done=").append(done);
        sb.append('}');
        return sb.toString();
    }
}
