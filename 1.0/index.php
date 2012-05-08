<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html> 
    <head> 
        <title>Login | MailChimp - email marketing made easy</title>  
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <meta name="copyright" content="Copyright (c) 2012 MailChimp. All Rights Reserved."> 
        <meta http-equiv="imagetoolbar" content="false"> 
        <meta name="MSSmartTagsPreventParsing" content="true"> 
        <link rel="stylesheet" type="text/css" href="css/screen.css"> 
        <link rel="stylesheet" type="text/css" href="css/logins.css">
        <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/dojo/1.7.2/dojo/dojo.js"></script>
        <!--[if lte IE 6]>
            <link rel="stylesheet" type="text/css" href="css/ie6.css" />
        <![endif]--> 
        <!--[if IE 7]>
            <link rel="stylesheet" type="text/css" href="css/ie7.css" />
        <![endif]--> <!--[if IE 8]>
            <link rel="stylesheet" type="text/css" href="css/ie8.css" />
        <![endif]-->
        <script type="text/javascript">
            dojo.addOnLoad(function() {
                var showpass = false;
                
                if(dojo.byId('show-password')) {
                    dojo.byId('show-password').onclick=function(){
                        var obj = dojo.byId('password');
                        var passInput=document.createElement('input');
                        if(showpass == false){
                            passInput.setAttribute('type','text');
                            showpass=true;
                        }else{
                            passInput.setAttribute('type','password');
                            showpass=false;
                        }
                        passInput.setAttribute('name',obj.getAttribute('name'));
                        passInput.setAttribute('id',obj.getAttribute('id'));
                        passInput.setAttribute('value',obj.value);
                        obj.parentNode.replaceChild(passInput,obj);
                        passInput.focus();
                    }
                }

                document.onkeypress=function(e){
                    var keycode = (e==null) ? keycode = event.keyCode : ((keycode = e.which));
                    var targetEl;
                    var shift_status = false;
				
                    if(dojo.isIE){
                        targetEl = event.srcElement;
                        shift_status = event.shiftKey;
                    }else{
                        if(e.target){
                            targetEl = e.target;
                        }else if(e.srcElement){
                            targetEl = e.srcElement;
                        }
					
                        if(e.shiftKey){
                            shift_status = e.shiftKey;
                        }else if(e.modifiers){
                            shift_status = !!(e.modifiers & 4);
                        }
                    }
				
                    if((keycode >= 65 && keycode <= 90 ) || (keycode >= 97 && keycode <= 122) && shift_status){
                        targetEl.setAttribute('class','caps');
                        targetEl.setAttribute('className','caps');
                    }else{
                        targetEl.setAttribute('class','');
                        targetEl.setAttribute('className','');
                    }
                }  
            });
        </script>

    </head> 
    <body id="login" class="new_teal">   
        <div id="login-box"> 
            <div id="outer-content"> 
                <div id="av-flash-block">    
                </div> 
                <div id="content">  
                    <div id="login-image">  </div> 
                    <div id="login-form-wrap"> 
                        <h1 id="logotype">MailChimp</h1> 
                        <div id="page-heading"></div> 
                        <div id="av-content"> 
                            <form action="/login/post/" id="login-form" method="POST"> 
                                <fieldset> 
                                    <legend>Secure Login</legend>
                                    <input type="hidden" name="referrer" class="av-hidden" value="/" id="referrer"> 
                                    <input type="hidden" name="from" class="av-hidden" value="" id="from"> 
                                    <label for="username" class=""><a href="/login/forgot-username/" class="login-forgot-link">forgot username</a> Username</label> 
                                    <input type="text" name="username" tabindex="1" class=" av-text" value="" id="username"> 
                                    <div id="password-group"> 
                                        <label for="password" class=""><a href="/login/forgot/" class="login-forgot-link">forgot password</a> Password</label> 
                                        <input type="password" name="password" tabindex="2" class=" av-password" value="" id="password"> 
                                        <span id="show-password-group">
                                            <input type="checkbox" data-dojo-type="dijit.form.CheckBox" name="show-password" id="show-password" value="1" class="av-checkbox"> 
                                            <label for="show-password" class="inline-label">show password</label>
                                        </span> 
                                        <div id="remember-me-group">
                                            <input type="checkbox" data-dojo-type="dijit.form.CheckBox" name="remember-me" id="remember-me" value="1" class="av-checkbox"> 
                                            <label for="remember-me" class="inline-label">remember me</label> 
                                        </div>
                                        <div class="clear"></div> 
                                    </div> 
                                    <input type="submit" value="log in" class="button float-left" tabindex="3" onclick="this.value='please wait...'; setTimeout(function() { this.disabled=true; dojo.addClass(this, 'disabled'); }, 0);"> 
                                    <p id="signup" class="float-left">Don't have an account? <a href="http://www.mailchimp.com/signup/" title="Signup for a MailChimp account">Sign Up</a></p> 
                                </fieldset> 
                            </form>
                            <script type="text/javascript">
                                document.getElementById('username').focus();
                                document.getElementsByTagName('html')[0].className += " new_teal";
                            </script>
                        </div> 
                        <br class="clear"> 
                    </div> <br class="clear"> 
                </div> 
            </div> 
            <div id="footer_links"> 
                <ul> 
                    <li><a href="http://www.twitter.com/mailchimp/" title="Follow Us on Twitter" class="icon16 icon-Twitter-16x16" target="_blank">Follow Us</a></li> 
                    <li><a href="http://www.facebook.com/mailchimp/" title="Become a Fan on Facebook" class="icon16 icon-FaceBook-16x16" target="_blank">Become a Fan</a></li>  
                    <li><a href="http://alteregoapp.com" title="AlterEgo 2-Factor Security" class="icon16 icon-alterego_16" target="_blank">Enhance Security</a></li> 
                </ul> 
            </div> 
        </div> 
    </body> 
</html>