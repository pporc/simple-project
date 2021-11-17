class AuthService {
  login = (data) => {
    return new Promise((resolve, reject) => {
      const accounts = localStorage.getItem("accounts");
      const account = JSON.parse(accounts).filter(
        (val) => data.email === val.email && data.password === val.password
      );

      if (!account[0]) reject({ error: "user data is not correct" });

      resolve(account[0]);
    });
  };

  registerAccount = (accountData) => {
    const accounts = localStorage.getItem("accounts") || "[]";
    console.log(accounts);
    localStorage.setItem(
      "accounts",
      JSON.stringify([accountData, ...JSON.parse(accounts)])
    );
  };
}

export const AuthApi = new AuthService();
