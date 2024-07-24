export interface Room{
    totalRooms?: number;
    occupiedRooms?: number;
    availableRooms?: number;
    }
    
    export interface RoomData{
        roomNo: number;
        roomType: string;
        price: number;
        checkinTime: Date;
    }