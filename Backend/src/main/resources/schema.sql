CREATE TABLE role (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(256) NOT NULL
);

CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(256),
    prenom VARCHAR(256),
    email VARCHAR(256),
    adresse VARCHAR(256),
    id_role BIGINT,
    FOREIGN KEY (id_role) REFERENCES role(id)
);

CREATE TABLE sport (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    discipline VARCHAR(256),
    epreuve INTEGER,
    description VARCHAR(1024)
);

CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur BIGINT,
    montant INTEGER,
    date DATE,
    FOREIGN KEY (id_utilisateur) REFERENCES user(id)
);

CREATE TABLE ticket (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_sport BIGINT,
    id_order BIGINT,
    prix INTEGER,
    description VARCHAR(1024),
    FOREIGN KEY (id_sport) REFERENCES sport(id),
    FOREIGN KEY (id_order) REFERENCES orders(id)
);
