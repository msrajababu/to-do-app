package org.poc.todoapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author rajababu 2/28/2018 9:40 PM
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {
    private static final long serialVersionUID = 528745997767928481L;

    public BadRequestException(final String message) {
        super(message);
    }

    public BadRequestException(final String message, final Throwable throwable) {
        super(message, throwable);
    }
}
