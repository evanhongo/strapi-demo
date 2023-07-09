# Login with a Third Party Login Provider

## Understanding the login flow[](https://docs.strapi.io/dev-docs/plugins/users-permissions#understanding-the-login-flow "Direct link to Understanding the login flow")

Let's say that:

-   Strapi's backend is located at: `strapi.website.com`, and
-   Your app frontend is located at: `website.com`

1.  The user goes on your frontend app (`https://website.com`) and clicks on your button `connect with Github`.
2.  The frontend redirects the tab to the backend URL: `https://strapi.website.com/api/connect/github`.
3.  The backend redirects the tab to the GitHub login page where the user logs in.
4.  Once done, Github redirects the tab to the backend URL:`https://strapi.website.com/api/connect/github/callback?code=abcdef`.
5.  The backend uses the given `code` to get an `access_token` from Github that can be used for a period of time to make authorized requests to Github to get the user info.
6.  Then, the backend redirects the tab to the url of your choice with the param `access_token` (example: `http://website.com/connect/github/redirect?access_token=eyfvg`).
7.  The frontend (`http://website.com/connect/github/redirect`) calls the backend with `https://strapi.website.com/api/auth/github/callback?access_token=eyfvg` that returns the Strapi user profile with its `jwt`.  
    (Under the hood, the backend asks Github for the user's profile and a match is done on Github user's email address and Strapi user's email address).
8.  The frontend now possesses the user's `jwt`, which means the user is connected and the frontend can make authenticated requests to the backend!


## Environment Variables
| Name                      | Description                                        | Example                 |
| ------------------------- | -------------------------------------------------- | ----------------------- |
| **REACT_APP_BACKEND_URL** | **Required.** The absolute url of your Strapi app. | `http://localhost:1337` |

## Troubleshooting

Make sure you have set the correct backend url using the env variable `REACT_APP_BACKEND_URL`.
If you're using ngrok, the backend url should be the ngrok url, otherwise it should probably be `http://localhost:1337`.

---

# Reference

- ## [Strapi - Users & Permissions plugin](https://docs.strapi.io/dev-docs/plugins/users-permissions#providers)