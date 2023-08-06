
create proc checkAddMessage
@id_dialog int,
@id_sender int,
@check bit output
as
set @check=0
select @check=1  from dialog 
where id_dialog=@id_dialog and @id_sender in (select id_user from usersDialog where id_dialog=@id_dialog)

if @check = 0
print('Вы не можете написать в этом диалоге')
