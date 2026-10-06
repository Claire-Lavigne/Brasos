# Brasos

Website for the Brazilian Society of Osteoarthritis, Osteoporosis and Sarcopenia (BRASOS). Designed and built by our team in 2020, the site combines a custom WordPress theme with responsive front-end styling and interactive features.

**Technologies:** WordPress, PHP, Composer, HTML5, SCSS, JavaScript, jQuery, and NPM. Front-end libraries include UIKit, GSAP, ScrollMagic, Slick Carousel, and Reset CSS. WordPress tools include Advanced Custom Fields (including Repeater), Custom Post Types, Contact Form 7, WP Mail SMTP, and TranslatePress.

## Requirements

- PHP 8.5
- Composer
- MySQL or MariaDB
- Apache with `mod_rewrite` and `.htaccess` overrides

## Setup

1. Clone the repository and run `composer install`.
2. Create a database, then copy `wp-config-sample.php` to `wp-config.php` and enter its credentials and unique salts.
3. Set `WP_HOME` to the base site URL (for example, `http://localhost/Wordpress/Brasos`). It defaults to `http://localhost`; `/wp` and `/content` are appended for WordPress and content URLs.
4. Serve the repository root with Apache and PHP, enable `mod_rewrite`, and open the site URL to complete installation.

## Important information

- WordPress core is in `wp/`.
- Custom themes, plugins, and uploads are in `content/`.
- Use `composer update` only for intentional upgrades, and commit the reviewed `composer.lock`.
- Back up the database and `content/`.
