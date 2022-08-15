-- migrate:up
CREATE TABLE scores(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    score INT NOT NULL,
    CONSTRAINT scores_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
)

-- migrate:down

