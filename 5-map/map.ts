class MyMap {
  keys: string[] = [];
  values: number[] = [];

  public set(key: string, value: number): [string, number] {
    this.keys.push(key)
    this.values.push(value);
    return [key, value];
  }

  public get(key: string): number | undefined {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      return this.values[index];
    }
  }

  public delete(key: string): boolean {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.keys.splice(index, 1);
      this.values.splice(index, 1);
      return true;
    }
    return false;
  }

  public clear(): void {
    this.keys = [];
    this.values = [];
  }
}