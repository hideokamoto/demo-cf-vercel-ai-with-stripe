# Demo Chat Agent with Vercel AI SDK, Cloudflare, Next.js, and Stripe

[日本語](README-ja.md)

This demo application showcases an AI chat agent built with Vercel AI SDK, Cloudflare, Next.js, and Stripe for usage-based billing. The application features two chat interfaces:

1. A simple AI chat using Anthropic's Claude model
2. A Stripe agent chat that can help with Stripe operations like creating invoices

## Demo

https://github.com/user-attachments/assets/cadc399d-fa72-43a3-8c71-354d18f726dd

## Features

- Integration with Vercel AI SDK for AI model interaction
- Cloudflare deployment support using Next on Pages
- Stripe integration for usage-based billing
- Dual chat interfaces with different capabilities
- Edge runtime for optimal performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **AI**: Vercel AI SDK, Anthropic Claude
- **Deployment**: Cloudflare Pages
- **Billing**: Stripe usage-based billing
- **UI**: React 19, Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- Stripe account with API key
- Anthropic API key
- Cloudflare account (for deployment)

### Installation

1. Clone the repository:
   ```bash
   git clone [repo-url]
   cd demo-cf-vercel-ai-with-stripe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .dev.vars.example .dev.vars
   ```

4. Edit `.dev.vars` and add your API keys:
   ```
   STRIPE_SECRET_API_KEY=sk_test_xxx
   STRIPE_METER_NAME_INPUT=alpaca_ai_tokens
   STRIPE_METER_NAME_OUTPUT=alpaca_ai_tokens
   STRIPE_CUSTOMER_ID=cus_xxxxx
   CLAUDE_API_KEY=sk-ant-api03-xxxxx
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Preview with Cloudflare

Preview the application with Cloudflare Pages:
```bash
npm run preview
```

### Deployment

Deploy to Cloudflare Pages:
```bash
npm run deploy
```

## Usage

The application provides two chat interfaces:

1. **Simple AI Chat**: A basic chat interface with Claude AI model.
2. **Stripe Agent Chat**: An AI agent that can interact with Stripe API to perform operations like creating invoices, customers, and products.

You can enter prompts in the chat input field and receive responses from the AI.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Next.js](https://nextjs.org/)
- [Stripe API](https://stripe.com/docs/api)
- [Anthropic Claude](https://www.anthropic.com/claude)
