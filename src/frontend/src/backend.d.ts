import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactRequest {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface AppointmentRequest {
    id: bigint;
    name: string;
    email: string;
    message: string;
    preferredDate: string;
    timestamp: bigint;
    phone: string;
    treatmentType: string;
}
export interface backendInterface {
    deleteAppointment(id: bigint): Promise<void>;
    deleteContactRequest(id: bigint): Promise<void>;
    getAllAppointments(): Promise<Array<AppointmentRequest>>;
    getAllContactRequests(): Promise<Array<ContactRequest>>;
    getAppointment(id: bigint): Promise<AppointmentRequest>;
    getContactRequest(id: bigint): Promise<ContactRequest>;
    submitAppointment(name: string, phone: string, email: string, treatmentType: string, preferredDate: string, message: string): Promise<bigint>;
    submitContactRequest(name: string, phone: string, email: string, message: string): Promise<bigint>;
}
