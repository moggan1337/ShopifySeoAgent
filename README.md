# ShopifySeoAgent

<p align="center">
  <img src="https://img.shields.io/badge/Shopify-SEO-95BF47?style=for-the-badge&logo=shopify&logoColor=white" alt="Shopify">
  <img src="https://img.shields.io/badge/AI-Agent-FF6B6B?style=for-the-badge&logo=openai&logoColor=white" alt="AI">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-blue?style=for-the-badge" alt="PRs Welcome">
</p>

> 🤖 **Autonomous SEO Agent** — AI-powered SEO automation that researches keywords, generates SEO-optimized content, builds backlinks, and monitors rankings continuously. Fully integrated with Shopify.

## About

ShopifySeoAgent is an autonomous AI agent that handles all aspects of SEO for Shopify stores. From keyword research to content generation to link building, the agent works continuously to improve your store's search visibility without manual intervention. Built for Shopify merchants and marketers who want to automate SEO workflows, generate SEO-optimized content at scale, and monitor rankings without dedicated SEO expertise.

## ✨ Features

### Content Generation
- ✍️ **Blog Writer** — Generates comprehensive 2000-4000 word SEO articles
- 🔬 **Research** — Keyword analysis, competitor research, content gap analysis
- 📝 **Product Descriptions** — SEO-optimized product copy that converts
- 📰 **News Articles** — AI-generated timely content on industry topics
- 🎬 **Video to Article** — YouTube video to SEO-optimized article conversion
- 📱 **Meta Tags** — Auto-generate titles and descriptions for all pages

### SEO Automation
- 🔗 **Internal Linking** — Automatic internal link building across site
- 🔗 **Backlink Building** — AI-powered outreach campaigns and link acquisition
- 🏷️ **Schema Markup** — Auto-generate JSON-LD structured data
- 🖼️ **Image Optimization** — Alt text generation, compression, sitemaps
- 📊 **Technical SEO** — XML sitemaps, robots.txt, canonical tags
- 🔄 **Content Refresh** — Automatically update outdated content

### Monitoring & Analytics
- 📈 **Rank Tracking** — Daily keyword position monitoring
- 🔔 **Alerts** — Google algorithm update notifications
- 📉 **Traffic Analysis** — GA4 integration and insights
- 🏆 **Competitor Analysis** — Track and benchmark competitor rankings
- 📊 **Performance Reports** — Weekly SEO performance summaries

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           ShopifySeoAgent                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                    AI Agent Orchestrator                            │  │
│  │  ┌───────────────────────────────────────────────────────────────┐  │  │
│  │  │                     Goal: Fully Autonomous SEO               │  │  │
│  │  │  • Task Decomposition & Planning                             │  │  │
│  │  │  • Agent Coordination & Scheduling                            │  │  │
│  │  │  • Result Synthesis & Reporting                              │  │  │
│  │  │  • Self-Improvement via Feedback Loops                        │  │  │
│  │  └───────────────────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                      Specialist Agents                             │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐│  │
│  │  │  Researcher │  │   Writer    │  │    Link     │  │ Monitor  ││  │
│  │  │    Agent    │  │    Agent    │  │   Builder   │  │  Agent   ││  │
│  │  │             │  │             │  │    Agent    │  │          ││  │
│  │  │ • Keywords  │  │ • Articles  │  │ • Outreach  │  │ • Ranks  ││  │
│  │  │ • Competitor│  │ • Product   │  │ • Guest     │  │ • Traffic││  │
│  │  │ • Gaps      │  │ • Meta       │  │   Posts     │  │ • Alerts ││  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘│  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                      Tools & Services                              │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐│  │
│  │  │   Keyword   │  │    SEO      │  │   Content   │  │   Rank   ││  │
│  │  │  Research   │  │   Audit     │  │   Planner   │  │  Tracker ││  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘│  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐│  │
│  │  │  Backlink   │  │   Content   │  │   Image     │  │  Schema  ││  │
│  │  │   Analysis  │  │  Generator  │  │ Optimizer   │  │ Generator││  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘│  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                    │                                     │
│  ┌─────────────────────────────────┴─────────────────────────────────┐  │
│  │                     Shopify Integration                           │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌──────────┐│  │
│  │  │   Products  │  │    Blog     │  │    Media    │  │  Google  ││  │
│  │  │     Sync    │  │    Posts    │  │   Upload    │  │Analytics ││  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └──────────┘│  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/moggan1337/ShopifySeoAgent.git
cd ShopifySeoAgent

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure .env with your credentials
```

## 🚀 Quick Start

```bash
# 1. Configure your Shopify store
export SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
export SHOPIFY_ACCESS_TOKEN=shpat_xxxxx

# 2. Set AI provider
export MINIMAX_API_KEY=sk-xxxxx

# 3. Run a full SEO audit
npm run audit

# 4. Generate a content plan
npm run plan -- --keywords "running shoes,best sneakers"

