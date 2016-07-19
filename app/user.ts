export class User {
  constructor(
    public Id: number,
    public firstName: string,
    public lastName: string,
    public emailAddress: string,
    public reason: string,
    public startDate: string,
    public endDate: string,
    public submissionStatus: string
  ) { }
}
