<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html> 
    <head> 
        <title>Login | MailChimp - email marketing made easy</title>  
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <meta name="copyright" content="Copyright (c) 2012 MailChimp. All Rights Reserved."> 
        <meta http-equiv="imagetoolbar" content="false"> 
        <meta name="MSSmartTagsPreventParsing" content="true"> 
        <link rel="stylesheet" type="text/css" href="screen.css"> 
        <link rel="stylesheet" type="text/css" href="logins.css"> 
        <!--[if lte IE 6]>
            <link rel="stylesheet" type="text/css" href="ie6.css" />
        <![endif]--> 
        <!--[if IE 7]>
            <link rel="stylesheet" type="text/css" href="ie7.css" />
        <![endif]--> <!--[if IE 8]>
            <link rel="stylesheet" type="text/css" href="ie8.css" />
        <![endif]--> 
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
                                    <input type="hidden" name="referrer" class="av-hidden" value="/" id="referrer"> 
                                    <input type="hidden" name="from" class="av-hidden" value="" id="from"> 
                                    <fieldset> <legend>Secure Login</legend> 
                                        <label for="username" class=""><a href="/login/forgot-username/" class="login-forgot-link">forgot username</a> Username</label> 
                                        <input type="text" name="username" tabindex="1" class=" av-text" value="" id="username"> 
                                        <div id="password-group"> <label for="password" class=""><a href="/login/forgot/" class="login-forgot-link">forgot password</a> Password</label> 
                                            <input type="password" name="password" tabindex="2" class=" av-password" value="" id="password"> 
                                            <span id="show-password-group"> <input type="checkbox" dojotype="dijit.form.CheckBox" name="show-password" id="show-password" value="1" class="av-checkbox"> 
                                                <label for="show-password" class="inline-label">show password</label> </span> 
                                            <div id="remember-me-group"> <input type="checkbox" dojotype="dijit.form.CheckBox" name="remember-me" id="remember-me" value="1" class="av-checkbox"> 
                                                <label for="remember-me" class="inline-label">remember me</label> 
                                            </div> 
                                            <div class="clear"></div> 
                                        </div> 
                                        <input type="submit" value="log in" class="button float-left" tabindex="3" onclick="this.value='please wait...'; setTimeout(function() { this.disabled=true; dojo.addClass(this, 'disabled'); }, 0);"> 
                                        <p id="signup" class="float-left">Don't have an account? <a href="http://www.mailchimp.com/signup/" title="Signup for a MailChimp account">Sign Up</a></p> 
                                    </fieldset> 
                                </form> 
                            </div> 
                            <br class="clear"> 
                        </div> <br class="clear"> 
                </div> 
            </div> 
            <div id="footer_links"> 
                <ul> 
                    <li><a onclick="_gaq.push(['_trackEvent', document.title, 'login link', 'twitter']);" href="http://www.twitter.com/mailchimp/" title="Follow Us on Twitter" class="icon16 icon-Twitter-16x16" target="_blank">Follow Us</a></li> 
                    <li><a onclick="_gaq.push(['_trackEvent', document.title, 'login link', 'facebook']);" href="http://www.facebook.com/mailchimp/" title="Become a Fan on Facebook" class="icon16 icon-FaceBook-16x16" target="_blank">Become a Fan</a></li>  
                    <li><a onclick="_gaq.push(['_trackEvent', document.title, 'login link', 'AlterEgo']);" href="http://alteregoapp.com" title="AlterEgo 2-Factor Security" class="icon16 icon-alterego_16" target="_blank">Enhance Security</a></li> 
                </ul> 
            </div> 
        </div> 
    </body> 
</html>