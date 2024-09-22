# Portal Berita Sederhana

Portal Berita Sederhana is a website designed to facilitate news management with CRUD (Create, Read, Update, Delete) features. Utilizing Laravel, Laravel Breeze, and Inertia, this site offers an intuitive and responsive interface, allowing users to easily create, read, edit, and delete news efficiently.

## Tech Stack

- **Laravel 10**
- **MySQL Database**
- **Inertia - ReactJS**
- **TailwindCSS**
- **daisyUI**

## Features

- Main features available in this application:
  -Login & Register
  - CRUD (Create, Read, Update, Delete) news management

## Installation

Follow the steps below to clone and run the project in your local environment:

1. Clone repository:

    ```bash
    git clone https://github.com/Akbarwp/Portal-Berita-Sederhana.git
    ```

2. Install dependencies use Composer and NPM:

    ```bash
    composer install
    npm install
    ```

3. Copy file `.env.example` to `.env`:

    ```bash
    cp .env.example .env
    ```

4. Generate application key:

    ```bash
    php artisan key:generate
    ```

5. Setup database in the `.env` file:

    ```plaintext
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel_berita
    DB_USERNAME=root
    DB_PASSWORD=
    ```

6. Run migration database:

    ```bash
    php artisan migrate
    ```

7. Run website:

    ```bash
    npm run dev
    php artisan serve
    ```

## Screenshot

- ### **News page**

<img src="https://github.com/user-attachments/assets/ddf61ba4-8a4b-4543-a1a6-248a4d995d1b" alt="Halaman Berita" width="" />
&nbsp;&nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/7c502d19-0210-42da-9233-d2ad7d44c73a" alt="Halaman Ubah Berita" width="" />
&nbsp;&nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/1aca90b8-2893-4280-84fa-c90e6f9aa84a" alt="Halaman Tambah Berita" width="" />
&nbsp;&nbsp;&nbsp;
<br><br>
