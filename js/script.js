async function fetchUserData() {
    const username = document.getElementById("username").value;
    const userCard = document.getElementById("user-data");
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
  
      const data = await response.json();
      
      // Populate user data in HTML elements
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").textContent = data.name || "No name provided";
      document.getElementById("bio").textContent = data.bio || "No bio available";
      document.getElementById("repos").textContent = data.public_repos;
      document.getElementById("followers").textContent = data.followers;
      document.getElementById("profile").href = data.html_url;
  
      // Display the card
      userCard.classList.remove("hidden");
    } catch (error) {
      alert("User not found. Please enter a valid GitHub username.");
      userCard.classList.add("hidden");
    }
  }
  