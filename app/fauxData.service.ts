export class InMemoryDataService {
  createDb() {
    let users = [
      {
        id: 1,
        firstName: 'Lea',
        lastName: 'Fox',
        emailAddress: 'lsfox91@gmail.com',
        phoneNumber: '3109560911',
        department: 'funTimes'  
      },

    ];
    return {users};
  }
}
