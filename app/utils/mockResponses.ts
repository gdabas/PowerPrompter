interface MockResponse {
    keywords: string[];
    response: string;
  }
  
  export const mockResponses: MockResponse[] = [
    {
      keywords: ['hello', 'hi', 'hey'],
      response: "Hello! I'm your AI assistant. How can I help you today?"
    },
    {
      keywords: ['help', 'assist', 'support'],
      response: "I'm here to help! I can assist you with writing, analysis, coding, or any other tasks you need help with."
    },
    {
      keywords: ['code', 'programming', 'develop'],
      response: "I can help you with programming! I'm familiar with many programming languages and can assist with code reviews, debugging, and development best practices."
    },
    {
      keywords: ['write', 'content', 'article'],
      response: "I can help you create high-quality content. Would you like assistance with writing an article, blog post, or other content?"
    },
    {
      keywords: ['analyze', 'analysis', 'review'],
      response: "I'll help you analyze that. Let's break it down step by step to get a clear understanding."
    },
    {
      keywords: ['thanks', 'thank you', 'appreciate'],
      response: "You're welcome! Feel free to ask if you need anything else."
    }
  ];
  
  export const defaultResponse = "I understand your message. Could you please provide more details about what you're looking for?";
  
  export function findMockResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    for (const mockResponse of mockResponses) {
      if (mockResponse.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return mockResponse.response;
      }
    }
    
    return defaultResponse;
  }