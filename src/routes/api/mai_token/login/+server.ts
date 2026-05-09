import type { RequestHandler } from "@sveltejs/kit";

const ALLOWED_ORIGIN = "https://lng-tgk-aime-gw.am-all.net";
const checkPageUrl =
  "https://lng-tgk-aime-gw.am-all.net/common_auth/login?site_id=maimaidxex&redirect_url=https://maimaidx-eng.com/maimai-mobile/&back_url=https://maimai.sega.com/";
const loginUrl = "https://lng-tgk-aime-gw.am-all.net/common_auth/login/sid";

function withCors(response: Response) {
  // from tomomai
  response.headers.set("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Private-Network", "true");
  response.headers.set("Access-Control-Max-Age", "86400");
  return response;
}

function ProcessCookie(blob: string | null) {
  // honestly doesnt matter, as allnet always returns cors cookies
  if (!blob) {
    return -1;
  }

  const matched = blob.match(/clal=([^;]+)/); // starts at clal, contains everything that doesnt end with ;

  if (matched) {
    return matched[1];
  }
}

export const POST: RequestHandler = async ({ request }) => {
  // learnt everything from tomomai repo: https://github.com/shedaniel/tomomai/blob/main/src/server/services/maimai-login.ts#L342
  const { login_mode, sid, password, cookies } = await request.json();

  const checkStatus = await fetch(checkPageUrl, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
    },

    redirect: "manual",
  });

  if (checkStatus.status !== 200) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (login_mode === "sid") {
    const params = new URLSearchParams({
      retention: "1",
      sid: sid,
      password: password,
    });

    const request = await fetch(`${loginUrl}?${params}`, {
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
        Cookie: checkStatus.headers.getSetCookie().join("; "),
      },

      redirect: "manual",
    });

    const userToken = request.headers.get("Set-Cookie");

    if (request.status === 302) {
      return new Response(
        JSON.stringify({
          token: ProcessCookie(userToken), // just use get(set-cookie) to avoid envs that dont support getsetcookie
        }),
        {
          status: 200,
          statusText: "Token retrieved successfully",
        },
      );
    }
  } else if (login_mode === "token") {
    const cook = ProcessCookie(cookies);

    if (cook === -1) {
      const response = new Response(
        JSON.stringify({ message: "Token could not be found" }),
        {
          status: 404,
        },
      );
      return withCors(response);
    }

    await fetch(checkPageUrl, {
      // look for 302
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36",
        Cookie: `clal=${cook}`,
      },

      redirect: "manual",
    });

    const response = new Response(
      JSON.stringify({ message: "Token Extracted Successfully" }),
      {
        status: 200,
      },
    );

    return withCors(response);
  }
  return new Response(JSON.stringify({ message: "Method not Found" }), {
    status: 400,
  });
};

export const OPTIONS: RequestHandler = () => {
  const response = new Response(null, {
    status: 204,
  });

  return withCors(response);
};

export const fallback: RequestHandler = () => {
  return new Response(JSON.stringify({ error: "Please send a POST request" }), {
    status: 405,
    statusText: "Method Not Allowed",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
