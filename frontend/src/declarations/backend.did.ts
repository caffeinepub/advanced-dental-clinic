// @ts-nocheck
// Auto-generated Candid declarations stub

export interface _SERVICE {
  createAppointment: (name: string, phone: string, email: string, treatmentType: string, preferredDate: string, message: string, timestamp: bigint) => Promise<bigint>;
  createContact: (name: string, email: string, phone: string, message: string, timestamp: bigint) => Promise<bigint>;
  getAllAppointments: () => Promise<Array<{
    id: bigint; name: string; email: string; message: string;
    preferredDate: string; timestamp: bigint; phone: string; treatmentType: string;
  }>>;
  getAllContacts: () => Promise<Array<{
    id: bigint; name: string; email: string; message: string; timestamp: bigint; phone: string;
  }>>;
}

export const idlFactory = ({ IDL }: any): any => {
  return IDL.Service({});
};

export const init = ({ IDL }: any): any => [];
