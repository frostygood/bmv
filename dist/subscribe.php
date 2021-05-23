<?php
$url =  htmlspecialchars( trim($_POST['url']));
$email =  htmlspecialchars( trim($_POST['email']) );
$fromMail = 'info@bmvcompany.ru';
$fromName = 'Сайт BMV';

if (strpos($_SERVER['HTTP_HOST'], 'bmvcompany') !== false) {
    $emailsTo = [
        'frostygood@mail.ru',
        'bmven@yandex.ru'
    ];
    $subject = 'Отклик с сайта BMVCOMPANY.ru !';
    $subject = '=?utf-8?b?' . base64_encode($subject) . '?=';
    $headers = "Content-type: text/html; charset=\"utf-8\"\r\n";
    $headers .= "From: " . $fromName . " <" . $fromMail . "> \r\n";

    // тело письма
    $body = "Пришла заявка с телефона/email - " . $email . " " . $url;
    foreach ($emailsTo as $key => $email) {
        $mail = mail($email, $subject, $body, $headers, '-f' . $fromMail);
    }
    echo 'ok';
} else echo 'okey';


