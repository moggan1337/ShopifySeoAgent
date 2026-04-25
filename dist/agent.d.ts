export interface SeoReport {
    score: number;
    issues: SeoIssue[];
    recommendations: string[];
    metaTags: MetaTags;
    technicalSeo: TechnicalSeo;
}
export interface SeoIssue {
    severity: 'critical' | 'warning' | 'info';
    title: string;
    description: string;
    affected: string[];
}
export interface MetaTags {
    title: string;
    description: string;
    ogImage: string;
}
export interface TechnicalSeo {
    score: number;
    issues: string[];
}
export declare class SeoAgent {
    private store;
    constructor(store: string);
    audit(): Promise<string>;
    optimize(): Promise<void>;
    analyzeKeywords(): Promise<string>;
    private analyzeMetaTags;
    private checkTechnicalSeo;
    private generateRecommendations;
    private calculateScore;
    private formatScore;
    private formatMetaTags;
    private formatTechnical;
    private generateOptimizedMeta;
    private applyMetaTags;
}
