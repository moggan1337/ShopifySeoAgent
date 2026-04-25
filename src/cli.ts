#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { SeoAgent } from './agent.js';

const program = new Command();

program
  .name('seo-agent')
  .description('Autonomous SEO agent for Shopify stores')
  .version('1.0.0');

program
  .command('audit')
  .description('Run a full SEO audit')
  .argument('<store>', 'Shopify store domain')
  .option('-o, --output <file>', 'Output file for report')
  .action(async (store: string, options: { output?: string }) => {
    console.log(chalk.bold(`\n🔍 Running SEO audit for ${store}\n`));
    const agent = new SeoAgent(store);
    const report = await agent.audit();
    console.log(chalk.green('\n✓ Audit complete!\n'));
    console.log(report);
  });

program
  .command('optimize')
  .description('Optimize meta tags and content')
  .argument('<store>', 'Shopify store domain')
  .action(async (store: string) => {
    console.log(chalk.bold(`\n⚡ Optimizing SEO for ${store}\n`));
    const agent = new SeoAgent(store);
    await agent.optimize();
  });

program
  .command('keywords')
  .description('Analyze and suggest keywords')
  .argument('<store>', 'Shopify store domain')
  .action(async (store: string) => {
    console.log(chalk.bold(`\n🔑 Keyword analysis for ${store}\n`));
    const agent = new SeoAgent(store);
    const keywords = await agent.analyzeKeywords();
    console.log(chalk.green('\n✓ Keywords:\n'));
    console.log(keywords);
  });

program.parse();
