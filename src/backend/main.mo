import Array "mo:core/Array";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type AppointmentRequest = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    treatmentType : Text;
    preferredDate : Text;
    message : Text;
    timestamp : Int;
  };

  type ContactRequest = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module AppointmentRequest {
    public func compare(request1 : AppointmentRequest, request2 : AppointmentRequest) : Order.Order {
      Nat.compare(request1.id, request2.id);
    };
  };

  module ContactRequest {
    public func compare(request1 : ContactRequest, request2 : ContactRequest) : Order.Order {
      Nat.compare(request1.id, request2.id);
    };
  };

  var nextAppointmentId = 0;
  var nextContactId = 0;

  let appointments = Map.empty<Nat, AppointmentRequest>();
  let contacts = Map.empty<Nat, ContactRequest>();

  func getCurrentTime() : Int {
    Time.now();
  };

  // Store new appointment
  public shared ({ caller }) func submitAppointment(name : Text, phone : Text, email : Text, treatmentType : Text, preferredDate : Text, message : Text) : async Nat {
    let id = nextAppointmentId;
    let appointment : AppointmentRequest = {
      id;
      name;
      phone;
      email;
      treatmentType;
      preferredDate;
      message;
      timestamp = getCurrentTime();
    };
    appointments.add(id, appointment);
    nextAppointmentId += 1;
    id;
  };

  // Store new contact request
  public shared ({ caller }) func submitContactRequest(name : Text, phone : Text, email : Text, message : Text) : async Nat {
    let id = nextContactId;
    let contact : ContactRequest = {
      id;
      name;
      phone;
      email;
      message;
      timestamp = getCurrentTime();
    };
    contacts.add(id, contact);
    nextContactId += 1;
    id;
  };

  // Get all appointments
  public query ({ caller }) func getAllAppointments() : async [AppointmentRequest] {
    appointments.values().toArray().sort();
  };

  // Get all contact requests
  public query ({ caller }) func getAllContactRequests() : async [ContactRequest] {
    contacts.values().toArray().sort();
  };

  // Get specific appointment by ID
  public query ({ caller }) func getAppointment(id : Nat) : async AppointmentRequest {
    switch (appointments.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?appointment) { appointment };
    };
  };

  // Get specific contact request by ID
  public query ({ caller }) func getContactRequest(id : Nat) : async ContactRequest {
    switch (contacts.get(id)) {
      case (null) { Runtime.trap("Contact request not found") };
      case (?contact) { contact };
    };
  };

  // Delete an appointment
  public shared ({ caller }) func deleteAppointment(id : Nat) : async () {
    switch (appointments.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?_) {
        appointments.remove(id);
      };
    };
  };

  // Delete a contact request
  public shared ({ caller }) func deleteContactRequest(id : Nat) : async () {
    switch (contacts.get(id)) {
      case (null) { Runtime.trap("Contact request not found") };
      case (?_) {
        contacts.remove(id);
      };
    };
  };
};
