<meta charset="utf-8">
<%
dim uname,upass
uname=Trim(Request("username"))
upass=Trim(Request("password"))
if uname="13764011245" and upass="123456" then
%>
{
    "status": 1,
    "message": "登录成功！",
    "data": {
        "id": 1,
        "hid": 1,
        "username": "13585876819",
        "name": "任刚",
        "mobile": "13764011245",
        "status": 1,
        "accessToken": "werwerwer332wer3",
        "createTime": "2017-06-08 20:11:45",
        "isAdmin": 1,
        "gender": 0
    }
}
<%else%>
{
    "status": 0,
    "message": "用户名或密码错误！",
    "data": ""
}
<%end if%>