import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  AIRecommendationsInfo,
  ClientConstraints,
  ClientInfo,
  ClientMeetingSummary,
  ClientPerformance,
  ClientPortfolioOverview,
  LastTransactions,
  MarketOutlookInfo,
  PersonalAspect,
  RiskIndicator,
} from '../interfaces/client.interface';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  private apiUrl = 'http://localhost:8080/client'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  getConstraints(clientId: string): Observable<ClientConstraints> {
    return this.http.get<ClientConstraints>(`${this.apiUrl}/constraints?clientId=${clientId}`);
  }

  getClientProfile(clientId: string): Observable<ClientInfo> {
    return this.http.get<ClientInfo>(`${this.apiUrl}/profile?clientId=${clientId}`);
  }

  getLastFiveTransactions(clientId: string): Observable<LastTransactions> {
    //last-transactions
    return this.http.get<LastTransactions>(`${this.apiUrl}/last-transactions?clientId=${clientId}`);
  }

  getSummaryFromLastMeeting(clientId: string): Observable<ClientMeetingSummary> {
    return this.http.get<ClientMeetingSummary>(
      `${this.apiUrl}/last-meeting-summary?clientId=${clientId}`
    );
  }

  getRiskIndicators(clientId: string): Observable<RiskIndicator> {
    return this.http.get<RiskIndicator>(`${this.apiUrl}/risk-indicators?clientId=${clientId}`);
  }

  getOverviewData(clientId: string): Observable<ClientPortfolioOverview> {
    return this.http.get<ClientPortfolioOverview>(`${this.apiUrl}/portfolio?clientId=${clientId}`);

    // Mock data for now
    // return of({
    //   marketValue: '€12.5M EUR',
    //   assets: [
    //     { name: 'Equities', current: '52%', bandwidth: '40% - 65%', inRange: 'YES', color: '#2563eb' },
    //     { name: 'Fixed Income', current: '25%', bandwidth: '15% - 35%', inRange: 'YES', color: '#0891b2' },
    //     { name: 'Real Estate', current: '10%', bandwidth: '5% - 15%', inRange: 'YES', color: '#ea580c' },
    //     { name: 'Alternatives', current: '7%', bandwidth: '0% - 15%', inRange: 'YES', color: '#7c3aed' },
    //     { name: 'Liquidity', current: '6%', bandwidth: '2% - 10%', inRange: 'YES', color: '#94a3b8' }
    //   ]
    // });
  }

  getPersonalAspectsData(clientId: string): Observable<PersonalAspect> {
    return this.http.get<PersonalAspect>(`${this.apiUrl}/personal-aspects?clientId=${clientId}`);
  }

  getPerformanceData(rmId: string, clientId: string): Observable<ClientPerformance> {
    return this.http.get<ClientPerformance>(
      `${this.apiUrl}/performance-months?rmId=2345&clientId=${clientId}`
    );

    // Mock data for now
    // return of({
    //   ytdReturn: '+7.2%',
    //   graphPath: 'M0,70 L0,51.43939393939394 30.90909090909091,45.25252525252526 ...',
    //   graphPoints: '0,51.43939393939394 30.90909090909091,45.25252525252526 ...',
    //   xAxisLabels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb']
    // });
  }

  getMarketOutlook(rmId: string, clientId: string): Observable<MarketOutlookInfo> {
    return this.http.get<MarketOutlookInfo>(
      `${this.apiUrl}/market/outlook?rmId=2345&clientId=${clientId}`
    );
  }

  getAIRecommendations(rmId: string, clientId: string): Observable<AIRecommendationsInfo> {
    return this.http.get<AIRecommendationsInfo>(
      `${this.apiUrl}/ai-recommendations?rmId=2345&clientId=${clientId}`
    );
  }

  getAITalkingPoints(rmId: string, clientId: string): Observable<any> {
    // Mock data for now
    return of({
      conversationTitle: 'Conversation Openers',
      conversationBody: [
        "Ask about daughter's university plans — she turns 18 next month. Natural lead-in to long-term planning.",
        'Mention the Provence trip — "Planning the summer trip yet?" Builds personal rapport before business.',
      ],
      portfolioTitle: 'Portfolio Discussion',
      portfolioBody: [
        'Lead with positive: ASML up 8.4%, ESG holdings benefiting from taxonomy expansion. Your conviction is paying off.',
        'Address bonds proactively: "ECB held rates — I\'ve prepared a switch to shorter-duration green bonds to reduce drag while keeping your sustainable mandate."',
      ],
      productTitle: 'Product Introduction',
      productBody:
        'Present ESG Small Cap as follow-up to last meeting: "You asked about sustainable tech options — I\'ve found a fund that specifically targets the companies benefiting from the expanded EU taxonomy."',
      anticipationsTitle: 'Anticipated Objections',
      anticipationsBody: [
        'If client questions small-cap risk: "This fund has lower beta than broad small-cap (0.82 vs 1.15) due to quality ESG screens. Max drawdown was -8% vs -14% for conventional."',
        'If client wants to hold more cash: "At 2.4% inflation, cash loses purchasing power. The short-duration green bond yields 3.1% with minimal volatility."',
      ],
    });
  }
}
