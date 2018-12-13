const signIn = (email, password) =>
  // eslint-disable-next-line quotes
  // eslint-disable-next-line no-undef
  fetch('http:/192.168.0.105/AppShop//login.php',
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email, password })
    }
  ).then(res => res.json());

export default signIn;
