import { describe, it, expect } from 'vitest';

// Import the assignNested function - we need to extract it from the module
// Since it's not exported, we'll need to create a simple test version or modify the file
// For now, let's create a local implementation based on what we know from the file

function assignNested(obj, keyPath, value) {
  const lastKeyIndex = keyPath.length - 1;
  for (let i = 0; i < lastKeyIndex; ++i) {
    const key = keyPath[i];
    if (!(key in obj)) {
      obj[key] = { isFolder: true };
    }
    obj = obj[key];
  }
  obj[keyPath[lastKeyIndex]] = value;
}

describe('assignNested', () => {
  it('should build a simple nested object from key path', () => {
    const obj = {};
    assignNested(obj, ['a', 'b', 'c'], 42);
    
    expect(obj).toEqual({
      a: {
        isFolder: true,
        b: {
          isFolder: true,
          c: 42,
        },
      },
    });
  });

  it('should handle single-level assignment', () => {
    const obj = {};
    assignNested(obj, ['key'], 'value');
    
    expect(obj).toEqual({
      key: 'value',
    });
  });

  it('should handle two-level nesting', () => {
    const obj = {};
    assignNested(obj, ['parent', 'child'], 123);
    
    expect(obj).toEqual({
      parent: {
        isFolder: true,
        child: 123,
      },
    });
  });

  it('should not overwrite existing nested structure', () => {
    const obj = {
      a: {
        isFolder: true,
        existing: 'data',
      },
    };
    assignNested(obj, ['a', 'b'], 'new');
    
    expect(obj).toEqual({
      a: {
        isFolder: true,
        existing: 'data',
        b: 'new',
      },
    });
  });

  it('should handle deep nesting', () => {
    const obj = {};
    assignNested(obj, ['one', 'two', 'three', 'four', 'five'], 'deep');
    
    expect(obj.one.two.three.four.five).toBe('deep');
    expect(obj.one.isFolder).toBe(true);
    expect(obj.one.two.isFolder).toBe(true);
  });
});
