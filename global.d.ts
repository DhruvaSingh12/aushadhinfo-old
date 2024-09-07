// global.d.ts
interface Window {
    botpressWebChat?: {
      init: (config: {
        botId: string;
        hostUrl: string;
        messagingUrl: string;
        hideWidget?: boolean;
        enableReset?: boolean;
      }) => void;
    };
  }
  