CREATE SCHEMA testy;
ALTER DATABASE `testy` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE testy;
CREATE TABLE pytania_mlodsze (
	tresc VARCHAR(500),
	pyt1 VARCHAR(200),
    pyt2 VARCHAR(200),
    pyt3 VARCHAR(200),
    pyt4 VARCHAR(200),
    odp int
);
ALTER TABLE `pytania_mlodsze` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO pytania_mlodsze VALUES ("Czy ma Pan/Pani poniżej 25 lat?", "Tak", "Nie", "", "", 0);
INSERT INTO pytania_mlodsze VALUES ("Co lubi Pan/Pani robić po pracy", "Pić", "Spać", "Grać", "Uczyć się", 3);

CREATE TABLE pytania_starsze (
	tresc VARCHAR(500),
	pyt1 VARCHAR(200),
    pyt2 VARCHAR(200),
    pyt3 VARCHAR(200),
    pyt4 VARCHAR(200),
    odp int
);
ALTER TABLE `pytania_starsze` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

INSERT INTO pytania_starsze VALUES ("Czy ma Pan/Pani powyżej 25 lat?", "Tak", "Nie", "", "", 0);
INSERT INTO pytania_starsze VALUES ("Jakiego koloru jest trawa", "Czarna", "Biała", "Zielona", "Różowa", 2);

CREATE TABLE wyniki_young (
	Imie VARCHAR(500),
	Kontakt VARCHAR(200),
    L_punkt int
);
ALTER TABLE `wyniki_young` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE wyniki_old (
	Imie VARCHAR(500),
	Kontakt VARCHAR(200),
    L_punkt int
);
ALTER TABLE `wyniki_old` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

