<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="antialiased bg-white dark:bg-gray-800">
        <div id="app" class="container min-h-screen text-gray-800 dark:text-gray-200">
            <switcher></switcher>
            <chessboard orientation="black" fen="r1bq1rk1/ppp1b1pp/2n1p3/2p5/3PQ3/B1P2NP1/P4PBP/R4RK1 w - - 2 14"/>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
