
 
 // Function to retrieve the value of a cookie by its name
export function getCookie(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if this cookie contains the name we're looking for
    if (cookie.startsWith(cookieName + '=')) {
      // Return the value of the cookie
      return cookie.substring(cookieName.length + 1);
    }
  }
  // Return null if the cookie is not found
  return null;
}

// Log out 

// Function to set the expiration of a cookie to delete it
function deleteCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
  
  // Function to retrieve the value of a cookie by its name

  
  // Logout function
  export function logout() {

    // Delete the access_token cookie
    deleteCookie('accessToken');
    // Perform other logout actions (e.g., redirecting to login page)

  }