insert into users(login_user,password_user) values
('Galkin Alexey','1'),
('Dvoyinishev Roman','1'),
('Lazy person','1'),
('Test','1')

insert into role_user(role_name) values
('user'),('admin'),('moderator'),('bot')

exec addDialogForTwo 1,2
exec addDialogForTwo 2,3
exec addDialogForTwo 1,3