# Todo Take Home

### Screenshots

<img width="1440" alt="Screenshot 2022-11-28 at 3 28 31 PM" src="https://user-images.githubusercontent.com/5723692/204402409-0107504a-73ae-40e3-b268-e1b8e11d960d.png">


<img width="1440" alt="Screenshot 2022-11-28 at 3 17 01 PM" src="https://user-images.githubusercontent.com/5723692/204402447-9f7ce256-7411-41c5-b800-6b5fc3f093cd.png">


<img width="1440" alt="Screenshot 2022-11-28 at 3 16 46 PM" src="https://user-images.githubusercontent.com/5723692/204402474-83240d11-39de-48e1-a259-7f77f7e53b7c.png">



<img width="1440" alt="Screenshot 2022-11-28 at 2 43 19 PM" src="https://user-images.githubusercontent.com/5723692/204397848-863fd3b2-cf6b-4a7e-8275-41634f177bb0.png">



<img width="1440" alt="Screenshot 2022-11-28 at 2 43 55 PM" src="https://user-images.githubusercontent.com/5723692/204397789-eed5391d-39d7-41a3-a85c-834effe7dd7e.png">



<img width="1440" alt="Screenshot 2022-11-28 at 2 44 49 PM" src="https://user-images.githubusercontent.com/5723692/204397720-a329b25d-8af5-469b-83d3-0c8463558169.png">



## 🚀 Quick start

First, clone the repo:

```
git clone https://github.com/Mvrs/todo-take-home
```

Then install dependencies:

```
cd todo-take-home && yarn install
```

Start
```
yarn dev
```

## 🧐 What's Inside?

- React Hook Form 
- React 18
- React Testing Library + Jest
- TypeScript
- Localstorage API
- Inline Styles ( quick shortcuts :) ) + CSS
- Route Route v6.4


## Folder Structue

```
--src
    --assets
    --components
        - input.tsx
        - protected-route.tsx
    --lib
        - items.ts
        - kebab-case.ts
    --modules
        - todo
            - components
                - header.tsx
                - new-todo-item.tsx
                - todo-item.tsx
                - todo-list.tsx
    --pages
        - index.tsx
        - login.tsx
        - todo.tsx
    --test
        - items.test.ts
        - setup.ts
    --main.tsx
```

### Login Page


1. [x] A title should appear as “Rapptr Labs”. It should be centered horizontally regardless of the page dimensions.
2. Login Form
    - 1. [x]: The login form should contain two fields: Email and Password.
    - 2. [x]: The form should validate onChange.
    - 3. [x]: The form should submit when the user clicks on the login button OR presses enter
while focused on the email or password field.
    - 4. [x]: While the form is being submitted, the Login button should not be clickable.
    - 5. [x]: If the form has not passed validation, the form cannot be submitted and the button’s
background and text should be at half opacity.
    - 6. [x]: Email field:
          - i. [x]: A title exists labeled “Password” as per the mockup
          - ii. [x]: Email should have a persistence account icon that should always appear on the
left side of the input.
          - iii. [x]: The text content should always come after the icon.
          - iv. [x]: The field should use a placeholder for “user@rapptrlabs.com”.
          - v. [x]: If content exists, the placeholder should not appear (standard for forms).
          - vi. [x]: The content should be a valid email address and should be no more than 50
characters.
          - vii. [x]: If the email has a validation error, the error should be displayed below the input
field and the border of said field should turn red.
            - **1** [x]: An error should not appear if the field has not yet been touched.
    - 7. [x] Password Field: 
          - i. [x]: A title exists labeled “Password” as per the mockup
          - ii. [x]: Password should have a persistence lock icon that should always appear on the left side of the input.
          - iii. [x]: The text content should always come after the icon.
          - iv. [x]: The field should use a placeholder for “Must be at least 4 characters”.
          - v. [x]: If content exists, the placeholder should not appear (standard for forms).
          - vi. [x]: The content should be at least 4 characters and should be no more than 16
characters.
          - vii. [x]: If the password has a validation error, the error should be displayed below the
input field and the border of said field should turn red.
            - **1** [x]: An error should not appear if the field has not yet been touched.
3. [x] Form Submission: 
    - a. [x]: a. When the form has been successfully submitted passing all validation errors, call the
following API: http://dev.rapptrlabs.com/Tests/scripts/user-login.php
      - i. [x]: This API endpoint needs to be called with a POST request.
      - ii. [x]: It takes two body params: email and password.
      - iii. [x]: For testing purposes, use the following email and password:
test@rapptrlabs.com / Test123.
      - iv. [x]: A successful response will look like the following:
          ```
          {
            "user_id": 16,
            "user_email": "test@rapptrlabs.com"
            "user_username": "testuser"
            "user_is_active": 1,
            "user_profile_image": "http://dev
            rapptrlabs.com/Tests/images/taylor_avatar.png"
            "user_last_active_epoch": 1544680026,
            "user_creation_epoch": 1544713200,
            "user_is_new": 1,
            "user_token":
            "6dd4737a8b7ec61313ae5e900420d46815e
            d13b2902be71b97a8fbf1f421a3e"
          }
          ```
      - v. [x]: Note: In a normal environment, the user_token would be used to make
authenticated requests, but that is outside the scope of this test.

### List Page

1. [x]: The list displays current to-do items.
2. [x]: Clicking on the new button adds a new to-do form with a save button (see edit state in
mockup).
3. [x]: The to-do text needs to have at least one character and at most 25 characters.
4. [x]: Clicking save adds the item to the list and changes the item to the normal state.
5. [x]: Clicking on the pencil icon changes the item into an edit state.
6. [x]: Clicking on the trash icon removes the item from the list.
7. [x]: Typing something in the search bar filters the list, case insensitive.
8. [x]: The list can have an unlimited number of entries.
9. [x]: There is no special empty state. An empty list is fine.
10. [x]: Persist the data between sessions (local storage is fine).
11. [x]: A logout button exists on the top right. Clicking the logout button will log the user out and
return him or her to the login screen.


### Note

The Form Submission for the provided endpoint produced CORS errors, and it seems that
no matter what solution I tried I was seeing `preflight` issues. Tried extensions for both Mozilla and Chrome. Digging deeper into the I noticed the connection was closed. 


