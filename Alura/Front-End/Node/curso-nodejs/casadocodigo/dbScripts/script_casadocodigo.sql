Create database nodelab;
use nodelab;

create table produtos (
    id int(11) auto_increment primary key, 
    titulo varchar(255),
    descricao text,
    preco decimal(10,2)
);

insert into produtos (titulo, descricao, preco) values ('Começando com NodeJS', 'Livro sobre nodejs', 40.00);
insert into produtos (titulo, descricao, preco) values ('Começando com JavaScript', 'Livro sobre javascript', 40.00);
insert into produtos (titulo, descricao, preco) values ('Começando com Express', 'Livro sobre express', 40.00);
insert into produtos (titulo, descricao, preco) values ('Indo além com JavaScript', 'Javascript avançado', 39.00);
insert into produtos (titulo, descricao, preco) values ('Mean Stack', 'Livro de Mean Stack', 29.90);

/* Banco de dados de teste*/
Create database casadocodigo_test;
use casadocodigo_test;

create table produtos (
    id int(11) auto_increment primary key, 
    titulo varchar(255),
    descricao text,
    preco decimal(10,2)
);
