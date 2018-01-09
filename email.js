 function check( email_address )
 {
  var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
  if ( regex.test( email_address ) )
  {
    
   var user_name = email_address.replace( regex, "$1" );
   var domain_name = email_address.replace( regex, "$2" );
   var alert_string = "您输入的电子邮件地址合法\n\n";
   alert_string += "用户名：" + user_name + "\n";
   alert_string += "域名：" + domain_name;
   window.alert( alert_string );
   return true;
  }
  else
  {
   window.alert( "您输入的电子邮件地址不合法" );
   return false;
  }
 }