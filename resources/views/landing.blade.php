<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<title>سودان مارت · أصالة سودانية إلى باب بيتك في المملكة</title>
<meta name="description" content="سودان مارت — منصة التسوق للمنتجات السودانية الأصيلة في المملكة العربية السعودية. بن، بهارات، تمور، عطور، أزياء، حرف يدوية."/>
@php
    $v = fn($p) => file_exists(public_path($p)) ? filemtime(public_path($p)) : time();
@endphp
<link rel="stylesheet" href="{{ asset('css/landing.css') }}?v={{ $v('css/landing.css') }}"/>

<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
</head>
<body>
<div id="root"></div>

<script type="text/babel" src="{{ asset('js/icons.jsx') }}?v={{ $v('js/icons.jsx') }}"></script>
<script type="text/babel" src="{{ asset('js/ui.jsx') }}?v={{ $v('js/ui.jsx') }}"></script>
<script type="text/babel" src="{{ asset('js/data.jsx') }}?v={{ $v('js/data.jsx') }}"></script>
<script type="text/babel" src="{{ asset('js/landing.jsx') }}?v={{ $v('js/landing.jsx') }}"></script>
</body>
</html>
