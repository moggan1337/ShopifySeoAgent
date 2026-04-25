# ShopifySeoAgent - Development Guide

## Project Overview

**ShopifySeoAgent** is an autonomous SEO agent that analyzes and optimizes Shopify stores for search engine visibility using AI.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js 20+, TypeScript 5.6 |
| **CLI** | Commander.js |
| **AI** | MiniMax API |
| **API** | Shopify Admin API |

## Project Structure

```
ShopifySeoAgent/
├── src/
│   ├── cli.ts              # CLI entry point
│   ├── agent.ts            # Main SEO agent logic
│   ├── analyzer.ts         # Site analysis
│   ├── optimizer.ts        # Content optimization
│   └── types.ts
├── package.json
├── tsconfig.json
├── CLAUDE.md
└── README.md
```

## Commands

```bash
# Run full SEO audit
seo-agent audit mystore.myshopify.com

# Optimize meta tags and content
seo-agent optimize mystore.myshopify.com

# Analyze keywords
seo-agent keywords mystore.myshopify.com
```

## LLM Integration

Uses MiniMax API for:
- SEO issue analysis
- Content optimization suggestions
- Keyword research
- Natural language report generation

## Features

- Automated SEO audits
- Meta tag optimization
- Technical SEO checks
- Keyword analysis and suggestions
- Structured data validation