# 5. Generate and publish an article
npm run generate -- --topic "best running shoes 2024"

# 6. Check rankings
npm run ranks
```

## 🛠️ Commands Reference

### `seo-agent audit`

Run a comprehensive SEO audit of your Shopify store.

```bash
seo-agent audit <store-domain> [options]

Options:
  --output <format>     Output format: json, html, csv (default: json)
  --include             Include sections: technical, onpage, offpage, all
  --output-dir <path>   Output directory for reports

Examples:
seo-agent audit mystore.myshopify.com
seo-agent audit mystore.myshopify.com --output html --include technical,onpage
```

**Output Sections:**
- Technical SEO (crawlability, indexing, speed)
- On-page SEO (titles, meta, content, images)
- Off-page SEO (backlinks, social signals)
- Core Web Vitals assessment

### `seo-agent optimize`

Optimize your store's SEO elements.

```bash
seo-agent optimize <store-domain> [options]

Options:
  --target <type>       Target: products, blog, all (default: all)
  --dry-run             Show changes without applying

Examples:
seo-agent optimize mystore.myshopify.com --target products
seo-agent optimize mystore.myshopify.com --dry-run
```

**Optimizations:**
- Meta title and description
- Product descriptions
- Image alt text
- Schema markup
- URL structure
- Internal linking

### `seo-agent keywords`

Analyze keywords and competitive landscape.

```bash
seo-agent keywords <store-domain> <seed-keywords> [options]

Options:
  --limit <number>      Number of keywords to generate (default: 50)
  --competitors <urls>  Comma-separated competitor URLs
  --output <format>     Output format: json, csv

Examples:
seo-agent keywords mystore.myshopify.com "running shoes" --limit 100
seo-agent keywords mystore.myshopify.com "sneakers" --competitors competitor1.com,competitor2.com
```

### `seo-agent generate`

Generate SEO content for your store.

```bash
seo-agent generate <type> <topic> [options]

Types:
  article          Long-form blog article (2000-4000 words)
  product          Product description
  landing          Landing page content

Options:
  --keywords <kw>       Target keywords (comma-separated)
  --tone <tone>         Content tone: professional, casual, authoritative
  --length <words>     Target word count
  --publish            Publish directly to Shopify

Examples:
seo-agent generate article "best running shoes for marathon training" --keywords "running shoes,marathon"
seo-agent generate product "wireless headphones" --keywords "headphones,bluetooth audio"
seo-agent generate article "2024 fashion trends" --publish
```

### `seo-agent ranks`

Track keyword rankings over time.

```bash
seo-agent ranks <store-domain> [options]

Options:
  --keywords <file>    JSON file with keywords to track
  --add <keywords>      Add keywords to tracking
  --remove <keywords>   Remove keywords from tracking
  --report             Generate ranking report

Examples:
seo-agent ranks mystore.myshopify.com --keywords keywords.json
seo-agent ranks mystore.myshopify.com --add "new keyword 1,new keyword 2"
seo-agent ranks mystore.myshopify.com --report
```

### `seo-agent links`

Manage backlink building campaigns.

```bash
seo-agent links <action> [options]

Actions:
  analyze             Analyze current backlink profile
  prospects           Find link building prospects
  outreach             Run outreach campaign

Examples:
seo-agent links analyze mystore.myshopify.com
seo-agent links prospects mystore.myshopify.com --type guest-post
seo-agent links outreach mystore.myshopify.com --prospects prospects.json
```

## 💡 Usage Examples

### Full SEO Campaign

```bash
# 1. Run initial audit
seo-agent audit mystore.myshopify.com --output html -o ./reports/audit.html

# 2. Research keywords
seo-agent keywords mystore.myshopify.com "running shoes,fitness gear" --limit 200 -o keywords.json

# 3. Generate content plan
seo-agent plan mystore.myshopify.com --keywords keywords.json

# 4. Generate articles
seo-agent generate article "ultimate running shoes guide 2024" --keywords "running shoes guide" --publish

# 5. Generate product descriptions
seo-agent optimize mystore.myshopify.com --target products

# 6. Track progress
seo-agent ranks mystore.myshopify.com --report
```

### Continuous Monitoring

```bash
# Start SEO agent in continuous mode (runs daily)
seo-agent monitor mystore.myshopify.com --interval daily

# Start SEO agent in continuous mode with Slack notifications
seo-agent monitor mystore.myshopify.com --interval daily --notify slack
```

## 📁 Project Structure

```
shopify-seo-agent/
├── src/
│   ├── cli.ts                   # CLI entry point
│   ├── index.ts                 # Module exports
│   ├── agent.ts                 # Main SEO agent orchestrator
│   ├── analyzer.ts              # Site analysis engine
│   ├── optimizer.ts             # Content optimization
│   ├── types.ts                 # TypeScript interfaces
│   ├── services/
│   │   ├── keyword-research.ts  # Keyword research service
│   │   ├── content-generator.ts # AI content generation
│   │   ├── link-builder.ts      # Link building automation
│   │   ├── rank-tracker.ts      # Ranking monitoring
│   │   ├── shopify-sync.ts      # Shopify integration
│   │   └── notification.ts      # Alert notifications
│   └── utils/
│       ├── seo.ts               # SEO utilities
│       └── logger.ts           # Logging utilities
├── tests/
│   ├── agent.test.ts
│   ├── analyzer.test.ts
│   └── services/
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

