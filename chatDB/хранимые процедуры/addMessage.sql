
create proc addMessage
@id_dialog int,
@id_sender int,
@content varchar(500)
as

declare @check bit
exec checkAddMessage @id_dialog, @id_sender, @check output
if @check=0
return

insert into messageC(id_dialog,id_sender,content) 
values(@id_dialog,@id_sender,@content)



