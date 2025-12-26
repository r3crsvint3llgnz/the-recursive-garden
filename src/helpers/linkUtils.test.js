import { describe, it, expect } from 'vitest';
import { extractLinks } from './linkUtils.js';

describe('extractLinks', () => {
  it('should extract wiki-style links from markdown', () => {
    const content = '[[Link One|Display Text]]';
    const links = extractLinks(content);
    
    expect(links).toContain('Link One');
  });

  it('should extract multiple wiki links', () => {
    const content = '[[First Link|Text]] and [[Second Link|More]]';
    const links = extractLinks(content);
    
    expect(links.length).toBe(2);
    expect(links).toContain('First Link');
    expect(links).toContain('Second Link');
  });

  it('should extract internal href links from HTML', () => {
    const content = '<a href="/page-one">Link</a> and <a href="/page-two">Another</a>';
    const links = extractLinks(content);
    
    expect(links).toContain('/page-one');
    expect(links).toContain('/page-two');
  });

  it('should remove .md extensions from wiki links', () => {
    const content = '[[document.md|Title]]';
    const links = extractLinks(content);
    
    expect(links).toContain('document');
  });

  it('should strip anchor fragments from wiki links', () => {
    const content = '[[Page#section|Link]]';
    const links = extractLinks(content);
    
    expect(links).toContain('Page');
  });

  it('should return empty array for content with no links', () => {
    const content = 'Just plain text with no links at all';
    const links = extractLinks(content);
    
    expect(links).toEqual([]);
  });
});
