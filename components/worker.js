export default {
    async fetch(request, env) {
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      };
  
      if (request.method === "OPTIONS") {
        return new Response(null, { 
          headers: {
            ...corsHeaders,
            "Access-Control-Max-Age": "86400",
          }
        });
      }
  
      const url = new URL(request.url);
      
      // 处理下载请求
      if (url.pathname === "/download") {
        try {
          if (request.method !== "POST") {
            throw new Error("Method not allowed");
          }
  
          const { url: downloadUrl, x_run } = await request.json();
          
          const response = await fetch(downloadUrl, {
            headers: {
              "x-run": x_run,
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
          });
  
          if (!response.ok) {
            throw new Error(`Download failed: ${response.status}`);
          }
  
          const headers = new Headers(corsHeaders);
          headers.set("Content-Type", "audio/mpeg");
          headers.set("Content-Disposition", "attachment; filename=youtube.mp3");
  
          return new Response(response.body, { headers });
        } catch (error) {
          return new Response(JSON.stringify({
            success: false,
            error: "Download failed",
            message: error.message
          }), {
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json"
            },
            status: 500
          });
        }
      }
  
      try {
        const videoId = url.searchParams.get("videoId");
        
        if (!videoId) {
          return new Response(JSON.stringify({ 
            success: false,
            error: "Missing videoId parameter"
          }), {
            headers: corsHeaders,
            status: 400
          });
        }
  
        // 使用新的 API 端点
        const apiUrl = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${videoId}`;
        console.log('Calling API:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
            "X-RapidAPI-Key": "6aa2a49238msh1ae41fecc7154a5p116902jsn09a7bfa8942b"
          },
        });
  
        if (!response.ok) {
          console.error('API Response not OK:', {
            status: response.status,
            statusText: response.statusText
          });
          
          const errorText = await response.text();
          console.error('API Error Text:', errorText);
          
          throw new Error(`API request failed: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('API response:', data);
  
        if (!data.link) {
          return new Response(JSON.stringify({ 
            success: false,
            error: "Conversion failed",
            message: "Unable to get download link",
            details: data
          }), {
            headers: corsHeaders,
            status: 500
          });
        }
  
        // 生成 X-Run header
        const md5Hash = await generateMD5("guduyantou");
  
        return new Response(JSON.stringify({
          success: true,
          downloadUrl: data.link,
          x_run: md5Hash,
          title: data.title || `youtube_${videoId}`
        }), {
          headers: {
            ...corsHeaders,
            "Cache-Control": "no-cache"
          }
        });
  
      } catch (error) {
        console.error('Worker error:', {
          name: error.name,
          message: error.message,
          stack: error.stack,
          time: new Date().toISOString()
        });
        
        return new Response(JSON.stringify({
          success: false,
          error: "Processing failed",
          message: error.message,
          details: {
            name: error.name,
            time: new Date().toISOString()
          }
        }), {
          headers: corsHeaders,
          status: 500
        });
      }
    },
  };
  
  // 计算 MD5
  async function generateMD5(input) {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      const hashBuffer = await crypto.subtle.digest("MD5", data);
      return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } catch (error) {
      console.error('MD5 generation error:', error);
      throw error;
    }
  }