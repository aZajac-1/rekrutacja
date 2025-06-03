<?php

function custom_login_url($login_url) {
    return WP_LOGIN_URL;
}
add_filter('login_url', 'custom_login_url');

function redirect_login_page() {
    $page = basename($_SERVER['REQUEST_URI']);
    
    if($page == "wp-login.php" && $_SERVER['REQUEST_METHOD'] == 'GET') {
        wp_redirect(WP_LOGIN_URL);
        exit;
    }
    
    if (!is_user_logged_in() && 
        strpos($_SERVER['REQUEST_URI'], '/wp-admin') !== false && 
        !strpos($_SERVER['REQUEST_URI'], 'admin-ajax.php')) {
        wp_redirect(home_url('/'));
        exit;
    }
}
add_action('init', 'redirect_login_page');

function custom_login_slug() {
    $login_slug = WP_LOGIN_SLUG;
    if(isset($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], $login_slug) !== false) {
        $user_login = '';
        $error = '';
        
        if (isset($_POST['log'])) {
            $user_login = $_POST['log'];
        } elseif (isset($_COOKIE['wordpress_last_login'])) {
            $user_login = $_COOKIE['wordpress_last_login'];
        }
        
        $GLOBALS['user_login'] = $user_login;
        $GLOBALS['error'] = $error;
        
        require_once(ABSPATH . 'wp-login.php');
        die;
    }
}
add_action('init', 'custom_login_slug');

function save_last_login($user_login) {
    setcookie('wordpress_last_login', $user_login, time() + (86400 * 30), '/'); // 30 dni
}
add_action('wp_login', 'save_last_login');

// Wyłączenie paska administracyjnego WordPress
add_filter('show_admin_bar', '__return_false');

?>