export class Slot {
    public slotID: number
    public bookingStatus: string;
    public empId: string;
}

export class Seats{
    public seatID: number;
    public seatFC: number;
    public seatStatus: Slot[];
}