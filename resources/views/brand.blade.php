<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<title>سودان مارت · دليل الهوية البصرية</title>
<meta name="description" content="دليل الهوية البصرية لسودان مارت — الشعار، الألوان، الخطوط، الصوت، التطبيقات."/>
<meta name="robots" content="noindex"/>
@php
    $v = fn($p) => file_exists(public_path($p)) ? filemtime(public_path($p)) : time();
@endphp
<link rel="stylesheet" href="{{ asset('css/brand.css') }}?v={{ $v('css/brand.css') }}"/>

<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
</head>
<body>
<div id="root"></div>

<script type="text/babel" src="{{ asset('js/icons.jsx') }}?v={{ $v('js/icons.jsx') }}"></script>
<script type="text/babel" src="{{ asset('js/ui.jsx') }}?v={{ $v('js/ui.jsx') }}"></script>
<script type="text/babel" src="{{ asset('js/brand.jsx') }}?v={{ $v('js/brand.jsx') }}"></script>
</body>
</html>
