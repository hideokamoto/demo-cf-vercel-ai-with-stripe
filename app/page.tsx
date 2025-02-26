import Chat from "./chat-ui";

export default function Home() {
  return (
    <div className="flex w-full gap-4">
      <div className="flex-1">
        <Chat 
          apiPath='/api/chat'
          iniiialMessage="シンプルなAIチャットを試そう！"  
        />
      </div>
      <div className="flex-1">
        <Chat 
          apiPath='/api/agent-chat'
          iniiialMessage="Stripeのエージェントを使って請求書を発行してみよう"  
        />
      </div>
    </div>
  );
}
