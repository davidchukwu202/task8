class Observer {
    constructor(name) {
        this.name = name;
    }

    update(phoneNumber) {
        if (this.name === 'david') {
            console.log(`Dialing ${phoneNumber}`);
        } else if (this.name === 'new') {
            console.log('Now Dialling 2347023232');
        }
    }
}



class Telephone {
    constructor(){
        this.phoneNumbers=[];
        this.observers=[];
    }


    AddPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);

    }

    RemovePhoneNumber(phoneNumber) {
    this.phoneNumbers= this.phoneNumbers.filter(ph => ph !== phoneNumber);

    }

    DialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log("Dialing:", phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    
     this.notify(phoneNumber);
    }

    add(observer){
         this.observers.push(observer);
    }

    remove(observer){
        this.observers = this.observers.filter(ob => ob !== observer);
    }

    notify(phoneNumber){
        this.observers.forEach(observer => observer.notify(phoneNumber));
    
    }

}   

const telephone = new Telephone();

const observer1 = new Observer('david');
const observer2 = new Observer('new');

telephone.add(observer1);
telephone.add(observer2);