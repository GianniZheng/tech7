window.addEventListener("load", async () => {
    const response = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQD3t7qhYAWfsfjaVuqNjHlS-x68wbbPyjLTm1r7y6NnJaAtUzP7GnlnNfgkYv3blnWc1-oO0IdqeJMYe9l5ghqVyfaXf6Tb-cHJfzGbFk822wsYCADB7ndHJ6Gw3n1peRcguPnxfXTBz9_t2IRpnRUeBIOVe43gVM4QYPsUoU9xXxUsXKuQuo6LNUAJ247QUTZnA4P8njPkm67c0NjVyiVJ8lllFnkrlxKIZpqCC7lai4axpvDZFo1pcrermrIqou4KQFXQNIGNmokbc7YYkxxAUgrg9c2DdgdAVfrOYAWIZmTGKlX-YfkK5uWbOnNHJdCEtvVbbP0cYhbvgpUMX22XA3N7IfE",
      },
    });

    const result = await response.json();

    const elementContainerUsername = document.querySelector(".container-username");
  
    elementContainerUsername.innerHTML = `
    <p class="username">${result.display_name}</p>
    `;
  });
  