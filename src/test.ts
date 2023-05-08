interface IInsurence {
  id: number;
  status: string;
  setVehicle(vehicle: any): void;
  sunmit(): Promise<boolean>;
}

class AFInsurence implements IInsurence {
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  };

  async sunmit(): Promise<boolean> {
    const res = fetch('',
      {
        method: 'POST',
        body: JSON.stringify({ vehicle: this.vehicle })
      });
    const data = await (await res).json();
    return data.isSuccess;
  }
}




class ABInsurence implements IInsurence {
  id: number;
  status: string;
  private vehicle: any;

  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  };

  async sunmit(): Promise<boolean> {
    const res = fetch('ab',
      {
        method: 'POST',
        body: JSON.stringify({ vehicle: this.vehicle })
      });
    const data = await (await res).json();
    return data.isSuccess;
  }
}