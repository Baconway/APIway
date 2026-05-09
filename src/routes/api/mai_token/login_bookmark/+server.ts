import type { RequestHandler } from "@sveltejs/kit";

const ALLOWED_ORIGIN = "https://lng-tgk-aime-gw.am-all.net";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Private-Network": "true",
  "Access-Control-Max-Age": "86400",
};

export const GET: RequestHandler = ({ url }) => {
  const script = `function postCookies() {const url = fetch("${url.origin}/api/mai_token/login,", {method: "POST",headers: {"Content-Type": "application/json",},body: JSON.stringify({login_mode: "token", cookies: document.cookie, }), redirect: "manual", });} postCookies();`;

  return new Response(script, {
    status: 200,
    statusText: "OK",
    headers: {
      ...corsHeaders,
    },
  });
};

export const fallback: RequestHandler = () => {
  return new Response(null, {
    status: 405,
    statusText: "Method not allowed",
    headers: {
      ...corsHeaders,
    },
  });
};
