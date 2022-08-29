const LiveChat = () => {
    const hccid = 59320448;
    const nt = document.createElement("script");
    nt.async = true;
    nt.src = "https://mylivechat.com/chatinline.aspx?hccid=" + hccid;
    const ct = document.getElementsByTagName("script")[0];
    ct.parentNode?.insertBefore(nt, ct);
  };
  
  export default LiveChat;