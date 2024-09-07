import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.botpressWebChat) {
      window.botpressWebChat.init({
        botId: '068709b8-fee8-4963-b5c8-b1f0327fa310',  // Replace with your actual Bot ID
        hostUrl: 'https://cdn.botpress.cloud/webchat/v2.1',
        messagingUrl: 'https://mediafiles.botpress.cloud/068709b8-fee8-4963-b5c8-b1f0327fa310',
        hideWidget: false,
        enableReset: true,
      });
    }
  }, []);

  return null; // Botpress will add the widget, no need to return UI here
};

export default BotpressChat;
