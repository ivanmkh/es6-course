function a() { b() };
function b() { c() };
function c() { const n = 5; n(); };
a();