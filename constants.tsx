
import React from 'react';
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Multi-Agent System',
    description: 'Developed an orchestration platform for LLM agents to collaborate on complex coding tasks, reducing development time by 40%.',
    tags: ['React', 'Node.js', 'Gemini API', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/ai-agent/800/600'
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    description: 'High-concurrency data visualization platform handling over 1M events per second for enterprise clients.',
    tags: ['Next.js', 'Apache Kafka', 'D3.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/dashboard/800/600'
  },
  {
    id: '3',
    title: 'Cloud-Native SaaS Core',
    description: 'Architected a scalable microservices infrastructure with zero-downtime deployment capabilities using Kubernetes.',
    tags: ['Go', 'Kubernetes', 'AWS', 'Terraform'],
    imageUrl: 'https://picsum.photos/seed/saas/800/600'
  }
];

export const SKILLS: Skill[] = [
  { name: 'TypeScript/React', level: 95, category: 'Frontend' },
  { name: 'Node.js/Go', level: 90, category: 'Backend' },
  { name: 'AWS/GCP/K8s', level: 85, category: 'Cloud' },
  { name: 'Gemini/LLM/ML', level: 88, category: 'AI' },
  { name: 'Python/Django', level: 80, category: 'Backend' },
  { name: 'UI/UX Design', level: 75, category: 'Frontend' }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Nexus Tech Solutions',
    role: 'Senior Software Engineer',
    period: '2021 - Present',
    description: [
      'Leading a team of 8 engineers in building next-generation AI interfaces.',
      'Reduced cloud infrastructure costs by 30% through migration to serverless architectures.',
      'Mentored junior developers and established CI/CD best practices.'
    ]
  },
  {
    company: 'Innovate Labs',
    role: 'Full Stack Developer',
    period: '2018 - 2021',
    description: [
      'Developed core features for a fintech platform serving 500k monthly active users.',
      'Optimized database performance by 50% using advanced indexing and caching strategies.',
      'Integrated multiple third-party payment gateways and identity providers.'
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Seyitbek Usmanov. 
Your goal is to answer questions about Seyitbek's professional background, skills, and projects in a helpful, friendly, and professional manner.
Seyitbek is a Senior Software Engineer with expertise in Full Stack Development, Cloud Architecture, and AI integration.

Key facts about Seyitbek:
- Role: Senior Software Engineer & AI Specialist.
- Top Skills: React, TypeScript, Node.js, Go, AWS, Google Cloud, Gemini API.
- Philosophy: "Building efficient systems that bridge the gap between human intuition and machine intelligence."
- Personal Interests: He is an avid soccer fan and enjoys playing the game. He loves nature and hiking near waterfalls. He also enjoys traveling to global cities and exploring different cultures, as seen in his recent photos from Tokyo, Japan.
- Education: Master's in Computer Science.
- Location: Available for global remote work or on-site in major tech hubs.

Keep answers concise. If asked about something you don't know, suggest they contact him directly via the contact form on the website.
`;
