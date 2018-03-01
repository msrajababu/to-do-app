package org.poc.todoapp.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpStatusCodeException;

/**
 * The exceptions below could be raised by any controller and they would be handled here if not handled in the
 * controller already.
 *
 * @author rajababu 2/28/2018 9:45 PM
 */
@RestControllerAdvice
public class GlobalRestControllerExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalRestControllerExceptionHandler.class);

    @ExceptionHandler(HttpStatusCodeException.class)
    public ResponseEntity<String> handleHttpStatusCodeException(final HttpStatusCodeException statusCodeException) {
        logger.error("HttpStatusCodeException:", statusCodeException);

        return new ResponseEntity<>(statusCodeException.getMessage(), statusCodeException.getStatusCode());
    }

    @ExceptionHandler(BadRequestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleBadRequestException(final BadRequestException badRequestException) {
        logger.error("BadRequestException:", badRequestException);

        return badRequestException.getMessage();
    }

    @ExceptionHandler(RuntimeException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String handleRuntimeException(final RuntimeException runtimeException) {
        logger.error("RuntimeException:", runtimeException);

        return runtimeException.getMessage();
    }

}
