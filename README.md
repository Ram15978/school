## school platform

_验证格式_
http://localhost:8080/user_login.action?user.username=1

_需要放在一起_
@Resource(name = "communityService")
private CommunityService communityService;

_spring框架中的dbcp规定了连接的数据库_

login is completed

用户【登录、注册、修改密码、修改密码】

商品【增加、删除、查询、修改】
发布记录【增加、删除、修改、查询】
下单记录【增加、删除、修改、查询】
购买记录【增加、删除、修改、查询】

用户动作

登录----user
注册----user
修改密码----user
发布商品----商品信息表增加、发布记录表增加信息
下单商品----下单记录表增加信息
购买商品----商品数量减少、下单记录表状态改变、购买记录表增加信息
下架商品----商品状态改变、发布商品状态改变、

管理员动作

登录
注册
管理用户
管理商品

检查out中的配置问题
web元素检查：ctrl+shift+c & F12 

加入所需要的全部文件路径

action/按钮submit