```env
# Shopify Configuration
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_xxxxx
SHOPIFY_API_VERSION=2024-10

# AI Provider (MiniMax)
MINIMAX_API_KEY=sk-xxxxx
MINIMAX_MODEL=MiniMax-M2.7

# Google Services (optional)
GOOGLE_ANALYTICS_PROPERTY_ID=UA-XXXXX
GOOGLE_SEARCH_CONSOLE_SITE=https://your-store.com

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
DISCORD_WEBHOOK_URL=https://discord.com/...
EMAIL_SMTP_HOST=smtp.example.com
EMAIL_SMTP_PORT=587
EMAIL_FROM=alerts@example.com
EMAIL_TO=alerts@example.com

# Link Building
AHREFS_API_KEY=xxxxx
SEMRUSH_API_KEY=xxxxx
```

### Agent Configuration (agent.config.json)

```json
{
  "shopify": {
    "store_domain": "${SHOPIFY_STORE_DOMAIN}",
    "access_token": "${SHOPIFY_ACCESS_TOKEN}"
  },
  "content": {
    "default_length": 2500,
    "default_tone": "professional",
    "auto_publish": false
  },
  "keywords": {
    "max_results": 100,
    "min_search_volume": 100,
    "competitors": []
  },
  "monitoring": {
    "rank_check_frequency": "daily",
    "alert_thresholds": {
      "rank_drop": 5,
      "traffic_drop_percent": 20
    }
  },
  "notifications": {
    "channels": ["slack", "email"],
    "frequency": "weekly"
  }
}
```

## 🤖 AI Integration

The agent uses MiniMax API for all AI operations:

### Content Generation

```typescript
import { contentGenerator } from './services/content-generator';

const article = await contentGenerator.generate({
  type: 'article',
  topic: 'best wireless headphones 2024',
  keywords: ['wireless headphones', 'bluetooth headphones', 'best headphones'],
  targetAudience: 'tech-savvy consumers aged 25-45',
  tone: 'authoritative',
  length: 3000
});

// Returns: { title, content, metaDescription, slug, featuredImage }
```

### Keyword Research

```typescript
import { keywordResearch } from './services/keyword-research';

const keywords = await keywordResearch.analyze({
  seedKeywords: ['running shoes', 'athletic footwear'],
  competitorUrls: ['competitor1.com', 'competitor2.com'],
  limit: 100
});

// Returns: { keywords: [{ term, volume, difficulty, opportunity }] }
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test
npm test -- agent.test.ts

# Watch mode
npm test -- --watch
```

## 📊 Example Output

### Audit Report

```json
{
  "store": "mystore.myshopify.com",
  "timestamp": "2024-10-25T10:30:00Z",
  "overall_score": 78,
  "sections": {
    "technical": {
      "score": 85,
      "issues": [
        { "type": "missing_alt", "count": 12, "severity": "medium" }
      ]
    },
    "onpage": {
      "score": 72,
      "issues": [
        { "type": "thin_content", "count": 5, "severity": "high" }
      ]
    },
    "offpage": {
      "score": 65,
      "issues": [
        { "type": "low_backlinks", "count": 0, "severity": "high" }
      ]
    }
  },
  "recommendations": [
    { "priority": 1, "action": "Add alt text to 12 product images" },
    { "priority": 2, "action": "Expand 5 thin product descriptions" },
    { "priority": 3, "action": "Start link building campaign" }
  ]
}
```

## 📚 Documentation

- [Getting Started](docs/getting-started.md)
- [CLI Commands Reference](docs/commands.md)
- [API Integration](docs/api.md)
- [AI Models](docs/ai-models.md)
- [Deployment](docs/deployment.md)
- [Examples](docs/examples/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/YOUR_USERNAME/ShopifySeoAgent.git`
3. **Create** a feature branch: `git checkout -b feature/amazing-seo-feature`
4. **Install** dependencies: `npm install`
5. **Make** your changes and **test**: `npm test`
6. **Commit** your changes: `git commit -m 'Add amazing SEO feature'`
7. **Push** to the branch: `git push origin feature/amazing-seo-feature`
8. **Open** a Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

Copyright (c) 2024 moggan1337

## 🙏 Acknowledgments

- [Shopify](https://shopify.dev) for API access
- [MiniMax](https://minimax.chat) for AI model access
- [Google](https://developers.google.com) for Search Console and Analytics APIs
- [Moz](https://moz.com) for SEO metrics and data

---

<p align="center">
  Built with ❤️ for Shopify merchants
</p>
