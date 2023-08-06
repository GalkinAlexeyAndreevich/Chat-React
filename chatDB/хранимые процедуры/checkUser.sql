
create proc checkUser
@id_user int,
@answer bit output
as
set @answer=0
select @answer=1 from users
where id_user = @id_user
if @answer=0
print 'Пользователь по id ' + convert(varchar(15),@id_user) + ' не найден'
