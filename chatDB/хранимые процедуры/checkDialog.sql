
create proc checkDialog
@id_dialog int,
@answer bit output
as
set @answer=0
select @answer=1 from dialog
where id_dialog = @id_dialog
if @answer=0
print 'Диалог по id ' + convert(varchar(15),@id_dialog) + ' не найден'