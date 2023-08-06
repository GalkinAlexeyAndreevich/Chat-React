
create proc addDialogForTwo
@id_first_user int,
@id_second_user int
as
declare @check int
exec checkDialogForTwo @id_first_user,@id_second_user, @check output
if @check=0
return
declare @id_dialog int
insert into dialog(dialog_status) values(0)
select @id_dialog=max(id_dialog) from dialog
insert into usersDialog(id_dialog,id_user,id_role) values(@id_dialog,@id_first_user,1)
insert into usersDialog(id_dialog,id_user,id_role) values(@id_dialog,@id_second_user,1)

