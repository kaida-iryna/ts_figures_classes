export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'triangle' = 'triangle';

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('error');
    }

    if (c >= a + b || a >= c + b || b >= a + c) {
      throw new Error('error 2');
    }
  }
}

export class Circle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'circle' = 'circle';

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('error 3');
    }
  }
}

export class Rectangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'rectangle' = 'rectangle';

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('error 4');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
