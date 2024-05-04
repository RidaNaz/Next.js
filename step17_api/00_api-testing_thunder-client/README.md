### What is Thunder Client?
Thunder Client is a popular **extension** of Visual Studio Code *(VS Code)*. With Thunder Client, you can:

* Send ***HTTP requests*** (GET, POST, PUT, DELETE, etc.) with custom *headers, body, and query parameters*.
* ***View responses*** in a readable format, including ***JSON*** and ***XML***.
* ***Save*** and ***manage API requests*** for future use.
* ***Import and export requests*** for collaboration or reuse.

# API testing with Thunder Client
Here I am using **[Simple Books API](https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md)** for testing : *https://simple-books-api.glitch.me* (This is the base URL)

#### Common steps that must be followed
* ***Install*** Thunder Client extension in VSCode, ***Open*** it & create a ***New Request***.
* Set the ***HTTP Method*** & enter the ***URL***, (***Header & Body content***, when required).
* ***Send the Request*** & ***View the response*** in the Thunder Client panel.

## 1. GET Method
* To get a **list of books**, Add endpoint in the base URL like:

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_1.jpg)

* You can also get detailed **information about a book**:

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_2.jpg)

* You can also **view all of your orders** (To see orders you first have to **post an order**).

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_3.jpg)

* You can also **view your specific order** by giving orderId:

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_4.jpg)

To get orders you need [Authentication](/step17_api/00_api-testing_thunder-client/README.md#api-authentication)

## 2. POST Method
* If you want to **submit a new order**, Follow steps:

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_5.jpg)

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_6.jpg)

To post orders you need [Authentication](/step17_api/00_api-testing_thunder-client/README.md#api-authentication)

## 3. PATCH Method
* You can **Update an existing order** by selecting `PATCH` method and providing specific orderId (but in simple books API, You can change `customerName` only) :

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_7.jpg)

It also requires [Authentication](/step17_api/00_api-testing_thunder-client/README.md#api-authentication) & after sending a request you get `Status: 204` (it means your order is ***updated successfully***).

## 4. DELETE Method
* You can also **delete your order** by selecting `DELETE` method and providing orderId:

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_8.jpg)

It also requires [Authentication](/step17_api/00_api-testing_thunder-client/README.md#api-authentication) & after sending a request you get `Status: 204` (it means your order is ***deleted successfully***).

## API Authentication
* To submit, view, update or delete an order, you need to register your ***API client***.
* Provide `clientName` and `clientEmail` in body then the response will generate `accessToken`.
* Now, you can use this generated token in `Auth > Bearer`.

![App Screenshot](/step17_api/00_api-testing_thunder-client/public/api_9.jpg)

- The access token is ***valid for 7 days***.
- **Possible errors** : ***Status code 409 - "API client already registered."*** Try changing the values for `clientEmail` and `clientName`.

