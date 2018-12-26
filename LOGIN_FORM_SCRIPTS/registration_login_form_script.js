function register() {
        event.preventDefault();
        var username_entry = document.getElementById("register_username").value; 
        var password_entry = document.getElementById("register_password").value; 
		
		    console.log(username_entry);
        if (localStorage.getItem(username_entry) === null) {
            localStorage.setItem(username_entry, password_entry);
        }
	}
      
    function login () {
        event.preventDefault();
        var username_val = document.getElementById("login_username").value; 
        var password_val = document.getElementById("login_password").value;

        if (localStorage.getItem(username_val) === password_val) {
            if (username_val == "admin") 
                window.open("ADMIN/adminpage.html");
            else
                window.open("USER/userpage.html")    
        }  else {
            alert ("%% Login Failed");
        }   
    }
    
    function forget_passwd() {
            event.preventDefault();
            window.location.href="LOGIN_FORM_SUPPORT_HTML/forgot.html";
    }

    function showpswd (){
            event.preventDefault();
            var username_val = document.getElementById("usr").value; 
            var password_val =  localStorage.getItem(username_val);
            document.getElementById("show_password").innerHTML = password_val;
    }

