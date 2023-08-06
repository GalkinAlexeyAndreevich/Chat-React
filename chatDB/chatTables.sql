
create table users(
id_user int primary key identity,
login_user varchar(100) not null,
password_user varchar(255) not null,
email varchar(70),
phone varchar(15),
date_create date default(GETDATE()),
firstName varchar(45),
lastName varchar(45),
patronomic varchar(45),
home_address varchar(100),
gender varchar(7) check(gender in('male','female')),
about varchar(200),
date_update date default(GETDATE()),
birthday date,
photo image,
)

create table userOnline(
id_user int primary key,
active_status varchar(40) not null default('offline') CHECK (active_status IN('offline', 'online')),
date_update date
foreign key(id_user) references users(id_user)
)

create table subscribes(
id_user_from int not null, 
id_user_to int not null,
check(id_user_to != id_user_from),
primary key(id_user_from,id_user_to),
foreign key(id_user_from) references users(id_user),
foreign key(id_user_to) references users(id_user)
)
create table dialog(
id_dialog int primary key identity,
dialog_create date default(GETDATE()),
dialog_status int not null check(dialog_status in(0,1,2)), /*0-1 на 1, 1-группа человек,2-чат бот*/
/*Для группы имя диалога и id создателя*/
dialog_name varchar(70),
id_creator int,
foreign key(id_creator) references users(id_user)
)
create table role_user(
id_role int primary key identity,
role_name varchar(50) not null,
main_function varchar(200)
)
create table usersDialog(
id_dialog int not null,
id_user int not null,
id_role int not null,
foreign key(id_dialog) references dialog(id_dialog),
foreign key(id_user) references users(id_user),
foreign key(id_role) references role_user(id_role),
primary key(id_dialog,id_user)
)

create table messageC(
id_message int primary key identity,
id_dialog int not null,
id_sender int not null, 
content varchar(500) not null, /*Заменить на blob*/
message_time date default(GETDATE()),
isRead bit default 0,
isDeleted bit default 0, 
foreign key(id_dialog) references dialog(id_dialog),
foreign key(id_sender) references users(id_user),
)
create table filesData(
id_file int primary key identity,
path_file varchar(255) not null
)
create table messageFile(
id_message int not null,
id_file int not null,
foreign key(id_message) references messageC(id_message),
foreign key(id_file) references filesData(id_file),
)
