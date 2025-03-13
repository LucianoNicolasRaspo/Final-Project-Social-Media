function checkSession() {
  fetch('/session')
    .then(response => response.json())
    .then(data => {
      const loginLogoutDiv = document.getElementById('loginlogout');
      const userCurrentDiv = document.getElementById('userCurrent');
      const createPostDiv = document.getElementById('createPost');

      if (!loginLogoutDiv || !userCurrentDiv || !createPostDiv) {
        console.error("No found element DOM.");
        return;
      }

      if (data.loggedIn) {
        loginLogoutDiv.innerHTML = `
          <button class="btn btn-danger" onclick="logout()">Logout</button>
        `;
        userCurrentDiv.innerHTML = `
          <span style="color: rgb(0, 102, 255); font-size: 22px; font-weight: bold;">
            Welcome, ${data.username}!
          </span>
        `;
        createPostDiv.innerHTML = `
        <button class="btn btn-outline-primary" onclick="postPage()">Create Post</button>
      `;
      } else {
        window.alert("You must log in first!");
        window.location.href = "/login";
        loginLogoutDiv.innerHTML = `
              <a style="font-size: larger; padding: 10px 20px; background-color: white; color: rgb(22, 64, 255); 
        text-decoration: none; border-radius: 5px; cursor: pointer;" href="/login" class="btn btn-light btn-sm" style="margin-right: 10px;">Login</a>
              <a style="font-size: larger; padding: 10px 20px; background-color: white; color: rgb(22, 64, 255); 
        text-decoration: none; border-radius: 5px; cursor: pointer;" href="/register" class="btn btn-warning btn-sm">Register</a>
        `;
        userCurrentDiv.innerHTML = '';
      }
    })
    .catch(error => {
      console.error('Error fetching session data:', error);
      window.alert("Error verifying session. Please log in.");
      window.location.href = "/login";
      document.getElementById('loginlogout').innerHTML = `
              <a style="font-size: larger; padding: 10px 20px; background-color: white; color: rgb(22, 64, 255); 
        text-decoration: none; border-radius: 5px; cursor: pointer;" href="/login" class="btn btn-light btn-sm" style="margin-right: 10px;">Login</a>
              <a style="font-size: larger; padding: 10px 20px; background-color: white; color: rgb(22, 64, 255); 
        text-decoration: none; border-radius: 5px; cursor: pointer;" href="/register" class="btn btn-warning btn-sm">Register</a>
      `;
    });
}

function postPage(){
  fetch('/post')
  .then(() => {
    window.location.href = '/post.html';
  })
  .catch(error => console.error('Error logging out:', error));
}
function logout() {
  fetch('/logout')
    .then(() => {
      window.alert("User Logout");
      window.location.href = '/';
    })
    .catch(error => console.error('Error logging out:', error));
}
