<p class="text-3xl">mai_token API</p>
<p>
  Used to get an account's token on all.net, to use with websites like
  maimaiDXNET and chunithmNET
</p>

<p class="text-2xl">Format</p>
<p class="text-lg">
  Url: <span class="bg-shiroko-5">https://apiway.vercel.app/api/mai_token/</span
  >
</p>

<p>Methods:</p>
<ol class="list-inside list-decimal">
  <li><a href="#sid">SegaID</a></li>
  <li>Token (Console)</li>
</ol>

<p id="sid">SegaID</p>
<p class="text-lg">
  <span>POST</span>
  Url:
  <span class="bg-shiroko-5">https://apiway.vercel.app/api/mai_token/login</span
  >
</p>

<p>JSON Format</p>
<ul class="list-inside list-disc">
  <li>login_mode: 'sid'</li>
  <li>sid: SegaID (string)</li>
  <li>password: SID password (string)</li>
</ul>

<p id="sid">Token</p>
<p class="text-lg">
  <span>GET</span>
  Url:
  <span class="bg-shiroko-5"
    >https://apiway.vercel.app/api/mai_token/login_bookmark</span
  >
</p>

<p>JSON Format</p>
<ul class="list-inside list-disc">
  <li>login_mode: 'token'</li>
  <li>redirect: where you want the data to end up (url)</li>
</ul>
