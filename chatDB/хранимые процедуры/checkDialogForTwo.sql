
create proc checkDialogForTwo
@id_first_user int,
@id_second_user int,
@check_final bit output
as
set @check_final = 0
declare @check1 bit=0
declare @checkUser1 bit
declare @checkUser2 bit

if @id_first_user = @id_second_user
begin
print('тут могут быть только разные пользователи')
return
end

exec checkUser @id_first_user, @checkUser1 output
exec checkUser @id_second_user, @checkUser2 output
if @checkUser1=0 or @checkUser2=0
return

select @check1=1 from usersDialog where id_user=@id_first_user or id_user=@id_second_user
group by id_dialog
having count(id_user)=2
if @check1=1
begin
print('Этот чат на двоих уже существует')
return
end
set @check_final=1

