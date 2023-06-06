<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["username"];
    $tel = $_POST["tel"];

    // Ваша логика обработки данных и отправки письма на почту

    // Пример использования функции mail() для отправки письма
    $to = "vengerenkod@bk.ru";
    $subject = "Новое сообщение с формы обратной связи";
    $message = "Имя: " . $name . "\n" .
               "Телефон: " . $tel;
    $headers = "vengerenkod@bk.ru"; // Замените на ваш адрес электронной почты или оставьте пустым

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>