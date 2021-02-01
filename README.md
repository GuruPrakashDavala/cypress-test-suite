# Laravel with Cypress tests

Laravel application with an authentication starter kit laravel breeze, cypress tests and homestead development environment.

## Getting Started

These instructions will get you a copy of the project up and running on your virtual box for development and testing purposes.

### Prerequisites

- [Vagrant](https://www.vagrantup.com/) (2.2.1+)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

### Installing

1. Make sure that `IP Address and URL` are added at the bottom of the hosts file. The directory of the host file is `C:/Windows/System32/drivers/etc/hosts`. It is very important that these match with the site name in the `Homestead.yaml` file.
```
192.168.10.10 homestead.test 
```

2. Clone the repository and change the `map:` path to your project `directory` in `Homestead.yaml` file.
```
folders:
    -
        map: 'C:\laravel-apps\sphera-assessment'
        to: /home/vagrant/code
```

3. Run `vagrant up` in the project directory.
4. After provisioning you can access the application:
- through the URL - [http://homestead.test/](http://homestead.test/)
5. To get access to the box and the features provided by Homestead, SSH into it, then change to the `code` directory:
```
vagrant ssh
cd code
```
From here, you can run NPM, composer, git and more. You can also run Laravel commands with:
```
php artisan
```
Run this command in the project directory to generate database migrations
```
php artisan migrate
```

## Connecting to Database

**Homestead** by default creates a database with name `homestead` and credentials `homestead / secret`. This application uses the default `homestead` database.

To connect to the mysql database from ssh run this from the `code` directory:
```
mysql -u homestead -p
password: secret
```
To view database:
```
SHOW DATABASES;
```

## Running the Cypress tests

To run `Cypress` tests

1. Run `npm install` from `code` directory to install the node modules. This installs all node modules from package.json.
Includes `cypress@6.3.0 `.
```
npm install
```

2. Make sure the application is up and running. To serve application run this command from `code` directory:
```
php artisan serve
```

3. Once the application is up. Run Cypress tests from `code` directory:
```
npx cypress run
```
This automatically runs `Authentication.spec.js` file with Electron browser in the command line. 
Please wait until all tests finish executing. Once it is completed the result can be seen in the command line.

### Solution for common errors while running Cypress tests in Linux Command line 
1. Xvfb dependency error
```
Your system is missing the dependency: Xvfb

Install Xvfb and run Cypress again.

Read our documentation on dependencies for more information:

https://on.cypress.io/required-dependencies

If you are using Docker, we provide containers with all required dependencies installed.

----------

Error: spawn Xvfb ENOENT

----------

Platform: linux (Ubuntu - 20.04)
Cypress Version: 6.3.0
```

This issue can be solved by installing Xvbf in linux from `code` directory:
```
sudo apt-get install xvfb
```
2. Cypress verification time out error
```
Cypress verification timed out.

This command failed with the following output:

/home/vagrant/.cache/Cypress/6.3.0/Cypress/Cypress --no-sandbox --smoke-test --ping=827

----------

Command timed out after 30000 milliseconds: /home/vagrant/.cache/Cypress/6.3.0/Cypress/Cypress --no-sandbox --smoke-test --ping=827
Timed out

----------

Platform: linux (Ubuntu - 20.04)
Cypress Version: 6.3.0
```

This issue can be solved by executing the below command from `code` directory:
```
npx cypress verify
```

## Built With

- [Laravel](https://laravel.com/) - The web framework used
- [Cypress](https://www.cypress.io/) - Cypress test runner
- [Node.js](https://nodejs.org/en/) - Javascript runtime environment

## Documentation
Full official documentation of original Homestead project [is located here](http://laravel.com/docs/homestead).
