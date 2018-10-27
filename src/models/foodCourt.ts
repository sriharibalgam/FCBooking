export class Slots {
    public slotId: number;
    public seatsBooked: number;
    public seatsAvailable: number;
}


export class FoodCourt {
    public fcName: string;
    public fcStatus: Slots[];
}